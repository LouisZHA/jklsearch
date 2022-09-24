<template>
  <div class="flex-1">
    <div class="absolute inset-0 z-0" @click="modal = false"></div>
    <div class="flex relative">
      <input v-model=searchKey autocomplete="off" @input="filter" @focus="modal = true"
        style="outline:none; width:100%;" type="search" placeholder="Just Search…"
        class="mr-2 w-full input input-bordered text-lg rounded-t-xl" />
      <button style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;border-radius: 10px;" class="bg-white flex p-2">
        <span @click="searchKey!=''?jump():1" class="material-icons text-4xl text-muted mt-1">search</span>
      </button>

    </div>
    <div v-if="filtered && modal" tabindex="0" style="outline:none; width:50%;"
      class="rounded-xl dropdown-content menu p-2 shadow bg-bg">
      <ul class="text-white">
        <div v-for="(item,i) in filtered" :key="i">
          <li v-if="i<5" class="py-2 border-b cursor-pointer" @click="set(item)">
          {{item}}
        </li>
        </div>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      searchKey: '',
      modal: false,
      inputs: ["anu email", "anu library", "ANU", "anu timetable", "ANU sport", "anu wattle", "anu hours", "anu calendar", "anu isis", "anu jobs", "anu timetable 2022", "anu term dates", "anu timetable viewer", "anu travel form", "anu thrive", "anu tax clinic", "anu templates", "anu travel insurance"],
      history: ["Florida", "Serena Williams", "NLP"],
      filtered: []
    }
  },
  mounted() {
    this.filter();
  },
  methods: {
    jump() {
      this.$router.push({ path: '/search' }),
        this.$router.push({ name: 'Search', params: { searchKey: this.searchKey } })
    },
    filter() {
      if (this.searchKey.length == 0) {
        this.filtered = this.history;
      } else {
        this.filtered = this.inputs.filter(searchKey => {
          return searchKey.toLowerCase().startsWith(this.searchKey.toLowerCase());
        });
      }

    },
    set(f) {
      this.searchKey = f;
      this.modal = false;
    }
  },
  watch: {
    searchKey() {
      this.filter();
    }
  }
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