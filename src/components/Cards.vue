<template>
    <MasonryWall :items="cards" :ssr-columns="1" :column-width="350" :gap="16" class="px-32">
        <template #default="{ item, index }">
            <div :style="{ height: `${item}px` }" class="flex items-center justify-center">
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
        let result = await axios.get("https://www.gigablast.com/search?searchtype=news&userid=575&code=2061275956&onlylang=en&qcountry=au&format=json");
        console.warn(result.data.results[0].imageUrl);
        this.cards = result.data.results
    },
}
</script>