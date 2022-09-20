<template>

  <SearchBar  @clicked="onSearchBar"/>
  <div id="result_box" >
    <div v-for="(result,index) in results" v-bind:key="index" style="position: relative">
      <ResultBox :search_term= result></ResultBox>
    </div>
  </div>
  <!-- footer page slicer  -->
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
        results: [],
        // data for page slider
        totalPage: [], // data for page slicer
        pageSize: 10, // number of result in each page
        pageNum: 1,  // totalPage/pageSize
        dataShow: [], // data for current page present
        currentPage: 0, // first page ID
        }
    },
    // created(){
    //   this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;//计算有多少页数据，默认为1
    //
    //   // 循环页面
    //   for (let i = 0; i < this.pageNum; i++) {
    //     // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
    //     // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
    //     this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
    //   }
    //
    //   // catch first page data
    //   this.dataShow = this.totalPage[this.currentPage];
    // },

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
  width: 100%;
  height: 80%;
  margin: 140px 0 0 0;
}


</style>


