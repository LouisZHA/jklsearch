<template>
    <div class="px-32 py-10 w-full flex flex-wrap">
        <div v-for="(arr, index) in subArrays" :key="index" class="w-1/3">
            <div v-for="(item, i) in arr" :key="i" style="border-radius: 2px; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
            class="p-0 mr-5 mb-5 card bg-base-100 shadow-xl">
                <div v-if="item.imageUrl!=none">
                    <a :href=item.url>
                        <figure><img :src=item.imageUrl>
                        </figure>
                    </a>
                </div>
                <div v-else>
                    <div class="p-28 bg-light">

                    </div>
                </div>
                <div class="card-body">
                    <h2 class="card-title">
                        {{item.title}}
                    </h2>
                    <p>{{item.sum}}</p>
                    <div class="mt-6 card-actions">
                        <div class="badge badge-outline">{{item.site}}</div>
                        <div class="badge badge-outline">
                            <p>
                                {{getDateDiff(item.pubdateUTC)}}
                            </p>
                        </div>
                    </div>
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
        console.warn(result.data.results.slice(3));
        this.cards = result.data.results
    },

    methods: {
        getDateDiff(dateTimeStamp) {
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var halfamonth = day * 15;
            var month = day * 30;
            var year = day * 365;
            var now = Math.floor(new Date().getTime() / 1000);
            var diffValue = now - dateTimeStamp;
            var result;
            if (diffValue < 0) {
                return;
            }
            var yearC = diffValue / year;
            var monthC = diffValue / month;
            var weekC = diffValue / (7 * day);
            var dayC = diffValue / day;
            var hourC = diffValue / hour;
            var minC = diffValue / minute;
            if (yearC >= 1) {
                result = "" + parseInt(yearC) + " years ago";
            } else if (monthC >= 1) {
                result = "" + parseInt(monthC) + " months ago";
            } else if (weekC >= 1) {
                result = "" + parseInt(weekC) + " weeks ago";
            } else if (dayC >= 1) {
                result = "" + parseInt(dayC) + " days ago";
            } else if (hourC >= 1) {
                result = "" + parseInt(hourC) + " hours ago";
            } else if (minC >= 1) {
                result = "" + parseInt(minC) + " minutes ago";
            } else
                result = "just now";
            return result;
        }
    }
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