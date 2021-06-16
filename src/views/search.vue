<template>
  <div class="search">
    <div class="search-container">
      <h1>StudyDesk</h1>
      <h3>Herramienta de Búsqueda</h3>
      <div class="search-container-options">
        <div class="search-container-options-documents options-item">
          <img src="../images/book.png" alt="">
          <h2>Busca materiales de estudio <br>para que aprendas a tu estilo.</h2>
          <v-btn
              color="primary"
              @click="()=>this.$router.push('/search/documents').catch(()=>{})"
          >
            Buscar Documentos
          </v-btn>
        </div>
        <div class="search-container-options-tutors options-item">
          <img src="../images/tutors.png" alt="">
          <h2>Busca un tutor que te guie <br> en tus cursos.</h2>
          <v-btn
              color="primary"
              @click="()=>this.$router.push('/search/tutors').catch(()=>{})"
          >
            Buscar Tutores
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  watch:{
    '$route':{
      deep:true
    }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px){
  .search-container-options{
    flex-direction: column;
  }
  .options-item{
    margin: 30px 0 !important;
  }
}
.search-container{
  width: 80%;
  margin: 100px auto;
}
.search-container h1{
  font-weight: 800;
  font-size: 2.5em;
}
.search-container h1,h3{
  text-align: center;
  color: #2C305B;
}
.search-container-options{
  margin: 50px auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
.search-container-options img{
  width: 190px;
  height: 200px;
  margin: 0 0 40px 0;
}
.options-item{
  margin: 0 40px;
}
.search-container-options button{
  width: 100%;
  background: #2C305B !important;
  margin: 30px 0;
  border-radius: 20px;
  border: 1px solid #2C305B;
  transition: all 500ms;
}
.search-container-options button:hover {
  background: transparent !important;
  color: #2C305B;
}
</style>