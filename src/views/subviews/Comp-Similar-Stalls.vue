<template>
    <section class="similar-section">
        <h2>Similar Stalls</h2>
        <div class="similar-wrapper" v-if="similarStalls">
            <div class="similar-stall" v-for="(stall, index) in similarStalls" :key="`similar-stall-${index}`" @click="changePage(index)" tabindex="0">
                <header>
                    <img class="similar-stall-image" :src="`../${stall.stall.image}`">
                </header>
                <main>
                    <div class="desc">
                        {{index}}
                    </div>
                    <div class="matches">
                        <p><b>Tags:</b> <span v-for="(match, key) in stall.matches" :key="`match-${key}`">{{match}}</span></p>
                    </div>
                </main>
            </div>
        </div>
        <div class="similar-wrapper" v-else>
            <h3>Loading similar stalls...</h3>
        </div>

    </section>
</template>

<script>
export default {
    props: ['similarStalls'],
    data(){
        return {

        }
    },
    methods: {
        changePage(target){
            this.$router.push({ name: 'SingleStall', params: { stallName: target } });
        }
    }
}
</script>

<style scoped>

/* Similar Section */

.similar-wrapper {
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
}

.similar-section {
    grid-area: similar;
    margin-top: 30px;
}

.similar-section .container {
    
}

.desc {
    font-size: 1rem;
    font-weight: bold;
}

.matches {
    font-size: 0.8rem;
    text-transform: capitalize;
}

main {
    padding: 1rem;
}

.similar-stall {
    margin: 10px;
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
}

.similar-stall:hover {
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.1);
}

.similar-stall:focus{
    border: none;
    outline: none;
    box-shadow: 0px 0px 10px 6px rgba(8,212,157,0.5);
}



.similar-stall-image {
    width: 100%;
    height: 130px;
    object-fit: cover;
    object-position: center;
}

</style>