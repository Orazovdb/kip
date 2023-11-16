<template>
  <div class="gallery">
    <div class="gallery__row">
      <div class="gallery__title-wrapper">
        <h1 class="gallery__title">Gallery</h1>
      </div>
      <div class="gallery__images">
        <div class="gallery__image">
          <img src="@/assets/img/news.png" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/news.png" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/news.png" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/news.png" alt="gallery" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .gallery {
    width: 100%;
    height: 100vh;
    &__title-wrapper {
      margin: 110px 0 40px 0;
      flex: 1 1 auto;
    }

    &__title {
      position: relative;
      padding-bottom: 7px;
      color: var(--text2);
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.33px;
      text-transform: capitalize;
      &::after {
        content: '';
        bottom: 0;
        left: 0;
        width: 120%;
        height: 1px;
        background-color: var(--red);
        position: absolute;
      }
    }

    &__row {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__images {
      display: grid;
      grid-template-columns: 1fr 1fr 280px;
      gap: 20px;
      margin: 0 150px 50px;
    }

    &__image {
      height: 230px;
      &:first-child {
        height: 200px;
        grid-column: 1 / span 2;
      }
      &:nth-child(2) {
        grid-row: span 2;
        height: 100%;
        img {
          object-fit: cover;
          object-position: center;
        }
      }
      &:nth-child(3) {
        grid-column: 1 / span 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
