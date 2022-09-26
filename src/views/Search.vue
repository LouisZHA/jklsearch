<template>
  <nav class="bg-bgNav border-gray-200 px-2 sm:px-4 py-2.5 rounded flex flex-row">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="http://localhost:5173/" class="flex items-center">
              <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> -->
              <span class="text-white  self-center text-xl font-semibold ">JKL.IO</span>
          </a>


          <div class="flex md:order-1 ml-10 mr-10 flex-auto" id="searchBar">

              <div class="hidden relative md:block w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"></path>
                      </svg>
                  </div>

                  <input class="w-full block p-2 pl-10 w-100 text-gray-900 bg-gray-50 rounded-lg border"
                      v-model="keyword" placeholder="Search Keyword" />
              </div>
          </div>


          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <ul
                  class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                      <a href="#"
                          class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                          aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#"
                          class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                  </li>
                  <li>
                      <a href="#"
                          class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

  <div class="bg-gray-50 ">
      <div v-if="results.length" v-for="item in results"
          class=" ml-5 mr-20 w-3/5 mt-5  max-w-70  bg-blue-100 hover:bg-bg focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg px-5 py-2.5 mb-2">
          <!-- {{results}} -->
          <a id="url" class="text-sm">{{item.url}}</a>
          <div>
              <a :href="item.url" class="text-2xl text-green-500 ">{{item.title}}</a>
          </div>
          <a id="descrption">{{item.sum}}</a>
      </div>
  </div>



  <div id="result_box">
      <div v-for="result in results" v-bind:key="result.title" style="position: relative">
          <ResultBox :search_term=result></ResultBox>
      </div>
  </div>

  <!-- footer page slicer  -->
  <div class="left-1/2 translate-x-[-50%] flex flex-raw justify-center items-center bg-bg" style="align-items: center;position: fixed; bottom:0; width: 100%;height: 3rem">
    <button class="right-0 hover:bg-search-button-hover"  @click="prePage">Last Page</button>
    <span v-for="(i,key_index) in pageNum" v-bind:key="key_index" @click="page(i)" :style="{cursor: 'pointer', margin:'10px'}">{{ i }}</span>
    <button class="left-0 hover:bg-search-button-hover"  @click="nextPage">Next Page</button>
  </div>

  <Footer />



</template>
  
<script>
import axios from "axios"
import Footer from "../components/Footer.vue"
export default {
    // components: {
    //     ResultBox
    //   },
    props: ["search_term", "searchKey"],
    data() {
        return {
            keyword: "",
            results: [],

            //data for page 
            totalPage: [], // data for page slicer
            pageSize: 10, // number of result in each page
            pageNum: 1,  // totalPage/pageSize
            dataShow: [], // data for current page present
            currentPage: 0, // first page ID
        };
    },
    watch: {
        keyword(v) {
            console.log(this.search_term);
            this.search(v);
        },
    },
    mounted() {
        if (this.searchKey) {
            this.keyword = this.searchKey;
        }
    },
    methods: {
        nextPage() {
          if (this.currentPage === this.pageNum - 1) return ;
          this.results = this.totalPage[++this.currentPage];
        },

        prePage() {
          if (this.currentPage === 0) return ;
          this.results = this.totalPage[--this.currentPage];
        },

        // click page
        page(i){
          this.currentPage = i
          this.results = this.totalPage[i-1];
        },

        async search(keyword) {
            // your logic
            console.log("search keyword::", keyword);
            let result = await axios.get("https://www.gigablast.com/search?q=" + this.keyword + "&userid=575&code=2061275956&qcountry=au&format=json");
            this.results = result.data.results.slice(0, 9999);
            console.log(this.results);
            console.warn(this.searchKey);

          // --------------------page slider initial-----------------------
            this.pageNum = Math.ceil(this.results.length / this.pageSize) || 1;//计算有多少页数据，默认为1
            // loop for pages data
            for (let i = 0; i < this.pageNum; i++) {
                this.totalPage[i] = this.results.slice(this.pageSize * i, this.pageSize * (i + 1))
            }
            // catch first page data
            this.dataShow = this.totalPage[this.currentPage];
            //---------------------------------------------------------------
            console.log(this.results)
            console.log(this.totalPage)
            console.log(this.results)
        },


    },
    components: { Footer }
};
</script>