<template>
  <!-- hero section -->
  <section class="hero-section">
    <div>
      <h1 class="hero-title">Discovering Beauty</h1>
      <p class="hero-caption">
        Shorme formulates cosmetic products from natural elements. Our ingredients
        are sourced from organic plants from across Africa, hand-made with culture,
        experience and love.
      </p>
    </div>
  </section>

  <!-- illustration (image of woman) -->
  <section class="illustration-section">
    <img src="../../assets/images/woman.png" alt="Woman" />
    <!-- <picture>
      <source media="(max-width: 480px)" srcset="../../assets/images/woman.png" />
      <source media="(min-width: 480px)" srcset="../../assets/images/woman.png" />
    </picture> -->
  </section>

  <!-- features section -->
  <section class="feature-section">
    <!-- features -->
    <div class="features">
      <!-- moisturizes -->
      <div>
        <img src="../../assets/images/moisturizes.svg" alt="Moisturize" />
        <h4>moisturizes</h4>
      </div>
      <!-- protects -->
      <div>
        <img src="../../assets/images/protects.svg" alt="Protect" />
        <h4>protects</h4>
      </div>
      <!-- smooth -->
      <div>
        <img src="../../assets/images/smooth.svg" alt="Smooth" />
        <h4>smooth</h4>
      </div>
    </div>

    <!-- description -->
    <p>
      Shorme is for the pro and aspiring all-natural-beauty outlookers. With shea
      butter as our base ingredient, your are guaranteed moisture retention
      abilities and vitamins with anti-aging properties, essential for healthy skin
      and hair
    </p>
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
      <router-link to="/shop">
        <button>discover women's collection</button>
      </router-link>
    </div>

    <!-- vertical divider -->
    <div class="vl"></div>
    <hr />

    <!-- for men -->
    <div class="for-men">
      <h2>for men</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
        ligula vel tortor luctus finibus. Integer maximus tristique ipsum
      </p>
      <img src="../../assets/images/creams-men.svg" alt="Product image" />
      <router-link to="/shop">
        <button>discover men's collection</button>
      </router-link>
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
  font-weight: 300;
}

.feature-section p {
  margin-top: 50px;
  text-align: center;
  margin-inline: auto;
  word-spacing: 1px;
  line-height: 1.2;
  width: 50%;
}

.features {
  max-width: 60%;
  color: #ffed78;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
}

.features img {
  height: 80px;
}

.features h4 {
  margin-top: 20px;
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

.for-women p {
  font-weight: 300;
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

.discover hr {
  display: none;
}

.for-men h2 {
  color: #307cc0;
}

.for-men p {
  font-weight: 300;
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
  height: 100vh;
  margin-top: -40px;
  margin-inline: 40px;
  border: 0.1px solid rgba(230, 230, 230, 0.5);
}

/* mobile styles */
@media screen and (max-width: 480px) {
  .hero-section div {
    max-width: 100%;
  }

  .feature-section {
    padding-inline: 5vw;
    padding-top: 4vw;
  }

  .features {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .features img {
    height: 40px;
  }

  .features div {
    display: flex;
    align-items: center;
  }

  .features h4 {
    margin-top: 0px;
    margin-left: 16px;
  }

  .feature-section p {
    text-align: left;
    width: 100%;
  }

  .discover {
    display: block;
    padding-inline: 5vw;
    margin-top: 8rem;
    padding-bottom: 25rem;
    background-image: url("../../assets/images/about_bg.svg");
  }

  .discover p {
    width: 100%;
    margin-top: 10px;
    line-height: 20px;
    text-align: left;
  }

  .for-women {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .for-women h2 {
    font-size: 1.5rem;
    color: #eb38af;
  }

  .for-women button {
    color: white;
    background: linear-gradient(90deg, #d91883 0%, #fb449c 100%);
  }

  .for-women img {
    width: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -4vh;
  }

  .discover hr {
    display: block;
    margin-block: 70px;
  }

  .for-men {
    width: 100%;
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .for-men h2 {
    font-size: 1.5rem;
    color: #307cc0;
  }

  .for-men button {
    color: white;
    background: linear-gradient(90deg, #287ecd 0%, #19b2cb 100%, #19b2cb 100%);
  }

  .for-men img {
    width: 20rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: -4vh;
  }

  .vl {
    display: none;
    margin-top: -40px;
    margin-inline: 40px;
  }
}
</style>
