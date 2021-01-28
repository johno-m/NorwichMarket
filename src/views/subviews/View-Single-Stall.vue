<template>
    <div v-if="loaded">
        <div class="toolbar">
            <button @click="close" id="close-btn">
                <!-- CLOSE BUTTON -->
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            <div class="tagline">GO BACK</div>
            </button>

            <section>
                <button @click="showMap = !showMap, expandHead = false">
                    <!-- MAP BUTTON -->
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-map" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                    </svg>
                    <div class="tagline">MAP</div>
                </button>
                <button>
                    <!-- SHARE BUTTON -->
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 4.354a.5.5 0 0 0 .708 0L8 1.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
                        <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5z"/>
                        <path fill-rule="evenodd" d="M2.5 14A1.5 1.5 0 0 0 4 15.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5a.5.5 0 0 0 0 1H12a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 0 0-1H4A1.5 1.5 0 0 0 2.5 7v7z"/>
                    </svg>
                    <div class="tagline">SHARE</div>
                </button>
                <button @mouseover="heartHover = true" @mouseout="heartHover = false">
                    <!-- LIKE BUTTON -->
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-if="!heartHover">
                        <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="rgb(244,184,64)" xmlns="http://www.w3.org/2000/svg" v-else>
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    <div class="tagline">LIKE</div>
                </button>
            </section>

        </div>
        <div class="head" :class="[showMap ? 'insideShadow' : '', expandHead ? '' : 'head-height']">
            <component :is="showMap ? 'app-market-mini-view' : 'app-stall-mast-head'" :imageLink="stalls.info[this.stallName].image" :stallNumbers="stalls.info[this.stallName].stall" :stallInfo="stalls.info[this.stallName]" :stallName="stallName"></component>
        </div>
        <div class="title">
            <section class="row spread" v-if="showMap">
                <h1>{{ stallName }}</h1>
                <span class="expand-btn" @click="expandHead = !expandHead" v-if="!expandHead">
                    EXPAND MAP
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </span>
                <span class="expand-btn" @click="expandHead = !expandHead" v-else>
                    SHRINK MAP
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-up-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"/>
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                </span>
            </section>
            <section class="row spread" v-else>
                <h1>{{ stallName }}</h1>   
                <span>
                    {{ stallNumbers }}
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </span>             
            </section>
            <section class="keywords row">
                <button class="keyword" v-for="label in stallLabels" :key="label">{{ label }}</button>
                
            </section>
        </div>
        <div class="stall-inner">
            
            <section class="description">{{ stalls.info[this.stallName].desc }}</section>
            <section class="opening-times">
                    <h2 class="row">
                        Opening Times
                    </h2>
                    <ul>
                        <li v-for="(times, day) in openingTimes" :key="day" class="row" ><div class='day'>{{day}}</div><div class='time'>{{times}}</div></li>
                    </ul>
                </section>
                <section class="details">
                    <div v-if="stalls.info[this.stallName].website">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-link-45deg" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                            <path d="M10 9.5a2.99 2.99 0 0 0 .288-1.46l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896l-.167.167A3.004 3.004 0 0 0 10 9.501z"/>
                        </svg>
                        {{ stalls.info[this.stallName].website }}
                    </div>
                    <div>
                        <div class="icon">
                        </div>
                        <div class="icon-tag">
                            Stall Number
                        </div>
                    </div>
                    <div>
                        <div class="icon">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-link" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                            </svg>
                        </div>
                        <div class="icon-tag">
                            Website
                        </div>
                    </div>
                    <div>
                        <div class="icon">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-envelope-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"/>
                            </svg>
                        </div>
                        <div class="icon-tag">
                            Contact
                        </div>
                    </div>
                    <div>
                        <div class="icon">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-credit-card" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                            </svg>
                        </div>
                        <div class="icon-tag">
                            Takes Card 
                        </div>
                    </div>  
                </section>
            <comp-similar-stalls :similarStalls="similarStalls"></comp-similar-stalls>
        </div>
    </div>
    <div v-else>Loading</div>
</template>

<script>

import { store } from '../../store/store';
import { bus } from '../../main'
import { mapGetters } from 'vuex';
import axios from 'axios';
import AppStallMastHead from '../../components/AppStallMastHead';
import AppMarketMiniView from '../../components/AppMarketMiniView';
import CompSimilarStalls from './Comp-Similar-Stalls'

