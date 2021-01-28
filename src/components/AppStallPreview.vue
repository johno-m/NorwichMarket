<template>
    <div class="stall-view row" v-if="stall" @mouseover="lineWidth = 100" @mouseout="lineWidth = 0" @click="previewClicked(name)">
        <div class="head">
            <div class="inside" :style="{backgroundImage: 'url(../'+stall.image+')'}"></div>
        </div>
        <div class="mid">
            <h1>{{ name }}<div class="underline" :style="{width: lineWidth+'%'}"></div></h1>
            <p>{{ shortDesc }}...</p>
        </div>
        <div class="foot" @mouseover="footHover = true" @mouseout="footHover = false">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-if="!footHover">
                <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="#F4B840" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stall', 'name'],
    data(){
        return {
            footHover: false,
            lineWidth: 0
        }
    },
    methods: {
        previewClicked(param){
            this.$router.push({ name: 'SingleStall', params: { stallName: param } });
        }
    },
    computed: {
        shortDesc: function(){
            return this.stall.desc.slice(0, 40);
        }
    }
}
</script>

<style scoped>
    .stall-view {
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        letter-spacing: 0.025em;
        padding: 30px 20px;
        box-sizing: border-box;
    }
    .head {
        width: 100px;
        height: 100px;
        padding: 5px;
        background-color: white;
        box-shadow: 0px 0px 5px 5px #00000010;
        border-radius: 50%;
        
    }
    .inside {
        background-size: cover;
        border-radius: 50%;
        height: 100%;
        height: 100%;
    }
    .mid {
        flex: 1;
        margin: 10px 0px 10px 10px;
        padding-left: 10px;
        z-index: 2;
        background-color: white;
        
    }
    .foot {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        margin: 0px 0px;
        font-weight: 700;
        padding: 5px 10px;
        position: relative;
        display: inline-block;
    }
    h2 {
        font-weight: 300;
        font-size: 1em;
    }
    p {
        font-size: 1.1em;
        line-height: 1.4em;
        font-weight: 100;
        margin: 5px 0px;
        padding: 0px 10px;
    }
    .underline {
        height: 3px;
        background-color: #242525;
        transition: 0.5s;
    }
</style>