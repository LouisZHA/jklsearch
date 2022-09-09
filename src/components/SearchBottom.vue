<template>
<div class="mt-2 flex bg-light">
    <div style="width:10%; height: 100%;"></div>
    <div style="width:45%;min-width:300px;" class="dropdown">
    <div tabindex="0" class="flex relative hover:bg-purple">
      <input v-model="searchKey" style="outline: none; width:100%;" type="search" placeholder="Search The Web using Mojeek..." class="w-full input input-bordered text-lg" />
      <button class="flex absolute right-2 top-3 hover:bg-green">
        <span @click="jump" class="material-icons text-2xl text-muted">search</span>
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
</template>

<script>
export default {
  methods: {
    jump(){
    this.$router.push({path: '/search'})
    },
  },
  data() {
        return {
            tabItems: [
                {name: 'Web', key: 'web', visited: true},
                {name: 'Images', key: 'images', visited: false},
                {name: 'News', key: 'news', visited: false},
            ],
            seletedTab: "web",
            dropdownItems: [
                // svg will be replaced with reak data in the actual implementation
                {name: 'Search', key: 'search', collapse: false, collapseItems:[
                    {name: 'Web', key: 'web', visited: false, svg: 'search'},
                    {name: 'Images', key: 'images', visited: false, svg:'camera'},
                    {name: 'News', key: 'news', visited: false, svg: 'feed'},
                ]},
                {name: 'Company', key: 'company', collapse: false, collapseItems:[]},
                {name: 'Products', key: 'products', collapse: false, collapseItems:[]},
                {name: 'Help & Support', key: 'help & support', collapse: false, collapseItems:[]},
                {name: 'Engage', key: 'engage', collapse: false, collapseItems:[]},
            ],
        }
    }
}
</script>