<template>
    <div id="app" class="shop">
        <router-view></router-view>
    </div>
</template>

<script>

import { bus } from './main';

export default {
    name: 'app',
    data () {
        return {
            classList: 'food'
        }
    },
    created(){
        bus.$on("changeFilter", (filter) => {
            this.classList = filter;
        });
    }
}
</script>

<style>

</style>
