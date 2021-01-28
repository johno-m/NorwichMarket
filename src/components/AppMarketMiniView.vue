<template>
    <div id="box">
        <div class="market-top-group">
            <div class="market-top-col mr">
                <div class="stall-spot-alt large mb" id="stall-2" :class="isHighlighted(2) ? 'highlighted' : ''" :style="{'backgroundColor': stallColor(getStallType(2), false)}"></div>
                <div class="stall-spot-alt large" id="stall-4" :class="isHighlighted(4) ? 'highlighted' : ''" :style="{backgroundColor: stallColor(getStallType(4), false)}"></div>
            </div>
            <div class="market-top-col2 mr">
                <div class="stall-spot tall" id="stall-6" :class="isHighlighted(6) ? 'highlighted' : ''" :style="{backgroundColor: stallColor(getStallType(6), false)}"></div>
                <div class="stall-spot tall" id="stall-7" :class="isHighlighted(7) ? 'highlighted' : ''" :style="{backgroundColor: stallColor(getStallType(7), false)}"></div>
            </div>
            <div class="market-top-col3 mr">
                <div class="sir-garnet mb hasText" id="stall-191" :class="isHighlighted(191) ? 'highlighted' : ''" :style="{'border-bottom': '4px solid '+stallColor(getStallType(191), false), 'color' : stallColor(getStallType(191), false)}"><span>Sir Garnet</span></div>
                <div class="sir-garnet-stalls" id="stall-188" :class="isHighlighted(188) ? 'highlighted' : ''" :style="{backgroundColor: stallColor(getStallType(188), false)}"></div>
            </div>
            <div class="market-top-col mr">
                <div class="stall-spot-alt large hasText" id="stall-192" :class="isHighlighted(192) ? 'highlighted' : ''" :style="{'border-bottom': '4px solid '+stallColor(getStallType(192), false), 'color' : stallColor(getStallType(192), false)}"><span>Brick</span></div>
            </div>
            <div class="market-top-col">
                <div class="stall-spot-alt large hasText" id="stall-193" :class="isHighlighted(193) ? 'highlighted' : ''" :style="{'border-bottom': '4px solid '+stallColor(getStallType(193), false), 'color' : stallColor(getStallType(193), false)}"><span>Andersons</span></div>
            </div>
        </div>
        <div class="market-isle">SIR GARNET WALKTHROUGH
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[1]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[2]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW A
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[3]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[4]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW B
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[5]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[6]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW C
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[7]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[8]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW D
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[9]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[10]" :key="key" :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW E
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[11]" :key="key"   :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[12]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">
            ROW F
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[13]" :key="key"   :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[14]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">
            ROW G
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[15]" :key="key"   :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[16]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div class="market-isle">ROW H
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[17]" :key="key"   :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'top')}"></div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[18]" :key="key"  :class="isHighlighted(val) ? 'highlighted' : ''" :stallName="getStallName(val)" :style="{backgroundColor: stallColor(getStallType(val), false), boxShadow: calculateBorder( val, getStall( val ), 'bottom')}"></div>
            </div>
        </div>
        <div id="mapMarker">
            <div class="map-wrapper">
                <img src="../assets/icons/map-tag.svg" alt="Marker indicating where the stalls location is"/><span>{{ stallName }}</span>
            </div>
        </div>
    </div> <!-- main div close -->
    
</template>

<script>

import axios from 'axios';
import { bus } from '../main'

