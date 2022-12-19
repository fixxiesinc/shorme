<template>
  <div class="header">
    <div class="nav-bar">
      <div class="logo-and-menu-icon">
        <!-- logo -->
        <a href="/"
          ><img src="../assets/images/logo.svg" alt="logo" class="logo"
        /></a>

        <!-- menu icon on mobile -->
        <div v-if="!this.showMobileMenu" class="menu" @click="toggleMenu()">
          <img src="../assets/images/menu-icon.svg" alt="" />
        </div>
        <div v-else class="menu" @click="toggleMenu()">
          <img src="../assets/images/close-icon.svg" alt="" />
        </div>

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
            <router-link to="/" @click="toggleMenu" class="header-link-item"
              >home</router-link
            >
          </li>
          <li>
            <router-link to="/about" @click="toggleMenu" class="header-link-item"
              >about</router-link
            >
          </li>
          <li>
            <router-link to="/shop" @click="toggleMenu" class="header-link-item"
              >shop</router-link
            >
          </li>
          <li>
            <router-link to="/contact" @click="toggleMenu" class="header-link-item"
              >contact</router-link
            >
          </li>
          <li>
            <router-link to="/blog" @click="toggleMenu" class="header-link-item"
              >blog</router-link
            >
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

.menu {
  display: none;
}

.header-link-item {
  padding-left: 30px;
  font-size: 26px;
  color: white;
}

@media screen and (max-width: 480px) {
  .header {
    padding-inline: 5vw;
    width: 89.8%;
  }

  .logo {
    width: 10rem;
  }

  .closed-menu {
    display: none;
  }

  .menu {
    display: block;
  }

  .nav-desktop {
    display: none;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 3rem;
  }

  .header-link-item {
    padding-left: 0;
    font-size: 30px;
    color: white;
  }

  .open-menu {
    height: 100vh;
    /* position: absolute;
    z-index: 100; */
    margin: 0px;
    background: black;
    width: 100%;
  }
}
</style>
