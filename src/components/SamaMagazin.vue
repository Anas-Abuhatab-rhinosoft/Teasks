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
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="nav">
        <div class="logoAndH5">
          <div class="logo">Logo</div>
          <h5>Sama Magazin</h5>
        </div>
        <nav>
          <ul class="ul">
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
            <li><a href="javascript:void(0);" @click="onClick">
              <font-awesome-icon icon="bars"/>
            </a></li>
          </ul>
        </nav>
      </div>
      <div class="heroImg">
        <img src="../assets/SamaMagazin/brain.jpg" alt="brain"/>
        <div>Total Corona Infected Today<br/> <strong>12,355</strong></div>
        <div>Number of Corona Patients<br/> <strong>36,960</strong></div>
        <div>Total Corona Deaths <br/> <strong>1,200</strong></div>
      </div>
    </div>
    <div class="main">
      <div class="news">
        <h2>Jordan News</h2>
        <a href="">See All</a>
      </div>
      <div class="newsCard">
        <div class="nextBackImgScreen">
          <img src="../assets/SamaMagazin/backButton.png" alt="backButton">
          <img src="../assets/SamaMagazin/nextButton.png" alt="nextButton">
        </div>
        <img class="nextBackImg" src="../assets/SamaMagazin/backButton.png" alt="backButton">
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/rum.jpg" alt="rum">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/vegetables.jpg" alt="vegetables">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/petra.jpg" alt="petra">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <img class="nextBackImg" src="../assets/SamaMagazin/nextButton.png" alt="nextButton">
      </div>
      <div class="news">
        <h2>Sport News</h2>
        <a href="">See All</a>
      </div>
      <div class="newsCard">
        <div class="nextBackImgScreen">
          <img src="../assets/SamaMagazin/backButton.png" alt="backButton">
          <img src="../assets/SamaMagazin/nextButton.png" alt="nextButton">
        </div>
        <img class="nextBackImg" src="../assets/SamaMagazin/backButton.png" alt="backButton">
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/tennis.jpg" alt="tennis">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/sea.jpg" alt="sea">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <div>
          <img class="cardImg" src="../assets/SamaMagazin/basketball.jpg" alt="basketball">
          <h4>Title Lorem ipsum</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <section class="button">
            <button>Read More</button>
          </section>
        </div>
        <img class="nextBackImg" src="../assets/SamaMagazin/nextButton.png" alt="nextButton">
      </div>
      <div class="timeCard">
        <img class="cardImg" src="../assets/SamaMagazin/petra.jpg" alt="petra">
        <div>
          <p>Time & Date in Jordan</p>
          <p>22 May 2022</p>
          <p>
            <strong>0</strong><strong>2</strong>:
            <strong>3</strong><strong>5</strong>:
            <strong>5</strong><strong>8</strong>
            <b>PM</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SamaMagazin",
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
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}

#myLinks {
  display: none;
}

.ul a {
  color: white;
  padding: .8rem 1rem;
  text-decoration: none;
  font-size: 1rem;
}

.ul li:nth-of-type(4) {
  display: none;
}

.ul a:hover {
  background-color: #ddd;
  color: black;
}


.nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logoAndH5 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
}

.logoAndH5 h5 {
  color: #545454;
}

.logo {
  display: flex;
  color: white;
  background-color: #5d60ef;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
}

.ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 15rem;
}

.ul a {
  text-decoration: none;
  color: #101010;
  font-weight: bold;
}

.heroImg {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.heroImg img {
  width: 100%;
  object-fit: cover;
}

.heroImg div {
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 5rem;
  background-color: #ffffff;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: bold;
  box-shadow: 35px 20px 50px rgb(24 24 24 / 41%);
  text-align: center;
  color: #c4c4c4;
  justify-content: center;
  align-items: center;
  margin: -3.125rem;
}

.heroImg strong {
  padding-top: .6rem;
  font-size: 1.5rem;
  color: #6360c1;
}

.news {
  margin-top: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.newsCard {
  display: flex;
  width: 80%;
  gap: 2rem;
  margin: 0 auto;
  align-items: baseline;
}

.newsCard .nextBackImgScreen {
  display: none;
}

.newsCard div {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 21rem;
  border-radius: 20px;
  overflow: hidden;
  align-items: flex-start;
  box-shadow: 0 0 10px 10px rgb(27 25 27 / 4%)
}

.newsCard .cardImg {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.newsCard .nextBackImg {
  width: 2rem;
  height: 2rem;
}

.newsCard h4 {
  margin-bottom: 0;
}

.newsCard p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.8rem;
  color: #c4c4c4;
}

.button {
  display: flex;
  width: 100%;
  justify-content: center;
}

.newsCard button {
  width: 10rem;
  height: 3rem;
  background-color: #5d60ef;
  border-radius: 10px;
  color: white;
  border-color: #5d60ef;
  font-size: .6rem;
}

.timeCard {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 8rem auto ;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px 10px rgb(27 25 27 / 4%)
}

.timeCard .cardImg {
  width: 45%;
  height: 100%;
  object-fit: cover;
}

.timeCard div {
  display: flex;
  flex-direction: column;
  width: 55%;
  justify-content: space-around;
  text-align: center;
}

.timeCard div p:nth-of-type(1) {
  text-align: left;
  font-size: 0.8rem;
  color: #545454;
  margin-left: 0.4rem;
  margin-bottom: 0;
}

.timeCard div p:nth-of-type(2) {
  text-align: right;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 0.4rem;
  margin-top: 0;
}

.timeCard div p:nth-of-type(3) {
  font-size: 2rem;
  width: 100%;
  margin: 0;
}

.timeCard div p strong {
  font-size: 2rem;
  background-color: #efefef;
  color: #6b6aa4;
  border-radius: 11px;
  padding: 10px;
  margin: 5px;
}

.timeCard div p b {
  font-size: 1.5rem;
  padding: 5px;
}

.main{
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .ul li:nth-of-type(4) {
    display: block;
    height: 1rem;
  }

  .ul li {
    display: none;
  }

  .ul a {
    font-size: 1.8rem;
  }

  .nav {
    justify-content: space-between;
  }

  .body {
    position: relative;
  }

  .bars {
    font-size: 2.5rem;
    text-align: right;
    margin: 2rem;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .myLinksNav {
    display: flex;
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

  .heroImg {
    flex-direction: column;
    align-items: center;
  }

  .heroImg div {
    margin: 0 0 1rem 0;
  }

  .newsCard div {
    width: 100%;
  }

  .newsCard {
    position: relative;
    flex-wrap: wrap;
  }

  .newsCard .nextBackImg {
    display: none;
  }
  .newsCard .nextBackImgScreen img {
    width: 2rem;
    height: 2rem;
  }
  .newsCard div:nth-of-type(1){
    height: fit-content;
  }
  .newsCard .nextBackImgScreen{
    display: contents;
  }
  .timeCard {
    width: 80%;
    flex-direction: column;
  }
  .timeCard .cardImg{
    width: 100%;
  }
  .timeCard div{
    width: 100%;
  }
}
</style>
