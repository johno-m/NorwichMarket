<template>
    <section class="keywords row">
        <button class="keyword" v-for="label in stallLabels" :key="label">{{ label }}</button>
    </section>
</template>

<script>
export default {
    props: ['stallLabels']
}
</script>

<style scoped>

.keywords {
    font-size: 0.8em;
    color: #666666;
    align-items: center;
    justify-content: left;
}

.keyword {
    font-weight: bold;
    padding: 0px 12px 8px 0px;
    color: #666666;
}

.keyword:hover {
    color: #cccccc;
}

.keyword::selection {
    color: #cccccc;
}

</style>