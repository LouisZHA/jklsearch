<template>

    <div id= "search_box"  class = "rounded-lg">
        <div id = "logo">
          JKL.IO
        </div>
        <input type="text" id="input_textarea" class="bg-search-bar border-3 
        border-search-bar-stroke text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
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