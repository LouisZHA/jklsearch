<template>
  <div class="w-full h-screen flex flex-col bg-light-main">


    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <!-- TOP MENU BUTTON -->
    <div class="w-auto h-16     text-right ml-0  mr-0  rounded-md">
      <!-- ICON LEFT -->
      <div class="w-8 h-8 absolute  left-7 top-7 text-center align-middle pt-0.5 rounded-md text-light-main">
        <div class="space-y-2 mt-1"><div class="w-8 h-0.5 bg-light-text rounded-full"></div><div class="w-8 h-0.5 bg-light-text rounded-full"></div><div class="w-8 h-0.5 bg-light-text rounded-full"></div></div>
      </div>
      <!-- ICON RIGHT -->
      <div class="w-10 h-10 absolute right-7 top-6 text-center align-middle pt-0.5 text-light-text text-2xl border-[1.5px] border-light-text rounded-3xl">
          <div>?</div>
      </div>
    </div>
    <div class="w-auto h-4      text-right ml-0  mr-0  rounded-md"></div>
    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->


    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <!-- LOGO -->
    <div class="w-auto h-14 ml-28 mr-28 rounded-md">
      <div class="w-full h-full text-center font-semibold text-5xl text-light-text">JKL.io</div>
    </div>
    <div class="w-auto h-6      text-right ml-0  mr-0  rounded-md"></div>
    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->


    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <!-- SEARCH BOX -->
    <div class="relative block w-auto h-12 ml-6 mr-5">
      <span><input type="text" class="w-full h-full pl-3 pr-3 input input-bordered rounded-md input-md text-center truncate text-light-texts shadow-xl" placeholder="What are you looking for ... ?" /></span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3"><svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg></span>
    </div>
    <div class="w-auto h-10     text-right ml-0  mr-0  rounded-md"></div>
    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->


    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->
    <!-- CARD -->
    <div class="overflow-y-scroll max-h-[550px]">
      <div v-for="feed in newsFeed_s" v-bind:key="feed.uid" class="w-auto h-24 bg-light-card ml-6 mr-6 mb-5 rounded-md flex flex-row">
        <div class="absolute left-6 h-24 w-0 rounded-md hover:w-12" :style="`background-color:red`"></div>
        <div class="flex-none h-full w-10 rounded-md" :style="`background-color:${feed.color}`"></div>
        <div class="flex-auto h-full flex flex-col">
          <!-- TODO: PLACEHOLDER FOR ICONS <div class="w-full flex-1 pl-2 pt-2 text-light-text ">{{feed.title}}</div> -->
          <div class="w-full flex-1 pl-2 pt-2 text-light-subtext">{{feed.time}}</div>
        </div>
        <img v-bind:class="`flex-none h-full w-20 rounded-md right-0`" :src="`${feed.img}`" />
      </div>
    </div>
    <!-- ----------------------------------------------------------------------------------------------------------------------------- -->


  </div>
</template>


<script>
  export default {
      name: "app",
      components:{},
      data(){
        return {
          temp_color: "#CA0304",
          newsFeed_s: [
            {uid:"0", color:"#7E939E", title:"TEST_0", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"1", color:"#7E939E", title:"TEST_1", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"2", color:"#7E939E", title:"TEST_2", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"3", color:"#7E939E", title:"TEST_3", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"4", color:"#7E939E", title:"TEST_4", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
            {uid:"5", color:"#7E939E", title:"TEST_5", time:"2022.09.09", img:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg", },
          ]
        };
      }
  }
</script>


<!-- ALIGN IS VERTICAL: TOP/DOWN/MID -->