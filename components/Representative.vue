<template>
  <div class="representative">
    <div class="representative__columns">
      <div class="representative__title-wrapper">
        <h1 class="representative__title">Partners</h1>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">DEALERSHIP</div>
        <div class="representative__images">
          <div class="representative__image">
            <img src="@/assets/img/zebra.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/mennan.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/interflon.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/airpol.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">Our clients</div>
        <div class="representative__images">
          <div class="representative__image">
            <img src="@/assets/img/zebra.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/mennan.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/interflon.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/airpol.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">Our projects</div>
        <div class="representative__images">
          <div class="representative__image">
            <img src="@/assets/img/zebra.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/mennan.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/interflon.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/airpol.svg" alt="" />
          </div>
          <div class="representative__image">
            <img src="@/assets/img/hollysos.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .representative {
    width: 100%;
    height: 100vh;
    @media (max-width: 767px) {
      height: 100%;
    }
    &__title-wrapper {
      flex: 1 1 auto;
      margin-top: 150px;
      display: inline-block;
      text-align: center;
      @media (max-width: 767pc) {
        margin-top: 100px;
        flex: 0 0 0%;
      }
    }

    &__title {
      color: var(--text2);
      font-size: 30px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      padding-bottom: 7px;
      position: relative;
      display: inline-block;
      text-align: center;
      @media (max-width: 767px) {
        font-size: 22px;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 80%;
        height: 1px;
        background-color: var(--red);
      }
    }

    &__columns {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin: 0 150px;
      padding-bottom: 80px;
      justify-content: center;
      height: 100%;
      @media (max-width: 767px) {
        margin: 0 100px;
      }
    }

    &__column {
      @media (max-width: 767px) {
        &:nth-child(2) {
          display: none;
        }
        &:last-child {
          display: none;
        }
      }
    }

    &__subtitle {
      color: #000;
      font-size: 20px;
      text-align: center;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    &__images {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(6, 1fr);
      gap: 70px;
      @media (max-width: 479px) {
        grid-template-columns: 1fr;
        gap: 40px;
        margin: 0 30px;
      }
    }

    &__image {
      width: 100%;
      cursor: pointer;
      img {
        width: 100%;
        filter: grayscale(100%);
        object-fit: contain;
        transition: all 0.3s;
      }
      &:hover {
        img {
          filter: grayscale(0%);
        }
      }
    }
  }
</style>
