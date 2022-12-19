<template>
  <section class="shop-section">
    <div class="shop-header">
      <h1>shop</h1>

      <!-- arrow icons -->
      <span>
        <img
          src="../../../assets/images/arrow-left.svg"
          class="arrow"
          alt="Left arrow"
        />
        <img
          src="../../../assets/images/arrow-right.svg"
          class="arrow"
          alt="Right arrow"
        />
      </span>
    </div>

    <!-- shop items -->
    <div class="category-item">
      <img src="../../../assets/images/creams.svg" alt="Product image" />
      <div class="category-details">
        <h3>Shea Butter Hand Lotion</h3>
        <h4 class="cream-flavor">+ Avocado Oil</h4>

        <div class="price-and-order-button">
          <h4>$39</h4>
          <router-link to="/shop"><button>explore</button></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: { Button },
};
</script>

<style scoped>
@import "../../../assets/styles.css";

.shop-section {
  padding-inline: 4vw;
  padding-top: 10rem;
}

.shop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow {
  /* height: 20px; */
  padding-left: 14px;
  cursor: pointer;
}

.category-item {
  display: flex;
  align-items: center;
}

.category-item > img {
  width: 40vw;
}

.category-details > h3 {
  color: #eb38af;
}

.category-details button {
  color: white;
  background: #eb38af;
}

.cream-flavor {
  color: #f7ea9d;
}

@media screen and (max-width: 480px) {
  .shop-section {
    padding-top: 5rem;
    padding-inline: 5vw;
  }

  .arrow {
    height: 20px;
    padding-left: 12px;
  }

  .category-item {
    display: block;
    margin-top: 30px;
  }

  .category-item > img {
    width: 20rem;
    top: -60px;
    position: relative;
  }

  .category-details {
    margin-left: auto;
    max-width: 100%;
  }

  .cream-flavor {
    margin-top: 6px;
  }

  .price-and-order-button {
    margin-top: 50px;
  }
}
</style>
