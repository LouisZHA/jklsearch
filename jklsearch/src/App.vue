<template>

  <SearchBar  @clicked="onSearchBar"/>
  <div id="result_box">
    <div v-for="result in results" v-bind:key="result.title" style="position: relative">
      <ResultBox :search_term= result></ResultBox>
    </div>
  </div>
  <!-- <SERP_Footer /> -->

</template>
<script>
  import SearchBar from "./components/SearchBar.vue"
  //import SERP_Footer from "./components/SERP_Footer.vue"
  import ResultBox from "./components/ResultBox.vue"
  import axios from "axios"
  export default {
    name: "App",
    components: {
      SearchBar,
      ResultBox
    },
    data() {
      return {
        searchKey: "",
        results: []
        }
    },

    methods:
      {
        async onSearchBar(value)
        {
          console.log(value);
          this.searchKey = value; // s
          let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");

          this.results = result.data.results.slice(0,60);
          console.log(this.results)
        }
      }
  }

</script>




<style>

/*
------------------------------------------------result box
*/
#result_box{
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  height: 80%;
  margin: 150px 5% 0 5%;
}


</style>


