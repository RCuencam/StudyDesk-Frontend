<template>
  <v-card
      color="grey lighten-4"
  >
    <v-toolbar
      data
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

    <div class="navbar_buttons">
      <ul>
        <li><button @click="login()">Login</button></li>
        <li><button @click="register()">Register</button></li>
        <li><button @click="perfilTutor()">Perfil Tutor</button></li>
        <li><button @click="perfilStudent()">Perfil Usuario</button></li>
      </ul>
    </div>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods:{
    login(){
      this.$router.push('/login')
    },
    register(){
      this.$router.push('/register')
    },
    perfilTutor(){
      this.$router.push('/tutorprofile')
    },
    perfilStudent(){
      this.$router.push('/student/profile')
    }
  }
}
</script>

<style scoped>
.user{
  background: darkblue;
  color: white;
  font-weight: 700;
  margin-right: 10px;
}
.row-button{
  margin-left: 10px;
  padding: 5px;
}
.navbar_buttons ul{
  list-style:none;
  display: flex;
}
.navbar_buttons ul li{
  margin: 0 10px;
}
.navbar_buttons ul li button{
  border: 1px solid darkblue;
  color: darkblue;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>