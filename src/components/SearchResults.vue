<template>
    <div class="flex items-center justify-center">
        <p style="width: 50%" class="py-2 text-muted text-sm">Results 1 to 10 from {{searchResult.length}} in 0.01s</p>
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
    data() {
        return {
            searchResults: [
                { key: '1', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '2', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '3', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '4', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '5', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '6', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '7', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '8', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '9', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
                { key: '10', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.' },
            ]
        }
    },
    async mounted() {
        console.log(this.searchResult)
    },
}
</script>  