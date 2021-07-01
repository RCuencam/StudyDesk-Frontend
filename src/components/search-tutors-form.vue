<template>
  <v-form v-model="valid" data-app>
    <v-container class="documents-container-form">
      <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <v-select
              v-model="university"
              :items="displayInstitutes"
              :counter="30"
              label="Universidad"
              outlined
              required
          ></v-select>
        </v-col>

        <v-col
            cols="12"
            md="6"
        >
          <v-select
              v-model="career"
              :items="displayCareers"
              :counter="30"
              label="Carrera"
              outlined
              required
          ></v-select>
        </v-col>

      </v-row>
      <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <v-select
              v-model="hour"
                :items="items"
              label="07:00 - 08:00 am"
              outlined
          ></v-select>
        </v-col>

      </v-row>
    </v-container>
    <v-btn class="documents-container-form-button" @click="enviarDatos">Buscar</v-btn>
  </v-form>
</template>

<script>
import InstitutesApiService from "../services/institutes-api.service";
import CareersApiService from "../services/careers-api.service"

export default {
  name: "SearchTutorsForm",

  data: () => ({
    items: ['07:00 - 08:00 am', '08:00 - 09:00 am', '09:00 - 10:00 am', '10:00 - 11:00 am'],
    valid: false,
    university: '',
    career: '',
    hour: '',
    displayInstitutes: [],
    institutes: [],
    displayCareers: [],
    careers: [],

    nameRules: [
      v => !!v || 'Este campo es requerido',
      v => v.length <= 30 || 'Name must be less than 30 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

  }),
  methods: {
    enviarDatos() {
      this.$emit('getData', this.university, this.career, this.course, this.hour)
    },
    getInstitutes() {
      InstitutesApiService.getAll().then(result => {
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayInstitutes.push(result.data[i].name);
        }
        this.institutes = result.data;
      })
    },
    getCareers(careerId) {
      CareersApiService.getAll(careerId).then(result => {
        console.log(result)
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayCareers.push(result.data[i].name);
        }
        this.careers = result.data;
      })
    }
  },
  created() {
    this.getInstitutes();
  },
  watch: {
    university:function (value) {
      this.displayCareers = []
      for(let i = 0; i < this.institutes.length; i++) {
        if (this.institutes[i].name === value) {
          this.getCareers(this.institutes[i].id);
        }
      }
    },
    career:function (value) {
      for(let i = 0; i < this.careers.length; i++) {
        if (this.careers[i].name === value) {
          console.log("career id: " + this.careers[i].id)
          this.career = this.careers[i].id;
        }
      }
    }
  }
}
</script>

<style scoped>
.documents-container-form {
  padding: 40px;
  border-radius: 20px;
}

.documents-container-form-button {
  width: 200px;
  background: #2C305B !important;
  color: white;
  display: flex;
  margin: 0 auto;
}
</style>