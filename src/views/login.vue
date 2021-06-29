<template>
  <div id="login">
    <div class="title">
      <h1>
        Bienvenido a StudyDesk
      </h1>
    </div>

    <v-form ref="form" v-model="valid" lazy-validation class="form" @submit.prevent="handleLogin">
      <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="user.password"
          type="password"
          :rules="[v => !!v || 'Password is required']"
          label="Password"
          required
      ></v-text-field>

      <v-btn :disabled="!valid" type="submit" class="button">
        INICIAR SESIÓN
      </v-btn>

    </v-form>

  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    user: {},
    success: false,
    checkbox : false,
    valid: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
  }),
  methods: {
    handleLogin() {
      console.log('Starting Login handling');
      console.log(this.user.email)
      console.log(this.user.password)

      if (this.user.email && this.user.password) {
        console.log('Starting Request');
        this.$store.dispatch('auth/login', this.user).then(
            (user) => {
              console.log('Logged In');
              console.log(user);
              if (user.token) this.$router.push('/');
            },
            error => {
              console.log('Error');
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
            }
        )
      }
    }
  }
}
</script>

<style scoped>

#login {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 91vh;
}

.title {
  flex-basis: 40%;
}
.title h1 {
  text-align: center;
  font-size: 300%;
}

.form {
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
}
.button {
  margin-top: 30px;
}

</style>