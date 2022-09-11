<template>

    <div id= "search_box"  class = "rounded-lg">
        <div id = "logo">
          JKL.IO
        </div>
        <div class="bg-search-bar border-3
        border-search-bar-stroke text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <button class="right-0 hover:bg-green" style="width: 5%" @click="postQuery">a</button>
          <input  v-model="searchKey" type="search" id="input_textarea" style="width: 95%;outline:none"  placeholder="Search" required>
        </div>
    </div>
    
</template>
<style>
    #search_box{
        box-sizing: border-box;
        position: absolute;
        width: 90%;
        height: 115px;
        margin: 50px 5% 0 5%;
        
      }
      
      #logo{
      
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        /* or 36px */
      
        align-items: center;
      
        color: #000000;
      }
    </style>