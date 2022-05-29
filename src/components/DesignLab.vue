<template>
  <div class="body">
    <div id="myLinks">
      <div class="content">
        <div class="bars">
          <a href="javascript:void(0);" @click="onClick">
            <font-awesome-icon icon="bars"/>
          </a>
        </div>
        <div class="myLinksNav">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Feature</a>
          <div class="buttons">
            <a href="">Sign in</a>
            <button class="btn1">Join</button>
            <button class="btn2">Post job</button>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="navBar">
        <div class="navLogo">
          <img src="../assets/DesignLab/logo.png" alt="">
          <h5>Design Lab</h5>
        </div>
        <div class="search">
          <input type="text" placeholder="&#xf002; Job title here"/>
        </div>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Service</a>
        <a href="">Feature</a>
        <a href="javascript:void(0);" @click="onClick">
          <font-awesome-icon icon="bars"/>
        </a>
        <div class="buttons">
          <a href="">Sign in</a>
          <button class="btn1">Join</button>
          <button class="btn2">Post job</button>
        </div>
      </div>
      <div class="heroImg">
        <img src="../assets/DesignLab/hero.jpeg" alt="">
        <div class="imgContent">
          <h1>Find a better work in <br/>your way</h1>
          <p>Right connection and right Employee</p>
          <div>
            <button class="btn3">Get Started</button>
            <button class="btn4">
              <font-awesome-icon icon="play"/>
            </button>
            <span>How it works</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <h1>Brows <b>Jobs</b></h1>
      <div class="fiveButton">
        <button>All jobs</button>
        <button>Jobs by Company</button>
        <button>Jobs by Category</button>
        <button>Jobs by Location</button>
        <button>Jobs by Skills</button>
      </div>
      <div class="cards">
        <div>
          <font-awesome-icon icon="building-columns"/>
          <br/>Banking
        </div>
        <div>
          <font-awesome-icon icon="dollar"/>
          <br/>Accounting
        </div>
        <div>
          <font-awesome-icon icon="image"/>
          <br/>Digital & Creative
        </div>
        <div>
          <font-awesome-icon icon="palette"/>
          <br/>Design & Art
        </div>
        <div>
          <font-awesome-icon icon="gavel"/>
          <br/>Legal Job
        </div>
        <div>
          <font-awesome-icon icon="globe"/>
          <br/>Sales & Marketing
        </div>
      </div>
      <button class="cardsBtn">View All Category</button>
      <h1>How it <b>Works</b></h1>
      <p class="mainP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s</p>
      <div class="cards">
        <div>
          <font-awesome-icon icon="file"/>
          <br/>Account/Resume
        </div>
        <div>
          <font-awesome-icon icon="briefcase"/>
          <br/>Apply for your jobs
        </div>
        <div>
          <font-awesome-icon icon="handshake-simple"/>
          <br/>Hired now
        </div>
      </div>
      <h1>Featured <b>Jobs</b></h1>
      <p class="mainP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's </p>
      <div class="cards2">
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/slack.png" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/ball.jpg" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/be.png" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/be.png" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/slack.png" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
        <div class="mainDiv">
          <div class="cards2Div1">
            <img src="../assets/DesignLab/ball.jpg" alt="">
            <p>Lorem Ipsum is simply<br/> text <b>Product Designer</b> <br/>3 hour ago</p>
            <button>Apply</button>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div class="cards2Div2">
            <button>Apply Now</button>
            <div class="cards2Div3">
              <img src="../assets/DesignLab/person1.jpg" alt="">
              <img src="../assets/DesignLab/person2.jpg" alt="">
              <img src="../assets/DesignLab/person3.jpg" alt="">
              <a>+3</a>
            </div>
          </div>
        </div>
      </div>
      <button class="cardsBtn">View All Category</button>
      <div class="dreamJob">
        <img src="../assets/DesignLab/dream.jpg" alt="">
        <div>
          <h1>Build your <br/><b>dream job</b> here</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing.</p>
          <button>Build Now</button>
        </div>
      </div>
      <h1>Read Our Latest <b>Blog</b></h1>
      <p class="mainP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s</p>
      <div class="blog">
        <div>
          <img src="../assets/DesignLab/1.jpeg" alt="">
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s...<b>More</b></p>
        </div>
        <div>
          <img src="../assets/DesignLab/2.jpeg" alt="">
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s...<b>More</b></p>
        </div>
        <div>
          <img src="../assets/DesignLab/3.jpeg" alt="">
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s...<b>More</b></p>
        </div>
        <div>
          <img src="../assets/DesignLab/4.jpeg" alt="">
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s...<b>More</b></p>
        </div>
      </div>
      <div class="subscribe">
        <div>
          <p>subscribe Now?</p>
          <p>Subscribe for Jobs Vacancy Updates</p>
          <p>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. </p>
        </div>
        <div class="subscribeBut">
          <button>Lorem is simply</button>
          <button>subscribe Now?</button>
        </div>
      </div>
      <div class="mainFooter">
        <div class="mainFooterDiv1">
          <img src="../assets/DesignLab/logo.png" alt="">
          <h3>Design Lab</h3>
          <p>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. </p>
        </div>
        <div class="mainFooterDiv2">
          <h2>Quick Links</h2>
          <a href="">Privacy & Police</a>
          <a href="">Subscribe</a>
          <a href="">Blog</a>
          <a href="">FAQ?</a>
        </div>
      </div>
    </div>
    <div class="footer">
      <h4>Copyright
        <font-awesome-icon icon="copyright"/>
        2022 Design Lab All Right Reserved
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignLab",
  methods: {
    onClick() {
      const x = document.getElementById("myLinks");
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    },
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#myLinks {
  display: none;
}

