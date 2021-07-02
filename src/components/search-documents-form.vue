<template>
  <v-form v-model="valid">
    <v-container class="documents-container-form">
      <v-row>
        <v-col cols="12" md="6">
          <v-select
              v-model="university"
              :items="displayInstitutes"
              label="Universidad"
              outlined
              required
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
              v-model="career"
              :items="displayCareers"
              label="Carrera"
              outlined
              required
          ></v-select>
        </v-col>

      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
              v-model="course"
              :items="displayCourses"
              label="Curso"
              outlined
              required
          ></v-select>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
              v-model="theme"
              :items="displayTopics"
              label="Tema"
              outlined
              required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="documents-container-form-button" @click="enviarDatos">Buscar</v-btn>
  </v-form>
</template>

<script>
import InstitutesApiService from "../services/institutes-api.service";
import CareersApiService from "../services/careers-api.service";
import CoursesApiService from "../services/courses-api.service";
import TopicsApiService from "../services/topics-api.service"


export default {
  name: "SearchDocumentsForm",
  data: () => ({
    valid: false,

    university: '',
    institutes: [],
    displayInstitutes: [],

    career: '',
    displayCareers: [],
    careers: [],

    course: '',
    displayCourses: [],
    courses: [],

    theme:'',
    displayTopics: [],
    topics: [],
  }),
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
      this.displayCourses = []
      for(let i = 0; i < this.careers.length; i++) {
        if (this.careers[i].name === value) {
          this.getCourses(this.careers[i].id)
        }
      }
    },
    course:function (value) {
      this.displayTopics = []
      for(let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].name === value) {
          console.log("id curso:", this.courses[i].id)
          this.getTopics(this.courses[i].id)
        }
      }
    },
    theme:function (value) {
      for(let i = 0; i < this.topics.length; i++) {
        if (this.topics[i].name === value) {
          console.log("id topic:", this.topics[i].id)
          this.theme = this.topics[i].id;
        }
      }
    }
  },
  methods:{
    enviarDatos(){
      this.$emit('getData',this.university,this.career,this.course,this.theme)
    },
    getInstitutes() {
      InstitutesApiService.getAll().then(result => {
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayInstitutes.push(result.data[i].name);
        }
        this.institutes = result.data;
      })
    },
    getCareers(instituteId) {
      CareersApiService.getAll(instituteId).then(result => {
        console.log(result)
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayCareers.push(result.data[i].name);
        }
        this.careers = result.data;
      })
    },
    getCourses(courseId) {
      CoursesApiService.getAll(courseId).then(result => {
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayCourses.push(result.data[i].name);
        }
        this.courses = result.data;
      })
    },
    getTopics(courseId) {
      console.log("llamada a api topics: ", courseId)
      TopicsApiService.getAll(courseId).then(result => {
        console.log(result)
        for (let i = 0; i < result.data.length; i++ ) {
          this.displayTopics.push(result.data[i].name);
        }
        this.topics = result.data;
      })
    }

  }

}
</script>

<style scoped>
.documents-container-form{
  padding: 40px;
  border-radius: 20px;
}
.documents-container-form-button{
  width: 200px;
  background: #2C305B !important;
  color: white;
  display: flex;
  margin: 0 auto;
}
</style>