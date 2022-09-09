<template>
  <div class="navbar bg-light">
    <div class="py-5 flex-1">
      <button class="px-1 mr-2 flex items-center justify-center">
        <a href="/"><img src="https://www.mojeek.com/logos/logo_cc.svg" width="120" height="30" alt="mojeek"></a>
      </button>
      <div style="width:45%;min-width:300px;" class="dropdown">
        <div tabindex="0" class="flex relative hover:bg-purple">
          <input v-model="searchKey" style="outline: none; width:100%;" type="search"
            placeholder="Search The Web using Mojeek..." class="w-full input input-bordered text-lg" />
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

    <div class="dropdown dropdown-end">
      <button tabindex="0" class="hover:bg-green rounded flex items-center justify-center mt-1">
        <span class="w-10 h-10 hover:text-white material-icons text-4xl text-muted">menu</span>
      </button>
      <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-80 mt-4">
        <div v-for="(item, i) in dropdownItems" :key="i" @click="item.collapse=!item.collapse" class="collapse">
          <input type="checkbox" />
          <div class="flex items-center justify-between collapse-title">
            <p class="text-base text-muted">{{item.name}}</p>
            <span v-if=item.collapse class="material-icons text-muted">expand_less</span>
            <span v-else class="material-icons text-muted">expand_more</span>
          </div>
          <div class="collapse-content">
            <div v-for="(subItem, j) in item.collapseItems" :key="j">
              <!--BUG HERE-->
              <button @click="subItem.visited=true; item.collapse=false" class="flex p-2">
                <span class="p-2 material-icons text-muted">{{subItem.svg}}</span>
                <p v-if=!subItem.visited class="text-blueLink px-3 py-2 hover:underline">{{subItem.name}}</p>
                <p v-else class="text-purple px-3 py-2 hover:underline">{{subItem.name}}</p>
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>

  <!--BUG HERE-->
  <div class="flex bg-light">
    <div style="width:10%"></div>
    <div style="width:38%" class="tabs">
      <a class="tab tab-bordered tab-active">Web</a>
      <a class="tab tab-bordered">Images</a>
      <a class="tab tab-bordered">News</a>
    </div>
    <div>
      <div class="tooltip tooltip-bottom" data-tip="region">
        <button class="">
          <span class="material-icons text-xl text-muted">public</span>
        </button>
      </div>
      <div class="px-5 tooltip tooltip-bottom" data-tip="settings">
        <button class="">
          <span class="material-icons text-xl text-muted">settings</span>
        </button>
      </div>
    </div>
  </div>

  <div class="flex">
    <div style="width:10%">
    </div>
    <p class="py-2 text-muted text-sm">Results 1 to 10 from 2,683,572 in 0.01s</p>
  </div>
  <div class="flex mb-20">
    <div style="width:10%; height: 100%;"></div>
    <div style="width:45%">
      <div v-for="(item, i) in searchResult" :key="i" class="v-flex">
        <a :href=item.url>
          <div class="text-sm breadcrumbs">
            <ul class="text-green">
              <!--BUG HERE-->
              <li><a>{{item.url}}</a></li>
              <li><a>{{item.url}}</a></li>
              <li>...</li>
            </ul>
            <ul class="py-1 text-blueLink text-xl">
              <li><a>{{item.title}}</a></li>
            </ul>
            <a class="text-base">{{item.sum}}</a>
            <ul class="py-1 text-blueLink text-base">
              <li><a>See more results from {{item.url}} »</a></li>
            </ul>
          </div>
        </a>
      </div>
      <div class="flex btn-group">
        <button class="text-xl text-black">Prev</button>
        <p style="width: 1mm"></p>
        <button class="btn bg-white text-purple">1</button>
        <button class="btn bg-white text-black">2</button>
        <button class="btn bg-white text-black">3</button>
        <button class="btn bg-white text-black">4</button>
        <button class="btn bg-white text-black">5</button>
        <p style="width: 1mm"></p>
        <button class="text-xl text-black">Next</button>
      </div>
      <p class="mt-5 mb-1 text-base text-muted">Try elsewhere</p>
      <div class="flex">
        <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Brave</button>
        <button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Ecosia</button>
        <button
          class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Gigablast</button>
        <button
          class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Startpage</button>
      </div>

    </div>
  </div>
  <div class="mt-2 flex bg-light">
    <div style="width:10%; height: 100%;"></div>
    <div style="width:45%;min-width:300px;" class="dropdown">
      <div tabindex="0" class="flex relative hover:bg-purple">
        <input v-model="searchKey" style="outline: none; width:100%;" type="search"
          placeholder="Search The Web using Mojeek..." class="w-full input input-bordered text-lg" />
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
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SearchTopNav from '../components/SearchTopNav.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchBottom from '../components/SearchBottom.vue';
import { computed } from "@vue/reactivity";
import axios from "axios"

export default {
  handle(url) {
    window.location.href = 'url'
  },
  props: ['searchKey'],
  methods: {
    jump() {
      this.$router.push({ path: '/search' })
    },
  },
  data() {
    return {
      tabItems: [
        { name: 'Web', key: 'web', visited: true },
        { name: 'Images', key: 'images', visited: false },
        { name: 'News', key: 'news', visited: false },
      ],
      seletedTab: "web",
      dropdownItems: [
        // svg will be replaced with reak data in the actual implementation
        {
          name: 'Search', key: 'search', collapse: false, collapseItems: [
            { name: 'Web', key: 'web', visited: false, svg: 'search' },
            { name: 'Images', key: 'images', visited: false, svg: 'camera' },
            { name: 'News', key: 'news', visited: false, svg: 'feed' },
          ]
        },
        { name: 'Company', key: 'company', collapse: false, collapseItems: [] },
        { name: 'Products', key: 'products', collapse: false, collapseItems: [] },
        { name: 'Help & Support', key: 'help & support', collapse: false, collapseItems: [] },
        { name: 'Engage', key: 'engage', collapse: false, collapseItems: [] },
      ],
      searchResults: [
        { key: '1', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '2', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '3', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '4', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '5', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '6', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '7', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '8', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '9', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
        { key: '10', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
      ],
      searchResult: []
    }
  },
  async mounted() {
    let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
    console.warn(result.data.results[0]);
    this.searchResult = result.data.results
  },
}
</script>