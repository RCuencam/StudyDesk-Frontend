<template>
  <div class="tutor" data-app>
    <v-row class="tutor-container">
      <v-col cols="12" md="5">
        <v-row class="tutor-container-info">
          <v-col cols="12" class="tutor-container-info-img">
            <!--                    TODO: insert img of tutor dynamic-->
            <img src="../images/tutor.png" alt="Tutor">
          </v-col>
          <v-col cols="12" class="tutor-container-info-text">
            <h2>{{tutor.name}}</h2>
            <!--                    TODO: insert qualification dynamic-->
            <v-rating color="yellow" :value="tutor.qualification" large readonly></v-rating>
            <p>{{ tutor.description }}</p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" offset="1" class="tutor-container-form">
        <h1>Reserva</h1>

<!--        Formulary-->
        <v-form class="form-container">

          <v-label>Temas a tratar</v-label>
          <v-textarea no-resize v-model="description">
          </v-textarea>

          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on">
              </v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                scrollable>
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menu = false">Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)">OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-row>
            <v-col cols="11" sm="5">
              <v-select
                  v-model="startTime"
                  :items="hours"
                  label="Hora Inicio"
                  required
                  prepend-icon="mdi-clock-time-four-outline">
                ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="11" sm="5">
              <v-select
                  v-model="endTime"
                  :items="hours"
                  label="Hora Fin"
                  required
                  prepend-icon="mdi-clock-time-four-outline">
              ></v-select>
            </v-col>
          </v-row>

          <p class="tutor-price">
            <b>
              {{ totalPrice }}
            </b>
          </p>

<!--            Modal-->
          <br>
          <v-dialog
              transition="dialog-top-transition"
              max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  class="tutor-container-info-button">
                Finalizar Reserva
              </v-btn>
            </template>

            <template v-slot:default="dialog">
              <v-card class="modal-tutor">
                <v-img src="../images/check.png" width="50" height="50" class="modal-check"></v-img>
                <v-card-text class="modal-text">
                  <div class="reserve-content-dialog">
                    <h1 class="dialog-item">Se reservó la tutoría correctamente!</h1>
                    <h2 class="dialog-item">Enlace de reunion: </h2>
<!--                    TODO: insert link dynamic-->
                    <h3 class="dialog-item"><a href="">{{ item.platformUrl }}</a></h3>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">

                  <v-btn
                      text
                      @click="navigateToSearchTutors(dialog)"
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
import TutorReservationApiService from "../services/tutor-reservations-api.service"
import ZoomApiService from "../services/zoom-api.service"

export default {
  name: "TutorInformation",
  data:()=>({
    tutor:{
      pricePerHour: ""
    },
    item:{},
    description : "",

    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    endTime:"",
    startTime:"",
    menu: false,

    hours: [],
    valid: false
  }),
  created(){
    TutorsApiService.get(this.$route.params.id).then(result=>this.tutor=result.data);
    // TODO: insert request for qualification [TutorReservations] o lo paso como props?

    this.initialisingHours();
    this.item.platformUrl = ZoomApiService.getTest()
  },
  computed: {
    totalPrice() {
      if (this.startTime && this.endTime) {
        let result = this.timeReserved()
        if (result > 0) {
          return `Monto S/ ${this.tutor.pricePerHour * result}.00 soles`
        }
      }
      return "Ingrese los intervalos de hora"
    }
  },
  methods: {
    navigateToSearchTutors(dialog) {
      this.item.platformUrl = ZoomApiService.getTest()
      dialog.value = false

      let user = JSON.parse(localStorage.getItem('user'));
      if (user.id && this.tutor.id && this.timeReserved() > 0) {
        this.item.startDateTime = `${this.date}T${this.startTime}:00`
        this.item.endDateTime = `${this.date}T${this.endTime}:00`
        this.item.description = this.description
        this.item.confirmed = false
        this.item.qualification = 0

        if (this.item.platformUrl) {
          TutorReservationApiService.createReservation(user.id, this.tutor.id, this.item)
          .then(result => {
            console.log(result)
          },
          error => {
            console.log(error)
            this.$router.push("/search/tutors")
          });
        }
      }
    },
    initialisingHours() {
      for (let i = 0; i < 24; i++) {
        if (i < 10) {
          this.hours.push(`0${i}:00`)
        } else {
          this.hours.push(`${i}:00`)
        }
      }
    },
    timeReserved() {
      let start = this.startTime.substr(0,2)
      let end = this.endTime.substr(0, 2)
      return parseInt(end) - parseInt(start)
    }

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
.reserve-content-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.dialog-item {
  text-align: center;
  padding: 10px;
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
.date-container {
  display: flex;
  justify-content: center;
}
.v-date-picker {
  margin-top: 20px;
  margin-bottom: 20px;
  background: #2C305B;
  border: 1px solid grey;
}

</style>