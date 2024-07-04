<script setup>
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue';
</script>

<template>
  <v-app>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </v-app>
</template>
<style scoped>
#app{
  background-color: #C6BAAF;
}
</style>
