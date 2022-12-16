<template>
  <button :style="style">{{ title }}</button>
</template>

<script>
export default {
  props: ["title", "text-color", "bg-Color"],
  computed: {
    style() {
      return {
        background: this["bg-Color"] ? this["bg-Color"] : "white",
        color: this["text-color"] ? this["text-color"] : "black",
        cursor: pointer,
        border: none,
        [padding - block]: 12 + "px",
        [padding - inline]: 30 + "px",
        [font - family]: "Gotham",
        [font - size]: 14 + "px",
      };
    },
  },
};
</script>

<!-- <style scoped>
<style> -->
