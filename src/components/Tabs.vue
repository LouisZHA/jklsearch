<template>
    <div class="navHide flex justify-end tabs">
        <div v-for="(item, i) in tabItems" :key="i" class="flex">
            <button class="text-white mr-6">
                {{item.name}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabItems: [
                { name: "Docs", sup: "", key: "docs", visited: true },
                { name: "Examples", sup: "", key: "examples", visited: false },
                { name: "Blog", sup: "", key: "Blog", visited: false },
            ],
        }
    }
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