<template>
    <MasonryWall :items="cards" :ssr-columns="1" :column-width="350" :gap="16" style="padding-left: 8%; padding-right: 8%;" class="">
        <template #default="{ item, index }">
            <div :style="{ height: `${item}px`}" class="flex items-center justify-center">
                <Card :imageUrl="`${item.imageUrl}`" :url="`${item.url}`" :title="`${item.title}`" :sum="`${item.sum}`"
                    :site="`${item.site}`" :pubdateUTC="`${item.pubdateUTC}`" />
            </div>
        </template>
    </MasonryWall>
</template>

<script>
import axios from "axios"
import Card from './Card.vue'

export default {
    components: {
        Card
    },
    handle(url) {
        window.location.href = 'url'
    },
    data() {
        return {
            cards: [],
        }
    },
    async mounted() {
        let result = await axios.get("https://www.gigablast.com/search?searchtype=news&snik=0.0&dr=1&hacr=1&userid=575&code=2061275956&onlylang=en&qcountry=au&format=json");
        this.cards = result.data.results
    },
}
</script>