<template>
    <section v-if="loaded" class="stall-view">
        <StallViewToolbar />
        <StallHead 
            :stallName="stallName" 
            :stallLabels="stallLabels" 
            :stallNumbers="stallNumbers" 
            :desc="stall.desc" 
            />
        <div class="images">
            <img :src="'../../'+stall.image" alt="">
        </div>
        <StallOpeningTimes :openingTimes="openingTimes" />
        <CompSimilarStalls :similarStalls="similarStalls" />
        <StallMapView :selectedStall="stallName" />
    </section>
    <div v-else>Loading</div>
</template>

<script>

import { store } from '../store/store';
import { bus } from '../main'
import axios from 'axios';
import AppStallMastHead from '../components/AppStallMastHead';
import AppMarketMiniView from '../components/AppMarketMiniView';
import CompSimilarStalls from '../components/Comp-Similar-Stalls'
import StallViewToolbar from '../components/StallViewToolbar'
import StallOpeningTimes from '../components/StallOpeningTimes'
import StallHead from '../components/StallHead'
import StallMapView from '../components/StallMapView'

export default {
    props: ['stallName'],
    data(){
        return {
            loaded: false
        }
    },
    methods: {
        
    },
    computed: {
        stall: function(){
            
            if(this.$store.state.stalls.info != null){
                return this.$store.state.stalls.info[this.stallName]
            } else {
                return null
            }
            
        },
        openingTimes: function(){
            let times = {
                'mon': 'closed',
                'tue': 'closed',
                'wed': 'closed',
                'thu': 'closed',
                'fri': 'closed',
                'sat': 'closed',
                'sun': 'closed'
            }
            let days = Object.keys(this.stall.opening);

            for(let i = 0; i < days.length; i++){
                times[days[i]] = this.stall.opening[days[i]].from + ' - ' + this.stall.opening[days[i]].to;
            }
            return times;
        },
        stallLabels: function(){
            let labels = (this.stall.labels) ? this.stall.labels.split(", ") : null 
            return labels
        },
        stallNumbers: function(){
            console.log("this.stall.stall = "+this.stall.stall)
            let stalls = ""
            if(typeof this.stall.stall === 'object'){
                for(let i = 0; i < this.stall.stall.length; i++){
                    if(i == 0){
                        stalls = this.stall.stall[i]
                    } else {
                        stalls = stalls+', '+this.stall.stall[i]
                    }
                }
            } else {
                return this.stall.stall
            }
            return stalls
        },
        similarStalls(){
            if(this.stall){
                let similarStalls = {}
                let keys = Object.keys(this.$store.state.stalls.info)
                console.log(keys)
                keys.forEach(key => {
                    let currentStall = this.$store.state.stalls.info[key]
                    if(currentStall && key != this.stallName && this.stall){
                        if(currentStall.labels && this.stall.labels){
                            let isMatch = false
                            let matchedTags = []
                            let currentList = currentStall.labels.toLowerCase().split(', ')
                            let searchList = this.stall.labels.toLowerCase().split(', ')
                            for(let i = 0; i < currentList.length; i++){
                                if(searchList.indexOf(currentList[i]) > -1 ){
                                    matchedTags.push(currentList[i])
                                    isMatch = true
                                } else {

                                }
                            }
                            if(isMatch){
                                similarStalls[key] = { stall: currentStall, matches: matchedTags }
                            }   
                        }
                        
                    }
                })
                let keysOfSimilarStalls = Object.keys(similarStalls)
                if(keysOfSimilarStalls.length > 3){
                    let removeCount = keysOfSimilarStalls.length - 3
                    for(let i = 0; i < removeCount; i++){
                        keysOfSimilarStalls = Object.keys(similarStalls)
                        let rand = Math.floor(Math.random() * Math.floor(keysOfSimilarStalls.length))
                        delete similarStalls[keysOfSimilarStalls[rand]]
                    }
                }
                return similarStalls
            }
        }
    },
    created(){
        // check to see if the store has all the stalls loaded up
        if(!this.stall){
            console.log("-- stalls are not loaded, stocking store with stalls");
            axios.all([ axios.get("https://norwich-market.firebaseio.com/stallData.json"), axios.get("https://norwich-market.firebaseio.com/stallIndex.json") ])
            .then(axios.spread((info, index) => {
                let stalls = {
                    index: index.data,
                    info: info.data
                };
                store.dispatch("updateStoreWithStalls", stalls);
                this.loaded = true
            }))
            .catch(err => { this.error = err.message; });
        } else {
            this.loaded = true
        }
        bus.$on('scrollTo', (to) => {
            const headDiv = document.getElementsByClassName('head')[0]
            headDiv.scrollTop = to - 280
        })
    },
    components: {
        CompSimilarStalls,
        StallViewToolbar,
        StallHead,
        StallOpeningTimes,
        StallMapView
    }
}
</script>

<style>
.stall-view {
    max-width: 1200px;
    margin: 20px auto;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "toolbar toolbar toolbar toolbar toolbar"
        "description description description images images"
        "description description description openingTimes openingTimes"
        "reviews reviews reviews reviews reviews"
        "similar similar similar similar similar"
        "map map map map map";
}

.inner {
    padding: 0px 30px;
}

.images {
    grid-area: images;
}
.images img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 8px;
}


.insideShadow {
    box-shadow: inset 0px 10px 10px 10px #00000020;
}

.expand-btn {
    margin-top: -10px;
    transition: 0.5s;
    font-weight: 900;
    padding: 0px 10px;
    background-color: white;
    display: flex;
    align-items: center;
}

.expand-btn:hover {
    color: white;
    background-color: #da3c61;
}












</style>