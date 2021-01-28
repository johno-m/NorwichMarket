<template>
    <div class="col">
        <div id="top-message">Welcome to the Norwich Market Index. This is a directory of all the stalls on Norwich Market. You can search below, or explore by category.</div>    
        <div id="search-box" class="row">
            <div class="search-area col">
                <input type="text" v-on:input="searchInput" v-model="searchValue">
                <div class="bottom-border"></div>
            </div>
            <button>
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
            </button>
        </div>
        <div class="searchResults" v-if="searchValue">
            <h3>Results containing '{{searchValue}}'</h3>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>  
</template>

<script>
import { bus } from '../../main'
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            searchValue: null
        }
    },
    methods: {
        searchInput: function(){
            if(this.$route.name === "ListOfStalls"){
                bus.$emit('startSearch', this.searchValue);
            } else {
                // get list of stalls
                // put search tags and labels into one array (split ', ')
                // loop through and search fo the searchValue
            }
            
        }
    },
    computed: {
        ...mapGetters({
            stalls: "stalls"
        })
    }
}
</script>

<style scoped>

#top-message {
    background-color: white;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    line-height: 1.4em;
    font-size: 1.1em;
    font-weight: 700;
    text-align: left;
    letter-spacing: 0.025em;
    margin-bottom: 10px;
}

#search-box {
    width: 100%;
    padding: 8px 16px;
    background-color: white;
    box-sizing: border-box;
}

.search-area {
    flex: 1;
    margin-right: 10px;
}

#search-box input {
    width: 100%;
    border: 0px;
    padding-bottom: 3px;
    font-weight: 400;
    font-size: 1.4em;
}

#search-box input:focus {
    outline: none;
}

#search-box input:focus + .bottom-border {
    width: 100%;
}


.bottom-border {
    margin-left:auto;
    transition: 0.5s;
    width: 0px;
    height: 2px;
    background-color: #242525;
}

</style>