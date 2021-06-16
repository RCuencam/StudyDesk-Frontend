<template>
  <div class="home">
    <div class="main">
      <h1>Study Desk</h1>
      <div class="features-container">
        <div class="features-container-item">
          <h3>Puedes compartir tus documentos y apuntes con
            el resto de personas dentro de tu aplicación.</h3>
          <img src="../images/sharing-information.png" alt="Sharing Information" class="sharing-img">
          <button>SUBIR DOCUMENTOS</button>
        </div>
        <div class="features-container-item">
          <h3>Encuentra documentos de tus cursos de carrera
            dependiendo de tu universidad, así como asesorías con tutores
          expertos, gracias al sistema de búsqueda.</h3>
          <img src="../images/search-documents.png" alt="Find Documents">
          <button @click="()=>this.$router.push('/documents')">SISTEMA DE BÚSQUEDA</button>
        </div>
        <div class="features-container-item">
          <h3>Pues compartir tus conocimientos en materias que domines y cobrar por ello,
          gracias a nuesta herramienta para tutores.</h3>
          <img src="../images/tutor-online.png" alt="Tutors Online">
          <button @click="()=>this.$router.push('/tutorsdescription')">CONVIÉRTETE EN TUTOR</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{
  }
}
</script>

<style scoped>
h1,p{
  color: #2C305B;
}
.home{
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.main{
  width: 90%;
  text-align: center;
}
.main h1{
  font-weight: 800;
  font-size: 2.5em;
}
.features-container{
  width: 100%;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: center;
}
.features-container-item{
  width: 33.33%;
  margin: 0 10px;
  text-align: center;
}
.features-container-item h3{
  height: 140px;
  margin-top: 40px;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.features-container-item img{
  width: 180px;
  height: 180px;
  margin: 20px 0 50px 0;
}
.sharing-img{
  width: 200px !important;
}
.features-container-item button{
  width: 90%;
  background: #2C305B;
  color: white;
  border-radius: 20px;
  padding: 8px 0;
  border: 1px solid #2C305B;
  transition: all 500ms;
}
.features-container-item button:hover{
  background: transparent;
  color: #2C305B;
}
</style>