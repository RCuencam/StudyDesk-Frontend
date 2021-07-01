<template>
    <v-container class="student-profile-container">
        <v-row>
            <v-col cols="12" md="6" class="student-profile">
                <div class="student-profile-title">
                    <h1>StudyDesk</h1>
                    <h2>Perfil Estudiante</h2>
                </div>
                <div class="student-profile-image">
                    <img src="../images/usuario1.jpg" alt="">
                    <div class="student-profile-image-button">
                        <v-btn>Cambiar foto de perfil</v-btn>
                    </div>
                </div>
                <div class="student-profile-description">
                    <v-dialog
                        transition="dialog-top-transition"
                        max-width="600"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            class="tutor-container-info-button"
                        >GUARDAR CAMBIOS</v-btn>
                        </template>
                        <template v-slot:default="dialog">
                        <v-card class="modal-tutor">
                            <v-img src="../images/check.png" width="50" height="50" class="modal-check"></v-img>
                            <v-card-text class="modal-text">
                            <div class="text-h1">Se guardaron los cambios correctamente!</div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                            <v-btn
                                text
                                @click="dialog.value = false"
                                class="modal-button"
                            >Close</v-btn>
                            </v-card-actions>
                        </v-card>
                        </template>
                    </v-dialog>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="reservations_list">
                <v-row>
                    <v-col>
                        <h1>Mis Tutorías pendientes</h1>
                        <v-card v-for="reservation in byPendingDates" :key="reservation.id" class="pending-reservations">
                            <v-row >
                                <v-col cols="8">
                                    <v-card-title>{{reservation.description}}</v-card-title>
                                    <v-card-subtitle>Alumno: {{reservation.tutor.name}}</v-card-subtitle>
                                </v-col>
                                <v-col cols="4" align-self="right" class="pending_reservations_center">
                                    <v-card-subtitle>Fecha: {{reservation.startDateTime.substr(0,10)}} <br> 
                                    Hora: {{reservation.startDateTime.substr(11,15)}} <br>
                                    Plataforma: {{reservation.platformUrl}}
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h1>Tutorías Pasadas</h1>
                        <v-card v-for="reservation in byPastDates" :key="reservation.id" class="past-reservations">
                            <v-row >
                                <v-col cols="8">
                                    <v-card-title>{{reservation.description}}</v-card-title>
                                    <v-card-subtitle>Alumno: {{reservation.tutor.name}}</v-card-subtitle>
                                </v-col>
                                <v-col cols="4" align-self="right" class="pending_reservations_center">
                                    <v-card-subtitle>Fecha: {{reservation.startDateTime.substr(0,10)}} <br> 
                                    Hora: {{reservation.startDateTime.substr(11,15)}} <br>
                                    Plataforma: {{reservation.platformUrl}}
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ReservationApiService from '../services/reservations-api-service'
import moment from "moment";

    export default {
        name:"StudentProfile",
        data:()=>({
            reservations:[],
            asd:new Date(),
            day:new Date().getDate(),
            month:new Date().getMonth()+1,
            year:new Date().getFullYear(),
            today:"",
            pastDates:[],
            pendingReservations:[]
        }),
        created:function(){
            const user=JSON.parse(localStorage.getItem('user'));
            ReservationApiService.getReservationByStudentId(user.id).then(data=>{
                    this.reservations=data.data;
                    console.log('xd',this.reservations);
                }).catch(error=>console.log(error))
            this.today=`${this.year}-0${this.month}-0${this.day}`;
            console.log(this.today);
        },
        methods:{
            
        },
        computed:{
            byPastDates:function(){
                
                return this.reservations.filter(item=>{
                    var time1 = moment(item.startDateTime.substr(0,10),'YYYY-MM-DD')
                    console.log('time1past',time1);
                    var time2 = moment(this.today,'YYYY-MM-DD')
                    console.log('time2past',time2);
                    if(time2 > time1){
                       return item
                    }
                })
            },
            byPendingDates:function(){
                
                return this.reservations.filter(item=>{
                    var time1 = moment(item.startDateTime.substr(0,10),'YYYY-MM-DD')
                    console.log('time1pending',time1);
                    var time2 = moment(this.today,'YYYY-MM-DD')
                    console.log('time2pending',time2);
                    if(time2 <= time1){
                       return {item}
                    }
                })
            },

        }
    }
</script>
<style scoped>
.student-profile-container{
    margin-top: 70px;
}
.student-profile{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
.student-profile-title{
    text-align: center;
    color: #2C305B;
    font-weight: bold;
    font-size: 1.4em;
}
.student-profile-image{
    margin: 70px 0;
    display: flex;
    align-content: center;
    justify-content: center;
}
.student-profile-image img{
    box-shadow: 5px 5px 20px -12px rgba(0,0,0,0.75);
}
.student-profile-image-button{
    display: flex;
    align-content: center;
    margin:auto 20px;
}
.student-profile button{
    background: #2C305B !important;
    color: white;
}
.student-profile-description button{
    display: flex;
    margin: 0 auto;
    padding: 10px;
}
.reservations_list{
    color:#2C305B;
}
.pending-reservations, .past-reservations{
    margin: 20px 0;
    color:#2C305B;
    display: flex;
    align-items: center;
}
.pending_reservations_center{
    text-align: center;
}
.past-reservations-date{
    padding-bottom: 0 !important;
}
.modal-check{
  margin: 0 auto;
}
.modal-tutor{
  padding: 50px 0 40px !important;
}
.modal-button{
  margin: 0 auto;
  background: #2C305B;
  color: white;
}
.modal-text{
  margin: 20px 0;
  padding: 0 !important;
}
.text-h1{
  font-size: 2em;
  text-align: center;
  padding: 20px 0;
}
@media screen and (max-width:768px){
    .student-profile-image{
        flex-direction: column;
        margin: 30px 0;
    }
    .student-profile-image-button{
        display: flex;
        margin: 30px auto;
    }
}
</style>