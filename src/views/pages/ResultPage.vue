<template>
    <!--面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Sports</el-breadcrumb-item> 
            <el-breadcrumb-item>Politics</el-breadcrumb-item> 
            <el-breadcrumb-item>Technology</el-breadcrumb-item> 
            <el-breadcrumb-item>Science</el-breadcrumb-item> 
            <el-breadcrumb-item>Economy</el-breadcrumb-item> 

        </el-breadcrumb>

        <!-- <div>
            <input v-model="keyword" />
            {{ keyword }}
        </div>

        <div id="result_box">
            <div v-for="result in results" v-bind:key="result.title" style="position: relative">
            <ResultBox :search_term= result></ResultBox>
            </div>
        </div> -->

  
        
</template>

// <script>
// import ResultBox from "./../../components/ResultBox.vue"
// // import LayOut from "./../LayOut/LayOut.vue"
// import axios from "axios"
// export default {
//   components: {
//       ResultBox
//     },
//   data() {
//     return {
//       keyword: "",
//     };
//   },
//   watch: {
//     keyword(v) {
//       this.search(v);
//     },
//   },
//   methods: {
//     async search(keyword) {
//       // your logic
//       console.log("search keyword::", keyword);
//       this.searchKey = this.keyword; //
//       let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
      
//       this.results = result.data.results.slice(0,60);
//       console.log(this.results)
//     },
//   },
// };
// </script>



<style scoped>

.resultTable{
    margin-top: 10px;

}
.resultList{

  width: 70%;
  padding: 10px;
  /* border: 1px solid gray; */
  margin: 0;
  
}

.line{

    width: 80%;
    left: 0px;
}

.title{
    color:#000080;

}

.url{
    font-size: 15px;

}

#result_box{
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  height: 80%;
  margin: 150px 5% 0 5%;
}



</style>