<template>
  <section id="header">
    <div class="row header-icons-div mx-0">
      <p class="col-lg-4 col-md-12 col-sm-12 header-icons px-0">
        <font-awesome-icon :icon="['fas', 'location-dot']" size="lg"/>
        Amman, Jordan
      </p>
      <p class="col-lg-4 col-md-12 col-sm-12 header-icons px-0">
        <font-awesome-icon :icon="['fas', 'phone']" size="lg"/>
        00962769534489
      </p>
      <p class="col-lg-4 col-md-12 col-sm-12 header-icons px-0">
        <font-awesome-icon :icon="['far', 'envelope']" size="lg"/>
        02 (555) 570 890
      </p>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-0">
      <div class="container-fluid navbar-container px-0">
        <img class="nav-item nav-logo" src="../assets/WallCoating/logo.png" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coating1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coating2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coating3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coating4</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coating5</a>
            </li>
          </ul>
          <div class="rightNav navbar-nav me-auto mb-2 mb-lg-0 px-0">
            <div class="nav-item ">
              <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']"/>
            </div>
            <div class="nav-item ">
              <font-awesome-icon class="social-icon" :icon="['fab', 'pinterest']"/>
            </div>
            <div class="nav-item ">
              <font-awesome-icon class="social-icon" :icon="['fab', 'facebook-f']"/>
            </div>
            <div class="nav-item ">
              <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>

  <section id="main">
    <div class="hero-section">
      <div class="hero-img">
        <div class="opacity">
          <div class="row above-heroImg px-0">
            <div class="col-lg-5 col-md-8 col-sm-8 px-0">
              <h1>Best Quality Of Wallpaper For Home</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing
                and
                typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s</p>
              <button type="button" class="btn btn-primary heroBtn">Discover More</button>
            </div>
            <div class="col-lg-5 px-0">
              <img src="../assets/WallCoating/9.png" alt=""/>
            </div>
            <div class="col-lg-12 px-0">
              <h3>Our Services</h3>
              <h1>Services We Are Offering</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="row hero-section-card mx-0 px-0">
        <div class="card col-lg-3 col-md-7 col-sm-9 px-0">
          <div class="cardImg">
            <img src="../assets/WallCoating/8.jpeg" class="card-img-top" alt="">
            <a href="#" class="btn btn-primary">
              <font-awesome-icon icon="certificate" size="2x"/>
            </a>
          </div>
          <div class="card-body py-0">
            <h5 class="card-title">Wall Coating</h5>
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div class="card col-lg-3 col-md-7 col-sm-9 px-0">
          <div class="cardImg">
            <img src="../assets/WallCoating/1.jpeg" class="card-img-top" alt="">
            <a href="#" class="btn btn-primary">
              <font-awesome-icon icon="certificate" size="2x"/>
            </a>
          </div>
          <div class="card-body py-0">
            <h5 class="card-title">Rough Casting</h5>
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div class="card col-lg-3 col-md-7 col-sm-9 px-0">
          <div class="cardImg">
            <img src="../assets/WallCoating/7.jpeg" class="card-img-top" alt="">
            <a href="#" class="btn btn-primary">
              <font-awesome-icon icon="certificate" size="2x"/>
            </a>
          </div>
          <div class="card-body py-0">
            <h5 class="card-title">Commercial</h5>
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
    <h1 class="h1">COMPLETED PROJECTS</h1>
    <div class="row project-btn ">
      <button type="button" class="btn btn-primary col-lg-2">ALL PROJECT</button>
      <button type="button" class="btn btn-outline-primary col-lg-2">LOREM</button>
      <button type="button" class="btn btn-outline-primary col-lg-2">LOREM</button>
      <button type="button" class="btn btn-outline-primary col-lg-2">LOREM</button>
    </div>
    <div class="row projectImg ">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0 " src="../assets/WallCoating/6.jpeg" alt="">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0  " src="../assets/WallCoating/7.jpeg" alt="">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0  " src="../assets/WallCoating/5.jpeg" alt="">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0  " src="../assets/WallCoating/4.jpeg" alt="">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0  " src="../assets/WallCoating/3.jpeg" alt="">
      <img class="col-lg-3 col-md-7 col-sm-9 px-0  " src="../assets/WallCoating/2.jpeg" alt="">
    </div>
    <div class="testimonials">
      <h5>Testimonials</h5>
      <h1>What Our Clients Say</h1>
    </div>
    <div class="row clients mx-0 px-0">
      <div class="card" style="width: 18rem;">
        <img src="../assets/DesignLab/person1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s </p>
          <div class="client-name">
            <h5 class="card-title">Elizabeth</h5>
            <a href="">Know More...</a>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../assets/DesignLab/person2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s </p>
          <div class="client-name">
            <h5 class="card-title">Mickel</h5>
            <a href="">Know More...</a>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../assets/DesignLab/person3.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s </p>
          <div class="client-name">
            <h5 class="card-title">Andro</h5>
            <a href="">Know More...</a>
          </div>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="../assets/DesignLab/person4.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s </p>
          <div class="client-name">
            <h5 class="card-title">Adams</h5>
            <a href="">Know More...</a>
          </div>
        </div>
      </div>
    </div>
    <div class="Appointment">
      <img src="../assets/WallCoating/10.jpeg" alt="">
      <form class="row g-3">
        <h1>Make An Appointment</h1>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Name">
        </div>
        <div class="col-md-6">
          <input type="number" class="form-control" placeholder="Phone">
        </div>
        <div class="col-12">
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="col-md-6">
          <input type="date" class="form-control" placeholder="Date">
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Location">
        </div>
        <div class="col-md-12">
          <textarea size="1000" rows="3" class="form-control" placeholder="Description"/>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <h1 class="h1BLOG">
      NEWS & BLOG
    </h1>
    <div class="row blog">
      <div class="card col-lg-4 " style="width: 22rem;">
        <img src="../assets/WallCoating/1.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum is simply dummy text of the printing</h5>
          <div class="verticalLine">
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s </p>
          </div>
          <a href="">Read More
            <font-awesome-icon icon="arrow-right"/>
          </a>
        </div>
      </div>
      <div class="card col-lg-4 " style="width: 22rem;">
        <img src="../assets/WallCoating/1.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum is simply dummy text of the printing</h5>
          <div class="verticalLine">
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s </p>
          </div>
          <a href="">Read More
            <font-awesome-icon icon="arrow-right"/>
          </a>
        </div>
      </div>
      <div class="card col-lg-4 " style="width: 22rem;">
        <img src="../assets/WallCoating/1.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum is simply dummy text of the printing</h5>
          <div class="verticalLine">
            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s </p>
          </div>
          <a href="">Read More
            <font-awesome-icon icon="arrow-right"/>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="footer">
    <div class="row footer-row mx-0">
      <div class="col-lg-3 col-md-6 footer-info">
        <img src="../assets/WallCoating/logo.png" alt="">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4>Product</h4>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4>Links</h4>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4>Contacts</h4>
        <ul>
          <li>
            <font-awesome-icon :icon="['fas', 'location-dot']" size="lg"/>
            Amman, Jordan
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'phone']" size="lg"/>
            00962769534489
          </li>
          <li>
            <font-awesome-icon :icon="['far', 'envelope']" size="lg"/>
            02 (555) 570 890
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright"><p>© Copyright WallCoating All Right Reserved 2022</p></div>
  </section>
