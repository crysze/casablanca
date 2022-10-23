<template>
    <div>
        <h1 class="mt-4 mb-4"><span id="guillemet">»</span> News</h1>
        <div v-for="heading in headings" :key="heading" class="jumbotron border rounded p-4 my-4 mx-auto w-75">
            <h3>{{ heading }}</h3>
            <p class="lead">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <hr class="my-4">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <p class="lead">
                <router-link to="/article" class="btn btn-primary btn-more btn-sm" href="#" role="button">Weiterlesen</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headings: ['Beitrag 1', 'Ein weiterer Beitrag', 'Ein dritter Beitrag', '4. Beitrag']
            }
        }
    }
</script>

<style scoped>

    .btn-more {
        background-color: #990000;
        border-color: white;
    }

    .btn-more:hover {
        background-color: grey;
        border-color: white;
    }

    @media screen and (max-width: 600px) {
        .jumbotron {
            width: 90%;
        }
    }
</style>