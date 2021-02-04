<template>
    <div id="app" class="shop">
        <Header size="mini"/>
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>

import { bus } from './main';
import Footer from './components/Footer'
import Header from './components/Header'

export default {
    name: 'app',
    data () {
        return {

        }
    },
    created(){
        bus.loadMarketInfo()
        bus.$on("changeFilter", (filter) => {
            this.classList = filter;
        });
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style>

@import './css/main.css'

</style>
