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
        <div v-if="!solicitudIsEmpty()">
          <v-card v-for="item in solicitudes" :key="item.id" class="tutor-profile-content-requests-item">
            <div>
              <v-card-title>{{item.description}}</v-card-title>
              <v-card-subtitle>
                Hora: {{item.endDateTime.substr(11,13)}} <br>
                Fecha:{{item.startDateTime.substr(0,10)}}
              </v-card-subtitle>

            </div>
            <div>
              <button class="tutor-profile-content-request-button-accept" @click="acceptReservation(item.id)">Aceptar</button>
              <button class="tutor-profile-content-request-button-deny" @click="denyReservation(item.id)">Denegar</button>
            </div>
          </v-card>
        </div>
        <div v-else class="empty">
          <h2>No hay solicitudes pendientes</h2>
        </div>
        
      </v-row>
      <v-row class="tutor-profile-content-tutorials">
        <h2>Mis tutorías de esta semana</h2>
        <div v-if="!misTutoriasEmpty()">
          <v-card v-for="item in tutoriasConfirmadas" :key="item.id" class="tutor-profile-content-tutorials-item">
            <div>
              <v-card-title>{{item.description}}</v-card-title>
              <v-card-subtitle>Hora:{{item.endDateTime.substr(11,13)}} <br> Fecha: {{item.startDateTime.substr(0,10)}}</v-card-subtitle>
            </div>
            <div>
              <v-card-title>{{item.student.name}}</v-card-title>
              <v-card-subtitle>{{item.platformUrl}}</v-card-subtitle>
            </div>
            <div>
              <button class="tutor-profile-content-request-button-deny" @click="denyReservation(item.id)">Denegar</button>
            </div>
          </v-card>
        </div>
        <div v-else class="empty">
          <h2>No hay tutorías Pendientes</h2>
        </div>
      </v-row>
      <v-row class="tutor-profile-content-schedules">
        <h2>Mis horarios</h2>
        <div v-if="!schedulesIsEmpty()">
          <v-card v-for="item in schedules" :key="item.id" class="tutor-profile-content-schedules-item">
            <div>
              <v-card-title>Hora:</v-card-title>
              <v-card-subtitle>{{item.endDate}}</v-card-subtitle>
            </div>
            <div>
              <v-card-title>Fecha:</v-card-title>
              <v-card-subtitle>{{item.starDate}}</v-card-subtitle>
            </div>
          </v-card>
        </div>
        <div v-else class="empty">
          <h2>No hay tutorías Pendientes</h2>
        </div>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import ReservationApiService from '../services/reservations-api-service'
import tutorsApiService from '../services/tutors-api-service';

export default {
  data:()=>({
    reservations:[],
    schedules:[],
    fechas:[],
    array:[],
    updatedReservation:{},
    deleteReservation:{},
    arraryFecha:{}
  }),
  created:function(){
    const tutorJson=JSON.parse(localStorage.getItem('tutor'))
    console.log(tutorJson.id);
    ReservationApiService.getReservationByTutorId(tutorJson.id).then(data=>{
      this.array=data.data
      this.reservations=this.array.map(item=>{
      return item
      })
      
    })


    tutorsApiService.getSchedules(tutorJson.id).then(data=>{
      this.arr=data.data
      this.schedules=this.arr.map(item=>{
        item.starDate=item.starDate.substr(0,10)
        item.endDate=item.endDate.substr(11,13)
        return item
      })

    })

  },
  methods:{
    acceptReservation(id){
      this.reservations=this.reservations.map(item=>{
        if(item.id===id){
          item.confirmed=true
          this.updatedReservation=item
        }
        return item
      })
      
      const tutorJson=JSON.parse(localStorage.getItem('tutor'))

      const newReservation={
        platformUrl: this.updatedReservation.platformUrl,
        startDateTime: this.updatedReservation.startDateTime,
        endDateTime: this.updatedReservation.startDateTime,
        qualification: this.updatedReservation.qualification,
        description: this.updatedReservation.description,
        confirmed: this.updatedReservation.confirmed
      }

      ReservationApiService.updateReservation(this.updatedReservation.id,this.updatedReservation.student.id,tutorJson.id,newReservation)
      .then(data=>console.log(data))
      .catch(error=>console.log(error.response))
    },
    denyReservation(id){
      this.reservations=this.reservations.map(item=>{
        if(item.id===id){
          this.deleteReservation=item
        }
        return item
      })
      const tutorJson=JSON.parse(localStorage.getItem('tutor'))
      this.reservations=this.reservations.filter(item=>item.id!=id);
      console.log(this.deleteReservation);
      ReservationApiService.deleteReservation(this.deleteReservation.id,this.deleteReservation.student.id,tutorJson.id)
      .then(data=>console.log(data))
      .catch(error=>console.log(error.response))
    },
    solicitudIsEmpty(){
      return this.solicitudes.length===0;
    },
    misTutoriasEmpty(){
      return this.tutoriasConfirmadas.length===0;
    },
    schedulesIsEmpty(){
      return this.schedules.length===0;
    }
  },
  computed:{
    solicitudes(){
      return this.reservations.filter(item=>item.confirmed===false);
    },
    tutoriasConfirmadas(){
      return this.reservations.filter(item=>item.confirmed===true);
    }
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
  text-align: left;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  background: #2c305b;
  color:white !important;
}
.tutor-profile-content-tutorials-item .v-card__subtitle{
  color: white !important;
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
.empty{
  text-align: center;
  margin: 30px 0;
}
</style>