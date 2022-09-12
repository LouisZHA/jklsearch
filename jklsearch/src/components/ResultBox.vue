<template>
    <div id = "result-box" class = "bg-result-box rounded-lg">
        <div class="text-small ml-[10%] ">
            <ul class="text-title-color ">
              {{search_term.url}}
            </ul>
            <ul class="text-3xl">
              <h1>{{search_term.title}}</h1>
            </ul>
            <ul class="text-base" v-if="search_term.sum.length<=1000">
              {{search_term.sum}}
            </ul>
            <ul class="text-base" v-else>
              {{search_term.sum.slice(0,999)}}......
            </ul>

        </div>
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
        height: 110px;
        margin-bottom: 45px;

    }
</style>