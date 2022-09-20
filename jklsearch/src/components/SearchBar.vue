<template>

    <div id= "search_box"  class = "rounded-b-[2rem] bg-bg">
        <div id = "logo" >
          JKL.IO
        </div>
        <div class="bg-search-bar border-3
        border-search-bar-stroke text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <button class="right-0 hover:bg-search-button-hover" style="width: 10%" @click="postQuery">Go</button>
          <input  v-model="searchKey" type="search" id="input_textarea" style="width: 90%;outline:none"  placeholder="Search" required>
        </div>
    </div>
    
</template>
<script>
export default {

  data(){
    return{
      searchKey:''
    }
  },

  methods:{
    postQuery(){

      this.$emit('clicked',this.searchKey)
    }
  }
}
</script>
<style>
    #search_box{
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        height: 8rem;
        z-index: 100;
      }
      
      #logo{
        margin-top: 1rem;
        text-align: center;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 150%;
        /* or 36px */
      
        align-items: center;
      
        color: #000000;
      }
    </style>