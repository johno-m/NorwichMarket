<template>
    <div class="map-sidebar">
        <h3>Key</h3>
        <div class="col keys">
            <div class="key row"><div class="dot food"></div>Food</div>
            <div class="key row"><div class="dot produce"></div>Produce</div>
            <div class="key row"><div class="dot clothing"></div>Clothing</div>
            <div class="key row"><div class="dot shop"></div>Shop</div>
            <div class="key row"><div class="dot service"></div>Service</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

h3 {
    text-align: center;
    width: 100%;
    margin: 1rem 0px;
}

.map-sidebar {
    width: 300px;
}


.keys {
    align-items: flex-start;
    padding: 1.6rem;
}

.row {
    justify-content: center;
    align-items: center;
}

.dot {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 15px;
}

.key {

    color: #929292;
    text-transform: uppercase;
    margin: 10px 0px;
    border-radius: 8px;
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
}

.food {
    background: #ed466e;
}

.shop {
    background: #F4B840;
}

.produce {
    background: #08d49d;
}

.clothing {
    background: #128eb8;
}

.service {
    background: #009688;
}

</style>