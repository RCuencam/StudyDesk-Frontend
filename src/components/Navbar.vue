<template>
  <v-card
      color="grey lighten-4"
  >
    <v-toolbar
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div>
        <v-avatar
            class="user"
            size="40"
        >
          <span class="white--text text-h5">User</span>
        </v-avatar>
        <span class="white--text text-h5">Javier Luján</span>
        <v-btn icon small class="row-button">
          <v-icon
              large
              dense
          >
            mdi-chevron-down
          </v-icon>
        </v-btn>
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
</style>