<template>
    <div>
      <h1 class="mt-4 mb-4"><span id="guillemet">»</span> Über uns</h1>
      <p><a href="https://google.com">Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, <strong>sed diam nonumy eirmod tempor invidunt ut labore</strong> et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <em>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</em> <u>no sea takimata sanctus est Lorem ipsum dolor sit amet.</u> </p>
        <div class="d-flex align-items-center flex-column section shadow-sm rounded pb-3">
          <h4 class="my-3">Unsere aktuellen Projekte</h4>
          <the-slider :imgSrc="imgSrc"></the-slider>
      </div>
      <h5 class="my-3">Noch eine Überschrift</h5>
      <ul>
        <li>Lorem ipsum dolor sit amet,</li>
        <li>consetetur sadipscing elitr,</li>
        <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</li>
        <li>sed diam voluptua.</li>
      </ul>
      <ol class="text-end">
        <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</li>
        <li>no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</li>
        <li>consetetur sadipscing elitr,</li>
        <li>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</li>
        <li>sed diam voluptua.</li>
      </ol>
    </div>
</template>

<script>
import TheSlider from '@/components/home/TheSlider.vue';

export default {
    components: {
      TheSlider
    },
    data() {
      return {
        imgSrc: ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg']
      }
    }
}
</script>

<style scoped>
  .carousel {
    width: 500px;
  }

  .section {
    background-color: rgb(248, 249, 250);
  }

 @media screen and (max-width: 600px) {
   .carousel {
    width: 90%;
   }
  }

  a {
    color: #990000;
  }

  a:hover {
    color: grey;
  }

  ol {
    list-style-position: inside;
  }
</style>