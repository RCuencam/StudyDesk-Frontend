<template>
  <div id="register">
    <div class="title">
      <h1>
        Bienvenido a StudyDesk
      </h1>
    </div>

    <v-form ref="form" v-model="valid" lazy-validation class="form" @submit.prevent="handleRegister">
      <v-text-field v-model="user.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
      ></v-text-field>

      <v-text-field v-model="user.name"
                    :rules="[v => !!v || 'Username is required.']"
                    label="Name"
                    required
      ></v-text-field>

      <v-text-field v-model="user.lastName"
                    :rules="[v => !!v || 'Username is required.']"
                    label="Last name"
                    required
      ></v-text-field>

      <v-text-field v-model="user.password"
                    type="password"
                    :rules="[v => !!v || 'Password is required']"
                    label="Password"
                    required
      ></v-text-field>

      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
      ></v-checkbox>

      <v-btn :disabled="!valid" type="submit">
        REGISTRARSE
      </v-btn>

    </v-form>

  </div>
</template>

<script>

//todo: para crear al usuario el campo user.logo debe ser igual a "default"
export default {
  name: "register",
  data() {
    return {
      user: {},
      valid: false,
      checkbox: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }
  },
  methods: {
    handleRegister() {
      if (this.valid) {
        this.user.logo = "default";
        // todo: user career:
        this.user.career = 1
        this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              console.log(data)
              if (data.id) this.$router.push('/');
            },
            error => {
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
#register {
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
</style>