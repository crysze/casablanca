<template>
  <the-navigation></the-navigation>
  <main>
    <div id="router-view">
      <router-view></router-view>
      <button v-if="pageScrolled" @click="scrollToTop" type="button" class="btn btn-primary btn-floating btn-lg rounded-circle" id="jump-to-top">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </button>
    </div>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  title: 'Code Loop',
  components: {
    TheNavigation
  },
  data() {
    return {
      pageScrolled: false,
    }
  },
  methods: {
    isScrolled() {
      if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.pageScrolled = true;
      } else {
        this.pageScrolled = false;
      }
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.isScrolled);
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }

  #router-view {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .jumbotron {
      background-color: rgb(248, 249, 250);
      width: 75%;
  }

  .jumbotron:hover {
      background-color: white;
  }

  #guillemet {
      color: #990000;
  }

  #jump-to-top {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    background-color: #990000;
    border-color: #990000;
  }

</style>