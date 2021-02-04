<template>
    <div class="keywords-list">
        <span v-for="(word, index) in keywords" :key="index">{{word}}</span>
    </div>
</template>

<script>


export default {
    props: ['keywords']
}
</script>

<style>

.keywords-list {
    font-size: 0.85rem;
    color: #464646;
}

</style>