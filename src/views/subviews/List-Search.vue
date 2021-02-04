<template>
    <div class="search-view" ref="search">
        <h1>Search Results:</h1>
        <div class="stall-list" ref="listArea">
            <StallCard v-for="(stall, index) in stallList" :key="'stall-card-'+index" :name="index" :stall="stall" />
        </div>
        </div>
</template>

<script>
import StallCard from './List-Stall-Card'

export default {
    props: ['stallList'],
    data() {
        return {
            listMatches: {}
        }
    },
    methods: {

    },
    computed: {
        
    },
    components: {
        StallCard
    },
    mounted(){
        
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

.search-view {
    width: 100%;
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