<template>
    <div id= "search_box">
      <div id = "logo">
        JKL.IO
      </div>
      <input type="text" id="input_textarea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>

  <div id="result_box">

  </div>

</template>
<style>
/*
-----------------------------------------search box
*/
#search_box{
  box-sizing: border-box;
  position: absolute;
  width: 80%;
  height: 150px;
  margin: 50px 10% ;


  border: 1px solid #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

#logo{

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  /* or 36px */

  align-items: center;

  color: #000000;
}

#input_textarea{

}


/*
------------------------------------------------result box
*/
#result_box{
  box-sizing: border-box;
  position: absolute;
  width: 90%;
  height: 80%;
  margin: 250px 5% 0 5%;

  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}


</style>


