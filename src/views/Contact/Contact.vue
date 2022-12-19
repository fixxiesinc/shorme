<template>
  <section class="body">
    <!-- left pane -->
    <div class="left-pane">
      <section>
        <h1>contact</h1>
        <p>We look to reveal the Africa in You, the natural beauty and color.</p>
      </section>

      <!-- address -->
      <div class="address">Address</div>
      <p class="text-address">
        ABC LONG STREET <br />
        Johannesburg-South Africa
      </p>

      <hr />

      <!-- email -->
      <div class="email">Email</div>
      <p class="text-address">info@shorme.com</p>

      <hr />

      <!-- phone -->
      <div class="phone">Phone</div>
      <p class="text-address">+27 149-872-740</p>

      <hr />

      <!-- social media icons -->
      <div class="social-media-icons">
        <img src="../../assets/images/facebook.svg" alt="Facebook" />
        <img src="../../assets/images/twitter.svg" alt="Twitter" />
        <img src="../../assets/images/instagram.svg" alt="instagram" />
      </div>
    </div>
  </section>
</template>

<style>
@import "../../assets/styles.css";

.body {
  padding-top: 2vh;
  padding-inline: 4vw;
  background-color: black;
  padding-bottom: 28rem;
}

.left-pane {
  max-width: 45%;
  margin-top: 0px;
}

.left-pane section h1 {
  margin-top: 0px;
  font-weight: 300;
}

.left-pane section p {
  margin-top: 0px;
  font-weight: 300;
  line-height: 1.2;
}

.address {
  font-size: 15px;
  margin-top: 40px;
  font-weight: 500;
}

.email,
.phone {
  font-size: 15px;
  margin-top: 24px;
  font-weight: 500;
}

.text-address {
  margin-top: 6px;
  margin-bottom: 30px;
}

.left-pane hr {
  margin-block: 20px;
  border: 0.1px solid rgba(230, 230, 230, 0.5);
}

.social-media-icons {
  margin-top: 30px;
}

.social-media-icons > img {
  height: 32px;
  margin-right: 14px;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .body {
    padding-top: 0vh;
    padding-inline: 5vw;
    padding-bottom: 24rem;
  }

  .left-pane {
    max-width: 100%;
    margin-top: 0px;
  }

  .left-pane section p {
    margin-top: 6px;
  }
}
</style>
