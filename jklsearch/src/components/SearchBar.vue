<template>

    <div id= "search_box"  class = "rounded-b-[2rem] bg-bar">
        <div id = "logo" >
          JKL.IO
        </div>
        <div class="bg-search-box border-3
        border-search-bar-stroke text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <span class="absolute left-3 flex items-center" @click="postQuery">
            <svg class="h-5 w-5 fill-black"
                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
              <path
                  d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
              </path>
            </svg>
          </span>
          <input  class="ml-10" v-model="searchKey" type="search" id="input_textarea" @keyup.enter="postQuery"
          style="width: 90%;outline:none"  placeholder="Search" required>
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
        box-shadow: 3px 4px rgba(0, 0, 0, 0.8);
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
      
        color: #FBFDFB;
      }
    </style>