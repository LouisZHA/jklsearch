<template>


<nav class="bg-blue-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded flex flex-row">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> -->
      <span class="text-white  self-center text-xl font-semibold ">JKL.IO</span>
  </a>


  <div class="flex md:order-1 ml-10 mr-10 flex-auto" id="searchBar">

    <div class="hidden relative md:block w-full">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>

      <input class="w-full block p-2 pl-10 w-100 text-gray-900 bg-gray-50 rounded-lg border" v-model="keyword" placeholder="Search Keyword" />
    </div>
  </div>

  
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="bg-gray-50 ">
<div v-if="results.length" v-for="item in results" class=" ml-5 mr-20 w-3/5 mt-5  max-w-70  bg-yellow-50 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg px-5 py-2.5 mb-2">
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
  <ResultBox :search_term= result></ResultBox>
  </div>
</div>






<footer class="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">JKL.IO</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>



</template>

<script>
import axios from "axios"
export default {
  // components: {
  //     ResultBox
  //   },
  props: ['search_term'],
  data() {
    return {
      keyword: "",
      results: [],
    };
  },
  watch: {
    keyword(v) {
      console.log(this.search_term)
      this.search(v);
    },
  },
  methods: {
    async search(keyword) {
      // your logic
      console.log("search keyword::", keyword);
      this.searchKey = this.keyword; //
      let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
      
      this.results = result.data.results.slice(0,10);
      console.log(this.results)
    },
  },
};
</script>
