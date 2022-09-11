<template>
	<!-- TRANSPARENT BACKGROUND FILTER -->
	<div id="filter-top-1" class="absolute top-0  left-0 w-full h-[210px] bg-light-main"></div>
	<div id="filter-top-2"
		class="absolute top-[210px] left-0 w-full h-6 bg-gradient-to-b from-light-main to-transparent"></div>
	<div id="filter-bot-1"
		class="absolute bottom-[14px] left-0 w-full h-2 bg-gradient-to-t from-light-main to-transparent"></div>
	<div id="filter-bot-2" class="absolute bottom-0  left-0 w-full h-[14px] bg-light-main"></div>
</template>
<script>
	export default{
		name:"MobiletransparentFilter"
	}
</script>