</template>

<script>
export default {
  name: "WallCoating"
}
</script>

<style scoped>

#main {
  width: 100%;
  margin: 0 auto 7rem auto;
}

.h1 {
  text-align: center;
  font-weight: bold;
  margin-top: 6rem;
}

.testimonials, .h1BLOG {
  margin: 6rem auto 3rem auto;
  text-align: center;
}

.testimonials h1 {
  font-weight: bold;
}

.opacity {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-img {
  background-image: url("../assets/WallCoating/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  width: 100%;
  height: 1200px;
  position: relative;
}

.hero-img img {
  width: 100%;
  height: 80rem;
}

.nav-logo {
  width: 3rem;
  height: 3rem;
}

.header-icons-div {
  color: white;
}

.header-icons-div p {
  background-color: #4064b9;
  text-align: center;
  border: 2px solid;
}

.rightNav {
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
}

.rightNav div {
  width: 6%;
  background-color: #4064b9;
  border-radius: 100%;
  text-align: center;
  margin-right: 2%;
}

.navbar-container {
  margin-left: 10%;
}

.navbar-nav .nav-item a {
  color: #4064b9;
}

.navbar-nav li {
  padding-left: 5%;
}

.hero-section {
  width: 100%;
  color: #545454;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: bold;
}

.above-heroImg {
  position: absolute;
  justify-content: center;
  margin: 0;
  top: 0;
}

.above-heroImg div:nth-of-type(1) {
  padding: 15% 0 15% 5%;
}

.above-heroImg div:nth-of-type(3) {
  text-align: center;
}

.above-heroImg div img {
  width: 100%;
  height: 55rem;
}

.heroBtn {
  width: 11rem;
  height: 3rem;
}

.hero-section-card div {
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
}

.hero-section-card img {
  width: 100%;
  height: 14rem;
  overflow: hidden;
}

.hero-section-card {
  width: 100%;
  margin-top: -7rem;
  justify-content: space-evenly;
}

.hero-section-card div a {
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  opacity: 0.5;
}

.hero-section-card div h5 {
  font-weight: bold;
  font-size: 2rem;
}

.cardImg {
  width: 100%;
  position: relative;
}

.project-btn {
  justify-content: space-evenly;
  width: 50%;
  margin: 2rem auto 5rem auto;
}

.project-btn button {
  width: 10rem;
  height: fit-content;
}

.projectImg {
  width: 90%;
  justify-content: center;
  margin: 0 auto;
}

.projectImg img {
  height: 20rem;
  margin: 7px 7px;
}

.client-name {
  display: flex;
  justify-content: space-between;
}

.client-name a {
  text-decoration: none;
}

.clients {
  justify-content: center;
  text-align: center;
}

.clients div {
  margin: 0 0.5%;
}

.clients img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
  margin: 10% auto;
  border: 2px solid #7c8ca4;
}

.Appointment {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 55rem;
  margin-top: 7rem;
  object-fit: cover;
  position: relative;
}

.Appointment img {
  width: 100%;
  height: 100%;
}

.Appointment form {
  position: absolute;
  width: 50%;
  top: 2rem;
  left: 2rem;
}

input, textarea {
  background-color: transparent;
}

.blog {
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}

.blog div {
  padding: 0;
  margin: 3% 3%;
}

.verticalLine {
  border-left: thick solid #545454;
}

.verticalLine p {
  color: #545454;
  font-size: 0.7rem;
  padding-left: 10px;
}

.blog div a {
  text-decoration: none;
  color: #545454;
}

#footer {
  width: 100%;
}

