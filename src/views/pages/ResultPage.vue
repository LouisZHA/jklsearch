<template>
    <!--面包屑-->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Sports</el-breadcrumb-item> 
            <el-breadcrumb-item>Politics</el-breadcrumb-item> 
            <el-breadcrumb-item>Technology</el-breadcrumb-item> 
            <el-breadcrumb-item>Science</el-breadcrumb-item> 
            <el-breadcrumb-item>Economy</el-breadcrumb-item> 

        </el-breadcrumb>

        <!--result-->
        <div class="resultTable">
            <div class="resultList" >
                <p class="url">https://albanese-pushed-to-pass-urgent</p>
                <h3 class="title">Albanese pushed to pass ‘urgent’ integrity reforms after Queen’s death delays</h3>
                <p>Independent MPs are urging Prime Minister Anthony Albanese to honour his election pledge to pass laws this year to create a national integrity commission rather than allowing the deadline to slip after Parliament was suspended to mark the death of the Queen.</p>


            </div>
        </div>
        

        <div class="resultTable">
            <div class="resultList" >
                <p class="url">https://www.abc.net.au/news/2022-09-12/man-stabbed-to-death-</p>
                <h3 class="title">Man stabbed to death on street in Brisbane suburb of Mansfield, manhunt underway</h3>
                <p>A 23-year-old man has been fatally stabbed at Mansfield in Brisbane's south-eastern suburbs, with police investigating bikie gang links to the attack.</p>


            </div>
        </div>
        
        <div class="resultTable">
            <div class="resultList" >
                <p class="url">https://www.w3schools.com/colors/colors_names.asp</p>
                <h3 class="title">Fraudster's severed foot gets inquest off to dramatic start</h3>
                <p>In a sign of frustration over the sudden suspension, crossbench MPs including Tasmanian independent Andrew Wilkie and Victorian independent Zoe Daniel said they expected Labor to meet the original deadline because Australians wanted rapid action to prevent corruption.</p>


            </div>
        </div>
        
        <div class="resultTable">
            <div class="resultList" >
                <p class="url">https://www.theguardian.com/australia-news/2022/sep/1</p>
                <h3 class="title">Jacqui Lambie walks back support for Pauline Hanson tweet as race row continues</h3>
                <p>Lambie now claims she did not agree with the language used when the One Nation leader told a fellow senator to “piss off back to Pakistan”, but continued to blame Greens senator Mehreen Faruqi for “disgraceful” comments about the Queen’s death.</p>


            </div>
        </div>
        
        
</template>





<style scoped>

.resultTable{
    margin-top: 10px;

}
.resultList{

  width: 70%;
  padding: 15px;
  /* border: 1px solid gray; */
  margin: 0;
  
}

.line{

    width: 80%;
    left: 0px;
}

.title{
    color:#000080;

}

.url{
    font-size: 15px;

}





</style>