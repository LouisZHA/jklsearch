<template>
    <div class="px-32 py-10 flex items-start justify-center">
        <div v-for="(item, i) in cards" :key="i"
            style="width:30%; border-radius: 2px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
            class="p-0 mr-10 card bg-base-100 shadow-xl">
            <div v-if="item.imageUrl!=none">
                <a :href=item.url>
                    <figure><img :src=item.imageUrl>
                    </figure>
                </a>
            </div>
            <div v-else>
                <figure><img
                        src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=">
                </figure>
            </div>
            <div class="card-body">
                <h2 class="card-title">
                    {{item.title}}
                </h2>
                <p>{{item.htmlSum}}</p>
                <div class="mt-6 card-actions">
                    <div class="badge badge-outline">#photograph</div>
                    <div class="badge badge-outline">#travel</div>
                    <div class="badge badge-outline">#winter</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    handle(url) {
        window.location.href = 'url'
    },
    data() {
        return {
            cards: [],
        }
    },
    async mounted() {
        let result = await axios.get("https://www.gigablast.com/search?searchtype=news&userid=575&code=2061275956&onlylang=en&qcountry=au&format=json&ppt=0");
        console.warn(result.data.results.slice(-3));
        this.cards = result.data.results.slice(-3)
    },
}
</script>