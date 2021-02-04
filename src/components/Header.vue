<template>
    <section :id="'header-'+size">
        <h1>Norwich Market</h1>
    </section>
</template>

<script>
export default {
    computed: {
        size: function(){
            console.log(this.$route.name)
            if(this.$route.name === 'SingleStall'){
                return 'mini'
            } else {
                return 'large'
            }
        }
    }
}
</script>

<style scoped>
    #header-large {
        width: 100%;
        max-width: 1500px;
        margin: auto;
        padding: 10px 30px;
    }

    #header-mini {
        width: 100%;
        margin: auto;
        padding: 10px 20px;
        border-bottom: 1px solid #e1e1e1;
    }

    #header-large h1 {
        font-size: 6rem;
        text-transform: uppercase;
        font-weight: 800;
    }

    #header-mini h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
    }
</style>