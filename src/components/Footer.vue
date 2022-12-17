<template>
  <!-- footer section -->
  <section class="footer">
    <!-- logo and slogan -->
    <div class="logo-and-slogan">
      <img src="../assets/images/logo-black.svg" alt="logo" class="logo-footer" />
      <h4 class="slogan">Discovering Beauty</h4>
    </div>

    <!-- quick links -->
    <div class="quick-links">
      <p class="label">quick links</p>
      <ul>
        <li>
          <router-link to="/about" class="quick-link-item">about</router-link>
        </li>
        <li>
          <router-link to="/blog" class="quick-link-item">blog</router-link>
        </li>
        <li>
          <router-link to="/shop" class="quick-link-item">shop</router-link>
        </li>
        <li>
          <router-link to="/contact" class="quick-link-item">contact</router-link>
        </li>
      </ul>
    </div>

    <!-- sign up -->
    <div class="sign-up">
      <p class="label">sign up</p>
      <h4 class="join-our-newsletter">
        Join our newsletter to get some tips from the best.
      </h4>
      <div class="email-area">
        <input
          type="email"
          id="email"
          name="email"
          class="email-field"
          placeholder="EMAIL"
        />
        <div class="submit-email-button">
          <img src="../assets/images/chevron-right.svg" alt="Chevron right" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.footer {
  color: black;
  display: flex;
  margin-top: -16rem;
  padding: 4vw;
  padding-top: 10vw;
  z-index: 1;
  position: relative;
  justify-content: space-between;
  background-image: url("../assets/images/footer-bezier.svg");
}

.logo-and-slogan {
  flex: 2;
}

.quick-links {
  flex: 2;
}

.sign-up {
  flex: 2;
}

.logo-footer {
  height: 30px;
}

.slogan {
  margin-top: 12px;
  font-weight: 300;
  font-size: 27px;
  color: black;
}

.quick-links p {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;
  color: black;
  margin: 0px;
}

.quick-links ul {
  margin-top: 16px;
}

.quick-link-item {
  margin-bottom: 10px;
  font-weight: 300;
  color: black;
  display: inline;
}

.sign-up p {
  font-weight: 500;
  font-size: 20px;
  color: black;
  margin-bottom: 16px;
}

.join-our-newsletter {
  font-weight: 300;
  margin-top: 16px;
  color: black;
}

.email-area {
  display: flex;
  margin-top: 22px;
  width: 100%;
}

.email-field {
  width: 95%;
  color: white;
  background-color: black;
  border: none;
  padding-block: 16px;
  padding-inline: 26px;
  outline-color: white;
  caret-color: white;
  font-family: Gotham;
}

.email-field::placeholder {
  color: white;
  font-weight: 300;
  font-family: Gotham;
}

.email-field:focus {
  color: white;
  font-family: Gotham;
  outline: none;
}

.submit-email-button {
  width: 5%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  padding: 16px;
  background-color: black;
}

@media screen and (max-width: 480px) {
  .footer {
    display: block;
    margin-top: -15rem;
    padding-inline: 5vw;
    padding-top: 10vh;
    padding-bottom: 80px;
    background-image: url("../assets/images/footer-bezier-mobile.svg");
  }

  .quick-links {
    margin-top: 3rem;
  }

  .quick-links ul {
    margin-top: 16px;
  }

  .sign-up {
    margin-top: 3rem;
  }

  .join-our-newsletter {
    font-size: 18px;
    margin-top: 0px;
  }

  .email-area {
    display: flex;
    margin-top: 16px;
    background: black;
  }

  .email-field {
    width: 70%;
    border-radius: 0px;
  }

  .submit-email-button {
    width: 7%;
    padding-inline: 16px;
  }
}
</style>
