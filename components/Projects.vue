<template>
  <div class="projects">
    <div class="projects__title-wrapper">
      <h1 class="projects__title">Projects</h1>
    </div>
    <div class="projects__row">
      <div class="projects__swiper">
        <h1 class="swiper-block__title" @click="$router.push(localeLocation(`/projects/`))">Engineering</h1>
        <swiper-item imgHeight="305px" circle="60px" circleBg="#183A60" box="70px" boxBg="white" projects circleTop="0" boxTop="0"></swiper-item>
      </div>
      <div class="projects__swiper">
        <h1 class="swiper-block__title" @click="$router.push(localeLocation(`/projects/`))">IT and Telecommunications</h1>
        <swiper-item imgHeight="305px" circle="60px" circleBg="#183A60" box="70px" boxBg="white" projects circleTop="0" boxTop="0"></swiper-item>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .swiper-block {
    &__title {
      color: var(--red);
      font-size: 34px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 20px;
      transition: 0.3s;
      &:hover {
      }
      @media (max-width: 767px) {
        font-size: 22px;
        margin-bottom: 12px;
      }
    }
  }
  .projects {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 2;
    padding-top: 40px;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 650px;
      height: 500px;
      border: 1px solid #e4e4e4;
      border-radius: 50%;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 850px;
      height: 650px;
      border: 1px solid #e4e4e4;
      border-radius: 50%;
      z-index: -1;
    }
    @media (max-width: 767px) {
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    &__title-wrapper {
      text-transform: capitalize;
      position: absolute;
      left: 50%;
      top: 17%;
      transform: translateX(-50%);
      @media (max-width: 767px) {
        position: relative;
        top: 0;
        left: 20px;
        transform: none;
      }
    }

    &__title {
      color: var(--primary);
      font-size: 30px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.45px;
      position: relative;
      padding-bottom: 7px;
      display: inline-block;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60%;
        background-color: var(--red);
        height: 1px;
      }
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }

    &__row {
      max-width: 1200px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      margin: 0 auto;
      @media (max-width: 992px) {
        max-width: 1100px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        margin: 0 20px;
        overflow: hidden;
      }
    }

    &__swiper {
      max-width: 550px;
      height: 355px;
      cursor: pointer;
      position: relative;
      z-index: 10;
      @media (max-width: 767px) {
        width: calc(100% - 40px);
        height: auto;
      }
    }
  }
</style>
