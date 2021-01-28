<template>
    <div id="overlay">
        <div class="listing">
            <h1>
                {{ stall.name }}
            </h1>
        </div>
        <div class="infobar" :style="{backgroundColor: stall.info.color}">{{ stall.info.type }}</div>
        
    </div>
</template>

<script>
export default {
    props: ['stall'],
    created(){
        console.log(this.stall);
    }
}
</script>

<style scoped>
    #overlay {
        width: 80%;
        background-color: white;
        position: absolute;
        top: 200px;
        left: 10%;
        box-shadow: 0px 20px 20px 0px #00000030;
        
        box-sizing: border-box;
    }
    h1 {
        font-size: 1.8em;
        letter-spacing: 0.02em;
        font-weight: 700;
    }
    .inner {
        padding: 20px;
    }
    .infobar {
        color: white;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8em;
        text-align: right;
        padding-right: 20px;
    }
</style>