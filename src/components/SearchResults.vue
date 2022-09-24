<template>
    <div class="flex">
        <div style="width: 25%;"></div>
        <p style="width: 55%;" class="py-2 text-muted text-sm">Results 1 to 10 from {{searchResult.length}} in 0.01s</p>
        <div style="width: 10%;"></div>
    </div>
    <div class="flex mb-20">
        <div style="width:25%; height: 100%;"></div>
        <div style="width:45%">
            <div v-for="(item, i) in searchResult" :key="i" class="v-flex">
                <a :href=item.url>
                    <div class="text-sm breadcrumbs">
                        <ul class="text-banner">
                            <!--BUG HERE-->
                            <li><a>{{item.url}}</a></li>
                            <li><a>{{item.url}}</a></li>
                            <li>...</li>
                        </ul>
                        <ul class="py-1 text-blueLink text-xl">
                            <li><a>{{item.title}}</a></li>
                        </ul>
                        <a class="text-base">{{item.sum}}</a>
                        <ul class="py-1 text-blueLink text-base">
                            <li><a>See more results from {{item.url}} »</a></li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
    </div>

</template>
  
<script>
export default {
    handle(url) {
        window.location.href = 'url'
    },
    props: ['searchResult'],
}
</script>  