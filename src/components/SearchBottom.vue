<template>
  <div class="mt-2 flex bg-light">
    <div style="width:10%; height: 100%;"></div>
    <div class="flex-1">
      <div class="flex btn-group">
      <button class="text-xl text-black">Prev</button>
      <p style="width: 1mm"></p>
      <button class="btn bg-white text-purple">1</button>
      <button class="btn bg-white text-black">2</button>
      <button class="btn bg-white text-black">3</button>
      <button class="btn bg-white text-black">4</button>
      <button class="btn bg-white text-black">5</button>
      <p style="width: 1mm"></p>
      <button class="text-xl text-black">Next</button>
    </div>
    <p class="mt-5 mb-1 text-base text-muted">Try elsewhere</p>
    <div class="flex">
      <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Brave</button>
      <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Ecosia</button>
      <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Gigablast</button>
      <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Startpage</button>
    </div>
    <SearchBox style="width: 40%;"/>
  </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue';
export default {
    methods: {
        jump() {
            this.$router.push({ path: "/search" });
        },
    },
    data() {
        return {
            seletedTab: "web",
        };
    },
    components: { SearchBox }
}
</script>