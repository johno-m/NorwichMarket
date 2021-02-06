<template>
    <div class="toolbar">
        <button @click="close" id="close-btn">
            <!-- CLOSE BUTTON -->
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        <div class="tagline">GO BACK</div>
        </button>

        <section>
            <a href="#map"><button>
                <!-- MAP BUTTON -->
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-map" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                </svg>
                <div class="tagline">MAP</div>
            </button></a>
            <button>
                <!-- SHARE BUTTON -->
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 4.354a.5.5 0 0 0 .708 0L8 1.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
                    <path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5z"/>
                    <path fill-rule="evenodd" d="M2.5 14A1.5 1.5 0 0 0 4 15.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5a.5.5 0 0 0 0 1H12a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 0 0-1H4A1.5 1.5 0 0 0 2.5 7v7z"/>
                </svg>
                <div class="tagline">SHARE</div>
            </button>
            <button @mouseover="heartHover = true" @mouseout="heartHover = false">
                <!-- LIKE BUTTON -->
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-if="!heartHover">
                    <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="rgb(244,184,64)" xmlns="http://www.w3.org/2000/svg" v-else>
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                <div class="tagline">LIKE</div>
            </button>
        </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            heartHover: false
        }
    },
    methods: {
        close(){
            this.$router.push({name: 'ListOfStalls'});
        }
    }
}
</script>

<style scoped>

.toolbar {
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: toolbar;
}

.toolbar section {
    display: flex;
    align-items: center;
}

.toolbar button {
    position: relative;
}

.toolbar button .tagline {
    opacity: 0;
    transition: 0.5s;
    font-weight: 700;
}

.toolbar button:hover > .tagline {
    opacity: 1;
}

#close-btn {
    text-align: left;
}

#close-btn:hover + .close-msg {
    opacity: 1;
}



</style>