.navBar a:nth-of-type(5) {
  display: none;
}

.navBar img {
  width: 1rem;
  height: 1rem;
}

.navLogo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.navBar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
  background-color: #122939;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 4rem;
  font-size: 0.9rem;
  color: whitesmoke;
}

.navBar a {
  text-decoration: none;
  color: whitesmoke;
}

.search {
  height: 2rem;
}

.search > input {
  background: #263d4d;
  height: 2rem;
  overflow: hidden;
  border-radius: 10px;
  font-family: "Font Awesome 5 Free";
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
}

.buttons .btn1 {
  height: 2.5rem;
  width: 4rem;
  border-radius: 6px;
  background-color: #fafcfb;
  margin: 0.7rem;
}

.buttons .btn2 {
  height: 2.5rem;
  width: 5rem;
  border-radius: 6px;
  background-color: #f23563;
  margin: auto 0.8rem;
  color: whitesmoke;
}

.heroImg {
  width: 100%;
  position: relative;
}

.heroImg img {
  width: 100%;
}

.imgContent {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 10%;
  left: 5%;
  width: 30%;
}

.imgContent div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-items: baseline;
}

.imgContent div .btn3 {
  height: 3rem;
  width: 8rem;
  background-color: #fb3565;
  border: 0;
  border-radius: 8px;
  color: whitesmoke;
  margin-right: 1rem;
}

.imgContent div .btn4 {
  height: 2rem;
  width: 2rem;
  background-color: #fb3565;
  border: 0;
  border-radius: 20px;
  color: whitesmoke;
  margin-right: 0.3rem;
}

.imgContent div span {
  font-weight: bold;
}

.imgContent p {
  color: #101010;
}

.imgContent h1 {
  font-size: 2.5rem;
}

.main {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.main > h1 {
  margin-top: 5rem;
  text-align: center;
  font-size: 3rem;
}

.main > h1 > b {
  color: #ce426e;
}

.fiveButton {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}

.fiveButton button {
  background-color: whitesmoke;
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  border: 2px solid whitesmoke;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin: 3rem;
}

.cards div {
  width: 26.666%;
  /*height: 9rem;*/
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 16px;
  line-height: 2rem;
}

.cards div:hover {
  box-shadow: 16px 15px 33px gray;
  transform: scale(1.2);
}

.cardsBtn {
  margin: 0 auto;
  border: 1px solid gray;
  color: #ff2c69;
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  background-color: whitesmoke;
}

.cardsBtn:hover {
  background-color: #ff2c69;
  color: whitesmoke;
}

.mainP {
  text-align: center;
  margin: 0 auto;
  width: 70%;
}

/*###################################*/
.cards2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 1rem;
  margin: 4rem auto;
  width: 100%;
}

.cards2 .mainDiv {
  width: 25%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  margin: 0 auto;
  border-radius: 16px;
}

.cards2 .mainDiv:hover {
  box-shadow: 16px 15px 33px gray;
}

.cards2Div1 img {
  width: 4rem;
  height: 4rem;
  border-radius: 25px;
  object-fit: cover;
}

.cards2Div1 p {
  line-height: 1.4rem;
}

