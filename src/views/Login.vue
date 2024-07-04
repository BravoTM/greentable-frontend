<template>
    <div class="Loginpage">
        <div class="backdrop">
            <div class="loginform">
                <h2 class="welcomebk"> Welcome back to </h2>
                <br>
                <h2 class="loginlogo">GreenTable</h2>
                <div class="blurform">
                    <form @submit.prevent="login">
                        <div class="emailform">
                            <label for="email">Email Address:</label>
                            <input type="email" id="email" v-model="email" >
                        </div>
                        <div class="passwordform">
                            <label for="password">Password :</label>
                            <input type="password" id="password" v-model="password" >
                        </div>
                        <button class="loginbtn">login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  data(){
  return{
    email: 'strathmore@gmail.com',
    password: '123456#3',

  }}
  
  }
  </script>
  
  <style scoper>
  
  .loginbtn{
    background-color: #4141f6;
    border-radius: 10px;
    margin-left: 10vw;
    padding:5px 12px;
  }
  input{
    width: 95%;
    height: 20%;
    padding: 10px 20px;
    margin: 3px 5px;
    border: none;
    background-color: #070606;
    color: #000;
    font-size: 0.4em;
  }
  label{
    margin-left: 2vw;
    font-family: 'Lily Script One', sans-serif;
    color: #000;
    font-size: 18px;
  }
  .emailform{
    margin-bottom: 15vh;
    border-radius: 20px;
    padding: 2px;
    background-color: #C6BAAF;
    width: 20vw;
    margin-left: 3vw;

  }
  .passwordform{
    margin-left: 3vw;
    margin-bottom: 5vh;
    border-radius: 20px;
    padding: 2px;
    background-color: #C6BAAF;
    width: 20vw;
  }
  .blurform{
    background-color: #9c9a9a88;
    padding: 20px;
    border-radius:0px 0px 35px 35px;
    width: 28vw;
    margin: 0px;
    height: 60vh;

  }
  .loginlogo{
    font-family: 'Linden Hill', sans-serif;
    font-size: 38px;
    margin-left: 1vw;
  }
  @font-face {
  font-family: 'Lily Script One';
  src: local('Lily Script One'), url('/public/fonts/Lily Script One.ttf') format('opentype');
}
@font-face {
  font-family: 'Linden Hill';
  src: local('Linden Hill'), url('/public/fonts/Linden Hill.ttf') format('opentype');
}
  @font-face {
  font-family: 'Lobster Two';
  src: local('Lobster Two'), url('/public/fonts/Lobster Two.ttf') format('opentype');
}
  .Loginpage{
      width: 100%;
      background-color: antiquewhite;
      height: 100vh;
  }
  .welcomebk{
    font-family: 'Lobster Two', sans-serif;
    font-size: 35px;
    margin-left: 1vw;
  }
  .backdrop{
      width: 100vw;
      background-color: rgba(3, 3, 3, 0.616);
      height: 100vh;
      margin: 0;
      padding:15vh 38vw;
  }
  .loginform{
    color: white;
    width: 28vw;
    height:80vh;
    border-radius: 30px;
    background-image: url(./../../public/images/greentable\ meal.jpg);
    background-size: cover;
  }
  
  </style>