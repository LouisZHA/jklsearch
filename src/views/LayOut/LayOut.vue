<template>
    <div class="common-layout">
      <el-container>
        <el-header class="common-header flex-float">
              <div class='flex'>
                  
                <!-- <img class="logo" src="../../assets/logo.png" alt=""> -->
                <h1 class="title">JKL</h1>
  
                 <div class="input_box">
                  <el-input
                      v-model="keyWord"
                      placeholder="Search Key Word"
                      class="input-width-select">
  
                      <template #append>
                          <el-button><el-icon><Search /></el-icon></el-button>
                      </template>
  
                  </el-input>
                      
                  </div>
              </div>
              
        </el-header>
        <el-container>
          <el-aside class="common-aside" width="80px">
              <el-menu
                  background-color="none"
                  text-color="#fff"
                  :router="true"
              >
              </el-menu>
          </el-aside>
          <el-main>
  
              <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  
  </template>
  
  <script>
  
  export default {
      
      setup() {
  
      }
  }
  </script>
  
  <style>
      .el-container{
          height:100vh;
          overflow: hidden;
      }
  
      .common-header{
          background: #4169E1;
          display: flex;
  
      }
      .hearder_wrap{
  
      }
  
      .common-aside{
          background: #efefef;
      }
      .logo{
          width:80px;
      }
      .title{
        color: aliceblue;
      }
      .el-main{
        background:#efefef ;
      }
  
      .input_box{
          width:500px;
          margin-left:40px;
      }
  
  </style>