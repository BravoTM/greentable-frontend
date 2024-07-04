<template >
  
  <div class="HEADER"></div>
  <div class="movableheader"></div>
  <div class="homepg">
    <div class="homecontainer">
      <div class="ftopimage">
      <img class="topimg"  src="./../../public/images/Creamy Pasta Delight.jpg"  alt="fetured meals">
    </div>
  <div class="welcometxt">
    <h1  class="welcome">Welcome <span class="to">to</span> </h1>
    <h1 class="title">{{ title }}</h1>
    <div class="squre"></div>
    <br>
    <div class="wrapper">
    <p>for better experience create an account </p>
    <P>and add your location</p>
      <div class="squrebtm"></div>
    <button  class="suingupbtn">sign up</button>
    <br>
    <br>
    <span class="alternative">Already have an account:</span>
    <button @click="goToLogin" class="loginbtn">login</button>
  </div>
  <div class="btmimgwraper">
  
  </div>
  <div class="fbtmimage">
      <img class="btmimg"  src="./../../public/images/burger.jpg"  alt="fetured burger">
    </div>
  </div>
</div>

</div>

</template>

<script>


export default {
  data() {
    return {
      title:"GreenTable",
      

    };
  },
  components:{},
  methods:{
    goToLogin(){
      this.$router.push('/login')
    }

  }
};
</script>

<style scoped>
.fbtmimage{
  margin-left: 4vw;
}
.wrapper{
  margin-left: 28vw;
}
.squrebtm{
  background-color: #D9D9D9;
  width:6vw ;
  height:10vh ;
  border-radius: 10px;
  margin-left: -10vw;
  


}
.squre{
  float: right;
  background-color: #D9D9D9;
  width:6vw ;
  height:10vh ;
  border-radius: 10px;
  margin-right: 10vw;

}
.topimg{
  border-radius: 25px;
  height: 30vh;
  width: 14vw;
}
.btmimg{
  border-radius: 25px;
  height: 25vh;
  width: 12vw;
}

.ftopimage{
  float: right;
  margin-right: 17vw;
  margin-top:2vh;
}

.alternative{
  font-size:0.8em;
  color: #000;
  margin-left: 5vh;
}

.loginbtn{
  background-color: #D9D9D9;
  border-radius: 8px;
  padding: 5px 10px;
  margin-left: 1vw;
  color: #000;
}
.suingupbtn{
  background-color: #000;
  border-radius: 10px;
  color: white;
  padding: 2px 10px;
  margin-left: 2vw;

}
@font-face {
  font-family: 'Linden Hill';
  src: local('Linden Hill'), url('/public/fonts/Linden Hill.ttf') format('opentype');
}
p{
  font-family: 'Linden Hill', sans-serif;
  color: #000;
  margin-right: 30vw;
  font-size: 30px;
}
@font-face {
  font-family: 'Limelight';
  src: local('Limelight'), url('/public/fonts/Limelight.ttf') format('opentype');
}
.title{
  font-size: 60px;
  font-family: 'Limelight', sans-serif;
  color: #000;
  margin-left: 25vw;
}
@font-face {
  font-family: 'Macondo';
  src: local('Macondo'), url('/public/fonts/Macondo.ttf') format('opentype');
}
.welcome{
  font-size: 40px;
  color:#000;
  font-family: 'Macondo', sans-serif;
  margin-left:20vw;

}
.welcometxt{
  padding-top: 14vh;
  
}
.btmimgwraper{
  margin-bottom: -10vh;
}

@font-face {
  font-family: 'Leckerli One';
  src: local('Leckerli One'), url('/public/fonts/Leckerli One.ttf') format('opentype');
}
.to{
  color: #000;
  font-family: 'Leckerli One', sans-serif;
}
.movableheader{
  background-color: #C6BAAF;
  height: 8vh;
  width: 100%;
  
}
.HEADER{
  background-color: #C6BAAF;
  height: 8vh;
  width: 100%;
  position: fixed;
}



.homepg{
  background-color: #C6BAAF;
  color: white;
  width: 100%;
  height:100%;
  top: 0px;
}

</style>