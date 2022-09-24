<template>
    <div class="dropdown dropdown-end">
        <button tabindex="0" class="rounded flex items-center justify-center mt-1">
            <span class="w-10 h-10 text-white material-icons text-4xl">menu</span>
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
                            <p v-if=!subItem.visited class="text-blueLink px-3 py-2 hover:underline">
                                {{subItem.name}}</p>
                            <p v-else class="text-purple px-3 py-2 hover:underline">{{subItem.name}}</p>
                        </button>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
        }
    }
}
</script>