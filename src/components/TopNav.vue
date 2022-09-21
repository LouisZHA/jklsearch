<template>
    <div style="position:fixed;z-index: 999; height: 10%; max-height: 20rem;"
        class="flex top-0 navbar bg-bgNav rounded-b-3xl">
        <div style="width: 30%;" class="flex items-center">
            <button class="p-4 flex items-center justify-center">
                <!-- <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 7.09627C9.06667 2.82961 11.7333 0.696274 16 0.696274C22.4 0.696274 23.2 5.49627 26.4 6.29627C28.5333 6.82961 30.4 6.02961 32 3.89627C30.9333 8.16294 28.2667 10.2963 24 10.2963C17.6 10.2963 16.8 5.49627 13.6 4.69627C11.4667 4.16294 9.6 4.96294 8 7.09627ZM0 16.6963C1.06667 12.4296 3.73333 10.2963 8 10.2963C14.4 10.2963 15.2 15.0963 18.4 15.8963C20.5333 16.4296 22.4 15.6296 24 13.4963C22.9333 17.7629 20.2667 19.8963 16 19.8963C9.6 19.8963 8.8 15.0963 5.6 14.2963C3.46667 13.7629 1.6 14.5629 0 16.6963Z"
                        fill="white" />
                </svg>-->
                <p class="text-white font-bold text-3xl">JKL.IO</p>
            </button>
            <div class="navHide flex flex-1 justify-end tabs">
                <div v-for="(item, i) in tabItems" :key="i" class="flex">
                    <button class="text-white mr-6">
                        {{item.name}}
                    </button>
                </div>
            </div>
        </div>
        <div style="width: 55%;" class="dropdown">
            <div tabindex="0" class="flex relative">
                <input v-model=searchKey style="outline:none; width:100%;" type="search" placeholder="Just Search…"
                    class="mr-2 w-full input input-bordered text-lg" />
                <button style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;border-radius: 10px;"
                    class="bg-white flex p-2">
                    <span @click="searchKey!=''?jump():1" class="material-icons text-4xl text-muted mt-1">search</span>
                </button>
            </div>
            <ul style="width:90%" tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100">
                <a @click="jump" class="text-sm">indigenous people bushfire</a>
                <a class="text-sm">Maxpool 2D</a>
                <a class="text-sm">jevons paradox</a>
                <a class="text-sm">news aggregator</a>
                <a class="text-sm">search with nlp and machine learning</a>
                <a class="text-sm">Serena Williams</a>
            </ul>
        </div>
        <div style="width: 10%;" class="flex justify-end flex-1 px-2">
            <div class="dropdown dropdown-end">
                <button tabindex="0" class="rounded flex items-center justify-center mt-1">
                    <span class="w-10 h-10 text-white material-icons text-4xl">menu</span>
                </button>
                <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-80 mt-4">
                    <div v-for="(item, i) in dropdownItems" :key="i" @click="item.collapse=!item.collapse"
                        class="collapse">
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
                                    <p v-if=!subItem.visited class="text-blueLink px-3 py-2 hover:underline">
                                        {{subItem.name}}</p>
                                    <p v-else class="text-purple px-3 py-2 hover:underline">{{subItem.name}}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '../views/Search.vue';
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
    components: { Search }
}
</script>

<!--
multi-level dropdown
<style>
.dropdown:hover > .dropdown-content {
	display: block;
}
</style>

<div class="dropdown inline-block relative">
	<button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
		<span>Dropdown ?</span>
	</button>
	<ul class="dropdown-content absolute hidden text-gray-700 pt-1">
		<li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
      	<li class="dropdown">
          <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3 ?</a>
          	<ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
          		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-1</a></li>
              	<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-2</a></li>
            </ul>
      	</li>
		<li><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 4</a></li>
	</ul>
</div>
-->

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
    min-width: 0%;
}

div.navHide {width: 100%;}

@media screen and (max-width: 1200px) {
    div.navHide {
        display: none;
    }
}
</style> 
