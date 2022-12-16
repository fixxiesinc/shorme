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
      <img
        src="../../../assets/images/creams.svg"
        class="category-item-image"
        alt="Product image"
      />
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
@import "../home.css";
@import "../../../assets/styles.css";

.shop-section {
  padding-inline: 4vw;
  margin-top: 14vh;
}

.shop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.category-details > p {
  font-style: italic;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #f7ea9d;
}
.category-details button {
  color: white;
  background: #eb38af;
}

.cream-flavor {
  margin-top: 60px;
}
</style>
