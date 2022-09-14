<template>
  <div class="px-64 pt-44 pb-10">
    <!--<div class="form-control">
    <div class="flex items-center justify-center input-group">
    <input type="text" placeholder="Search…" class="input input-bordered" />
    <button class="btn btn-square bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    </div>
  </div>-->

    <div class="flex items-center justify-center">
      <div style="width:90%;min-width:300px;" class="dropdown">
        <div tabindex="0" class="flex relative">
          <input v-model=searchKey style="outline:none; width:100%;" type="search" placeholder="Just Search…"
            class="mr-2 w-full input input-bordered text-lg" />
          <button style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;border-radius: 10px;"
            class="bg-white flex p-2">
            <span @click="searchKey!=''?jump():1" class="material-icons text-4xl text-muted mt-1">search</span>
          </button>
        </div>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 w-52">
          <a @click="jump" class="text-sm">indigenous people bushfire</a>
          <a class="text-sm">Maxpool 2D</a>
          <a class="text-sm">jevons paradox</a>
          <a class="text-sm">news aggregator</a>
          <a class="text-sm">search with nlp and machine learning</a>
          <a class="text-sm">Serena Williams</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import axios from "axios"

export default {
  methods: {
    jump() {
      this.$router.push({ path: '/search' }),
        this.$router.push({ name: 'Search', params: { searchKey: this.searchKey } })
    },
  },
  data() {
    return {
      searchKey: "",
    }
  },
}
</script>

<style>
input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: searchfield-cancel-button;
  margin-right: 1mm;
  cursor: pointer;
  height: 10px;
  width: 10px;
  content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
  background-size: 10px 10px;
}

input[type=search] {
  -webkit-appearance: none;
  height: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: none;
  border-radius: 10px;
}
</style> 