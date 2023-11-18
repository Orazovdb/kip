<template>
  <div class="projects">
    <div class="projects__title-wrapper">
      <h1 class="projects__title">Projects</h1>
    </div>
    <div class="projects__row">
      <div class="projects__swiper" v-for="(item, index) in 2" :key="index">
        <h1 class="swiper-block__title" @click="$router.push(localeLocation(`/projects/${index + 1}`))">News</h1>
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
    }
  }
  .projects {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 2;
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
    &__title-wrapper {
      text-transform: capitalize;
      position: absolute;
      left: 50%;
      top: 17%;
      transform: translateX(-50%);
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
    }

    &__row {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 70px;
      margin: 0 7%;
    }

    &__swiper {
      width: 500px;
      height: 305px;
      cursor: pointer;
      position: relative;
      z-index: 10;
    }
  }
</style>
