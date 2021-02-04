<template>
    <section class="opening-times">
        <h2 class="row">
            Opening Times
        </h2>
        <ul>
            <li v-for="(times, day) in openingTimes" :key="day" class="row" ><div class='day'>{{day}}</div><div class='time'>{{times}}</div></li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['openingTimes']
}
</script>

<style scoped>

.opening-times {
    margin-top: 30px;
    box-sizing: border-box;
    grid-area: openingTimes;
}

.opening-times li {
    padding: 3px 0px;
}

.day {
    width: 60px;
    text-transform: uppercase;
    font-size: 0.9em;
}

.time {
    flex: 1;
}

.opening-times h2 {
    padding-bottom: 12px;
    color: #242525;
}

</style>