<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative bg-bg">
        <a :href=url>
            <div>
                <figure class="rounded-t-3xl bg-bgNav">
                    <img class="rounded-t-3xl" :src=imageUrl onerror="this.style.display='none'">
                </figure>
            </div>
        </a>
        <div class="rounded-b-3xl bg-white card-body">
            <a :href=url>
                <h2 class="card-title">
                    {{title}}
                </h2>
                <p v-if="hover" class="inset-0 w-full h-full rounded-lg">{{sum}}</p>
            </a>

            <div class="mt-6 card-actions">
                <div style="border: none;" :href=site class="badge badge-outline bg-source text-white font-bold">{{site}}</div>
                <div style="border: none;" class="badge badge-outline bg-light font-bold">{{getDateDiff(pubdateUTC)}}</div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'url', 'title', 'sum', 'site', 'pubdateUTC'],
    data() {
        return {
            hover: false,
        }
    },
    methods: {
        getDateDiff(dateTimeStamp) {
            var minute = 60;
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
img {
    opacity: 1.0;
    filter: alpha(opacity=100);
}

img:hover {
    background-color: black;
    opacity: 0.8;
    filter: alpha(opacity=40);
}

card-body {
    border-radius: 50%;
}
</style>