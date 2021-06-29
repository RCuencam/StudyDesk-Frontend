<template>
  <div class="tutors">
    <div class="tutors-container">
      <h1>Buscar Tutores</h1>
      <SearchTutorsForm @getData="getData"/>
      <v-progress-circular
          v-if="loader"
          :size="70"
          :width="7"
          color="#2C305B"
          align="center"
          indeterminate
          class="loader"
      ></v-progress-circular>
      <v-card v-else
              v-for="item in tutors"
              :key="item.id"
              class="tutors-container-item"
              @click="goToTutor(item.id)">
        <div class="tutors-container-item-img">
          <img src="../images/tutor.png" alt="Document">
        </div>
        <div class="tutors-container-item-text">
          <h2 class="tutors-container-item-text-title">{{item.name}}</h2>
          <v-rating color="red" class="tutors-container-item-text-rating"
                readonly :value="item.qualification"></v-rating>
          <v-card-text>{{item.description}}</v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import SearchTutorsForm from "@/components/search-tutors-form";
import TutorsApiService from "../services/tutors-api-service";
export default {
  name: "Tutors",
  data:()=>({
    loader:false,
    tutors:[]
  }),
  components:{
    SearchTutorsForm
  },
  methods:{
    getData(university,career,course,hour){
      this.loader=true;
      console.log(university,career,course,hour)
      TutorsApiService.getAll().then(data=>{
        setTimeout(()=>{
          console.log(data)
          this.tutors=data.data
          this.loader=false
        },500)
      })
    },
    goToTutor(id){
      this.$router.push(`/search/tutors/${id}`)
    }
  }
}
</script>

<style scoped>
.tutors{
  width: 100%;
}
.tutors-container{
  width: 50%;
  margin: 50px auto;
}
@media screen and (max-width: 768px){
  .tutors-container{
    width: 80%;
  }
  .tutors-container-item{
    flex-direction: column;
    text-align: center;
  }
  .tutors-container-item-text-title{
    text-align: center !important;
  }
}
.tutors-container h1{
  text-align: center;
  color: #2C305B;
}
.loader{
  display: flex;
  margin: 100px auto;
}
.tutors-container-item{
  display: flex;
  align-items: center;
  margin: 30px 0;
  transition: all 500ms;
}
.tutors-container-item:hover{
  transform: scale(1.1);
}
.tutors-container-item-img img{
  width: 100px;
  height: 100px;
}
.tutors-container-item-text{
  padding: 20px;
}
.tutors-container-item-text > div{
  padding: 0 ;
}
</style>