<template>
 <div class="document-info">
   <div class="document-info-container">
     <h1>{{document.title}}</h1>
     <v-card class="document-info-container-content">
       <div class="document-info-container-content-img">
        <img src="../images/book.png" alt="document">
       </div>
       <div>
<!--         TODO: la description se sale del box-->
         <v-card-text class="document-info-container-content-text">{{document.description}}</v-card-text>
<!--         <v-card-text class="document-info-container-content-subtitle">Description: {{document.author}} </v-card-text>-->
         <v-progress-circular
             v-if="loader"
             :size="20"
             :width="4"
             color="#2C305B"
             align="center"
             indeterminate
             class="loader document-info-container-content-loader"
         ></v-progress-circular>
         <v-btn v-else class="document-info-container-content-button" @click="downloadDocument">Descargar</v-btn>
       </div>
     </v-card>
   </div>
 </div>
</template>

<script>
//import DocumentsApiService from "@/services/documents-api-service";
import StudyMaterialsApiService from "../services/study-materials-api.service"

export default {
  name: "DocumentInformation",
  data:()=>({
    document:{},
    loader:false
  }),
  methods:{
    downloadDocument(){
      this.loader=true;
      setTimeout(()=>{
        // TODO: interaction with api file stack

        this.loader=false;
      },1000)
    }
  },
  created(){
    StudyMaterialsApiService.get(this.$route.params.id).then(data=>this.document=data.data)
  }
}
</script>

<style scoped>
.document-info{
  width: 100%;
}
.document-info-container{
  width: 80%;
  margin: 50px auto;
}
.document-info-container h1{
  text-align: center;
  color: #2C305B;
}
.document-info-container-content{
  width: 80%;
  display: flex;
  margin: 50px auto;
  padding: 50px;
  position: relative;
}
@media screen and (max-width:768px){
  .document-info-container-content{
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .document-info-container-content-text{
    font-size: 1em !important;
    text-align: center;
  }
  .document-info-container-content-subtitle{
    font-size: 1em !important;
    text-align: center;
  }
  .document-info-container-content-button{
    right: 90px !important;
  }
}
.document-info-container-content img{
  padding: 20px;
  width: 150px;
  height: 150px;
}
.document-info-container-content-text{
  font-size: 1.3em;
}
.document-info-container-content-subtitle{
  font-size: 1.1em;
}
.document-info-container-content-button{
  position: absolute;
  right: 30px;
  background: #2C305B !important;
  color: white;
}
.document-info-container-content-loader{
  position: absolute;
  right: 80px;
  color: white;
}

</style>