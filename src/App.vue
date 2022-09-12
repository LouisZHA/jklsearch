<template>
  
  <router-view/>
  

</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

/*flex布局类名*/ 

.display-float{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.flex{
  display: flex;
  align-items: center;

}

.page_content{
  box-sizing: border-box;
  display: block;
  width:100%;
  padding:20px;
  background: #ffff;
  margin-top:30px;

}


</style>
