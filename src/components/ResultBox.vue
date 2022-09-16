<template>
    <div id = "result-box" class = "resultTable">
        <!-- <div class="text-small ml-[10%] ">
            <ul class="url ">
              {{search_term.url}}
            </ul>
            <ul class="title">
              <h1>{{search_term.title}}</h1>
            </ul>
            <ul class="descrption" v-if="search_term.sum.length<=1000">
              {{search_term.sum}}
            </ul>
            <ul class="text-base" v-else>
              {{search_term.sum.slice(0,999)}}......
            </ul>

        </div> -->
    
            <div class="resultList" >
                <p class="url">{{search_term.url}}</p>
                <div class = "title">{{search_term.title}}</div>
                <p class="descrption">{{search_term.sum}}</p>
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
        margin-top:50px;
        font-size: 20px;
        
    }

    .url{
      font-size: 15px;
      color: black;

    }

    .title{
      color:black;

    }

  
</style>