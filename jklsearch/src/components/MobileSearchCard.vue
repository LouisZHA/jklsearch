<template>
	<div :class="`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${newsFeed_s_isLoading? 'opacity-100': 'opacity-0'} transition-all duration-1000`">
		<!-- <div class="flex items-center justify-center "> -->
			<div
				class="w-40 h-40 border-t-8 border-r-0 border-b-8 border-l-0 border-white rounded-full animate-spin">
			</div>
		<!-- </div> -->
	</div>
	<!-- SEARCH BOX -->
	<div id="search-box"
		:class="`absolute top-40 w-full flex flex-row ${newsFeed_s_isLoading? 'mt-10 opacity-0': 'mt-0 opacity-100'} transition-all duration-1000`"
		@click="set_searchBox_focus(search_onFocus, newsFeed_s)">
		<div v-bind:class="getStyle_SearchBox(search_onFocus)">
			<span><input v-model=search_text type="text"
					@keyup.enter="searchSubmission(this.search_text)"
					class="ml-10 mr-10 w-card h-full pl-2 input input-bordered rounded-lg input-md text-center text-light-texts shadow-sm focus:shadow-xl focus:outline-none focus:ml-6 focus:mr-6 focus:w-cardExpand  transition-all text-ellipsis pr-10"
					placeholder="What are you looking for ... ?" /></span>
			<span class="absolute inset-y-0 right-10 flex items-center pr-3" @click="searchSubmission(this.search_text)"><svg class="h-5 w-5 fill-black"
					xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
					<path
						d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
					</path>
				</svg></span>
		</div>
	</div>
	<div class="w-auto h-10     text-right ml-0  mr-0  rounded-md"></div>

	<!-- CARD -->
	<div v-bind:class="`w-full h-full flex flex-col transition-all ${newsFeed_s_isLoading? 'opacity-0 ml-10': 'opacity-100 ml-0'} transition-all duration-1000`">
		<div class="w-auto h-[234px] flex-none"></div>
		<div class="overflow-y-scroll  scrollbar-hide  max-h-full flex flex-col snap-y snap-mandatory">
			<div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center">
				<div class="w-fit text-white">Release</div>
			</div>
			<div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center">
				<div class="w-fit text-white">to reload...</div>
			</div>
			<div class="w-auto h-card flex-none"></div>
			<div v-for="feed in newsFeed_s" v-bind:key="feed.uid" :class="getStyle_newsCard(feed)"
				@click="handleClick_newsCard(feed, newsFeed_s)">
				<img v-bind:class="getStyle_newsCardImg_L      (feed)" :src="`${feed.img}`" />
				<div v-bind:class="getStyle_newsCardBar_L      (feed)" :style="`background-color:${feed.color}`">
				</div>
				<div class="flex-auto h-full w-10 flex flex-col">
					<div v-bind:class="getStyle_time_T             (feed)">{{feed.time}}</div>
					<div v-bind:class="getStyle_title              (feed)"><span
							v-bind:class="getStyle_title_span(feed)">{{feed.title}}</span></div>
					<div v-bind:class="getStyle_time_B             (feed)">{{feed.time}}</div>
				</div><img v-bind:class="getStyle_newsCardImg_R(feed)" :src="`${feed.img}`" />
				<div v-bind:class="getStyle_newsCardBar_R      (feed)" :style="`background-color:${feed.color}`">
				</div>
			</div>

			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center">
				<div class="w-fit text-white">You've reached</div>
			</div>
			<div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center">
				<div class="w-fit text-white">the deepest rabbit hole...</div>
			</div>
			<div class="w-auto h-card flex-none"></div>
			<div class="w-auto h-card flex-none"></div>
		</div>
	</div>
</template>

<script>

