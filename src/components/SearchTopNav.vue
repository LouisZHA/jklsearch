<template>
  <div class="flex flex-col">
    <div style="position:fixed;z-index: 999; height: 10%; max-height: 20rem;"
      class="flex top-0 navbar bg-bgNav rounded-b-3xl">
      <div style="width: 25%;" class="flex items-center">
        <Icon />
      </div>
      <div style="width: 55%;" class="dropdown">
        <SearchBox :searchKey='searchKey' />
      </div>
      <div style="width: 10%;" class="flex justify-end flex-1 px-2">
        <Dropdown />
      </div>
    </div>

    <div class="flex">
      <div style="width: 25%;"></div>
      <div style="width: 55%;" class="flex mt-28">
        <div class="justify start tabs">
          <a class="tab tab-bordered tab-active">Web</a>
          <a class="tab tab-bordered">Images</a>
          <a class="tab tab-bordered">News</a>
        </div>
        <div style="width: 10%;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import Icon from './Icon.vue';
import Dropdown from './Dropdown.vue';
export default {
  handle(url) {
    window.location.href = 'url'
  },
  props: ['searchKey'],
  data() {
    return {
      tabItems: [
        { name: "Docs", sup: "", key: "docs", visited: true },
        { name: "Examples", sup: "", key: "examples", visited: false },
        { name: "Blog", sup: "", key: "Blog", visited: false },
      ],
      dropdownItems: [
        // svg will be replaced with reak data in the actual implementation
        {
          name: "Search",
          key: "search",
          collapse: false,
          collapseItems: [
            { name: "Web", key: "web", visited: false, svg: "search" },
            { name: "Images", key: "images", visited: false, svg: "camera" },
            { name: "News", key: "news", visited: false, svg: "feed" },
          ]
        },
        { name: "Company", key: "company", collapse: false, collapseItems: [] },
        { name: "Products", key: "products", collapse: false, collapseItems: [] },
        { name: "Help & Support", key: "help & support", collapse: false, collapseItems: [] },
        { name: "Engage", key: "engage", collapse: false, collapseItems: [] },
      ],
      icon: { width: "32", height: "20", viewBox: "0 0 32 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", d: "M8 7.09627C9.06667 2.82961 11.7333 0.696274 16 0.696274C22.4 0.696274 23.2 5.49627 26.4 6.29627C28.5333 6.82961 30.4 6.02961 32 3.89627C30.9333 8.16294 28.2667 10.2963 24 10.2963C17.6 10.2963 16.8 5.49627 13.6 4.69627C11.4667 4.16294 9.6 4.96294 8 7.09627ZM0 16.6963C1.06667 12.4296 3.73333 10.2963 8 10.2963C14.4 10.2963 15.2 15.0963 18.4 15.8963C20.5333 16.4296 22.4 15.6296 24 13.4963C22.9333 17.7629 20.2667 19.8963 16 19.8963C9.6 19.8963 8.8 15.0963 5.6 14.2963C3.46667 13.7629 1.6 14.5629 0 16.6963Z", filll: "white" }
    };
  },
  components: { SearchBox, Icon, Dropdown },
}
</script>
<style>
div.navHide {
  width: 100%;
}

@media screen and (max-width: 1200px) {
  div.navHide {
    display: none;
  }
}
</style> 
