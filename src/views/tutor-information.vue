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
        <v-form>
          <v-label>Temas a tratar</v-label>
          <v-textarea no-resize
          ></v-textarea>

          <p class="tutor-price"><b>Monto: {{ totalPrice }}</b></p>
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
                  <div class="reserve-content-dialog">
                    <h1 class="dialog-item">Se reservó la tutoría correctamente!</h1>
                    <h2 class="dialog-item">Enlace de reunion: </h2>
<!--                    TODO: insert link dynamic-->
                    <h3 class="dialog-item"><a href="">{{ "insertar link" }}</a></h3>
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


export default {
  name: "TutorInformation",
  data:()=>({
    tutor:{
      pricePerHour: ""
    }
  }),
  created(){
    TutorsApiService.get(this.$route.params.id).then(data=>this.tutor=data.data)
    // TODO: insert request for qualification [TutorReservations] o lo paso como props?
  },
  computed: {
    totalPrice() {
      return "S/" + this.tutor.pricePerHour + ".00"
    }
  },
  methods: {
    navigateToSearchTutors(dialog) {
      dialog.value = false
      let user = JSON.parse(localStorage.getItem('user'));
      if (user.id) {
        // TODO: call api reserve tutor
        console.log(user.id)
      }

      // this.$store.dispatch('auth/login', this.user).then(
      //     (user) => {
      //       console.log('Logged In');
      //       console.log(user);
      //       if (user.token) this.$router.push('/');
      //     },
      //     error => {
      //       console.log('Error');
      //       this.message = (error.response && error.response.data)
      //           || error.message || error.toString();
      //     }
      // )


      // this.$router.push("/search/tutors")
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
</style>