import axios from "axios";
export default {
	name: "MobileSearchCard",
	data() {
		return {
			search_text:"",
			newsFeed_s_isLoading: true,
			search_onFocus: false,
			newsFeed_s: [
				// { uid: "0", selected: false, color: "#665D58", title: "Who was with Queen w1en she died (ABC News)", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
				// { uid: "1", selected: false, color: "#665D58", title: "The latest COVID-19 case numbers from around the states and territories", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
				// { uid: "2", selected: false, color: "#665D58", title: "Who was with Queen when she died (ABC News)", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
				// { uid: "3", selected: false, color: "#665D58", title: "The latest COVID-19 case numbers from around the states and territories", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
				// { uid: "4", selected: false, color: "#665D58", title: "Who was with Queen when she died (ABC News)", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
				// { uid: "5", selected: false, color: "#665D58", title: "The latest COVID-19 case numbers from around the states and territories", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
				// { uid: "6", selected: false, color: "#665D58", title: "Who was with Queen when she died (ABC News)", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
				// { uid: "7", selected: false, color: "#665D58", title: "The latest COVID-19 case numbers from around the states and territories", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
				// { uid: "8", selected: false, color: "#665D58", title: "Who was with Queen when she died (ABC News)", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
				// { uid: "9", selected: false, color: "#665D58", title: "The latest COVID-19 case numbers from around the states and territories", time: "2022.09.09", img: "https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
			], window_param: {
				height: window.innerHeight,
				width: window.innerWidth,
			},
		};
	},
	async mounted() {
		let base = "https://www.gigablast.com/search?"; 		//BASE URL
		let searchtype = "news";								//Set to news or images to search for those respective entities.
		let format = "json";		  						    //Display output in this format. Can be html, json or xml.
		//let q = ""; 			         						//(REQUIRED) the query to search with
		//let c = "";			          						    //(REQUIRED) the collection to search in
		let n = 4;              						        //The number of results returned. If you want more than 1000 results you must use &stream=1 so Gigablast does not run out of memory. Search feed customers are typically limited to 10 results per query, so additional queries must be conducted to receive more results.
		let s = 0;				          						//Start displaying at search result #X. Starts at 0. If you want more than 1000 results in total, you must use &stream=1 so Gigablast does not run out of memory.
		//let showimages = 0;	    						        //Should we return or show the thumbnail images in the search results?
		//let showgoodimages = 1;							        //Should we return or show the thumbnail images in the search results if they are close to all the search terms?
		let request_url = base +
			"searchtype=" + searchtype + "&" +
			"format=" + format + "&" +
			"n=" + n + "&" +
			"s=" + s + "&" +
			"userid=575&code=2061275956&onlylang=en&qcountry=au";
		// if (q == null || q.length == 0) {
		// else if (c == null || c.length == 0) {
		// else {let result = await axios.get("https://www.gigablast.com/search?searchtype=news&userid=575&code=2061275956&onlylang=en&qcountry=au&format=json");
		// let response = await axios.get(request_url);
		// let axios_results = response.data.results;
		// let axios_haveMoreResults = response.moreResultsFollow;
		// let axios_queryInfo	= response.queryInfo;
		// // console.log(response);
		// // console.log(axios_result);
		// console.log(response);
		// // if(axios_results==null || axios_results.length==0){
		// // 	console.warn("No data was retrieved from the axios request.");
		// // } else {
		// for(result in axios_results){
		// 	// ----------
		// 	console.log("url            "+result.url);
		// 	console.log("site           "+result.site);
		// 	// ----------
		// 	console.log("docId          "+result.docId);
		// 	// ----------
		// 	console.log("sum            "+result.sum);
		// 	console.log("htmlSum        "+result.htmlSum);
		// 	// ----------
		// 	console.log("imageBase64    "+result.imageBase64);
		// 	console.log("imageHeight    "+result.imageHeight);
		// 	console.log("imageWidth     "+result.imageWidth);
		// 	console.log("origImageHeight"+result.origImageHeight);
		// 	console.log("origImageWidth "+result.origImageWidth);
		// 	// ----------
		// 	console.log("pubdateStr     "+result.pubdateStr);
		// 	console.log("pubdateUTC     "+result.pubdateUTC);
		// }
		// // }
		axios.get(request_url).then(
			response => {
				let axios_results = response.data.results;
				//let axios_haveMoreResults = response.moreResultsFollow;
				//let axios_queryInfo = response.queryInfo;
				axios_results.forEach(result => {
					// 	console.log("==========================================");
					// 	console.log("==========================================");
					let cur_data = {
						uid: result.docId,
						url: result.url,
						selected: false,
						color: "#2B4773",
						title: result.sum,
						title_html: result.htmlSum,
						time: result.pubdateStr,
						time_utc: result.pubdateUTC,
						img: result.imageUrl,
					}
					if (cur_data.img == null || cur_data.img == "") { cur_data.img = "https://www.sbs.com.au/_next/static/img/news/schema-logo-d79dd3e.png" }
					// 	console.log("-"); console.log("url             "); console.log(result.url);
					// 	console.log("-"); console.log("site            "); console.log(result.site);
					// 	console.log("-"); console.log("docId           "); console.log(result.docId);
					// 	console.log("-"); console.log("sum             "); console.log(result.sum);
					// 	console.log("-"); console.log("htmlSum         "); console.log(result.htmlSum);
					// 	console.log("-"); console.log("imageBase64     "); console.log(result.imageBase64);
					// 	console.log("-"); console.log("imageHeight     "); console.log(result.imageHeight);
					// 	console.log("-"); console.log("imageWidth      "); console.log(result.imageWidth);
					// 	console.log("-"); console.log("origImageHeight "); console.log(result.origImageHeight);
					// 	console.log("-"); console.log("origImageWidth  "); console.log(result.origImageWidth);
					// 	console.log("-"); console.log("pubdateStr      "); console.log(result.pubdateStr);
					// 	console.log("-"); console.log("pubdateUTC      "); console.log(result.pubdateUTC);
					// 	console.log("==========================================");
					// 	console.log("==========================================");
					this.newsFeed_s.push(cur_data);
				});
				this.newsFeed_s_isLoading = false;
			});
	},
	
	methods: {

		searchSubmission: function (query_string) {
			console.log(query_string)
			// Named route
			
			
			console.log("OK")
			this.$router.push('search')
			console.log("OK2")
			this.$root.$emit('onSearchBar', query_string)
		},
		set_searchBox_focus: function (searchbox_state, newsFeed_s) {
			for (let i = 0; i < newsFeed_s.length; i++) { newsFeed_s[i].selected = false; }
			searchbox_state = true;
		},
		getStyle_SearchBox: function (searchbox_state) {
			if (searchbox_state === false) { return "flex-auto w-full h-12 ml-0 mr-0 transition-all"; }
			if (searchbox_state === true) { return "flex-auto w-full h-12 ml-0 mr-0 transition-all"; }
			// if (searchbox_state == false) { console.warn("@"); return "flex-auto w-full h-12 ml-0 mr-0 transition-all"; }
			// if (searchbox_state == true)  { console.warn("#"); return "flex-auto w-full h-12 ml-0 mr-0 transition-all"; }
		},
		//=============
		//=============
		handleClick_newsCard: function (newsFeed_obj, newsFeed_s) {
			// console.log(newsFeed_obj)
			// if (newsFeed_obj.selected == true) {
			// 	newsFeed_obj.selected = false; return;
			// }
			// for (let i = 0; i < newsFeed_s.length; i++) {
			// 	newsFeed_s[i].selected = false;
			// }
			// newsFeed_obj.selected = true;
			// window.open(newsFeed_obj.url);
			// return;
			console.log(newsFeed_s);
			window.open(newsFeed_obj.url, "_blank");
		},
		getStyle_newsCard: function (newsFeed_obj) {
			if (newsFeed_obj.selected === true) { return "w-auto h-card flex-none bg-light-card ml-cardNormal mr-cardNormal mb-2 mt-3 rounded-md shadow-sm flex flex-row transition-all shadow-lg ml-cardSelected mr-cardSelected h-cardExpand"; }
			else { return "w-auto h-card flex-none bg-light-card ml-cardNormal mr-cardNormal mb-2 mt-3 rounded-md shadow-sm flex flex-row transition-all "; }
		},
		getStyle_newsCardBar_L: function (newsFeed_obj) {
			console.log(newsFeed_obj);
			// if (newsFeed_obj.selected == true) { return "snap-start snap-always flex-none h-0 w-0 transition-all ease-out rounded-md opacity-0  duration-1000"; }
			// else { return "snap-start snap-always flex-none h-0 w-0 transition-all ease-out rounded-md opacity-70 duration-1000"; }
			return "hidden";
		},
		getStyle_newsCardBar_R: function (newsFeed_obj) {
			// if (newsFeed_obj.selected == false) { return "snap-start snap-always flex-none h-card w-6  order-first transition-all rounded-l-md"; }
			// else { return "snap-start snap-always flex-none h-full w-2  order-first transition-all rounded-l-md"; }
			if (newsFeed_obj.selected === false) { return "snap-start snap-always flex-none h-card w-4  order-first transition-all rounded-l-md"; }
			else { return "snap-start snap-always flex-none h-full w-2  order-first transition-all rounded-l-md"; }
		},
		//=============
		//=============
		getStyle_newsCardImg_L: function (newsFeed_obj) {
			if (newsFeed_obj.selected === true) { return "flex-none h-card w-0  rounded-md   right-0 object-cover transition-transform opacity-100  duration-100"; }
			else { return "flex-none h-card w-0  rounded-md   right-0 object-cover transition-all opacity-0        duration-100"; }
		},
		getStyle_newsCardImg_R: function (newsFeed_obj) {
			if (newsFeed_obj.selected === true) { return "flex-none h-card w-auto pl-0 pr-0 rounded-md   right-0 object-cover transition-all duration-100"; }
			else { return "flex-none h-card w-20 pl-5 pr-0 rounded-r-md right-0 object-cover transition-all duration-100"; }
		},
		//=============
		//=============
		getStyle_title: function (newsFeed_obj) {
			if (newsFeed_obj.selected === false) { return "w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2"; }
			else { return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2"; }
		},
		getStyle_title_span: function (newsFeed_obj) {
			if (newsFeed_obj.selected == false) { return "text-ellipsis transition-all line-clamp-2"; }
			else { return "text-ellipsis transition-all line-clamp-2"; }
		},
		getStyle_description: function (newsFeed_obj) {
			if (newsFeed_obj.selected === false) { return "flex-none w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2"; }
			else { return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2"; }
		},
		getStyle_description_span: function (newsFeed_obj) {
			if (newsFeed_obj.selected === false) { return "w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2"; }
			else { return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2"; }
		},
		//=============
		//=============
		getStyle_time_T: function (newsFeed_obj) {
			if (newsFeed_obj.selected === false) { return "invisible transition-all w-0 h-0 text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-xs underline decoration-amber-80 decoration-2 align-baseline pb-2"; }
			else { return "invisible transition-all w-0 h-0 text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-xs underline decoration-amber-80 decoration-0 align-baseline pb-2"; }
		},
		getStyle_time_B: function (newsFeed_obj) {
			if (newsFeed_obj.selected === false) { return "transition-all w-full h-10 flex-1 grow-0 pr-2 text-light-subtext           text-right text-xs decoration-amber-80 opacity-100  decoration-0 align-baseline pb-2    transition-none"; }
			else { return "transition-all w-full h-0  text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-[0px] decoration-amber-80 opacity-0    decoration-0 align-baseline pb-2 transition-none"; }
		},
	}
};
</script>