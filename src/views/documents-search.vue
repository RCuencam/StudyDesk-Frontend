  <template>
  <div class="documents">
    <div class="documents-container" data-app>
      <h1>Búsqueda de Documentos</h1>
      <SearchDocumentsForm @getData="getData"/>
      <v-progress-circular
          v-if="loader"
          :size="70"
          :width="7"
          color="#2C305B"
          align="center"
          indeterminate
          class="loader"
      ></v-progress-circular>

      <v-card v-else
              v-for="item in documents"
              :key="item.id"
              class="documents-container-item"
              @click="goToDocument(item.id)">
        <div class="documents-container-item-img">
          <img src="../images/book.png" alt="Document">
        </div>
        <div class="documents-container-item-text">
          <v-card-title class="documents-container-item-text-title">{{item.title}}</v-card-title>
          <v-card-text>{{item.description}}</v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import SearchDocumentsForm from "@/components/search-documents-form";
import DocumentsApiService from "@/services/documents-api-service";
export default {
  name: "Documents",
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: false,
      elevation: 2,
    },
    documents:[],
    loader:false,
  }),
  components:{
    SearchDocumentsForm
  },
  methods:{
    getData(university,career,course,theme){
      this.loader=true;
      this.showData=false
      console.log(university,career,course,theme)
      DocumentsApiService.getAll().then(data=>{
        console.log(data)
        setTimeout(()=>{
          this.documents=data.data
          this.loader=false
        },500)
      })
    },
    goToDocument(id){
      this.$router.push(`/search/documents/${id}`)
    }
  }
}
</script>

<style scoped>
.documents{
  width: 100%;
}
.documents-container{
  width: 50%;
  margin: 50px auto;
}
@media screen and (max-width: 768px){
  .documents-container{
    width: 80%;
  }
  .documents-container-item{
    flex-direction: column;
  }
}
.documents-container h1{
  text-align: center;
  color: #2C305B;
}
.loader{
  display: flex;
  margin: 100px auto;
}
.documents-container-item{
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  cursor:pointer;
  box-shadow: -1px 2px 25px -13px rgba(0,0,0,0.75) !important;
  transition: all 500ms;
}
.documents-container-item:hover{
  transform: scale(1.1);
}
.documents-container-item-img{
  padding: 10px
}
.documents-container-item-img img{
  width: 50px;
}
.documents-container-item-text{
  margin-left: 20px;
}

</style>