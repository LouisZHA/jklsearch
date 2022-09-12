<template>
    <div class="px-32 py-10 w-full flex flex-wrap">
        <div v-for="(arr, index) in subArrays" :key="index" class="w-1/3">
            <div v-for="(card, i) in arr" :key="i"
                style="border-radius: 2px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                class="p-0 mr-5 mb-5 card bg-base-100 shadow-xl">
                <Card :imageUrl="`${card.imageUrl}`" :url="`${card.url}`" :title="`${card.title}`" :sum="`${card.sum}`"
                    :site="`${card.site}`" :pubdateUTC="`${card.pubdateUTC}`"/>
            </div>
        </div>
    </div>
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
    computed: {
        subArrays() {
            var length = Math.ceil(this.cards.length / 3);

            const result = new Array(length)
                .fill()
                .map((i) => {
                    console.log(i)
                    return this.cards.splice(0, length)
                })
            return result
        }
    },
    async mounted() {
        let result = await axios.get("https://www.gigablast.com/search?searchtype=news&userid=575&code=2061275956&onlylang=en&qcountry=au&format=json");
        console.warn(result.data.results[0].imageUrl);
        this.cards = result.data.results
    },
}
</script>

<style>
.parent {
    display: flex;
    flex-wrap: wrap;
}

.box {
    flex: 1 1 350px;
    /*  flex-grow: 1 ，表示自动延展到最大宽度 */
    flex: 0 1 350px;
    /*  No stretching: */
    margin: 5px;
}
</style>