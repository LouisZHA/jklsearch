<template>
  <div class="bg-bg">
    <TopNav />
    <Cards class="pt-32"/>
    <Footer />
  </div>
  <!-- <router-link to="/search">Search</router-link> -->
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from '../components/TopNav.vue';
import Banner from '../components/Banner.vue'
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    Banner,
    Cards,
    Footer,
  }
}
</script>