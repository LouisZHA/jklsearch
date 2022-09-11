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

             <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />

            </el-table>
        
        <div>title</div>
        <div>descrption</div>

        
        </div>
</template>




<style scoped>

.resultTable{
    margin-top: 10px;

}

</style>