<template>
<div class="bg-bg w-full h-full fixed" style="z-index:0" ></div>
  <SearchBar  @clicked="onSearchBar"/>

  <div id="result_bar" >
    <div v-for="(result,index) in dataShow" v-bind:key="index" style="position: relative">
      <ResultBox :search_term= result></ResultBox>
    </div>
    <br>
    <br>
  </div>

  <!-- footer page slicer  -->
  <div class="left-1/2 translate-x-[-50%] flex flex-raw justify-center items-center bg-bar rounded-t-lg" style="align-items: center;position: fixed; bottom:0; width: 100%;height: 4rem;">
    <span class="right-0 " style="color: #FBFDFB; border-radius: 5px" @click="prePage"> Pre </span>
    <span v-for="(i,key_index) in pageNum" v-bind:key="key_index" @click="page(i)" :style="{cursor: 'pointer', margin:'10px'}">
      <button v-if="this.currentPage===i " style="color: #FBFDFB; border:2px solid #FBFDFB; border-radius: 5px;padding: 9px;font-weight: bolder">{{ i }}</button>
      <button v-else style="color: #FBFDFB; border:1px solid #FBFDFB; border-radius: 5px;padding: 5px">{{ i }}</button>
    </span>
    <span class="left-0 " style="color: #FBFDFB; border-radius: 5px" @click="nextPage"> Next </span>
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
        results: [], //  results data

        // _____________data for page slider_____________
        totalPage: [], // data for page slicer
        pageSize: 15, // number of result in each page
        pageNum: 1,  // totalPage/pageSize
        dataShow: [], // data for current page present
        currentPage: 1, // first page ID

        }
    },


    methods:
      {
        nextPage() {
          if (this.currentPage === this.pageNum) return ;
          this.dataShow = this.totalPage[++this.currentPage-1];

        },

        prePage() {
          if (this.currentPage === 1) return ;
          this.dataShow = this.totalPage[--this.currentPage];
        },

        // click page
        page(i){
          this.currentPage = i
          this.dataShow = this.totalPage[i-1];
        },


        async onSearchBar(value)
        {
          console.log(value);
          this.searchKey = value; //
          let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");

          this.results = result.data.results;
          // --------------------page slider initial-----------------------
          this.pageNum = Math.ceil(this.results.length / this.pageSize) || 1;//计算有多少页数据，默认为1
          // loop for pages data
          for (let i = 0; i < this.pageNum; i++) {
            this.totalPage[i] = this.results.slice(this.pageSize * i, this.pageSize * (i + 1))
          }
          // catch first page data
          this.dataShow = this.totalPage[0];
          //---------------------------------------------------------------
          console.log(this.results)
          console.log(this.totalPage)
          console.log(this.dataShow)
        }
      }
  }

</script>




<style>

/*
------------------------------------------------result box
*/
#result_bar{
  box-sizing: border-box;
  position: absolute;
  z-index:0;
  width: 100%;
  margin: 140px 0 0 0;
}


</style>


