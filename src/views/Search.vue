<template>
  <div class="flex-1">
    <SearchTopNav :searchKey = "searchKey"/>
    <SearchResults :searchResult = "searchResult"/>
    <SearchBottom />
    <Footer />
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SearchTopNav from '../components/SearchTopNav.vue'
import SearchResults from '../components/SearchResults.vue'
import SearchBottom from '../components/SearchBottom.vue';
import Footer from '../components/Footer.vue';
import axios from "axios"

export default {
  name: "SERP",
  components: {
    SearchTopNav,
    SearchResults,
    SearchBottom,
    Footer,
  },
  handle(url) {
    window.location.href = 'url'
  },
  props: ['searchKey'],
  methods: {
    pass() {
      this.$router.push({ name: 'SearchResults', params: { searchResult: this.searchResult} });
      this.$router.push({ name: 'SearchTopNav', params: { searchKey: this.searchKey} });
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
      searchResult: [],
    }
  },
  async mounted() {
    let result = await axios.get("https://www.gigablast.com/search?q=" + this.searchKey + "&userid=575&code=2061275956&qcountry=au&format=json");
    this.searchResult = result.data.results
  },
}
</script>