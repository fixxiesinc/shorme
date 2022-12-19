<template>
  <div class="body-blog-detail">
    <!-- blog detail section -->
    <section class="blog-detail">
      <!-- blog image -->
      <img
        src="../../assets/images/blog-image-1.png"
        alt="Blog imame"
        class="blog-detail-image"
      />

      <!-- blog title -->
      <h1>Lemonade or Water?</h1>

      <!-- blog body -->
      <section class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          ligula vel tortor luctus finibus. Integer maximus tristique ipsum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula
          vel tortor luctus finibus. Integer maximus tristique ipsum. Nullam dictum
          ligula vel tortor luctus finibus. Integer maximus tristique ipsum Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula
          vel tortor luctus finibus. Integer maximus tristique ipsum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula vel
          tortor luctus finibus. Integer maximus tristique ipsum. Nullam dictum
          ligula vel tortor luctus finibus. Integer maximus tristique ipsum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula
          vel tortor luctus finibus. Integer maximus tristique ipsum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula vel
          tortor luctus finibus. Integer maximus tristique ipsum. Nullam dictum
          ligula vel tortor luctus finibus. Integer maximus tristique ipsum Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula
          vel tortor luctus finibus. Integer maximus tristique ipsum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam dictum ligula vel
          tortor luctus finibus. Integer maximus tristique ipsum. Nullam dictum
          ligula vel tortor luctus finibus. Integer maximus tristique ipsum
        </p>
      </section>

      <!-- share article button -->
      <a href="#" class="share-article-button">
        <p>share article</p>
        <img src="../../assets/images/share-icon.svg" alt="Share icon" />
      </a>
    </section>

    <!-- next blog section -->
    <div class="next-blog-section">
      <center><h1>next</h1></center>
      <!-- next blog -->
      <div class="next-blog">
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
      </div>
    </div>
  </div>
</template>

<style>
@import "../../assets/styles.css";

.body-blog-detail {
  color: #985531;
  padding-inline: 4vw;
  padding-bottom: 20rem;
}

.blog-detail-image {
  width: 100%;
  height: 80vh;
  margin: none;
}

.blog-detail h1 {
  margin-top: 2rem;
}

.content {
  margin-top: 1.5rem;
  font-weight: 300;
}

.next-blog-section {
  padding-block: 12rem;
  background-image: url("../../assets/images/blog_detail_bg.png");
}

.next-blog {
  margin-top: 5rem;
}

.blog-detail-image {
  width: 100%;
  margin-top: 50px;
}

.share-article-button {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

.share-article-button p {
  margin: 0px;
}

.share-article-button img {
  height: 20px;
  margin-left: 25px;
}

@media screen and (max-width: 480px) {
  .blog-detail-image {
    width: 100%;
    height: auto;
    margin-top: 0px;
  }

  .next-blog-section {
    padding-block: 6rem;
    background-image: url("../../assets/images/blog_detail_bg.png");
  }

  .next-blog {
    margin-top: 2rem;
  }
}
</style>
