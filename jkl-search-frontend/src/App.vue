<template>

  <div class="w-full h-screen flex flex-col bg-light-main">

    <!-- TRANSPARENT BACKGROUND FILTER -->
    <div id="filter-top-1" class="absolute top-0  left-0 w-full h-[210px] bg-light-main"></div>
    <div id="filter-top-2" class="absolute top-[210px] left-0 w-full h-6 bg-gradient-to-b from-light-main to-transparent"></div>
    <div id="filter-bot-1" class="absolute bottom-[14px] left-0 w-full h-2 bg-gradient-to-t from-light-main to-transparent"></div>
    <div id="filter-bot-2" class="absolute bottom-0  left-0 w-full h-[14px] bg-light-main"></div>


    <!-- TOP MENU BUTTON -->
    <div id="menu-box"  class="w-8 h-8 absolute left-7 top-7 text-center align-middle pt-0.5 rounded-md text-light-main active:bg-light-text active:text-light-main transition-all" v-on:click="leftPanel_onFocus = true">
      <div class="space-y-2 mt-1"><div class="w-8 h-0.5 bg-light-text rounded-full"></div><div class="w-8 h-0.5 bg-light-text rounded-full"></div><div class="w-8 h-0.5 bg-light-text rounded-full"></div></div>
    </div>
    <div id="question" class="w-10 h-10 absolute right-7 top-6 text-center align-middle pt-0.5 text-light-text text-2xl border-[1.5px] border-light-text rounded-3xl" v-on:click="rightPanel_onFocus = true">
        <div>?</div>
    </div>
    <div class="w-auto h-4 text-right ml-0  mr-0  rounded-md"></div>

    <!-- LOGO -->
    <div id="logo-box" class="absolute top-20 left-3 w-auto h-14 ml-28 mr-28 rounded-md ">
      <div class="w-full h-full text-center font-semibold text-5xl text-light-text">JKL.io</div>
    </div><div class="w-auto h-6 text-right ml-0  mr-0  rounded-md"></div>


    <!-- SEARCH BOX -->
    <div id="search-box" class="absolute top-40 w-full flex flex-row" @click="set_searchBox_focus(search_onFocus, newsFeed_s)">
      <div v-bind:class="getStyle_SearchBox(search_onFocus)">
        <span><input type="text" class="ml-10 mr-10 w-card h-full pl-2 input input-bordered rounded-lg input-md text-center text-light-texts shadow-sm focus:shadow-xl focus:outline-none focus:ml-6 focus:mr-6 focus:w-cardExpand  transition-all text-ellipsis pr-10" placeholder="What are you looking for ... ?" /></span>
        <span class="absolute inset-y-0 right-10 flex items-center pr-3"><svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg></span>
      </div>
    </div>
    <div class="w-auto h-10     text-right ml-0  mr-0  rounded-md"></div>



    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <!-- CARD -->
    <div v-bind:class="`w-full h-full flex flex-col transition-all `">
      <div class="w-auto h-[234px] flex-none"></div>
      <div class="overflow-y-scroll  scrollbar-hide  max-h-full flex flex-col snap-y snap-mandatory">
        <div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center"><div class="w-fit">Release</div></div>
        <div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center"><div class="w-fit">to reload...</div></div>
        <div class="w-auto h-card flex-none"></div>


        <div v-for="feed in newsFeed_s" v-bind:key="feed.uid" :class="getStyle_newsCard(feed)" @click="handleClick_newsCard(feed, newsFeed_s)">
          <img v-bind:class="getStyle_newsCardImg_L      (feed)" :src="`${feed.img}`" />
          <div v-bind:class="getStyle_newsCardBar_L      (feed)" :style="`background-color:${feed.color}`"></div><div class="flex-auto h-full w-10 flex flex-col">
          <div v-bind:class="getStyle_time_T             (feed)">{{feed.time}}</div>
          <div v-bind:class="getStyle_title              (feed)"><span v-bind:class="getStyle_title_span(feed)">{{feed.title}}</span></div>
          <div v-bind:class="getStyle_time_B             (feed)">{{feed.time}}</div>
          </div><img v-bind:class="getStyle_newsCardImg_R(feed)" :src="`${feed.img}`" />
          <div v-bind:class="getStyle_newsCardBar_R      (feed)" :style="`background-color:${feed.color}`"></div>
        </div>

        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center"><div class="w-fit">You've reached</div></div>
        <div class="w-auto h-2 ml-6 mr-6 mb-2 mt-3 rounded-md italic flex justify-center"><div class="w-fit">the deepest rabbit hole...</div></div>
        <div class="snap-start w-auto h-card flex-none"></div>
        <div class="snap-start w-auto h-card flex-none"></div>
      </div>
    </div>
  </div>

    <!-- PANELS -->
    <div :class="getStyle_leftPanel(leftPanel_onFocus)">
      <div id="question" class="w-10 h-10 absolute left-7 top-6 text-center align-middle pt-0.5 text-light-text text-2xl border-[1.5px] border-light-text rounded-3xl" v-on:click="leftPanel_onFocus = false">
        <div>X</div>
      </div>
    </div>
    <div :class="getStyle_rightPanel(rightPanel_onFocus)">
      <div id="question" class="w-10 h-10 absolute right-7 top-6 text-center align-middle pt-0.5 text-light-text text-2xl border-[1.5px] border-light-text rounded-3xl" v-on:click="rightPanel_onFocus = false">
        <div>X</div>
      </div>
    </div>

