<template>
  <v-form v-model="valid" data-app>
    <v-container class="documents-container-form">
      <v-row>
        <v-col
            cols="12"

            md="6"
        >
          <v-text-field
              v-model="university"
              :rules="nameRules"
              :counter="30"
              label="Universidad"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="6"
        >
          <v-text-field
              v-model="career"
              :rules="nameRules"
              :counter="30"
              label="Carrera"
              required
          ></v-text-field>
        </v-col>

      </v-row>
      <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <v-text-field
              v-model="course"
              :rules="nameRules"
              :counter="30"
              label="Cursos"
              required
          ></v-text-field>
        </v-col>

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
export default {
  name: "SearchTutorsForm",
  data: () => ({
    items: ['07:00 - 08:00 am', '08:00 - 09:00 am', '09:00 - 10:00 am', '10:00 - 11:00 am'],
    valid: false,
    university: '',
    career: '',
    course: '',
    hour: '',

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