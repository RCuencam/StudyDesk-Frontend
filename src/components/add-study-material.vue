<template>
  <v-card data-app>
    <div align="left">
      <v-icon x-large class="mr-2" @click="navigateToHome()">
        mdi-arrow-left-bold
      </v-icon>
      <label>Volver al menú principal</label>
    </div>
    <v-card-title class="justify-end">
      <span class="header" style="color: rgb(44,48,91)" ><h1>StudyDesk</h1> </span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="editedItem.title" label="titulo"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-textarea v-model="editedItem.description" filled rounded label="Descripción del documento"></v-textarea>
          </v-col>
          <v-card-actions class="documents-file">
            <v-btn color="blue darken-1" text @click="addStudyMaterial">Buscar en el equipo </v-btn>
            <p>{{file.name}}</p>
            <v-img src="fileImage"></v-img>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
    <v-dialog v-model="dialogSave" max-width="500px">
      <v-card>
        <v-card-text>
          <p>Study Material Created successfully</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="navigateToHome">Confirm</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import StudyMaterialsApiService from "@/services/study-materials-api.service";
import InstitutesApiService from "@/services/institutes-api.service";
/*import CareersApiService from "@/services/careers-api.service";
import CategoriesApiService from "@/services/categories-api.service";
import CoursesApiService from "@/services/courses-api.service";
import TopicsApiService from "@/services/topics-api.service";*/
import * as filestack from 'filestack-js';
export default {
  name: "add-studyMaterial",
  data() {
    return {
      search: '',
      dialog: false,
      dialogSave: false,
      studyMaterials:[],
      displayStudyMaterials: [],
      institutes:[],
      editedIndex: -1,
      editedItem:{title: '', description: '', fileUrl:'', topicId:1},
      defaultItem:{id:0, title: '', description: ''},
      file:{},
      fileImage:"",

    }
  },
  watch: {
    dialog(val) {val || this.close()},
    dialogSave(val) {val || this.closeSave()},
  },
  created(){
    InstitutesApiService.getAll()
        .then(response => {
          this.institutes = response.data.map(data=> data.title);
          console.log(this.institutes);
        })
        .catch((e) => {
          console.log(e);
        });
  },
  methods: {

    retrieveStudyMaterials() {
      StudyMaterialsApiService.getAll()
          .then(response => {
            this.studyMaterials = response.data;
            this.displayStudyMaterials = response.data.map(this.getDisplayStudyMaterial);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayStudyMaterial(studyMaterial) {
      return {
        id: studyMaterial.id,
        title: studyMaterial.title,
        description: studyMaterial.description,
      };
    },

    refreshList() {
      this.retrieveStudyMaterials();
    },

    save() {
      this.dialogSave = true;
      if (this.editedIndex > -1) {
        this.studyMaterials[this.editedIndex] = this.editedItem;
        this.displayStudyMaterials[this.editedIndex] = this.getDisplayStudyMaterial(this.studyMaterials[this.editedIndex]);
        StudyMaterialsApiService.update(this.editedItem.id, this.editedItem)
            .then(() => {

              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });

      } else {
        StudyMaterialsApiService.create(this.editedItem)
            .then(response => {
              console.log('rpta',response,this.editedItem);
              let item = response.data;
              this.studyMaterials.push(item);
              this.displayStudyMaterials.push(this.getDisplayStudyMaterial(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.dialogSave = true;
    },
    closeSave(){
      this.dialogSave = false;
    },
    close() {
      this.navigateToHome();
    },
    navigateToHome() {
      this.$router.push('/');
    },
    addStudyMaterial()
    {
      const client = filestack.init("AkbOUC0woSXyXNPNflK1Yz");
      const options = {
      acceptFn: (file, options) => {
        return options.mimeFromMagicBytes(file.originalFile).then(() => {
        this.file=file
        this.fileImage=file.url
        console.log('iamge',file);
        })}
        };
      client.picker(options).open();
      console.log(client);
    }
  }
}
</script>

<style>

</style>