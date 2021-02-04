<template>
    <div class="stall-card" @click="goToStall">
        
        <img :src="'../'+stall.image" />
        <div class="content">
            <h2>{{name}}</h2>
            <KeywordsList :keywords="stall.labels"/>
        </div>
    </div>
</template>

<script>
import KeywordsList from '../../components/KeywordsList'
export default {
    props: ['stall', 'name'],
    methods: {
        goToStall: function(){
            this.$router.push({path: '/stall/'+this.name})
        }
    },
    components: {
        KeywordsList
    }
}
</script>

<style>
.stall-card {
    margin: 15px 15px 30px 15px;
    overflow: hidden;
    padding: 8px;
    border-radius: 12px;
}

.stall-card:hover h2 {
    /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.084); */
    color: #5dc99c;
}

.stall-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.stall-card h2 {
    font-size: 1.1rem;
    margin: 0.5rem 0px;
}

</style>