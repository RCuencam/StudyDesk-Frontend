<template>
  <div>
    <Navbar />
    <router-view data-app></router-view>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
*{
  font-family: 'Lato', sans-serif;
}
</style>
