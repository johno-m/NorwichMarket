<template>
    <div class="head">
        <div class="title">
            <section class="row spread">
                <h1>{{ stallName }}</h1>   
                <span>
                    {{ stallNumbers }}
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </span>             
            </section>
            <StallKeywords :stallLabels="stallLabels" />
        </div>
        <section class="description">{{ desc }}</section>
        <StallDetailsIcons />
        
    </div>
</template>

<script>
import StallDetailsIcons from './StallDetailsIcons'
import StallKeywords from './StallKeywords'
export default {
    props: ['image', 'stallName', 'stallNumbers', 'desc', 'stallLabels'],
    components: {
        StallDetailsIcons,
        StallKeywords
    }
}
</script>

<style scoped>

h1 {
    font-size: 2rem;
}

.head-height {
    height: 280px;
    transition: 1s;
}

.head {
    display: flex;
    flex-direction: column;
    grid-area: description;
    margin-right: 30px;
}

.left {
    flex: 3;
    margin-right: 40px;
}

.right {
    flex: 2;
}

.right img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 8px;
}

.title {
    
}

.description {
    grid-area: description;
    padding-right: 20px;
    line-height: 1.5rem;
    letter-spacing: 0.02rem;
    flex: 1;
}




</style>