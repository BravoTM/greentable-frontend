<template>
  <div class="navbarcontainer">
    <vue-navigation-bar class="navbar" style="border-radius: 35px">
      <!-- App bar links container with five links -->
      <div class="appbarlinks">
        <BurgerButton @click="touggledrawer" />
        <Drawer v-if="showdrawer" @closedrawer="closeblind"/>
        <div class="link-container">
          <router-link to="/" class="logo">Green<span class="tablelogo">Table </span></router-link>
          <router-link to="/Restaurants" class="restaurantsbutton">restaurants</router-link>
          <router-link to="/Orderfood" class="link">orderfood</router-link>
          <router-link to="/Community" class="link">community</router-link>
          <router-link to="/Login" class="link">login</router-link>
          <router-link to="/experiment" class="link">experiment</router-link>
        </div>
      </div>
    </vue-navigation-bar>
  </div>
</template>

<script>
// Importing the Home component

import Drawer from "./Drawer.vue"

export default {
  data() {
    return {
      showdrawer:false,
    };
  },
  components:{Drawer },
  methods:{
    touggledrawer(){
      this.showdrawer=!this.showdrawer
    },
    closeblind(){
      this.showdrawer=false
    },
  }
};
</script>

<style scoped>


@font-face {
  font-family: 'Kelly Slab';
  src: local('Kelly Slab'), url('/public/fonts/KellySlab.otf') format('opentype');
}

.restaurantsbutton {
  background-color: black;
  color: #fbfafa;
  border-radius: 7px;
  padding: 0 5px;
  font-family: 'Kelly Slab', sans-serif;
}
.tablelogo {
  color: black;
  font-size: 40px;
}

.navbar {
  /* Nav bar styles */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 35px;
  margin: 10px 90px;
  background-color: #D9D9D9; /* Grey background color with 0.8 opacity */
  width: 85%; /* Use percentage or vw as needed */
  z-index: 200;
  position: fixed;
  color: aliceblue;
}

.appbarlinks {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.link-container {
  display: flex;
  justify-content: space-around;
  width: 70vw;
  align-items: center;
}

@font-face {
  font-family: 'Kenia';
  src: local('Kenia'), url('/public/fonts/kenia.woff') format('woff');
}

.link {
  text-decoration: none;
  font-size: 14px;
  color:#000;
  font-family: 'Kelly Slab', sans-serif;
}

.logo {
  font-family: 'Kenia', sans-serif;
  color: #000;
  font-size: 24px;
  text-decoration: none;
}
.navbarcontainer {
  width: 80vw;
  z-index: 20;
}
</style>