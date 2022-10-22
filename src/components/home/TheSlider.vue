<template>
    <div id="carouselExampleIndicators" class="carousel slide shadow" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(img, index) in imgSrc" :key="index" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" class="active"></li>
        </ol>
        <div class="carousel-inner rounded">
            <div v-for="(img, index) in imgSrc" :key="index" :class="{'carousel-item': true, 'active': index === 0 ? true : false}">
                <img class="d-block img-fluid" :src="require('@/assets/' + img)">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Vorheriges</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Nächstes</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>