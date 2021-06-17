<template>
  <div class="text-center">
    <v-dialog
      v-model="value"
      width="500"
      persistent
      >
      
      <v-card
      outlined
      elevation="10"
      >
        <v-card-title class="text-h5">
          Se creó su perfil como tutor satisfactoriamente
        </v-card-title>
        <v-card-text style="text-align: center">
            <v-icon size="200px" color="#4bb44f">mdi-checkbox-marked-circle</v-icon>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            color="#357e37"
            dark
            
            @click="clickHandler"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
      
      
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:{
        value:Boolean
    },
    data() {
        return {
          
        }
    },
    methods:{
        clickHandler: function(){
            this.value = false;
            this.$router.push('/tutorprofile');
        }
    }
}
</script>

<style>
   
</style>