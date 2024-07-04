<template>
  <div class="foterbgc">
    <div class="home-footer">
      <footer>
        <div class="footertitle">
          <ul>
            <li><h3>foodOdering</h3></li>
            <li><h3>restaurant service</h3></li>
            <li class="spacecommunity"><h3>community</h3></li>
          </ul>
          <hr>
        </div>
        <div class="container">
          <div>
            <ul>
              <li>overview</li>
              <li>websiteorderind</li>
              <li>mobileapp</li>
              <li>how it works</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>overview</li>
              <li>table reservation</li>
              <li>pre-oderfood</li>
              <li>food deliverry</li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul>
              <li>overview</li>
              <li>join GreenTablecommunity</li>
              <li>activities</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <ul class="footer-links">
              <li><a href="#">contactus</a></li>
              <li><a href="#">location</a></li>
              <li><a href="#">aboutus</a></li>
              <li><a href="#">cookie preferences</a></li>
            </ul>
            <ul class="social-icons">
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.col-md-2 {
  padding-left: 100px;
}

.spacecommunity {
  padding-left: 100px;
}

@font-face {
  font-family: 'kavoon';
  src: local('kavoon'), url('/public/fonts/Kavoon.ttf') format('opentype');
}
@font-face {
  font-family: 'kurale';
  src: local('kurale'), url('/public/fonts/Kurale.ttf') format('opentype');
}

hr {
  border: 1px solid #f8f5f5;
  margin-bottom: 20px;
}

.home-footer {
  background-color: #0e0b0b;
  border-radius: 25px 25px 0px 0px;
  color: #fff;
  padding: 2rem 1rem;
  width: 100%;
  z-index: 100;
}

.foterbgc {
  background-color: #C6BAAF;
}

.container ul {
  margin-left: 0px;
  
  margin: 0 60px;

}

.footertitle ul {
  margin-left: 0px;
  display: flex;
  padding-right: 10px;
}

.footertitle li {
  margin: 0 60px;
}

.footertitle {
  font-size: 70px;
  font-family: 'Kavoon', sans-serif;
}

footer {
  padding: 30px 0;
}

.container {
  max-width: 1000px;
  display: flex;
  padding-right: 10px;
  font-family: 'kurale', sans-serif;
}
h3 {
  font-size: 1rem;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-top: 30px;
  border-right:1px solid #fefbfb;
  padding: 5px;

}

li a {
  color: #333;
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}

.footer-links {
  text-align: center;
  display: flex;
  margin-left: 80px;
  margin-top: 50px;
}

.social-icons {
  text-align: right;
  margin-top: 15px;
}

.social-icons li {
  display: inline-block;
  margin-left: 10px;
}

.social-icons li a {
  color: #333;
  font-size: 1.5rem;
}

.social-icons li a:hover {
  color: #007bff;
}
</style>