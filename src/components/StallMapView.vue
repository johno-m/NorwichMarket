

<template>
    <section class="stall-map-wrapper" v-if="stallInfo">
        <a name="map"></a>
        <h2>Where is the stall?</h2>
        <div class="row">
            <MapSidebar />
            <div class="stall-scroll-area" ref="maparea">
                <div class="stall-map-top">
                    <div class="col">
                        <div class="stall block produce" :ref="(stallIndex[2] === selectedStall) ? 'selected' : null"><div class="contents">2 & 3</div></div>
                        <div class="stall block" :ref="(stallIndex[4] === selectedStall) ? 'selected' : null" ><div class="contents">4 & 5</div></div>
                    </div>
                    <div class="col"></div>
                    <div class="col">
                        <div class="stall tall shop" :ref="(stallIndex[6] === selectedStall) ? 'selected' : null" ><div class="contents">6</div></div>
                        <div class="stall tall shop" :ref="(stallIndex[7] === selectedStall) ? 'selected' : null" ><div class="contents">7</div></div>
                    </div>
                    <div class="col"></div>
                    <div class="col">
                        <div class="stall large food" :ref="(stallIndex[191] === selectedStall) ? 'selected' : null" ><div class="contents">Sir Garnet</div></div>
                        <div class="stall long shop" :ref="(stallIndex[188] === selectedStall) ? 'selected' : null" ><div class="contents">188</div></div>
                    </div>
                    <div class="col"></div>
                    <div class="col">
                        <div class="stall block food" :ref="(stallIndex[192] === selectedStall) ? 'selected' : null" ><div class="contents">Brick</div></div>
                    </div>
                    <div class="col"></div>
                    <div class="col">
                        <div class="stall block clothing" :ref="(stallIndex[193] === selectedStall) ? 'selected' : null" ><div class="contents">Anderson</div></div>
                    </div>
                </div>
                <div class="stall-map" v-if="stallInfo">
                    <div class="box" 
                        v-for="(stallNum, index) in main_stalls" 
                        :key="index" 
                        :class="className(stallNum, index)" 
                        :id="stallIndex[stallNum]" 
                        :selected="(stallIndex[stallNum] === selectedStall) ? 'active' : null" 
                        :ref="(stallIndex[stallNum] === selectedStall) ? 'selected' : null" >
                        <div class="contents" >
                            {{stallNum}}
                        </div>
                    </div>
                </div>
                <MapLocationIndicator />
            </div>
        </div>
    </section>
    

</template>

<script>
import MapSidebar from './MapSidebar'
import MapLocationIndicator from './MapLocationIndicator'

