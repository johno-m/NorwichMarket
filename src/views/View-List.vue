<template>
    <div class="view row" v-if="!error">
        <div id="main">
            <transition name="fade" mode="out-in">
                <router-view :filter="computedFilter" :maxStallsVisible="maxStallsVisible"></router-view>
            </transition>
        </div>
        <div id="sidebar">
            <component :is="sideBarComponent"></component>
        </div>
    </div>
    <div id="error" v-else>{{ error }}</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { bus } from '../main';
import SidebarListView from './subviews/SidebarListView';

export default {
    props: ['filter'],
    data(){
        return {
            error: null,
            scrollPos: 0,
            isScrolling: null,
            maxStallsVisible: 10,
        }
    },
    methods: {
        scroll(){
            window.onscroll = () => {
                
                let bottomOfWindow = document.documentElement.scrollTop + document.documentElement.offsetHeight > (document.documentElement.scrollHeight - 300);
                if (bottomOfWindow) {
                    this.maxStallsVisible++;
                }

                let here = this;

                // Clear our timeout throughout the scroll
                window.clearTimeout( this.isScrolling );

                // Set a timeout to run after scrolling ends
                this.isScrolling = setTimeout(function() {
                    // Run the callback
                    here.scrollPos = document.documentElement.scrollTop;

                }, 200);


            };
        }
    },
    computed: {
        computedFilter: function(){
            if(this.filter){
                return this.filter;
            } else {
                return 'food';
            }
        },
        sideBarComponent: function(){
            return 'sidebar-list-view';
        }
    },
    mounted(){
        this.scroll();
    },
    components: {
        'sidebar-list-view': SidebarListView
    }
    
}
</script>

<style scoped>
    #main {
        transition: 0.5s;
        flex: 1;
        padding: 30px;
        background-color: white;
    }
    #sidebar {
        margin-left: 10px;
        width: 290px;
        overflow-x: hidden;
        position: relative;
    }
    #sidebar .panel {
        background-color: #00000020;
        margin-left: 30px;
        min-height: 300px;
        margin-top: 20px;
        
    }



</style>