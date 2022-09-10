<template>
  
  <SearchBar />
  <div id="result_box">
    <ResultBox />
  </div>
  <!-- <SERP_Footer /> -->

</template>
<script>

  import SearchBar from "./components/SearchBar.vue"
  //import SERP_Footer from "./components/SERP_Footer.vue"
  import ResultBox from "./components/ResultBox.vue"

  
  export default{
    name: "App",
    components: {
    SearchBar,
    ResultBox
},
  }
</script>




<style>


/*
------------------------------------------------result box
*/
#result_box{
  box-sizing: border-box;
  position: absolute;
  width: 95%;
  height: 80%;
  margin: 150px 2.5% 0 2.5%;
}


</style>


