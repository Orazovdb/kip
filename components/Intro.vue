<template>
  <div class="intro">
    <div class="intro__left-bg" />
    <h1 class="intro__title">
      Biziň Zähmetimiz – <br />
      Siziň Üstünligiňiz!
    </h1>
    <div class="intro__center-items">
      <div class="relative mobile-button-circle-primary">
        <base-button-circle>Contact</base-button-circle>
        <div class="button-arrow-title left">
          <h2 class="button-arrow-title__text white">see our work</h2>
          <base-icon icon="contactWhiteArrow" />
        </div>
      </div>
      <div class="intro__logo">
        <img src="@/assets/img/kip-logo.svg" alt="logo" />
      </div>
      <div class="relative mobile-button-circle-white">
        <base-button-circle primary>Work</base-button-circle>
        <base-icon icon="circleCursor" class="circle-cursor" />
        <div class="button-arrow-title">
          <base-icon icon="workBlackArrow" class="black-arrow" />
          <h2 class="button-arrow-title__text">see our work</h2>
          <base-icon icon="workBlackArrowMini" class="black-arrow-mini" />
        </div>
      </div>
    </div>
    <div class="intro__swiper">
      <swiper-item title="news"> </swiper-item>
    </div>
    <div class="intro__title-block">
      <div class="intro__title-block-box-wrapper">
        <img src="@/assets/img/intro-title-wrapper.png" class="intro__title-block-box" alt="" />
        <h3 class="intro__title-block-name">HJ “Köpugurly Inženerçilik Paýhaslary”</h3>
      </div>
    </div>
    <div class="representative">
      <h2 class="representative__title">Официальное представительство</h2>
      <div class="representative__items">
        <div class="representative__item">
          <img src="@/assets/img/zebra.svg" alt="" />
        </div>
        <div class="representative__item">
          <img src="@/assets/img/mennan.svg" alt="" />
        </div>
        <div class="representative__item">
          <img src="@/assets/img/hollysos.svg" alt="" />
        </div>
        <div class="representative__item">
          <img src="@/assets/img/interflon.svg" alt="" />
        </div>
        <div class="representative__item">
          <img src="@/assets/img/airpol.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .mobile-button-circle-primary {
    @media (max-width: 767px) {
      position: absolute !important;
      bottom: 10%;
      left: 10%;
    }
  }
  .mobile-button-circle-white {
    @media (max-width: 767px) {
      position: absolute;
      top: 20%;
      right: 10%;
    }
  }
  .intro {
    width: 100%;
    height: 100vh;
    position: relative;
    &::after {
      content: '';
      fill: rgba(24, 58, 96, 0.5);
      background: var(--primary);
      filter: blur(70.4336166381836px);
      width: 120px;
      height: 120px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &__left-bg {
      &::before {
        content: '';
        width: 50%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--primary);
        z-index: -1;
      }
      &::after {
        content: '';
        position: absolute;
        top: 150px;
        left: -50px;
        background-color: rgba(196, 196, 196, 0.5);
        filter: blur(80px);
        width: 240px;
        height: 240px;
        z-index: -1;
      }
    }
    &__title {
      padding-top: 150px;
      margin-left: 50px;
      color: #fff;
      font-size: 34px;
      font-weight: 700;
      line-height: 120%;
      @media (max-width: 767px) {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        line-height: 120%;
        max-width: 150px;
        margin-left: 30px;
      }
      @media (max-width: 767px) {
        margin-left: 20px;
        font-size: 22px;
      }
    }

    &__center-items {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: calc(100% - 280px);
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: space-between;
      margin: 0 140px;
      @media (max-width: 767px) {
        transform: none;
        position: static;
      }
    }

    &__logo {
      max-width: 250px;
      max-height: 250px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @media (max-width: 767px) {
        margin: 0 auto;
        max-width: 200px;
        max-height: 200px;
      }
    }

    &__swiper {
      position: absolute;
      bottom: 2.6%;
      left: 40px;
      z-index: 10;
      width: 250px;
      @media (max-width: 767px) {
        display: none;
      }
    }

    &__title-block {
      position: absolute;
      bottom: 8%;
      left: 50%;
      transform: translateX(-50%);
    }

    &__title-block-box-wrapper {
      position: relative;
    }

    &__title-block-box {
      display: flex;
      align-items: center;
    }

    &__title-block-box2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &__title-block-name {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: var(--primary);
      text-align: center;
      font-size: 14px;
      line-height: 19px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .circle-cursor {
    position: absolute;
    top: -70px;
    right: -57px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .button-arrow-title {
    position: absolute;
    bottom: -80px;
    right: -170%;
    display: flex;
    align-items: flex-end;
    gap: 12px;
    z-index: 1;
    @media (max-width: 767px) {
      left: -180%;
      bottom: -60px;
    }
    .black-arrow {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .black-arrow-mini {
      display: none;
      @media (max-width: 767px) {
        display: block;
      }
    }

    &.left {
      right: 56%;
      @media (max-width: 767px) {
        left: -100%;
        right: auto;
        &:deep() {
          span {
            svg {
              width: 32px;
            }
          }
        }
      }
    }
    &__text {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
      &.white {
        color: #fff;
      }
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }
  }
  .representative {
    position: absolute;
    bottom: 2.6%;
    right: 1.8%;
    z-index: 1;
    &__title {
      color: #000;
      font-size: 16px;
      font-weight: 500;
      line-height: 100%;
      text-transform: capitalize;
      margin-bottom: 5px;
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }

    &__items {
      display: flex;
      align-items: center;
      gap: 30px;
      @media (max-width: 767px) {
        flex-direction: column;
        gap: 10px;
      }
    }

    &__item {
      cursor: pointer;
      img {
        width: 100%;
        object-fit: contain;
        filter: grayscale(100%);
      }
      &:hover {
        img {
          filter: grayscale(0%);
        }
      }
      @media (max-width: 479px) {
        max-width: 60px;
      }
    }
  }
</style>
