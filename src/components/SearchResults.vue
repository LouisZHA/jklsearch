<template>
<div class="flex mb-20">
<div style="width:10%; height: 100%;"></div>
<div style="width:45%">
<div v-for="(item, i) in searchResults" :key = "i" class="v-flex">
    <div class="text-sm breadcrumbs">
    <ul class="text-green">
        <li><a>https:{{item.link}}</a></li> 
        <li><a>{{item.sublink}}</a></li> 
        <li>...</li>
    </ul>
    <ul class="py-1 text-blueLink text-xl">
        <li><a>{{item.title}}</a></li>
    </ul>
    <a class="text-base">{{item.content}}</a>
    <ul class="py-1 text-blueLink text-base">
        <li><a>See more results from {{item.link}} »</a></li>
    </ul>
</div>
</div>
<div class="flex btn-group">
    <button class="text-xl text-black">Prev</button>
    <p style="width: 1mm"></p>
  <button class="btn bg-white text-purple">1</button>
  <button class="btn bg-white text-black">2</button>
  <button class="btn bg-white text-black">3</button>
  <button class="btn bg-white text-black">4</button>
  <button class="btn bg-white text-black">5</button>
  <p style="width: 1mm"></p>
  <button class="text-xl text-black">Next</button>
</div>
<p class="mt-5 mb-1 text-base text-muted">Try elsewhere</p>
<div class="flex">
<button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Brave</button>
<button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Ecosia</button>
<button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Gigablast</button>
<button class="mr-1 text-muted hover:text-black bg-light rounded-full py-3 px-4 font-semibold">Startpage</button>
</div>

</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            searchResults: [
                {key: '1', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '2', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '3', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '4', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '5', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '6', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '7', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '8', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '9', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
                {key: '10', link: 'www.ecowatch.com', sublink: 'indigenous-peoples-australia-bushfires-264', title: '1 in 10 Children Affected by Bushfires I', content: '... bushfire response and recovery is part ... But in past bushfire inquires and royal commissions, Aboriginal people have been mentioned only sparingly.'},
            ]
        }
    }
}
</script>
