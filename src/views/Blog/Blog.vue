<template>
  <!-- list of blogs -->
  <section class="body-blog">
    <h1 class="brown-label">blog</h1>

    <!-- blogs -->
    <section class="blogs">
      <!-- blog 1 -->
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
              <p class="read-label">
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

      <hr />

      <!-- blog 2 -->
      <div class="blog-item">
        <img
          src="../../assets/images/blog-image-2.png"
          alt="Blog imame"
          class="blog-image"
        />
        <div class="blog-description">
          <div>
            <h2 class="blog-title">Lemonade Or Water?</h2>
            <router-link to="/blog-detail">
              <p class="read-label">
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

.blogs {
  margin-top: 5rem;
}

hr {
  margin-block: 6rem;
  border: 0.1px solid rgba(230, 230, 230, 0.5);
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
    margin-top: 0;
  }

  .blog-image {
    margin-top: 0px;
    height: 100px;
    /* border: 1px solid green; */
  }

  hr {
    margin-block: 50px;
    border: 0.1px solid rgba(230, 230, 230, 0.5);
  }

  .read-label {
    margin-top: 16px;
  }
}
</style>