export default {
    props: ['stallNumbers', 'stallInfo', 'stallIndex', 'stallName'],
    data() {
        return {
            main_stalls: {
                '1': [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                '2': [27, 26, 25, 24, 23, 22, 21, 20, 19, 18],
                '3': [28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                '4': [47, 46, 45, 44, 43, 42, 41, 40, 39, 38],
                '5': [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
                '6': [67, 66, 65, 64, 63, 62, 61, 60, 59, 58],
                '7': [68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
                '8': [87, 86, 85, 84, 83, 82, 81, 80, 79, 78],
                '9': [88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
                '10': [107, 106, 105, 104, 103, 102, 101, 100, 99, 98],
                '11': [108, 109, 110, 111, 112, 113, 114, 115, 116, 117],
                '12': [127, 126, 125, 124, 123, 122, 121, 120, 119, 118],
                '13': [128, 129, 130, 131, 132, 133, 134, 135, 136, 137],
                '14': [147, 146, 145, 144, 143, 142, 141, 140, 139, 138],
                '15': [148, 149, 150, 151, 152, 153, 154, 155, 156, 157],
                '16': [167, 166, 165, 164, 163, 162, 161, 160, 159, 158],
                '17': [168, 169, 170, 171, 172, 173, 174, 175, 176, 177],
                '18': [187, 186, 185, 184, 183, 182, 181, 180, 179, 178]
            },
            hoveredStall: null,
            clickedStall: null,
            topPosition: 0,
            error: null
        }
    },
    methods: {
        checkBorderingStall(stallList, cell){
            
            let isSameBusiness = false;
            if(cell && stallList) {
                
                for(let i = 0; i < stallList.length; i++){
                    if(stallList[i] == cell){
                        isSameBusiness = true;
                    }
                }
            } else {
                return false;
            }
            if(isSameBusiness){
                return true;
            } else {
                return false;
            }
        },
        stallColor(type, monotone){
            if(!monotone){
                let col = '#dddddd';
                if(type){
                    if(type == "food" || type == "produce"){
                        col = '#f07e7e';
                    }
                    if(type == "service"){
                        col = '#b1d5e0';
                    }
                    if(type == "shop" || type == "alcohol"){
                        col = '#98e6d1';
                    }
                    if(type == "clothing"){
                        col = '#ebbf66';
                    }
                    
                }
                return col;
            }
            return '#ffffff';
        },
        calculateBorder(stallNum, business, row){
            if(!business){
                return false;
            }
            let color = this.stallColor(business.type, false);

            let stalls = [0, 0, 0, 0];
            let outcome = "";
            let topDiff = [15, 13, 11, 9, 7, 5, 3, 1, 19, 17];
            let bottomDiff = [5, 7, 9, 11, 13, 15, 17, 19, 1, 3];

            let stringNum = String(stallNum);
            let lastNum = +stringNum.slice(-1);

            if(row == "top"){
                stalls[3] = stallNum - 1;
                if(lastNum != 7){ stalls[1] = stallNum + 1; }      
                stalls[2] = stallNum + topDiff[lastNum];
            }
            if(row == "bottom"){
                stalls[0] = stallNum - bottomDiff[lastNum];
                stalls[3] = stallNum + 1;
                if(lastNum != 8){ stalls[1] = stallNum - 1; }
            }
            let debug = `above: ${stalls[0]} right: ${stalls[1]} below: ${stalls[2]} left: ${stalls[3]}`;

            for(let i in stalls){
                stalls[i] = this.checkBorderingStall(business.stall, stalls[i]);
            }
            if(stalls[0]){
                outcome = outcome + '0px -0.2em 0px 0px '+color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[1]){
                outcome = outcome + '0.2em 0px 0px 0px '+color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[2]){
                outcome = outcome + '0px 0.2em 0px 0px '+color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[3]){
                outcome = outcome + '-0.2em 0px 0px 0px '+color;
            } else {
                outcome = outcome + '0px 0px 0px 0px white';
            }
            return outcome;
        },
        isHighlighted(stallNumber){
            for(let i = 0; i< this.stallArray.length; i++){
                if(this.stallArray[i] == stallNumber){
                    return true;
                } else {
                    return false;
                }
            }
        },
        getStallName(index){
            let stallName = null;
            if(this.stallIndex && this.stallIndex[index]){
                return this.stallIndex[index];
            }
        },
        getStallType(index){
            let stallName = null;
            if(this.stallIndex && this.stallIndex[index]){
                stallName = this.stallIndex[index];
            }
            if(stallName){
                return this.stallInfo[stallName].type;
            }
        },
        getStall(index){
            let stall = null;
            if(this.stallIndex && this.stallIndex[index]){
                stall = this.stallInfo[this.stallIndex[index]];
            }
            if(stall){
                return stall;
            }
        }
    },
    computed: {
        stallIndexes: function(){
            axios.get("https://norwich-market.firebaseio.com/stallIndex.json")
                .then(res => {
                    return res.data;
                })
                .catch(err => { this.error = err.message; });
        },
        stallArray: function(){
            let stallNumberString = this.stallNumbers + '';
            return stallNumberString.split(", ");    
        }
    },
    created(){
        axios.all([ axios.get("https://norwich-market.firebaseio.com/stallData.json"), axios.get("https://norwich-market.firebaseio.com/stallIndex.json") ])
            .then(axios.spread((info, index) => {
                this.stallInfo = info.data;
                this.stallIndex = index.data;
            }))
            .catch(err => { this.error = err.message; })

    },
    mounted(){
        const highlightedStall = document.getElementsByClassName('highlighted')[0]
        const parentDiv = document.getElementById('box')
        const mapMarkerDiv = document.getElementById('mapMarker')
        console.log()
        mapMarkerDiv.style.top = (highlightedStall.getBoundingClientRect().top - parentDiv.getBoundingClientRect().top - mapMarkerDiv.getBoundingClientRect().height + 10) +'px'
        mapMarkerDiv.style.left = (highlightedStall.getBoundingClientRect().left - parentDiv.getBoundingClientRect().left - mapMarkerDiv.getBoundingClientRect().width + 10) +'px'
        console.log(mapMarkerDiv.style.top)
        const cont = document.getElementById('box')
        bus.$emit('scrollTo', highlightedStall.getBoundingClientRect().top)
    }
}


</script>

<style scoped>

.market-row {
    display: flex;
    flex-direction: row;
}

.market-row .stall-spot:nth-child(even) {
  margin-right: 2.5%;
}

.market-row .stall-spot:last-child {
  margin-right: 1px;
}

.stall-spot {
    position: relative;
    flex: 1;
    padding-top: 7%;
    margin: 3px;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
}

.market-top-group {
    display: flex;
    flex-direction: row;
}

.sir-garnet-stalls {
    width: 100%;
    padding-bottom: 20%;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
}

.sir-garnet {
    width: 100%;
    padding-bottom: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 1.1em;
}

.market-top-col {
    margin-top: auto;
    flex: 1;
}

.market-top-col2 {
    margin-top: auto;
    width: 6%;
}

.market-top-col3 {
    margin-top: auto;
    width: 31%;
}

.market-garnet-cluster {
    display: flex;
    flex-direction: row;
    align-items: baseline;
}

.large {
    width: 100%;
    padding-bottom: 70%;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
    transition: 1s;
}

.mb {
    margin-bottom: 15px;
}

.mr {
    margin-right: 2.5%;
}

.tall {
    padding-bottom: 150%;
    width: 100%;
    margin: 6px 0px 0px 0px;
}

.narrow {
    width: 56px;
}


#box {
    width: 100%;
    max-width: 1000px;
    padding: 10px 30px 70px 30px;
    margin-left: 0px;
    background-color: #f1f1f1;
    color: #00000040;
    font-weight: 700;
    box-sizing: border-box;
    position: relative;
}

.stall-spot-alt {
    font-size: 1.1em;
}

#box h1 {
    text-align: center;
    color: #00000040;
    font-size: 1.4em;
}

.hasText {
    position: relative;
}

.hasText span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    line-height: 1.4em;
    justify-content: left;
    align-items:flex-end;
}

.market-isle {
    text-align: left;
    margin-left: -20px;
    padding: 5px 0px;
    font-weight: 900;
    color: #00000060;
}

.bi-arrow-right-short {
    margin: -8px 0px;
}

.stall-spot:first-child {
    margin-left: 0px;
}

.stall-spot:last-child {
    margin-right: 0px;
}

.highlighted {
    background-color: black!important;
}

#mapMarker {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
}

.map-wrapper {
    position: relative;
}

#mapMarker span {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #818181;
    font-weight: normal;
    font-size: 1.6rem;
}


</style>