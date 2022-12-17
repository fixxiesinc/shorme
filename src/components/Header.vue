<template>
  <div class="header">
    <div class="nav-bar">
      <div class="logo-and-menu-icon">
        <!-- logo -->
        <a href="/"
          ><img src="../assets/images/logo.svg" alt="logo" class="logo"
        /></a>

        <!-- menu icon -->
        <div v-if="!this.showMobileMenu" class="hamb" @click="toggleMenu()">
          Menu
        </div>
        <div v-else class="hamb" @click="toggleMenu()">Close</div>

        <!-- menu list on desktop -->
        <div class="nav-desktop">
          <ul class="nav-items">
            <li>
              <router-link to="/about" class="header-link-item">about</router-link>
            </li>
            <li>
              <router-link to="/shop" class="header-link-item">shop</router-link>
            </li>
            <li>
              <router-link to="/contact" class="header-link-item"
                >contact</router-link
              >
            </li>
            <li>
              <router-link to="/blog" class="header-link-item">blog</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- menu list on mobile -->
      <div :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <ul class="nav-items">
          <li>
            <router-link to="/about" class="header-link-item">about</router-link>
          </li>
          <li>
            <router-link to="/shop" class="header-link-item">shop</router-link>
          </li>
          <li>
            <router-link to="/contact" class="header-link-item"
              >contact</router-link
            >
          </li>
          <li>
            <router-link to="/blog" class="header-link-item">blog</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
      console.log(this.showMobileMenu);
    },
  },
};
</script>

<style>
.header {
  width: 91.8%;
  padding-block: 4vh;
  padding-inline: 4vw;
  background: transparent;
}

.logo {
  width: 20vw;
}

.logo-and-menu-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.closed-menu {
  display: none;
}

.hamb {
  display: none;
}

.header-link-item {
  padding-left: 30px;
  font-size: 26px;
  color: white;
}

@media screen and (max-width: 480px) {
  .logo {
    width: 10rem;
  }

  .closed-menu {
    display: none;
  }

  .hamb {
    display: block;
  }

  .nav-desktop {
    display: none;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
  }

  .header-link-item {
    padding-left: 0;
    font-size: 16px;
    color: white;
  }

  .open-menu {
    height: 100vh;
  }
}
</style>
