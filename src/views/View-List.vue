<template>
    <section class="view list-window" v-if="!error">
        <MainSidebar :handleSearch="handleSearch" />
        <section class="search" v-if="searchQuery">
            <SearchView :stallList="searchQuery" />
        </section>
        <section class="categories" v-else>
            <CategoryView v-for="(type, index) in this.$store.state.types" :key="index" :type="type"  :ref="'category-'+type" />
        </section>
        <section class="padding-div"></section>
    </section>
</template>

<script>
import { bus } from '../main';
import CategoryView from './subviews/List-Category'
import MainSidebar from '../components/MainSidebar'
import SearchView from './subviews/List-Search'

export default {
    props: ['query'],
    data(){
        return {
            error: null,
            scrollPos: 0,
            isScrolling: null,
            maxStallsVisible: 10,
            searchQuery: null
        }
    },
    methods: {
        handleSearch(query){ 
            console.log('query = '+query)
        },

    },
    created (){
        this.searchQuery = this.query
        bus.$on('search', (query) => {
            this.searchQuery = query;
        })
        
    },
    components: {
        CategoryView,
        MainSidebar,
        SearchView
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

.list-window {
    display: flex;
    flex-direction: row;
}

.categories {
    flex: 1;
    padding-top: 20px;
}

.search {
    flex: 1;
    padding-top: 20px;
}

.padding-div {
    display: none;
}

@media screen and (min-width: 1800px){
    .padding-div {
        display: block;
        flex: 1;
        max-width: 300px;
    }
}

</style>