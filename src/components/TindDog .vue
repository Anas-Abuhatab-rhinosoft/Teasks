<template>
  <body class="body">
  <section id="title">
    <div class="container-fluid">

      <!-- Nav Bar -->
      <nav class="navbar navbar-expand-lg navbar-dark a ">
        <a class="navbar-brand " href="#">tindog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto nav-ul">
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Download</a>
            </li>
          </ul>
        </div>
      </nav>


      <!-- Title -->
      <div class="row">
        <div class="col-lg-6">
          <h1>Meet new and interesting dogs nearby.</h1>
          <button type="button" class="btn btn-dark btn-lg download-button">
            <font-awesome-icon icon="apple-whole"/>
            Download
          </button>
          <button type="button" class="btn btn-outline-light btn-lg download-button">
            <font-awesome-icon icon="play"/>
            Download
          </button>
        </div>
        <div class="titleImg-div col-lg-6">
          <img class="titleImg" src="../assets/images/iphone6.png" alt="iphone-mockup">
        </div>
      </div>
    </div>

  </section>


  <!-- Features -->

  <section id="features">
    <div class="row ms-auto">
      <div class="features-box col-lg-4">
        <font-awesome-icon class="icon" icon="circle-check" size="4x"/>
        <h3>Easy to use.</h3>
        <p>So easy to use, even your dog could do it.</p>
      </div>
      <div class="features-box col-lg-4">
        <font-awesome-icon class="icon" icon="bullseye" size="4x"/>
        <h3>Elite Clientele</h3>
        <p>We have all the dogs, the greatest dogs.</p>

      </div>
      <div class="features-box col-lg-4">
        <font-awesome-icon class="icon" icon="heart" size="4x"/>
        <h3>Guaranteed to work.</h3>
        <p>Find the love of your dog's life or your money back.</p>
      </div>
    </div>


  </section>


  <!-- Testimonials -->

  <section id="testimonials">

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
          <img class="testimonial-image" src="../assets/images/dog-img.jpg" alt="dog-profile">
          <em>Pebbles, New York</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of
            their life. I think.</h2>
          <img class="testimonial-image" src="../assets/images/lady-img.jpg" alt="lady-profile">
          <em>Beverly, Illinois</em>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


  </section>


  <!-- Press -->

  <section id="press">
    <img class="press-logo" src="../assets/images/TechCrunch.png" alt="tc-logo">
    <img class="press-logo" src="../assets/images/tnw.png" alt="tnw-logo">
    <img class="press-logo" src="../assets/images/bizinsider.png" alt="biz-insider-logo">
    <img class="press-logo" src="../assets/images/mashable.png" alt="mashable-logo">

  </section>


  <!-- Pricing -->

  <section id="pricing">

    <h2>A Plan for Every Dog's Needs</h2>
    <p>Simple and affordable price plans for your and your dog.</p>

    <div class="row">
      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Chihuahua</h3>
          </div>
          <div class="card-body">
            <h2>Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button class="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
          </div>
        </div>
      </div>
      <div class="pricing-column col-lg-4 col-md-6" >
        <div class="card">
          <div class="card-header">
            <h3>Labrador</h3>
          </div>
          <div class="card-body">
            <h2>$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
          </div>
        </div>
      </div>
      <div class="pricing-column col-lg-4">
        <div class="card">
          <div class="card-header">
            <h3>Mastiff</h3>
          </div>
          <div class="card-body">
            <h2>$99 / mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button class="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>


  </section>


  <!-- Call to Action -->

  <section class="cta">

    <h3>Find the True Love of Your Dog's Life Today.</h3>
    <button type="button" class="btn btn-dark btn-lg download-button">
      <font-awesome-icon icon="apple-whole"/>
      Download
    </button>
    <button type="button" class="btn btn-outline-light btn-lg download-button">
      <font-awesome-icon icon="play"/>
      Download
    </button>

  </section>


  <!-- Footer -->

  <footer id="footer">
      <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']"/>
      <font-awesome-icon class="social-icon" :icon="['fab', 'facebook-f']"/>
      <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']"/>
      <font-awesome-icon class="social-icon" :icon="['fas', 'envelope']"/>
    <p>© Copyright TinDog</p>

  </footer>

  </body>
</template>

<script>
export default {
  name: "WallCoating"
}
</script>

<style scoped>
.body {
  font-family: "Montserrat";
}

.container-fluid {
  padding: 3% 15% 7%;
}

#title {
  background-color: #ff4c68;
  color: #ffffff;
}

h1 {
  font-family: "Montserrat";
  font-size: 3.5rem;
  line-height: 1.5;
}

h2 {
  font-size: 3rem;
  line-height: 1.5;
}

h3 {
  font-family: "Montserrat";
  font-size: 1.5rem;
}

p {
  color: #8f8f8f;
}

.navbar {
  padding: 0 0 2.5rem;
}

.navbar-brand {
  font-size: 2.5rem;
  font-weight: bold;
}

.nav-item {
  padding: 0 1.2rem;
}

.nav-link {
  font-size: 1.2rem;
}

/*Buttons*/

.download-button {
  margin: 5% 3% 5% 0;
}

.titleImg {
  width: 60%;
  transform: rotate(25deg);
  position: absolute;
  right: 30%;
}

#features {
  padding: 7% 15%;
  background-color: #ffffff;
  position: relative;
}

.features-box {
  text-align: center;
  padding: 4.5%;
}

.icon {
  color: #ef8172;
  margin-bottom: 1rem;
}

.icon:hover {
  color: #f23563;
}

#testimonials {
  text-align: center;
  background-color: #ef8172;
  color: #fff;
}

.testimonial-image {
  width: 10%;
  border-radius: 100%;
  margin: 20px;
}

.carousel-item {
  padding: 7% 15%;
}

#press {
  background-color: #ef8172;
  text-align: center;
  padding-bottom: 3%;
}

.press-logo {
  width: 15%;
  margin: 20px 20px 50px;
}

#pricing {
  padding: 100px;
  text-align: center;
}
.pricing-column {
padding: 2% 3%;
}
.titleImg-div{
  position: relative;
}

.cta{
  background-color: #f23563;
  padding: 7% 15% ;
  text-align: center;
  color: white;
}
.cta h3 {
  font-size: 5rem;
}
#footer {
  background-color: #fff;
  padding:7% 15% ;
  text-align: center;
}
@media (max-width: 1000px) {
  #title{
    text-align: center;
  }
  .titleImg {
    position: static;
    transform: rotate(0);
  }
}
.icons{
  display: flex;
  justify-content: center;
}
.social-icon{
  padding: 2%;
}
</style>