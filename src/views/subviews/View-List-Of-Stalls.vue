<template>
    <div v-if="stallInfo">
        <transition-group name="fade" mode="out-in">
            <app-stall-preview v-for="(stall, key) in listOfVisibleStalls" :stall="stall" :name="key" :key="key"></app-stall-preview>
        </transition-group>
    </div>
    <div id="main-loading" v-else>
        Loading Stalls...
    </div>
</template>

<script>

import AppStallPreview from '../../components/AppStallPreview.vue';
import axios from "axios";
import { mapGetters } from 'vuex';
import { store } from '../../store/store';
import { bus } from '../../main'

export default {
    props: ['filter', 'maxStallsVisible'],
    data(){
        return {
            stallIndex: null,
            stallInfo: null,
            error: null,
            highlightedStall: 'none',
            scrollPos: 0,
            isScrolling: null,
            isSearch: null
        }
    },
    methods: {
        filteredGroups: function(){
            if(this.stallInfo){
                if(this.selectedFilter){
                    Object.filter = (obj, predicate) => 
                        Object.keys(obj)
                            .filter( key => predicate(obj[key]) )
                            .reduce( (res, key) => (res[key] = obj[key], res), {} );

                    var filtered = Object.filter(this.stallInfo, stall => stall.type == this.selectedFilter);
                    return filtered;
                } else {
                    return this.stallInfo;
                }   
            }
        }
    },
    components: {
        'app-stall-preview': AppStallPreview
    },
    computed: {
        ...mapGetters({
            stalls: "stalls"
        }),
        filterTypes: function(){
            if(this.stallInfo){
                let types = [];
                let listOfKeys = Object.keys(this.stallInfo);
                for(let i = 0; i < listOfKeys.length; i++){
                    let thisStall = this.stallInfo[listOfKeys[i]];
                    if(types.indexOf(thisStall.type) === -1) {
                        types.push(thisStall.type);
                    }
                }
                return types;
            }
        },
        listOfVisibleStalls(){
            this.allStalls = this.filteredGroups();
            let visibleStallsCount = 0;
            let visibleStalls = {};
            if(this.stallInfo && !this.isSearch){
                let stallNames = Object.keys(this.allStalls);
                if(this.maxStallsVisible > stallNames.length){ 
                    visibleStallsCount = stallNames.length; 
                } else {
                    visibleStallsCount = this.maxStallsVisible;
                }
                for(let i = 0; i < visibleStallsCount; i++){
                    visibleStalls[stallNames[i]] = this.stallInfo[stallNames[i]];
                }
                return visibleStalls;
            }
            if(this.stallInfo && this.isSearch){
                let stallNames = Object.keys(this.stalls.info);
                let searchTerm = this.isSearch;
                if(this.maxStallsVisible > stallNames.length){ 
                    visibleStallsCount = stallNames.length; 
                } else {
                    visibleStallsCount = this.maxStallsVisible;
                }
                for(let i = 0; i < visibleStallsCount; i++){

                    let searchPool
                    
                    if(this.stalls.info[stallNames[i]].tags){
                        let tags = this.stalls.info[stallNames[i]].tags.toLowerCase()
                        let desc = this.stalls.info[stallNames[i]].desc.toLowerCase()
                        tags = tags.split(", ")
                        desc = desc.split(" ")
                        searchPool = tags.concat(desc)
                    }

                    if(this.stalls.info[stallNames[i]].labels){
                        let labels = this.stalls.info[stallNames[i]].labels.toLowerCase()
                        labels = labels.split(", ")
                        searchPool = searchPool.concat(labels)
                    }
                    if(searchPool){
                        if(searchPool.some(function(v){ return v.indexOf(searchTerm)>=0 })){
                            console.log(searchPool)
                            visibleStalls[stallNames[i]] = this.stallInfo[stallNames[i]];
                        }
                    }
                }
                return visibleStalls;
            }
        },
        selectedFilter(){
            console.log(this.filter);
            if(this.filter && this.filter != "list") {
                return this.filter;
            } else {
                return 'food';
            }
        }
    },
    created(){
        if(!this.stalls.index){
            console.log("-- loading stalls");
            axios.all([ axios.get("https://norwich-market.firebaseio.com/stallData.json"), axios.get("https://norwich-market.firebaseio.com/stallIndex.json") ])
            .then(axios.spread((info, index) => {
                let stalls = {
                    index: index.data,
                    info: info.data
                };
                this.stallInfo = info.data;
                this.stallIndex = index.data;
                store.dispatch("updateStoreWithStalls", stalls);
            }))
            .catch(err => { this.error = err.message; });
        } else {
            this.stallInfo = this.stalls.info;
            this.stallIndex = this.stalls.index;
        }

        bus.$on('startSearch', (term) => {
            this.isSearch = term;
        })

    }

}
</script>

<style>

#header h1 {
    font-size: 6em;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: -0.01em;
    margin-bottom: 10px;
}

#filter-row {
    padding: 10px 0px;
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
}

.filter {
    font-size: 1.1em;
    font-weight: bold;
    text-transform: capitalize;
    border-bottom: 3px solid #fff;
    
}

.filter:hover {
    color: #ed466e;
}

.active {
    color: #F4B840;
    border-bottom: 3px solid #F4B840;
}

</style>