<template>
  <!-- hero section -->
  <section class="hero-section">
    <div>
      <h1 class="hero-title">Discovering Beauty</h1>
      <p class="hero-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
        ligula vel tortor luctus
      </p>
    </div>
  </section>

  <!-- illustration (image of woman) -->
  <section class="illustration-section">
    <img src="../../assets/images/woman.png" alt="Woman" />
  </section>

  <!-- features section -->
  <section class="feature-section">
    <!-- features -->
    <center>
      <div class="features">
        <!-- moisturizes -->
        <div>
          <center>
            <img src="../../assets/images/moisturizes.svg" alt="Moisturize" />
          </center>
          <h4>moisturizes</h4>
        </div>
        <!-- protects -->
        <div>
          <center>
            <img src="../../assets/images/protects.svg" alt="Protect" />
          </center>
          <h4>protects</h4>
        </div>
        <!-- smooth -->
        <div>
          <center>
            <img src="../../assets/images/smooth.svg" alt="Smooth" />
          </center>
          <h4>smooth</h4>
        </div>
      </div>
    </center>

    <!-- description -->
    <center>
      <p>
        Shorme is for the pro and aspiring all-natural-beauty outlookers. With shea
        butter as our base ingredient, your are guaranteed moisture retention
        abilities and vitamins with anti-aging properties, essential for healthy
        skin and hair
      </p>
    </center>
  </section>

  <!-- discover collection section -->
  <section class="discover">
    <!-- for women -->
    <div class="for-women">
      <h2>for women</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
        ligula vel tortor luctus finibus. Integer maximus tristique ipsum
      </p>
      <img src="../../assets/images/creams.svg" alt="Product image" />
      <button>discover women's collection</button>
    </div>

    <!-- vertical divider -->
    <div class="vl"></div>

    <!-- for men -->
    <div class="for-men">
      <h2>for men</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
        ligula vel tortor luctus finibus. Integer maximus tristique ipsum
      </p>
      <img src="../../assets/images/creams-men.svg" alt="Product image" />
      <button>discover men's collection</button>
    </div>
  </section>
</template>

<style>
@import "../../assets/styles.css";

.hero-section div {
  max-width: 80%;
}

.illustration-section {
  width: 100%;
  overflow: hidden;
  margin-top: 7rem;
}

.feature-section {
  padding-inline: 4vw;
  padding-top: 8vw;
}

.feature-section p {
  padding-top: 30px;
  text-align: center;
  word-spacing: 2px;
  line-height: 26px;
  width: 70%;
}

.features {
  max-width: 60%;
  color: #ffed78;
  display: flex;
  justify-content: space-between;
}

.features img {
  height: 80px;
}

.discover {
  display: flex;
  padding-inline: 4vw;
  margin-top: 10vw;
  padding-bottom: 35vw;
  justify-content: center;
  background-image: url("../../assets/images/about_bg.svg");
}

.discover h2 {
  text-align: center;
}

.discover p {
  width: 80%;
  margin-top: 10px;
  line-height: 20px;
  text-align: center;
}

.for-men {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.for-women {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.for-women h2 {
  color: #eb38af;
}

.for-women button {
  color: white;
  background: linear-gradient(90deg, #d91883 0%, #fb449c 100%);
}

.for-women img {
  width: 40vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10vh;
}

.for-men h2 {
  color: #307cc0;
}

.for-men button {
  color: white;
  background: linear-gradient(90deg, #287ecd 0%, #19b2cb 100%, #19b2cb 100%);
}

.for-men img {
  width: 40vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10vh;
}

.vl {
  border-left: 0.5px solid #e6e6e6;
  height: 100vh;
  margin-top: -40px;
  margin-inline: 40px;
}
</style>
