<template>
  <v-form v-model="valid" data-app>
    <v-container fluid id="bg">
      <v-row justify="center">
        <v-col cols="12" sm="6" xs="3">
          <h1>StudyDesk</h1>

          <h3>Conviértete en tutor</h3>
          <h4>Ingrese los cursos que domina</h4>
          <h4>(Minimo 1 - Maximo 4)</h4>

          <v-row>
            <!--falta arreglar responsive-->
            <v-col cols="12" xs="2">
              <v-row dense no-gutters>
                
                <v-col>
                  <h4>PRIMER CURSO</h4>
                </v-col>
                <v-col>
                  <v-select
                    height="50px"
                    background-color="#ffffff"
                    style="width: 300px"
                    rounded
                    :items="courses"
                  ></v-select>
                </v-col>
                
              </v-row>
              <v-row dense no-gutters>
               
                <v-col>
                  <h4>SEGUNDO CURSO</h4>
                </v-col>
                <v-col>
                  <v-select
                    height="50px"
                    background-color="#ffffff"
                    style="width: 300px"
                    rounded
                    :items="courses"
                  />
                </v-col>
                
              </v-row>
              <v-row dense no-gutters>
                
                <v-col>
                  <h4>TERCER CURSO</h4>
                </v-col>
                <v-col>
                  <v-select
                    height="50px"
                    background-color="#ffffff"
                    style="width: 300px"
                    rounded
                    :items="courses"
                  />
                </v-col>
                
              </v-row>
              <v-row dense no-gutters>
                
                <v-col>
                  <h4>CUARTO CURSO</h4>
                </v-col>
                <v-col>
                  <v-select
                    height="50px"
                    background-color="#ffffff"
                    style="width: 300px"
                    rounded
                    :items="courses"
                  />
                </v-col>
                
              </v-row>
              <v-btn
                color="#2c305b"
                dark
                rounded
                class="shrink mx-4"
                style="margin-top: 10px"
                @click="isShowDialog = true"
              >
                Crear perfil de tutor
                <MyDialog :value="isShowDialog"></MyDialog>
              </v-btn>
              




            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6"  xs="3" id="bg-color">
          <v-spacer style="height: 15vh" />
          <v-row>
            <v-spacer></v-spacer>
            <v-img
              src="../images/avatar.png"
              style="opacity: 0.7"
              contain
              min-width="280px"
            >
            </v-img>
            <v-spacer></v-spacer>
          </v-row>
          <v-spacer style="height: 15vh" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import MyDialog from '../components/show-dialog.vue'

export default {
  name: "TutorsDescription",
  data() {
    return {
      valid: false,
      description: "",
      price: "",
      theme: "",
      courses: ['Calculo 1', 'Programacion 2','Senderismo','Filosofia'],
      textAreaRules: [
        (v) => !!v || "Este campo es requerido",
        (v) => v.length <= 300 || "Name must be less than 300 characters",
      ],
      isShowDialog:false,
    };
  },
  components:{
    MyDialog
  },
  methods:{
    
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

  font-weight: 500;
  font-size: 1.5em;
}

h4 {
  padding-top: 30px;
  font-size: 1.05em;
}
</style>