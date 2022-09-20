<template>
    <div id = "result-box" class = "bg-result-box rounded-lg">
      <a v-bind:href="search_term.url">
        <div class="text-sm ml-[10%] mr-[8%]"  >
            <br>
            <ul class="text-green text-sm" v-if="search_term.url.length<=30">
             {{search_term.url}}
            </ul>
            <ul class="text-green text-sm " v-else>
              {{search_term.url.slice(0,29)}}...
            </ul>
            <ul class="text-xl text-title-color font-bold ">
              {{search_term.title}}
            </ul>
            <ul class="text-base text-sm" v-if="search_term.sum.length<=1000">

              {{search_term.sum}}
            </ul>
            <ul class="text-base text-sm " v-else>

              {{search_term.sum.slice(0,999)}}......
            </ul>
            <br>
        </div>
      </a>
    </div>
</template>

<script>
  export default{
    props: ['search_term'],

  }
</script>



<style>
    #result-box{
        
        width: 100%;
        _height:100px;
        min-height:100px;
        margin-bottom: 0.5rem;
        /*margin-left: 10%;*/

    }
</style>