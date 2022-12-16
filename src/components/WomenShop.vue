<template>
  <!-- shop section -->
  <section class="shop-section-women">
    <!-- shop label and arrow icons -->
    <div class="shop-header">
      <div class="container">
        <h2>
          women
          <span
            ><img src="../assets/images/female-symbol.svg" alt="Female symbol"
          /></span>
        </h2>
      </div>
    </div>

    <!-- shop items -->
    <div class="shop-items-container">
      <!-- item 1 -->
      <div class="category-item">
        <img
          src="../assets/images/avocado.svg"
          class="category-item-image"
          alt="Product image"
        />
        <div class="category-details">
          <h3>Shea Butter Hand Lotion</h3>
          <h4 class="cream-flavor">+ Avocado Oil</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
            ligula vel tortor
          </p>

          <div class="price-and-order-button">
            <h4>$39</h4>
            <router-link to="/shop"
              ><button>order from whatsapp</button></router-link
            >
          </div>
        </div>
      </div>

      <hr />

      <!-- item 2 -->
      <div class="category-item">
        <img
          src="../assets/images/avocado.svg"
          class="category-item-image"
          alt="Product image"
        />
        <div class="category-details">
          <h3>Shea Butter Hand Lotion</h3>
          <h4 class="cream-flavor">+ Avocado Oil</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
            ligula vel tortor
          </p>

          <div class="price-and-order-button">
            <h4>$39</h4>
            <router-link to="/shop"
              ><button>order from whatsapp</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import "../assets/styles.css";
@import "../views/Shop/shop.css";

.shop-section-women {
  top: -11rem;
  padding-bottom: 20rem;
  background-image: url("../assets/images/pink_bg.svg");
  position: relative;
  padding-top: 10rem;
  padding-inline: 4vw;
}
</style>