</template>


<script>
  import ClickOutside from 'vue-click-outside'
  export default {
      name: "app",
      components:{

      },
      data(){
        return {
          search_onFocus:false,
          leftPanel_onFocus:false,
          rightPanel_onFocus:false,
          window:{
            height: window.innerHeight,
            width:  window.innerWidth,
          },
          newsFeed_s: [
            {uid:"0", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"1", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"2", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"3", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"4", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"5", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"6", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"7", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"8", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"9", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"10", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"11", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"12", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"13", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"14", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"15", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"16", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"17", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"18", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"19", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"20",  selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"21",  selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"22",  selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"23",  selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"24",  selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"25",  selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"26",  selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"27",  selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"28",  selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"29",  selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"30", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"31", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"32", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"33", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"34", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"35", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"36", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"37", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
            {uid:"38", selected:false, color:"#665D58", title:"Who was with Queen when she died (ABC News)", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/526b3dd91879ce45190bdea85e039f83?impolicy=wcms_crop_resize&cropH=788&cropW=1182&xPos=0&yPos=116&width=862&height=575", },
            {uid:"39", selected:false, color:"#665D58", title:"The latest COVID-19 case numbers from around the states and territories", time:"2022.09.09", img:"https://live-production.wcms.abc-cdn.net.au/a17409d5d60c057adb8a08cd0975e87b?impolicy=wcms_crop_resize&cropH=1667&cropW=2500&xPos=0&yPos=0&width=862&height=575", },
          ]
        };
      },
      methods:{
        set_searchBox_focus: function(searchbox_state,newsFeed_s){
          for (let i = 0; i < newsFeed_s.length; i++) {newsFeed_s[i].selected = false;}
          searchbox_state = true;
        },
        handleClick_newsCard: function(newsFeed_obj, newsFeed_s){
          if(newsFeed_obj.selected == true){
            newsFeed_obj.selected = false; return;
          }
          for (let i = 0; i < newsFeed_s.length; i++) {
            newsFeed_s[i].selected = false;
          }
          newsFeed_obj.selected = true;
          console.log('----------------');
          console.log(newsFeed_obj);
          console.log('is now on focus;');
          console.log('----------------');
          return;
        },
        getStyle_leftPanel: function(leftPanel){
          if(leftPanel){return "absolute right-[0px]   top-0 w-full h-[1000px] transition-all bg-light-main opacity-100";}
          else         {return "absolute right-[400px] top-0 w-full h-[1000px] transition-all bg-light-subtext opacity-100";}
        },
        getStyle_rightPanel: function(rightPanel){
          if(rightPanel){return "absolute left-[0px]   top-0 w-full h-[1000px] transition-all bg-light-main opacity-100";}
          else          {return "absolute left-[400px] top-0 w-full h-[1000px] transition-all bg-light-subtext opacity-100";}
        },



        getStyle_SearchBox: function(searchbox_state){
          if(searchbox_state == false) {console.warn("@"); return "flex-auto w-full h-12 ml-0 mr-0 transition-all";}
          if(searchbox_state == true ) {console.warn("#"); return "flex-auto w-full h-12 ml-0 mr-0 transition-all";}
        },
        getStyle_newsCard: function(newsFeed_obj){
          if(newsFeed_obj.selected == true){return "w-auto h-card flex-none bg-light-card ml-cardNormal mr-cardNormal mb-2 mt-3 rounded-md shadow-sm flex flex-row transition-all shadow-lg ml-cardSelected mr-cardSelected h-cardExpand";}
          else                             {return "w-auto h-card flex-none bg-light-card ml-cardNormal mr-cardNormal mb-2 mt-3 rounded-md shadow-sm flex flex-row transition-all ";}
        },
        getStyle_newsCardImg_L: function(newsFeed_obj){
          if(newsFeed_obj.selected == true){return "flex-none h-card w-0  rounded-md   right-0 object-cover transition-transform opacity-100  duration-100";}
          else                             {return "flex-none h-card w-0  rounded-md   right-0 object-cover transition-all opacity-0        duration-100";}
        },
        getStyle_newsCardImg_R: function(newsFeed_obj){
          if(newsFeed_obj.selected == true){return "flex-none h-card w-auto pl-0 pr-0 rounded-md   right-0 object-cover transition-all duration-100";}
          else                             {return "flex-none h-card w-20 pl-5 pr-0 rounded-r-md right-0 object-cover transition-all duration-100";}
        },
        getStyle_newsCardBar_L: function(newsFeed_obj){
          if(newsFeed_obj.selected == true){return "snap-start snap-always flex-none h-0 w-0 transition-all ease-out rounded-md opacity-0  duration-1000";}
          else                             {return "snap-start snap-always flex-none h-0 w-0 transition-all ease-out rounded-md opacity-70 duration-1000";}
        },
        getStyle_newsCardBar_R: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "snap-start snap-always flex-none h-card w-6  order-first transition-all rounded-l-md";}
          else                              {return "snap-start snap-always flex-none h-full w-2  order-first transition-all rounded-l-md";}
        },
        getStyle_title: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2";}
          else                              {return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2";}
        },
        getStyle_title_span: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "text-ellipsis transition-all line-clamp-2";}
          else                              {return "text-ellipsis transition-all line-clamp-2";}
        },
        getStyle_description: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "flex-none w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2";}
          else                              {return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2";}
        },
        getStyle_description_span: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "w-full h-10   flex-1 grow-1 pl-2 text-light-subtext pt-2";}
          else                              {return "w-full h-card flex-1 grow-0 pl-2 text-light-subtext pt-2";}
        },
        getStyle_time_T: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "invisible transition-all w-0 h-0 text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-xs underline decoration-amber-80 decoration-2 align-baseline pb-2";}
          else                              {return "invisible transition-all w-0 h-0 text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-xs underline decoration-amber-80 decoration-0 align-baseline pb-2";}
        },
        getStyle_time_B: function(newsFeed_obj){
          if(newsFeed_obj.selected == false){return "transition-all w-full h-10 flex-1 grow-0 pr-2 text-light-subtext           text-right text-xs decoration-amber-80 opacity-100  decoration-0 align-baseline pb-2    transition-none";}
          else                              {return "transition-all w-full h-0  text-none flex-1 grow-0 pr-2 text-light-subtext text-right text-[0px] decoration-amber-80 opacity-0    decoration-0 align-baseline pb-2 transition-none";}
        },

        directives: {
          ClickOutside
        }
      }
  }
</script>


<!-- ALIGN IS VERTICAL: TOP/DOWN/MID -->