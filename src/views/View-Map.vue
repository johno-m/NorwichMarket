<template>
    <div id="box" v-if="stallInfo">
        <div class="market-top-group mb">
            <div class="market-top-col mr">
                <div class="stall-spot-alt large mb" id="stall-2" :business="stallIndex[2]" :style="{ backgroundColor: businessColor(stallIndex[2]) }" @mouseover="stallHovered($event, 2)" @click="stallClicked(2)">2 & 3</div>
                <div class="stall-spot-alt large" id="stall-4" :business="stallIndex[4]" :style="{ backgroundColor: businessColor(stallIndex[4]) }" @mouseover="stallHovered($event, 4)" @click="stallClicked(4)">4 & 5</div>
            </div>
            <div class="market-top-col mr">
                <div class="stall-spot tall" id="stall-6" :business="stallIndex[6]" :style="{ backgroundColor: businessColor(stallIndex[6]) }" @mouseover="stallHovered($event, 6)" @click="stallClicked(6)">6</div>
                <div class="stall-spot tall" id="stall-7" :business="stallIndex[7]" :style="{ backgroundColor: businessColor(stallIndex[7]) }" @mouseover="stallHovered($event, 7)" @click="stallClicked(7)">7</div>
            </div>
            <div class="market-top-col mr">
                <div class="sir-garnet mb" id="stall-191" :business="stallIndex[191]" :style="{ backgroundColor: businessColor(stallIndex[191]) }" @mouseover="stallHovered($event, 191)" @click="stallClicked(191)">Sir Garnet</div>
                <div class="sir-garnet-stalls" id="stall-188" :business="stallIndex[188]" :style="{ backgroundColor: businessColor(stallIndex[188]) }" @mouseover="stallHovered($event, 188)" @click="stallClicked(188)">
                    188
                </div>
            </div>
            <div class="market-top-col mr">
                <div class="stall-spot-alt large" id="stall-192" :business="stallIndex[192]" :style="{ backgroundColor: businessColor(stallIndex[192]) }" @mouseover="stallHovered($event, 192)" @click="stallClicked(192)">Brick</div>
            </div>
            <div class="market-top-col mr">
                <div class="stall-spot-alt large" id="stall-193" :business="stallIndex[193]" :style="{ backgroundColor: businessColor(stallIndex[193]) }" @mouseover="stallHovered($event, 193)" @click="stallClicked(193)">Andersons</div>
            </div>
        </div>
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[1]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[2]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>
        
        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[3]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[4]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[5]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[6]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[7]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[8]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[9]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[10]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[11]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[12]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[13]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[14]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[15]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[16]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)" @click="stallClicked(val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>

        <div class="market-col">
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[17]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'top') }" @mouseover="stallHovered($event, val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
            <div class="market-row">
                <div class="stall-spot" :id="'stall-'+val" v-for="(val, key) in main_stalls[18]" :key="key" :business="stallIndex[val]" :style="{ backgroundColor: businessColor(stallIndex[val]), boxShadow: calculateBorder(val, stallInfo[stallIndex[val]], 'bottom') }" @mouseover="stallHovered($event, val)">
                    {{ stallIndex[val] ? val : null }}
                </div>
            </div>
        </div>
        <div id="stall-overlay"></div>
    </div> <!-- main div close -->

</template>

<script>

var convert = require('color-convert');

import { store } from '../store/store';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
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
            stallIndex: null,
            stallInfo: null
        }
    },
    methods: {
        getColor(stallNum){
            let stallBusiness = this.stallIndex[stallNum];
            if(stallBusiness){
                return 'active';
            }
        },
        randomColor(type){
            let col;
            if(type == "food" || type == "produce"){
                col = [346, 70, (94)];
            }
            if(type == "service"){
                col = [42, 60, (100)];
            }
            if(type == "shop" || type == "alcohol"){
                col = [164, 97, (84)];
            }
            if(type == "clothing"){
                col = [195, 90, (70)];
            }
            return col;
        },
        stallHovered(event, stallNum){
            if(!event.target){
                return false;
            }

            let stallsInRow = event.path[1].children;
            let stall = event.target;
            let stallPositionInRow = 0;

            // get this stalls position in the row of stalls
            for(let i = 0; i < stallsInRow.length; i++){
                if(stall === stallsInRow[i]){
                    stallPositionInRow = i+1;
                }
            }
            console.log(stallPositionInRow)
        },
        shouldHaveBorder(business){
            if(business){
                if(business.stall.length > 1){
                    return business.color;
                } else {
                    return '#FFFFFF';
                }
            }  
        },
        calculateBorder(stallNum, business, row){
            if(!business){
                return false;
            }
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
                outcome = outcome + '0px -3px 0px 0px '+business.color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[1]){
                outcome = outcome + '3px 0px 0px 0px '+business.color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[2]){
                outcome = outcome + '0px 3px 0px 0px '+business.color+', ';
            } else {
                outcome = outcome + '0px 0px 0px 0px white, ';
            }
            if(stalls[3]){
                outcome = outcome + '-3px 0px 0px 0px '+business.color;
            } else {
                outcome = outcome + '0px 0px 0px 0px white';
            }
            return outcome;
        },
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
        businessColor(businessName){
            console.log('hello');
            console.log(businessName);
            if(businessName){
                if(this.stallInfo[businessName].type == "food"){
                    return "#ed466e"; // pink
                } else if(this.stallInfo[businessName].type == "produce"){
                    return "#08d49d"; // green
                } else if(this.stallInfo[businessName].type == "clothing"){
                    return "#128eb8"; // blue
                } else if(this.stallInfo[businessName].type == "service"){
                    return "#009688";  // blue
                }  else if(this.stallInfo[businessName].type == "shop"){
                    return "#F4B840"; // orange
                } else {
                    return "#f5f5f5";
                }
            } else {
                return "#f5f5f5";
            }
            
        },
        stallClicked(stallNum){
            if(this.stallIndex[stallNum]){
                this.clickedStall = {
                    name: this.stallIndex[stallNum],
                    info: this.stallInfo[this.stallIndex[stallNum]]
                }
            } else {
                this.clickedStall = null;
            }
        }
    },
    created(){
        axios.all([ axios.get("https://norwich-market.firebaseio.com/stallData.json"), axios.get("https://norwich-market.firebaseio.com/stallIndex.json") ])
            .then(axios.spread((info, index) => {
                this.stallInfo = info.data;
                this.stallIndex = index.data;
            }))
            .catch(err => { this.error = err.message; })
    }
    
}

