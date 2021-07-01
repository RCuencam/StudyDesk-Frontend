<template>
  <v-form v-model="valid">
    <v-container fluid id="bg">
      <v-row>
        <v-col cols="12" sm="6" class="tutor_description">
          <h1>StudyDesk</h1>

          <h3>Conviértete en tutor</h3>
          <h4>Ingrese una pequeña descripción suya - Experiencia</h4>

          <v-textarea
            style="margin: 30px 20px 0px 20px; background-color: white"
            height="130px"
            filled
            clearable
            counter
            clear-icon="mdi-close-circle"
            no-resize
            placeholder="Ingresa tu biografia, habilidades, etc"
            :rules="textAreaRules"
            
          ></v-textarea>

          <h4>Ingrese su rango de precios por hora</h4>

          <v-row>
            <v-spacer></v-spacer>

            <v-col cols="6">
              <v-text-field
                style="margin-top: 30px"
                background-color="#ffffff"
                dense
                single-line
                filled
                append-icon="mdi-cash-multiple"
                class="shrink mx-4"
              >
              </v-text-field>

              <v-btn color="#2c305b" dark rounded class="shrink mx-4" 
              @click="()=>this.$router.push('/tutorscourses')">
                Siguiente
              </v-btn>
            </v-col>

            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "TutorsDescription",
  data() {
    return {
      valid:false,
      description:'',
      price:'',
      textAreaRules: [
      v => !!v || 'Este campo es requerido',
      v => v <= 300 || 'Name must be less than 300 characters',
      ],

    }
  },
};
</script>

<style scoped>
#bg {

  text-align: center;
}

#bg-color {
  background-color: rgba(103, 204, 210, 0.8);
  height: 100vh;
}

h1 {
  padding-top: 40px;
  font-weight: 800;
  font-size: 3em;
  color: #2c305b;
}

h3 {
  padding-top: 20px;

  font-weight: 500;
  font-size: 1.5em;
}

h4 {
  padding-top: 30px;
  font-size: 1.05em;
}
.tutor_description{
  margin: 0 auto;
  height: 100vh;
}
</style>