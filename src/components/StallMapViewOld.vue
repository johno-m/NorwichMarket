<template>
    <section class="map-view">
        <h2>Where is the Stall?</h2>
        <MapView :selectedStall="selectedStall" />
    </section>
</template>

<script>
import MapView from './StallMap'
export default {
    props: ['selectedStall'],
    components: {
        MapView
    }
}
</script>

<style scoped>

.map-view {
    grid-area: map
}

</style>