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
 
            <div class="vue-google-serp">
                <div class="preview">
                <h3>{{title}}</h3>
                <cite>{{url}}</cite>
                <p>{{description}}</p>
                </div>
            </div>
        
        </div>

        <div>
            <h1>Vue Google Serp simulator</h1>
            <div>
                title="Titles are truncated when they exceed the 60 characters limit."
                url="https://www.example.com"
                description="Example Domain. This domain is established to be used for illustrative examples in documents. You may use this domain in examples without prior coordination or asking for permission. – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum sed eros iaculis congue."
            
            
            </div>
        </div>
</template>


<script>
export default {
	name: "vueGoogleSerp",
	props: {
        title: { required: true, type: String },
        url: { required: true, type: String },
        description: { required: true, type: String },
        title_length: {type: Number, default:  60 }, //standard google serp title length
        description_length: {type: Number, default:  160 } //standard google serp description length
        
	},
	filters: {
		truncate(string, length) {
			return string.length > length ? string.slice(0, length) + '...' : string;
		}
	}
}
</script>


<style scoped>

.resultTable{
    margin-top: 10px;

}


.vue-google-serp {
    font-family: arial, sans-serif !important;
	margin: 0;
	padding: 0;
    .preview {
	padding: 20px;
	max-width: 600px;
	border: 1px solid #ddd;
	border-radius: 5px;
    }
    h3 {
    font-family: arial, sans-serif !important;
    margin: 0;
    color: rgb(26, 13, 171);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    }
    p {
    font-family: arial, sans-serif !important;
    margin: 0;
    color: rgb(84, 84, 84);
    font-size: 13px;
    line-height: 1.4;
    }
    cite {
    font-family: arial, sans-serif !important;
    margin: 0;
    font-style: normal;
    height: 18px;
    color: rgb(0, 102, 33);
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
}


</style>