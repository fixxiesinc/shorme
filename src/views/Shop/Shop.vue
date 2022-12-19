<template>
  <!-- hero section -->
  <section class="hero-section-shop">
    <!-- shop label and toggle buttons -->
    <div class="hero-content">
      <div>
        <h1>shop</h1>
        <p>We look to reveal the Africa in You, the natural beauty and color.</p>
      </div>
    </div>

    <!-- men/women buttons -->
    <div class="toggle-buttons">
      <button
        @click="showWomenShop(true)"
        :class="[
          showingWomenShop ? 'focused-button-shop-pink' : 'outline-button-pink',
        ]"
      >
        women
      </button>
      <button
        @click="showWomenShop(false)"
        :class="[
          showingWomenShop ? 'outline-button-blue' : 'focused-button-shop-blue',
        ]"
      >
        men
      </button>
    </div>
  </section>

  <!-- shop section -->
  <Transition>
    <div v-if="showingWomenShop"><WomenShop /></div>
    <div v-else><MenShop /></div>
  </Transition>
</template>

<script>
import WomenShop from "../../components/WomenShop.vue";
import MenShop from "../../components/MenShop.vue";

export default {
  components: { WomenShop, MenShop },
  data() {
    return {
      showingWomenShop: false,
    };
  },

  methods: {
    showWomenShop(value) {
      this.showingWomenShop = value;
      console.log(this.showingWomenShop);
    },
  },
};
</script>

<style>
@import "../../assets/styles.css";
@import "./shop.css";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-to,
.v-leave-to {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.hero-section-shop {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-inline: 4vw;
}

.hero-content {
  padding-bottom: 14rem;
}

.toggle-buttons button {
  margin-top: 0px;
}

@media screen and (max-width: 480px) {
  .hero-section-shop {
    display: block;
    padding-bottom: 14rem;
  }

  .hero-content {
    padding-bottom: 40px;
  }

  .hero-content p{
    line-height: 1.2;
  }

  .toggle-buttons {
    display: flex;
    margin-left: 0px;
  }

  .toggle-buttons button {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 20px;
  }
}
</style>
