<template>
    <div :style="{ backgroundImage: 'url(../'+imageLink+')' }"></div>
</template>

<script>
export default {
    props: ['imageLink']
}
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
</style>