.footer-row {
  background-color: #101010;
  padding: 5rem 5rem;
  color: white;
}

.footer-row img {
  width: 5rem;
  height: 3rem;
  margin-bottom: 2rem;
}

.footer-info {
  width: 20%;
  margin-right: 5%;
}

.footer-row div h4 {
  text-decoration: underline;
  text-underline-offset: 0.8rem
}

.footer-row div ul {
  list-style: none;
  padding-top: 2rem;
  padding-left: 0px;
  line-height: 1.7rem;
}

.copyright {
  background-color: #101010;
  text-align: center;
  color: white;
  margin: 0;
}

.copyright p {
  margin: 0;
}

@media (max-width: 993px) {
  .rightNav {
    flex-direction: row;
    justify-content: flex-start;
  }

  .navbar-nav li {
    padding: 0;
  }

  .hero-section-card {
    margin: 7rem;
  }

  .hero-img {
    height: 1500px;
  }

  .project-btn button {
    margin: 3% 3%;
  }

  .above-heroImg div:nth-of-type(1) {
    padding: 15% 0 0 5%;
  }

  .above-heroImg div:nth-of-type(3) {
    padding-top: 5%;
  }

  .hero-section-card div {
    margin-top: 3%;
  }

  .footer-info {
    width: auto;
  }

}
</style>