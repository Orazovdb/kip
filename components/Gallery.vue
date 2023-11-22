<template>
  <div class="gallery">
    <div class="gallery__row">
      <div class="gallery__title-wrapper">
        <h1 class="gallery__title">Gallery</h1>
      </div>
      <div class="gallery__images">
        <div class="gallery__image">
          <img src="@/assets/img/gallery_1.jpg" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/gallery_2.jpg" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/gallery_3.jpg" alt="gallery" />
        </div>
        <div class="gallery__image">
          <img src="@/assets/img/gallery_4.jpg" alt="gallery" />
        </div>
      </div>
      <div class="gallery__button-wrapper">
        <button @click="$router.push('/gallery')" class="gallery__button">See all</button>
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
    @media (max-width: 767px) {
      height: 100%;
    }
    &__title-wrapper {
      margin: 90px 0 40px 0;
      flex: 1 1 auto;
      @media (max-width: 767px) {
        margin: 90px 0 40px;
        flex: 0 0 0%;
      }
    }

    &__title {
      position: relative;
      padding-bottom: 7px;
      color: var(--text2);
      font-size: 30px;
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
      @media (max-width: 767px) {
        font-size: 24px;
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
      grid-template-columns: 1fr 1fr 450px;
      gap: 20px;
      margin: 0 100px 40px;
      @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 20px 15px;
        gap: 14px;
      }
    }

    &__image {
      height: 180px;
      &:first-child {
        height: 220px;
        grid-column: 1 / span 2;
      }
      &:nth-child(2) {
        grid-row: span 2;
        height: 100%;
        img {
          height: 100%;
        }
      }
      &:nth-child(3) {
        grid-column: 1 / span 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      @media (max-width: 767px) {
        height: 230px !important;

        &:first-child {
          grid-column: 1 / span 2;
        }
        &:nth-child(2) {
          grid-column: span 1;
          grid-row: span 1;
          height: 100%;
          img {
            object-fit: cover;
            object-position: center;
          }
        }
        &:nth-child(3) {
          grid-column: span 1;
        }
        &:nth-child(4) {
          grid-column: span 2;
        }
      }
      @media (max-width: 479px) {
        height: 180px !important;
      }
    }
    &__button-wrapper {
      display: flex;
      justify-content: flex-end;
      margin: 0 100px 80px;
      width: calc(100% - 370px);
      @media (max-width: 767px) {
        margin: 0 20px 15px;
        width: calc(100% - 20px);
      }
    }

    &__button {
      text-align: right;
      padding: 10px;
      border-radius: 6px;
      color: var(--red);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      background-color: transparent;
      transition: 0.2s all;
      cursor: pointer;
      @media (max-width: 767px) {
        cursor: none;
      }
      &:hover {
        transform: scale(1.04);
      }
    }
  }
</style>
