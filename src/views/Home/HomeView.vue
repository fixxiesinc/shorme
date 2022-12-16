<template>
  <div class="home-bg">
    <HeroSection />
    <ShopSection />
    <BlogSection />
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import ShopSection from "./components/ShopSection.vue";
import BlogSection from "./components/BlogSection.vue";

export default {
  components: { HeroSection, ShopSection, BlogSection },
};
</script>

<style>
@import "../../assets/styles.css";
@import "./home.css";

.home-bg {
  background-image: url("../../assets/images/home_bg.svg");
}
</style>
