<template>
    <section class="sidebar-wrapper" ref="sidebarWrapper">        
        <div class="sidebar" :style="{ top: positionTop+'px' }">
            <div :class="sidebarClass">NORWICH<br>MARKET</div>
            <h2>Filter By</h2>
            <ul>
                <li v-for="(type, index) in this.$store.state.types" :key="index+'-type'"><a :href="'#category-'+type">{{type}}</a></li>
            </ul>
            <SearchBox />
        </div>
    </section>
</template>

<script>
import SearchBox from './SearchBox'

export default {
    data() {
        return {
            scrollPoint: 0,
            positionTop: 20,
            scrollEvent: null,
            sidebarClass: "title"
        }
    },
    methods: {
        scroll(){
            window.onscroll = () => {
                let here = this;
                // Clear our timeout throughout the scroll
                this.scrollPoint = document.documentElement.scrollTop
                if(document.documentElement.scrollTop > here.$refs.sidebarWrapper.offsetTop){
                    // here.positionTop = 20
                    here.sidebarClass = "title show"
                    // here.positionTop = document.documentElement.scrollTop - here.$refs.sidebarWrapper.offsetTop
                } else {
                    // here.positionTop = 0
                    here.sidebarClass = "title"
                }
            };
        }
    },
    mounted(){
        this.scroll();
    },
    components: {
        SearchBox
    }
}
</script>

<style scoped>

.title {
    margin-top: -130px;
    height: 135px;
    font-size: 3rem;
    font-weight: 900;
    transition: 0.4s;
    opacity: 0;
}

.show {
    display: block;
    opacity: 1;
}

h2 {
    color: #252525;
    font-size: 1.6rem;
    /* font-weight: 800; */
    text-transform: capitalize;
    padding: 0px 0px 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e1e1e1;
}

li {
    padding: 8px 0px 8px 20px ;
    text-transform: capitalize;
}

.sidebar-wrapper {
    position: relative;
    flex: 1;
    max-width: 300px;
}

.sidebar {
    position: -webkit-sticky;
    position: sticky;
    width: 270px;
    margin-right: 30px;
    /* transition: 1s; */
}

a:link, a:visited {
    color: inherit;
    text-decoration: none;
}

</style>