export default {
    props: ['stalls', 'selectedStall'],
    data() {
        return {
            main_stalls: [
                8, 9, null, 10, 11, null, 12, 13, null, 14, 15, null, 16, 17,
                27, 26, null, 25, 24, null, 23, 22, null, 21, 20, null, 19, 18,
                'row a', null, null, null, null, null, null, null, null, null, null, null, null, null,
                28, 29, null, 30, 31, null, 32, 33, null, 34, 35, null, 36, 37,
                47, 46, null, 45, 44, null, 43, 42, null, 41, 40, null, 39, 38,
                'row b', null, null, null, null, null, null, null, null, null, null, null, null, null,
                48, 49, null, 50, 51, null, 52, 53, null, 54, 55, null, 56, 57,
                67, 66, null, 65, 64, null, 63, 62, null, 61, 60, null, 59, 58,
                'row c', null, null, null, null, null, null, null, null, null, null, null, null, null,
                68, 69, null, 70, 71, null, 72, 73, null, 74, 75, null, 76, 77,
                87, 86, null, 85, 84, null, 83, 82, null, 81, 80, null, 79, 78,
                'row d', null, null, null, null, null, null, null, null, null, null, null, null, null,
                88, 89, null, 90, 91, null, 92, 93, null, 94, 95, null, 96, 97,
                107, 106, null, 105, 104, null, 103, 102, null, 101, 100, null, 99, 98,
                'row e', null, null, null, null, null, null, null, null, null, null, null, null, null,
                108, 109, null, 110, 111, null, 112, 113, null, 114, 115, null, 116, 117,
                127, 126, null, 125, 124, null, 123, 122, null, 121, 120, null, 119, 118,
                'row f', null, null, null, null, null, null, null, null, null, null, null, null, null,
                128, 129, null, 130, 131, null, 132, 133, null, 134, 135, null, 136, 137,
                147, 146, null, 145, 144, null, 143, 142, null, 141, 140, null, 139, 138,
                'row g', null, null, null, null, null, null, null, null, null, null, null, null, null,
                148, 149, null, 150, 151, null, 152, 153, null, 154, 155, null, 156, 157,
                167, 166, null, 165, 164, null, 163, 162, null, 161, 160, null, 159, 158,
                'row h', null, null, null, null, null, null, null, null, null, null, null, null, null,
                168, 169, null, 170, 171, null, 172, 173, null, 174, 175, null, 176, 177,
                187, 186, null, 185, 184, null, 183, 182, null, 181, 180, null, 179, 178
            ],
            hoveredStall: null,
            clickedStall: null,
            stallIndex: this.$store.state.stalls.index,
            stallInfo: this.$store.state.stalls.info
        }
    },
    methods: {
        className(stallNumber, i){
            
            let borders = ''
            if(this.stallIndex[stallNumber]){
                // borders = this.adjacentStalls(stallNumber, i).join(' ')
                borders = this.adjacentStalls(stallNumber, i)
            } else {
                borders = "vacant"
            }

            let isSelected = (this.stallIndex[stallNumber] === this.selectedStall) ? 'selected-' : ''

            if(stallNumber){
                return {
                    stall: (stallNumber > 1), 
                    gap: (stallNumber === null), 
                    [isSelected+this.stallTypeByNum(stallNumber)]: this.stallTypeByNum(stallNumber),
                    [borders]: true,
                    rowName: typeof stallNumber === 'string',

                }
            }
            
        },
        stallTypeByNum(stallNumber){
            if(this.stallInfo[this.stallIndex[stallNumber]]){
                return this.stallInfo[this.stallIndex[stallNumber]].type
            }

            
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
        adjacentStalls(stallNum, i){
            let results = ''
            const business = this.stallIndex[stallNum]
            const above = this.stallIndex[this.main_stalls[i-14]]
            const left = this.stallIndex[this.main_stalls[i-1]]
            const right = this.stallIndex[this.main_stalls[i+1]]
            const below = this.stallIndex[this.main_stalls[i+14]]

            if(business === above){ results = 'b-t' }
            if(business === left){ results = 'b-l' }
            if(business === right){ results = 'b-r' }
            if(business === below){ results = 'b-b' }
            if(business === below && business === right){ results = 'b-b b-r' }
            if(results.length === 0){ results = 'b-n' }

            return results

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
        refreshScroll(){
            console.log('hello')
            console.log(this.$refs.selected)
            if(this.$refs.selected && this.$refs.maparea){
                const scrollTo = this.$refs.selected[0].offsetTop - this.$refs.maparea.offsetTop - 250 + (this.$refs.selected[0].clientHeight / 2)
                this.$refs.maparea.scrollTop = scrollTo
            }
        }
    },
    updated(){
        this.refreshScroll()
    },
    mounted(){
        this.refreshScroll()
    },
    components: {
        MapSidebar,
        MapLocationIndicator
    }
    
}

</script>

<style scoped>
h2 {
    margin: 20px 0px;
}

.stall-map-wrapper {
    grid-area: map
}

.stall-scroll-area {
    position: relative;
    overflow-y: scroll;
    min-width: 600px;
    flex: 1;
    height: 500px;
}

.map-pointer {

}

.box {
    margin: 3px;
    position: relative;
}

.rowName .contents {
    font-size: 1rem;
    margin-right: 100%;
    color: #969696;
}

.b-l {
    border-left: 3px;
    margin-left: -3px;
}

.b-r {
    border-right: 3px;
    margin-right: -3px;
}

.b-t {
    border-top: 3px;
    margin-top: -3px;
}

.b-t .contents {
    margin-top: 3px;
}

.b-b {
    border-bottom: 3px;
    margin-bottom: -3px;
}

.b-n {
    border: 6px solid white;
    margin: -3px;
}

.vacant {
    border: 6px solid white;
    margin: -3px;
}

.stall {
    position: relative;
    padding-bottom: 100%;
    background: #ebebeb;
    color: rgba(255, 255, 255, 0.6);
}

.contents {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 1.5rem;
}

.food {
    background: #ed466e;
}

.shop {
    background: #F4B840;
}

.produce {
    background: #08d49d;
}

.clothing {
    background: #128eb8;
}

.service {
    background: #009688;
}

.selected-food {
    background: #ed466e;
}

.selected-shop {
    background: #F4B840;
}

.selected-produce {
    background: #08d49d;
}

.selected-clothing {
    background: #128eb8;
}

.selected-service {
    background: #009688;
}

.stall-map {
    max-width: 700px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr;
    grid-template-rows: 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr 1fr 2fr 2fr;
}



#stall-overlay {
    width: 0px;
    height: 0px;
    overflow: hidden;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
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

.mb {
    margin-bottom: 30px;
}

.mr {
    margin-right: 27px;
}

.col {
    justify-content: flex-end;
}

/* Map Top Stalls */

.stall-map-top {
    max-width: 700px;
    margin: 0 auto 25px auto;
    display: grid;
    grid-template-columns: 4fr 1fr 2fr 1fr 6fr 1fr 4fr 1fr 4fr;
}

.stall-map-top .stall {
    border: 6px solid white;
    margin: -3px;
}

.tall {
    padding-bottom: 110%;
}

.block {
    padding-bottom: 80%;
}

.large {
    padding-bottom: 60%;
}

.long {
    padding-bottom: 33.333%;
}

</style>