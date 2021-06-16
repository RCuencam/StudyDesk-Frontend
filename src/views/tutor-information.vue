<template>
  <div class="tutor" data-app>
    <v-row class="tutor-container">
      <v-col cols="12" md="5">
        <v-row class="tutor-container-info">
          <v-col cols="12" class="tutor-container-info-img">
            <img src="../images/tutor.png" alt="Tutor">
          </v-col>
          <v-col cols="12" class="tutor-container-info-text">
            <h2>{{tutor.name}}</h2>
            <v-rating color="yellow" :value="tutor.qualification" large readonly></v-rating>
            <p>{{ tutor.description }}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset="1" class="tutor-container-form">
        <h1>Reserva</h1>
        <v-form>
          <v-label>Temas a tratar</v-label>
          <v-textarea no-resize
          ></v-textarea>
          <v-label>Reunión Vía</v-label>
          <v-select
              :items="meets"
          ></v-select>
          <v-label>Cantidad de horas</v-label>
          <v-select
              :items="hours"
          ></v-select>
          <p class="tutor-price"><b>{{"Total a pagar: S/"+ tutor.price + ".00" }}</b></p>
          <br>
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
              >Finalizar Reserva</v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card class="modal-tutor">
                <v-img src="../images/check.png" width="50" height="50" class="modal-check"></v-img>
                <v-card-text class="modal-text">
                  <div class="text-h1">Se reservó la tutoría correctamente!</div>
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

        </v-form>
      </v-col>

    </v-row>
  </div>
</template>

<script>
import TutorsApiService from "../services/tutors-api-service";
export default {
  name: "TutorInformation",
  data:()=>({
    meets:['ZOOM','GOOGLE MEETS'],
    hours:['1 hora','2 horas'],
    tutor:{}
  }),
  created(){
    TutorsApiService.get(this.$route.params.id).then(data=>this.tutor=data.data)
  }
}
</script>

<style scoped>
.tutor{
  width: 100%;
}
.tutor-container{
  width: 80%;
  margin: 60px auto;
}
.tutor-price{
  color: #2C305B;
  font-size: 1.2em;
  text-align: center;
  margin: 10px 0;
}
.tutor-container-info-img{
  display: flex;
  justify-content: center;
}
.tutor-container-info-img img{
  width: 300px;
  height: 300px;
}
.tutor-container-info-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.tutor-container-info-text p{
  width: 80%;
  margin: 0 auto;
}
.tutor-container-info-button{
  background: #2C305B !important;
  color: white;
  width: 100%;
}
.tutor-container-form{
  margin: 0 auto;
}
.tutor-container-form h1{
  margin: 0 0 30px 0;
  color: #2C305B;
}
.text-h1{
  font-size: 2em;
  text-align: center;
  padding: 20px 0;
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
</style>