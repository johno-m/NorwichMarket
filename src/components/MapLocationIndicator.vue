<template>
        <div class="indicator">
            <div class="contents">
                <h1>{{name}}</h1>
                <h2>Row {{row}}, Stall {{stall}}</h2>
                <img src="../assets/map-tag.svg" alt="">
            </div>
        </div>
</template>

<script>
export default {
    props: ['locxy', 'name', 'row', 'stall']

}
</script>

<style scoped>

.indicator {
    background: white;
    width: 40%;
    padding-bottom: 10%;
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.2);
}

.indicator .contents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.indicator img {
    width: 20%;
}

</style>