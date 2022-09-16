<template>
  <div>
    <input v-model="keyword" />
    {{ keyword }}
  </div>

  <div id="result_box">
    <div v-for="result in results" v-bind:key="result.title" style="position: relative">
      <ResultBox :search_term= result></ResultBox>
    </div>
  </div>
</template>

<script>
import ResultBox from "./components/ResultBox.vue"
import axios from "axios"
export default {
  components: {
      ResultBox
    },
  data() {
    return {
      keyword: "",
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
      this.searchKey = keyword; //
      let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
      
      this.results = result.data.results.slice(0,60);
      console.log(this.results)
    },
  },
};
</script>

<style>

#result_box{
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  height: 80%;
  margin: 150px 5% 0 5%;
}

</style>