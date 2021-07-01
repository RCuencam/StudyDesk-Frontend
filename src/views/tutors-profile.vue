<template>
<v-container class="tutor-profile-container">
  <v-row class="tutor-profile">
    <v-col cols="12" md="6" class="tutor-profile-info">
      <div class="tutor-profile-info-title">
        <h1>StudyDesk</h1>
        <h2>Perfil Tutor</h2>
      </div>
      <div class="tutor-profile-info-image">
        <img src="../images/tutor.png" alt="">
        <button>CAMBIAR FOTO DE PERFIL</button>
      </div>
      <div class="tutor-profile-info-edit">
        <v-label>Ingrese una descripción</v-label>
        <v-textarea no-resize></v-textarea>
        <button>GUARDAR CAMBIOS</button>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="tutor-profile-content">
      <v-row class="tutor-profile-content-requests">
        <h2>Solicitudes de Tutoría</h2>
        <v-card class="tutor-profile-content-requests-item">
          <div>
            <v-card-title>SÁBADO</v-card-title>
            <v-card-subtitle>20-04-2021
              <br>Hora: <br>15:00-16:00pm
            </v-card-subtitle>

          </div>
          <div>
            <button class="tutor-profile-content-request-button-accept">Aceptar</button>
            <button class="tutor-profile-content-request-button-deny">Denegar</button>
          </div>
        </v-card>
      </v-row>
      <v-row class="tutor-profile-content-tutorials">
        <h2>Mis tutorías de esta semana</h2>
        <v-card class="tutor-profile-content-tutorials-item">
          <div>
            <v-card-title>PROGRAMACIÓN 2</v-card-title>
            <v-card-subtitle>Tema: Herencia <br>Hora: 9:00 - 10:00pm</v-card-subtitle>
          </div>
          <div>
            <v-card-title>Omar Clavijo</v-card-title>
            <v-card-subtitle>Martes <br>20-04-2021 </v-card-subtitle>
          </div>
        </v-card>
        <v-card class="tutor-profile-content-tutorials-item">
          <div>
            <v-card-title>ALGORITMIA 2</v-card-title>
            <v-card-subtitle>Tema: Redes Neuronales <br>Hora: 9:00 - 10:00pm</v-card-subtitle>
          </div>
          <div>
            <v-card-title>Marcos Medina</v-card-title>
            <v-card-subtitle>Martes <br>20-04-2021</v-card-subtitle>
          </div>
        </v-card>
      </v-row>
      <v-row class="tutor-profile-content-schedules">
        <h2>Mis horarios</h2>
        <v-card class="tutor-profile-content-schedules-item">
          <div>
            <v-card-title>SÁBADO</v-card-title>
            <v-card-subtitle>24-04-2021</v-card-subtitle>
          </div>
          <div>
            <v-card-title>HORA</v-card-title>
            <v-card-subtitle>15:00-16:00pm</v-card-subtitle>
          </div>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import tutorsApiService from '../services/tutors-api-service';
export default {
  data:()=>({
    tutor:{}
  }),
  created:function(){
    tutorsApiService.get(1).then(data=>{
      this.tutor=data.data
      })
  }
};
</script>

<style scoped>
#bg {
  background-image: url("../images/fondo1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}

#bg-color {
  background-color: rgba(103, 204, 210, 0.8);
  background-size: cover;
}

h1 {
  padding-top: 40px;
  font-weight: 800;
  font-size: 3em;
  color: #2c305b;
}

h3 {
  padding-top: 20px;
  color: #2c305b;
  font-weight: 500;
}

h4 {
  padding-top: 30px;
  font-size: 1.05em;
  color: #2c305b;
}
.tutor-profile{
  display: flex;
  align-items: center;
  justify-content: center;
}
.tutor-profile-container{
  width: 80%;
}
.tutor-profile-info-title{
  text-align: center;
}
.tutor-profile-info-image{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
@media screen and (max-width:768px){
  .tutor-profile-info-image{
    flex-direction: column;
  }
  .tutor-profile-content{
    margin-top: 100px;
  }
}
.tutor-profile-info-image img{
  width: 350px;
  height: 350px;
}
.tutor-profile-info-image button{
  background: #2c305b;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 10px;
}
.tutor-profile-info-edit button{
  display: flex;
  margin: 0 auto;
  background: #2c305b;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
.tutor-profile-content{
  width: 45%;
}
.tutor-profile-content-requests{
  display: flex;
  flex-direction: column;
}
.tutor-profile-content-requests-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.tutor-profile-content-tutorials{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
}
.tutor-profile-content-tutorials-item{
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.tutor-profile-content-request-button-accept{
  background: green;
  color: white;
  padding: 7px 10px;
  border-radius: 5px;
}
.tutor-profile-content-request-button-deny{
  background: red;
  color: white;
  padding: 7px 10px;
  border-radius: 5px;
  margin: 0 30px 0 10px;
}
.tutor-profile-content-schedules{
  display: flex;
  flex-direction: column;
}
.tutor-profile-content-schedules-item{
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
</style>