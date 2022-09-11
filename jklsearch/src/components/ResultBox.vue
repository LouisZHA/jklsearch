<template>
    <div id = "result-box" class = "bg-result-box rounded-lg">
        <div class="text-small">

            <ul class="text-green">
              {{search_term.url}}
            </ul>
            <ul class="text-xl">
              {{search_term.title}}
            </ul>
            <ul class="text-base">
              {{search_term.sum}}
            </ul>

        </div>
    </div>
   
</template>

<script>
  export default{
    props: ['search_term'],
    methods: {
      test() {
        console.log(this.search_term);
      },
    }
  }
</script>



<style>
    #result-box{
        
        width: 100%;
        height: 110px;
        margin-bottom: 45px;
    }
</style>