.cards2 div .cards2Div1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
}

.cards2 div .cards2Div1 button {
  background-color: whitesmoke;
  border: 0;
  color: #bacdc4;
}

.cards2 div .cards2Div1 p {
  margin: auto auto auto 12px;
}

.cards2Div3 img {
  width: 2rem;
  height: 2rem;
  border-radius: 15px;
  margin: -6px;
  object-fit: cover;
}

.mainDiv > p {
  line-height: 1.4rem;
}

.cards2Div2 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
}

.cards2Div2 button {
  background-color: #ff2c69;
  border-radius: 5px;
  border: 0;
  color: whitesmoke;
  width: 9rem;
  height: 3rem;
}

.cards2Div2 button:hover {
  background-color: aqua;
  color: #ff2c69;
}

.cards2Div3 {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

.cards2Div3 a {
  background-color: whitesmoke;
  border-radius: 15px;
  width: 2rem;
  height: 2rem;
  color: #ce426e;
  text-align: center;
}

/*###################################*/
.dreamJob {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10%;
  margin: 10rem auto;
}

.dreamJob img {
  width: 45%;
  height: 20rem;
  object-fit: cover;
  border-radius: 15px;
}

.dreamJob div {
  width: 45%;
  text-align: left;
}

.dreamJob div button {
  background-color: #ff2c69;
  border-radius: 5px;
  border: 0;
  color: whitesmoke;
  width: 9rem;
  height: 3rem;
  margin-top: 4rem;
}

.dreamJob div button:hover {
  background-color: aqua;
  color: #ff2c69;
}

.dreamJob div h1 b {
  color: #ce426e;
}

.blog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10%;
  margin: 5rem auto;
}

.blog div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  width: 45%;
}

.blog div p b {
  color: red;
}

.blog div img {
  width: 100%;
  height: 20rem;
  border-radius: 20px;
  object-fit: cover;
}

/*##################################*/
.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 10%;
  margin: 10rem auto;
  text-align: left;
}

.subscribe div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 45%;
}

.subscribe div p:nth-of-type(1) {
  color: #5d60ef;
  margin: 0;
}

.subscribe div p:nth-of-type(2) {
  margin: 1rem auto;
  font-size: 2rem;
  font-weight: bold;
}

.subscribe div p:nth-of-type(3) {
  color: #545454;
}

.subscribe .subscribeBut button {
  width: 90%;
  height: 3rem;
  border-radius: 15px;
  background-color: #f23563;
  margin: 1rem;
  border: 0;
  color: whitesmoke;
}

.subscribe .subscribeBut button:nth-of-type(1) {
  background-color: whitesmoke;
  color: #545454;
}

/*##################################*/
/*######################{Footer}##########################*/
.mainFooter {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10%;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.mainFooter .mainFooterDiv1 {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
}

.mainFooter .mainFooterDiv1 h3 {
  width: 70%;
  color: #977e87;
}

.mainFooter .mainFooterDiv2 h2 {
  width: 100%;
}

.mainFooter .mainFooterDiv2 a {
  text-decoration: none;
  margin: auto 1rem auto 0;
  color: #101010;
}

.mainFooter .mainFooterDiv2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 45%;
}

.mainFooter div img {
  width: 4rem;
  height: 4rem;
}

.footer {
  width: 100%;
  height: 4rem;
  background-color: #122937;
  color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/*######################{Footer}##########################*/

@media only screen and (max-width: 700px) {
  #myLinks {
    position: absolute;
    display: none;
    bottom: 0;
    left: 0;
    background-color: #101010;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .navBar a, .navBar button {
    display: none;
  }

  .navBar a:nth-of-type(5) {
    display: flex;
    align-items: center;
  }

  .buttons {
    flex-direction: column;
    align-items: center;
  }

  .bars {
    font-size: 2.5rem;
    text-align: right;
    margin: 2rem;
  }

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .myLinksNav {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .myLinksNav a {
    color: white;
    padding: .8rem 1rem;
    text-decoration: none;
    font-size: 1rem;
  }

  .myLinksNav a:hover {
    color: #0000ee;
  }

  .imgContent {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .cards div {
    width: 100%;
  }

  .cards2 .mainDiv {
    width: 100%;
  }

  .blog div {
    width: 100%;
  }

  .subscribe div {
    width: 100%;
  }

  .dreamJob img {
    width: 100%;
  }

  .dreamJob div {
    text-align: center;
  }
}
</style>