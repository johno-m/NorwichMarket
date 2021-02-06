<template>
    <div class="search-wrapper">
        <h2>Search</h2>
        <div class="search">
            <input type="text" name="search" id="" v-model="query" @input="handleType">
            <img src="../assets/icons/search.svg" />   
        </div>
        <div class="results" v-if="matches.length > 0">
            <h3>Matching Tags:</h3>
            <ul><li v-for="(tag, index) in matches" :key="index">{{tag}}</li></ul>
        </div>
    </div>
</template>

<script>
import { bus } from '../main'
export default {
    data() {
        return {
            results: {},
            matches: [],
            query: null
        }
    },
    methods: {
        handleType(event){
            this.results = {}
            this.matches = []
            if(event.target.value.length > 2){
                this.doSearch()
            } else {
                bus.$emit('search', null)
            }
        },
        doSearch(event){
            if(this.$store.state.stalls.info) {
                let allStalls = this.$store.state.stalls.info
                let keys = Object.keys(allStalls)
                
                keys.forEach((stallName) => {

                    if(allStalls[stallName].tags){
                        let tags = allStalls[stallName].tags.split(', ')
                        let searchPool = []
                        tags.forEach(tag => {
                            searchPool.push(tag.toLowerCase())
                        })
                        let matches = searchPool.filter(s => s.includes(this.query))
                        if(matches.length > 0){
                            this.results[stallName] = allStalls[stallName]
                            const allMatches = [...this.matches, ...matches]
                            let uniqueMatches = []
                            allMatches.forEach(match => {
                                if(!uniqueMatches.includes(match)){
                                    uniqueMatches.push(match)
                                }
                            })
                            this.matches = uniqueMatches
                        }
                    }                   
                })
                bus.$emit('search', this.results)
            } else {

            }
        }
    }
}
</script>

<style scoped>

h2 {
    color: #252525;
    font-size: 1.6rem;
    /* font-weight: 800; */
    text-transform: capitalize;
    padding: 0px 0px 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e1e1e1;
}

.results h3 { 
    margin: 20px 0px 00px 0px;
}

.results li {
    padding: 5px 10px;
}

.search-wrapper {
    margin-top: 20px;
}

.search {
    display: flex;
    width: calc(100% - 20px);
    align-items: center;
    margin: 0 10px;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    overflow: hidden;
}

.search input {
    width: calc(100% - 70px);
    flex: 1;
    margin: 7px 10px;
    font-size: 1rem;
    border: none;
}

.search input:focus {
    outline: none;
    border: none;
}

.search-wrapper .search img {
    width: 24px;
    margin: 8px;
    border-radius: 8px;
}



</style>