export default {
    props: ['stallName'],
    data(){
        return {
            loaded: false,
            showMap: false,
            heartHover: false,
            expandHead: false
        }
    },
    methods: {
        close(){
            this.$router.go(-1);
        }
    },
    computed: {
        ...mapGetters({
            stalls: "stalls"
        }),
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
            let days = Object.keys(this.stalls.info[this.stallName].opening);

            for(let i = 0; i < days.length; i++){
                times[days[i]] = this.stalls.info[this.stallName].opening[days[i]].from + ' - ' + this.stalls.info[this.stallName].opening[days[i]].to;
            }
            return times;
        },
        stallLabels: function(){
            let labels = (this.stalls.info[this.stallName].labels) ? this.stalls.info[this.stallName].labels.split(", ") : null 
            return labels
        },
        stallNumbers: function(){
            console.log("this.stalls.info[this.stallName].stall = "+this.stalls.info[this.stallName].stall)
            let stalls = ""
            if(typeof this.stalls.info[this.stallName].stall === 'object'){
                for(let i = 0; i < this.stalls.info[this.stallName].stall.length; i++){
                    if(i == 0){
                        stalls = this.stalls.info[this.stallName].stall[i]
                    } else {
                        stalls = stalls+', '+this.stalls.info[this.stallName].stall[i]
                    }
                }
            } else {
                return this.stalls.info[this.stallName].stall
            }
            return stalls
        },
        similarStalls(){
            if(this.stalls.info){
                let similarStalls = {}
                let keys = Object.keys(this.stalls.info)
                console.log(keys)
                keys.forEach(key => {
                    let currentStall = this.stalls.info[key]
                    if(currentStall && key != this.stallName && this.stalls.info[this.stallName]){
                        if(currentStall.labels && this.stalls.info[this.stallName].labels){
                            let isMatch = false
                            let matchedTags = []
                            let currentList = currentStall.labels.toLowerCase().split(', ')
                            let searchList = this.stalls.info[this.stallName].labels.toLowerCase().split(', ')
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
        if(!this.stalls.info){
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
        'app-stall-mast-head': AppStallMastHead,
        'app-market-mini-view': AppMarketMiniView,
        'comp-similar-stalls': CompSimilarStalls
    }
}
</script>

<style scoped>
.toolbar {
    margin: -10px -10px 10px -10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toolbar section {
    display: flex;
    align-items: center;
}

.toolbar button {
    position: relative;
}

.toolbar button .tagline {
    opacity: 0;
    transition: 0.5s;
    font-weight: 700;
}

h1 {
    font-size: 2.2em;
}

.toolbar button:hover > .tagline {
    opacity: 1;
}

#close-btn {
    text-align: left;
}

#close-btn:hover + .close-msg {
    opacity: 1;
}

.head-height {
    height: 280px;
    transition: 1s;
}

.head {
    transition: 1s;
    margin:0px -20px 0px -20px;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
}

.title {
    position: relative;
    margin-top: -40px;
    background-color: white;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px -20px 20px 3px #00000030;
    padding: 20px;
}
.inner {
    padding: 0px 30px;
}

.keywords {
    font-size: 0.8em;
    color: #666666;
    align-items: center;
    justify-content: left;
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

.day {
    width: 60px;
    text-transform: uppercase;
    font-size: 0.9em;
}

.time {
    flex: 1;
}

.opening-times h2 {
    padding-bottom: 12px;
    color: #242525;
}

.icon {
    margin-right: 20px;
}

.stall-inner {
    padding: 0px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "description description description details details"
        "times times times details details"
        "similar similar similar similar similar";
}

.details {
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.details div {
    text-align: center;
    font-size: 0.8rem;
}

.description {
    grid-area: description;
    padding-right: 20px;
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
}

.opening-times {
    margin-top: 30px;
    box-sizing: border-box;
    grid-area: times;
}

.opening-times li {
    padding: 3px 0px;
}


.keyword {
    font-weight: bold;
    padding: 0px 12px 8px 0px;
    color: #666666;
}

.keyword:hover {
    color: #cccccc;
}

.keyword::selection {
    color: #cccccc;
}


</style>