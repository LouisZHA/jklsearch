<template>
    <div class="common-layout">
      <el-container>
        <el-header class="common-header flex-float">
            <div class='flex'>
                  
                <!-- <img class="logo" src="../../assets/logo.png" alt=""> -->
                <h1 class="logo">JKL</h1>
  
                 
                 
                  <div class="input_box">
                      <input class="input_box" v-model="keyword" placeholder="Search Keyword" />
                      
                  </div>

            </div>
              
        </el-header>
        <el-container>
          <el-aside class="common-aside" width="70px">
              <el-menu
                  background-color="none"
                  text-color="black"
                  :router="true"
              >
              </el-menu>
          </el-aside>
          <el-main>
  
              <router-view></router-view>

            <div id="result_box">
                <div v-for="result in results" v-bind:key="result.title" style="position: relative">
                <ResultBox :search_term= result></ResultBox>
                </div>
            </div>
              
          </el-main>
        </el-container>
      </el-container>
    </div>
  
</template>
  

<script>
import ResultBox from "./../../components/ResultBox.vue"
import axios from "axios"
export default {
  components: {
      ResultBox
    },
  data() {
    return {
      keyword: "",
      results: [],
    };
  },
  watch: {
    keyword(v) {
      this.search(v);
    },
  },
  methods: {
    async search(keyword) {
      // your logic
      console.log("search keyword::", keyword);
      this.searchKey = this.keyword; //
      let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
      
      this.results = result.data.results.slice(0,60);
      console.log(this.results)
    },
  },
};
</script>

  
<style>
      .el-container{
          height:100vh;
          overflow: hidden;
      }
  
      .common-header{
          
          background: #4D7298;
          display: flex;
  
      }
      
  
      .common-aside{
          background: #FFFBFA;
      }
      .logo{
          width:20px;
          color: aliceblue;
          font-size: 40px;
      }
      .title{
        color: #000080;
      }
      .el-main{
        background:#FFFBFA ;
      }
  
      .input_box{
          width:600px;
          margin-left:20px;
          padding: 10px;
      }
  
  </style>