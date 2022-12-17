<template>
  <!-- list of blogs -->
  <section class="body-blog">
    <h1 class="brown-label">blog</h1>

    <!-- blogs -->
    <section class="blogs">
      <!-- blog 1 -->
      <div>
        <div class="blog-item">
          <img
            src="../../assets/images/blog-image-1.png"
            alt="Blog imame"
            class="blog-image"
          />
          <div class="blog-description">
            <div>
              <h2 class="blog-title">Lemonade Or Water?</h2>
              <router-link to="/blog-detail">
                <p>
                  read
                  <span
                    ><img
                      src="../../assets/images/chevron-right.svg"
                      alt="chevron-right"
                      class="chevron-right"
                  /></span>
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- blog 2 -->
      <div>
        <div class="blog-item">
          <img
            src="../../assets/images/blog-image-2.png"
            alt="Blog imame"
            class="blog-image"
          />
          <div class="blog-description">
            <div>
              <h2 class="blog-title">Treating Your Skin The African Way</h2>
              <router-link to="/blog-detail">
                <p>
                  read
                  <span
                    ><img
                      src="../../assets/images/chevron-right.svg"
                      alt="chevron-right"
                      class="chevron-right"
                  /></span>
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style>
@import "../../assets/styles.css";

.body-blog {
  margin-top: 2vh;
  padding-bottom: 40rem;
  padding-inline: 4vw;
  background-image: url("../../assets/images/blog_bg.svg");
}

hr {
  margin-block: 60px;
  border: 0.1px solid #e6e6e6;
}

@media screen and (max-width: 480px) {
  .body-blog {
    /* top: -7rem; */
    padding-bottom: 25rem;
    /* background-image: url("../../assets/images/blogBg-yellow-mobile.svg"); */
    /* position: relative; */
    padding-top: 0rem;
    padding-inline: 5vw;
  }

  .blogs {
    margin-top: -2rem;
  }

  .blog-image {
    margin-top: 0px;
    height: 100px;
    /* border: 1px solid green; */
  }

  hr {
    margin-block: 40px;
    border: 0.1px solid #e6e6e6;
  }

  .blog-item {
    margin-top: 0px;
  }
}
</style>
