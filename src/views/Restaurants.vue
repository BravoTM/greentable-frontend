<template>
  <div class="HEADER">
   <div class="banner">
    <div class="burier"></div>
    <div class="slider" style="--quantity: 10">
        <div v-for="(image, index) in images" :key="index" class="item" :style="{ '--position': index + 1 }">
          <img :src="image" alt="images">
        </div>
      </div>
        </div>
  </div>
  <div class="movableheader"></div>
  <div class="homepg">
    <div class="homecontainer">
      <div class="section">

      </div>
    
      <div class="restaurant-container">
        <ul class="arrangement">
          <li v-for="restaurant in restaurants" :key="restaurant.id" @click="gotoRestaurant(restaurant.id)">
            <div class="restaurant-card">
              <img :src="require(`@/assets/${restaurant.image}`)" :alt="restaurant.title" @click="favourite(restaurant)"  >
              <!--:class="{ fav : anime.isfav }">-->
                <div class="restaurant-info">
          <h2 class="restaurant-name">{{ restaurant.title }}</h2>
          <p class="restaurant-rating">{{ restaurant.rating }}</p>
          <p class="restaurant-availability">{{ restaurant.info }}</p>
    </div>
  </div>
          </li>
        </ul>
      </div>
    
    </div>
  </div>
</template>

<script>
 import dragon1 from './images/dragon_1.jpg';
import dragon2 from './images/dragon_2.jpg';
import dragon3 from './images/dragon_3.jpg';
import dragon4 from './images/dragon_4.jpg';
import dragon5 from './images/dragon_5.jpg';
import dragon6 from './images/dragon_6.jpg';
import dragon7 from './images/dragon_7.jpg';
import dragon8 from './images/dragon_8.jpg';
import dragon9 from './images/dragon_9.jpg';
import dragon10 from './images/dragon_10.jpg';

export default {
  components: { },
  
  data() {
    return {
      restaurants: [
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 1.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 2.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 3.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 4.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 5.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 6.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 7.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 8.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 9.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 10.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 11.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 12.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 13.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 1.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 2.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 3.jpeg'},
        {title:'amanda',rating:'5.2',info:'delivery available',image:'restaurant 4.jpeg'},
        
      ],
      images: [
        dragon1,
        dragon2,
        dragon3,
        dragon4,
        dragon5,
        dragon6,
        dragon7,
        dragon8,
        dragon9,
        dragon10,
        ]

    }}


}
</script>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/ica-rubrik-black');
@import url('https://fonts.cdnfonts.com/css/poppins');

.banner{
    width: 100%;
    height: 200vh;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.banner .slider{
    position: absolute;
    width: 100px;
    height: 150px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
}
@keyframes autoRun{
    from{
        transform: perspective(1000px) rotateX(1deg) rotateY(0deg);
    }to{
        transform: perspective(1000px) rotateX(1deg) rotateY(360deg);
    }
}

.banner .slider .item{
    position: absolute;
    inset: 0 0 0 0;
    transform: 
        rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(350px);
}
/* Add burier styles */
  .banner .burier {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    transform: translateZ(-200px); /* move burier to the back */
    z-index: 1; /* ensure burier is behind the slider */
  }
  
.banner .slider .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1023px) {
    .banner .slider{
        width: 160px;
        height: 200px;
        left: calc(50% - 80px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(300px);
    }
    
    
}
@media screen and (max-width: 767px) {
    .banner .slider{
        width: 100px;
        height: 150px;
        left: calc(50% - 50px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(180px);
    }
    
}

.arrangement{
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  justify-content: space-around;
}
.restaurant-card{
  width: 200px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  background-color: #f9f7f7;
  position: relative;
}

.restaurant-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.restaurant-info {
  padding: 10px;
  color: #030202;
}

.restaurant-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #030202;
}

.restaurant-rating {
  font-size: 0.9rem;
  color: #007bff;
  margin-bottom: 5px;
}

.restaurant-availability {
  font-size: 0.8rem;
  color: #050202;
  z-index: 100px;
}
.section{
  min-height: 30vh;
  background-color: #302519;
  margin-bottom: 50px;
  top: 0px;
}

.homecontainer{
  background-color: #030202;
  margin: 0px;
  min-height: 300vh;
  padding: 10px;
  align-items: auto;
}
.restaurant-container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #383634;
  padding: 10px;
  border-radius: 25px;
  max-width: 90%;
  min-height: 100vh;
  margin-left: 55px;
}
.movableheader{
  background-color: #C6BAAF;
  height: 8vh;
  width: 100%;
  z-index: 1000px;
  
}
.HEADER{
  background-color: #C6BAAF;
  height: 8vh;
  width: 100%;
  z-index: 1000px;
}
.homepg{
  background-color: #f87d03;
  color: white;
  width: 100%;
  height:100%;
  top: 0px;
  margin: 0px;
}


</style>