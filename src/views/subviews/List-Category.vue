<template>
    <div class="category" ref="category">
        <a :name="'category-'+type"></a>
        <h1>{{type}}</h1>
        <div class="stall-list" ref="listArea">
            <StallCard v-for="(stall, index) in stallList" :key="'stall-card-'+index" :name="index" :stall="stall" />
        </div>
        <button class="btn-show-more" @click="toggleClosed" v-if="numOfStalls > maxNumOfStalls">SHOW {{closed ? 'MORE' : 'LESS'}}</button>
    </div>
</template>

<script>
import StallCard from './List-Stall-Card'

export default {
    props: ['type'],
    data() {
        return {
            closed: true,
            numOfStalls: 0,
            maxNumOfStalls: 0
        }
    },
    methods: {
        toggleClosed() {
            this.closed = !this.closed
        }
    },
    computed: {
        stallList: function(){
            let list = {}
            this.numInTwoRows
            if(this.$store.state.stalls.info) {
                let allStalls = this.$store.state.stalls.info
                let keys = Object.keys(allStalls)
                this.numOfStalls = 0
                keys.forEach((stallName) => {
                    if(allStalls[stallName].type === this.type){
                        if(this.closed && this.numOfStalls < this.maxNumOfStalls){
                            list[stallName] = allStalls[stallName]
                        } else if(!this.closed){
                            list[stallName] = allStalls[stallName]
                        }
                        this.numOfStalls++
                    }
                
                    
                })
            }
            return list
        }
    },
    components: {
        StallCard
    },
    mounted(){
        if((Math.floor(this.$refs.listArea.clientWidth / 350) * 2) < 6){
            this.maxNumOfStalls = 6
        } else {
            this.maxNumOfStalls = Math.floor(this.$refs.listArea.clientWidth / 350) * 2
        }
        
    }
}
</script>

<style scoped>

h1 {
    color: #252525;
    font-size: 1.8rem;
    font-weight: 800;
    text-transform: capitalize;
    padding: 0px 0px 10px 0px;
    margin: 0px 0px 10px 0px;
}

.category {
    display: flex;
    flex-direction: column;
}

.btn-show-more {
    margin: 0px auto;
    font-weight: 800;
    font-size: 0.9rem;
    color: white;
    padding: 1rem 2rem;
    background: #5dc99c;
    border-radius: 8px;
}

.stall-list {
    display: grid;
    transition: 1s;
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
}

</style>