// window.onload = function(){
//     let html = "";
//     let box = document.getElementById('box');
//     for(let i = 1; i < 188; i++){
//         html = html+"'"+i+"': null,<BR>";
//     }

//     box.innerHTML = html;
// }

</script>

<style scoped>


#stall-overlay {
    width: 0px;
    height: 0px;
    overflow: hidden;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
}

.market-row {
    display: flex;
    flex-direction: row;
}

.market-row .stall-spot:nth-child(even) {
  margin-right: 30px;
}

.market-row .stall-spot:last-child {
  margin-right: 1px;
}

.market-col {
    margin-bottom: 30px;
}


.stall-spot {
    width: 65px;
    height: 50px;
    margin: 3px;
    background-color: #f5f5f5;
    color: #ffffff80;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
}





.market-top-group {
    display: flex;
    flex-direction: row;
}

.sir-garnet-stalls {
    width: 215px;
    height: 50px;
    margin: 3px;
    background-color: #f5f5f5;
    color: #ffffff80;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
}

.sir-garnet {
    width: 215px;
    height: 100px;
    background-color: #f5f5f5;
    color: #ffffff80;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
    margin: 3px;
}

.market-top-col {
    margin-top: auto;
}

.market-garnet-cluster {
    display: flex;
    flex-direction: row;
    align-items: baseline;
}

.active {
    background-color: #f5f5f5;
}

.market-col:nth-child(even) {
    color: red!important;
}

.large {
    width: 133px;
    height: 106px;
    background-color: #f5f5f5;
    color: #ffffff80;
    text-align: center;
    line-height: 50px;
    font-size: 1.6em;
    transition: 1s;
    margin: 3px;
}

.mb {
    margin-bottom: 30px;
}

.mr {
    margin-right: 27px;
}

.tall {
    height: 65px;
    width: 50px;
    margin-top: 6px;
}

.narrow {
    width: 56px;
}

</style>