<template>
    <div class="navbar bg-bgNav">
        <div class="flex items-center">
            <button class="p-4 flex items-center justify-center mr-32">
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 7.09627C9.06667 2.82961 11.7333 0.696274 16 0.696274C22.4 0.696274 23.2 5.49627 26.4 6.29627C28.5333 6.82961 30.4 6.02961 32 3.89627C30.9333 8.16294 28.2667 10.2963 24 10.2963C17.6 10.2963 16.8 5.49627 13.6 4.69627C11.4667 4.16294 9.6 4.96294 8 7.09627ZM0 16.6963C1.06667 12.4296 3.73333 10.2963 8 10.2963C14.4 10.2963 15.2 15.0963 18.4 15.8963C20.5333 16.4296 22.4 15.6296 24 13.4963C22.9333 17.7629 20.2667 19.8963 16 19.8963C9.6 19.8963 8.8 15.0963 5.6 14.2963C3.46667 13.7629 1.6 14.5629 0 16.6963Z"
                        fill="white" />
                </svg>
                <!-- <p class="text-white font-bold text-4xl">JKL.IO</p> -->
            </button>
            <div class="tabs">
                <div v-for="(item, i) in tabItems" :key="i" class="flex">
                    <button class="text-white mr-6">
                        {{item.name}}
                    </button>
                </div>
            </div>
        </div>
        <div class="flex justify-end flex-1 px-2">
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
export default {
    data() {
        return {
            tabItems: [
                { name: 'Docs', sup: '', key: 'docs', visited: true },
                { name: 'Examples', sup: '', key: 'examples', visited: false },
                { name: 'Blog', sup: '', key: 'Blog', visited: false },
            ],
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
            icon: { width: "32", height: "20", viewBox: "0 0 32 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", d: "M8 7.09627C9.06667 2.82961 11.7333 0.696274 16 0.696274C22.4 0.696274 23.2 5.49627 26.4 6.29627C28.5333 6.82961 30.4 6.02961 32 3.89627C30.9333 8.16294 28.2667 10.2963 24 10.2963C17.6 10.2963 16.8 5.49627 13.6 4.69627C11.4667 4.16294 9.6 4.96294 8 7.09627ZM0 16.6963C1.06667 12.4296 3.73333 10.2963 8 10.2963C14.4 10.2963 15.2 15.0963 18.4 15.8963C20.5333 16.4296 22.4 15.6296 24 13.4963C22.9333 17.7629 20.2667 19.8963 16 19.8963C9.6 19.8963 8.8 15.0963 5.6 14.2963C3.46667 13.7629 1.6 14.5629 0 16.6963Z", filll: "white" }
        }
    }
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
