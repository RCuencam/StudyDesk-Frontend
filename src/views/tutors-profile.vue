<template>
  <v-form v-model="valid" data-app>
    <v-container fluid id="bg">
      <v-row justify="center">
        <v-col cols="12" sm="6" xs="12">
          <h1>StudyDesk</h1>

          <h3>Perfil de Tutor</h3>
          
          <v-row style="margin-top:20px">
            <v-col cols="12" sm="6" xs="12">
                <v-avatar size="100%">
                <v-img src="../images/usuario1.jpg"> </v-img>
                </v-avatar>

            </v-col>
            <v-col cols="12" sm="6" xs="12">
                
                <v-card 
                elevation="10" 
                height="100%"
                >
                    
                    <h3 style=""> <span style="font-weight:800">Soy</span> <br>Javier Lujan</h3>
                    <h4>Tutor de la carrera de Ingeniería de Software</h4>
                    <h4>+51 930 390 432</h4>
                    <v-icon>mdi-cellphone</v-icon>
                    <h5 style="margin-top:30px">Miembro de StudyDesk desde 01/02/2021</h5>

                   
                </v-card>
            </v-col>
                
          </v-row>
          <v-row>
            <!--falta arreglar responsive-->
            <v-col cols="12" xs="2">
              <v-btn
                color="#2c305b"
                dark
                rounded
                class="shrink mx-4"
                style="margin-top: 10px"
                @click="isShowDialog = true"
              >
                Editar perfil
                <MyDialog :value="isShowDialog"></MyDialog>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" xs="12" id="bg-color">
          
          <v-row>
            <v-spacer></v-spacer>
            <!--<v-img
              src="../images/avatar.png"
              style="opacity: 0.7"
              contain
              min-width="280px"
            >
            </v-img>-->
            <v-spacer></v-spacer>
          </v-row>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>


<script>
export default {};
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
  font-size: 1.7em;
}

h4 {
  padding-top: 30px;
  font-size: 1.05em;
}
</style>