<template>
  <div class="bg-bg">
    <TopNav />
    <Banner />
    <Search />
    <Cards />
  </div>
  <!-- <router-link to="/search">Search</router-link> -->
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopNav from '../components/TopNav.vue'
import Banner from '../components/Banner.vue'
import Search from '../components/Search.vue'
import Cards from '../components/Cards.vue'

export default {
    name: 'Home',
    components: {
        TopNav,
        Banner,
        Search,
        Cards
    }
}
</script>