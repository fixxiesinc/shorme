<template>
  <section class="blog-section">
    <h1>blog</h1>
    <div class="blogs">
      <div class="blog-item">
        <img
          src="../../../assets/images/blog-image-1.png"
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
                    src="../../../assets/images/chevron-right.svg"
                    alt="chevron-right"
                    class="chevron-right"
                /></span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="visit-blog">
      <router-link to="/blog"><button>visit blog</button></router-link>
    </div>
  </section>
</template>

<style>
@import "../../../assets/styles.css";

.blog-section {
  padding-top: 10rem;
  padding-inline: 4vw;
  padding-bottom: 35rem;
}

.blog-item {
  display: flex;
  align-items: center;
}

.blog-title {
  margin-top: 40px;
}

.blog-description {
  margin-left: 70px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chevron-right {
  padding-left: 12px;
}

.visit-blog {
  margin-top: 5rem;
}

@media screen and (max-width: 480px) {
  .blog-section {
    padding-top: 5rem;
    padding-inline: 5vw;
    padding-bottom: 24rem;
  }

  .blog-item {
    margin-top: 2rem;
  }

  .blog-title {
    margin-top: auto;
  }

  .blog-description {
    margin-left: 20px;
    height: auto;
  }

  .visit-blog {
    margin-top: 2rem;
  }
}
</style>
