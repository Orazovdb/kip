<template>
  <div class="about">
    <div class="about__left" />
    <div class="about__row" @click.stop="closeDropdown">
      <div class="about__logo">
        <img src="@/assets/img/kip-logo.svg" alt="" />
      </div>
      <div class="about__content">
        <h1 class="about__title">About us</h1>
        <p class="about__description">
          Our company was founded in 2020. KIP Engineering holds a distinct position in its ndustry and is a con dent business that is expanding
          quickly. We successfully oversee projects from the outset, through the phases of planning, execution, and commissioning, and all the way
          through to the project's completion. The company holds a prominent position in the services industry, providing cutting-edge technological
          solutions and services to its partners and clients that keep up with the times. The goals, needs, and preferences of the client form the
          foundation of the business. Our goals revolve around our capacity to deliver to clients the best possible solutions in terms of scope,
          eﬀectiveness, and suitability under the pertinent circumstances in the shortest amount of time, along with post-purchase guarantees that
          include free technical support and consulting. Our team of highly skilled specialists and engineers enables us to conduct in-depth analyses
          of markets and procedures within the industries we work in. Public sector representatives and private industrial organizations are among our
          company's clientele. KIP Engineering has established itself in a wide range of industries. We deal with IT technologies, oﬀering our own
          in-house developed products along with the option of integrating them with those of our international and domestic partners. Our work is
          presented in the textile, food, agricultural, and household chemical industries. We undertake projects in the industrial sector. <br />
          Our determination to create a highly productive process and solve complicated problems lead us to continuously grow and explore new
          frontiers, enhancing our skills and making devoted partners and friends. <br />
          Our Mission <br />
          Elevating possibilities through engineering and IT mastery. Our mission is to lead with creativity, integrity, and a commitment to client
          success, shaping a future where technology empowers and connects us all.
        </p>

        <div class="about__button-wrapper">
          <button @click="$router.push(localeLocation('/about'))" class="about__button">Read more</button>
        </div>
      </div>
      <div class="about__information-button" @click.stop>
        <div class="relative">
          <div @click.stop :class="['information-button-dropdown', { open: isVisible }]">
            <div class="information-button-dropdown__items">
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">3</p>
                  <h2 class="information-button-dropdown__title">Countries</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="twoGuy" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">30</p>
                  <h2 class="information-button-dropdown__title">Employees</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="guy" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">25</p>
                  <h2 class="information-button-dropdown__title">Clients</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="projects" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">45</p>
                  <h2 class="information-button-dropdown__title">Projects</h2>
                </div>
              </div>
            </div>
          </div>
          <base-button-circle primary @clicked="isVisible = !isVisible">information</base-button-circle>
          <div class="button-arrow-title">
            <base-icon icon="workBlackArrow" class="arrow" />
            <base-icon icon="arrowLeftMini" class="arrow-mobile" />
            <h2 class="button-arrow-title__text">
              information <br />
              about us
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isVisible: false,
        isFullText: false
      }
    },
    methods: {
      closeDropdown() {
        this.isVisible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
    height: 100vh;

    &__left {
      position: absolute;
      left: 0;
      top: 0;
      width: 25%;
      height: 100%;
      background-color: var(--primary);
      z-index: -1;
    }

    &__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      height: 100%;
      position: relative;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }

    &__logo {
      max-width: 400px;
      height: 400px;
      margin-left: calc(25% - 20px);
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      &::before {
        content: '';
        position: absolute;
        width: 550px;
        height: 550px;
        border-radius: 50%;
        left: -70px;
        top: -70px;
        border: 1px solid #e4e4e4;
        z-index: -2;
      }
      &::after {
        content: '';
        position: absolute;
        width: 650px;
        height: 650px;
        border-radius: 50%;
        left: -120px;
        top: -120px;
        border: 1px solid #e4e4e4;
        z-index: -2;
      }
      @media (max-width: 767px) {
        max-width: 180px;
        height: 180px;
        margin-left: calc(9% - 20px);
        margin-top: 40px;
        &::after,
        &::before {
          display: none;
        }
      }
    }

    &__content {
      margin-bottom: 30%;
      max-width: 627px;

      @media (max-width: 767px) {
        max-width: 100%;
        margin: 0 10px;
        padding: 10px 20px;
        background-color: #fff;
      }
      // &.active {
      //   .about__description {
      //     overflow: auto;
      //     text-overflow: ellipsis;
      //     display: -webkit-box;
      //     -webkit-line-clamp: auto;
      //     line-clamp: auto;
      //     -webkit-box-orient: vertical;
      //   }
      // }
    }

    &__title {
      color: var(--text2);
      font-size: 30px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      position: relative;
      padding-bottom: 7px;
      margin-bottom: 16px;
      display: inline-block;
      &::after {
        content: '';
        position: absolute;
        width: 70%;
        height: 1px;
        background-color: var(--red2);
        bottom: 0;
        left: 0;
      }
      @media (max-width: 767px) {
        font-size: 24px;
      }
    }

    &__description {
      color: var(--text3);
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      line-clamp: 7;
      -webkit-box-orient: vertical;
      margin-bottom: 12px;
      &::-webkit-scrollbar-track {
        background-color: #d5d5d5;
        transition: 0.3s all;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        transition: 0.3s all;
      }

      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 20px;
        -webkit-line-clamp: 12;
        line-clamp: 12;
      }
    }

    &__button-wrapper {
      display: flex;
      justify-content: flex-end;
    }

    &__button {
      color: var(--red);
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      background: transparent;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }

    &__information-button {
      position: absolute;
      right: 15%;
      bottom: 22%;
      @media (max-width: 767px) {
        top: 30%;
        right: 20%;
        height: 60px;
      }
    }
  }
  .button-arrow-title {
    position: absolute;
    bottom: -60px;
    right: -180%;
    display: flex;
    align-items: flex-end;
    gap: 12px;

    &.left {
      right: auto;
      right: 56%;
    }
    .arrow-mobile {
      display: none;
    }
    @media (max-width: 767px) {
      bottom: auto;
      top: -60px;
      right: -130%;
      .arrow {
        display: none;
      }
      .arrow-mobile {
        display: block;
      }
    }
    &__text {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 500;
      &.white {
        color: #fff;
      }
      @media (max-width: 767px) {
        font-size: 10px;
      }
    }
  }
  .information-button-dropdown {
    position: absolute;
    left: -100%;
    top: -130%;
    transition: 0.7s;
    transform: scale(-0.1);
    opacity: 0;
    &.open {
      left: -250%;
      opacity: 1;
      transform: scale(1);
    }
    @media (max-width: 767px) {
      left: -60%;
    }
    &__items {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 20px;
      border-radius: 52px;
      background: rgba(24, 58, 96, 0.1);
      backdrop-filter: blur(30.5px);
      &:nth-child(2) {
        transform: translateX(-60px);
      }
      &:nth-child(3) {
        transform: translateX(-30px);
      }
      &:last-child {
        transform: translateX(60px);
      }
      @media (max-width: 767px) {
        padding: 4px 14px;
      }
    }

    &__icon {
      @media (max-width: 767px) {
        &:deep() {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    &__content {
    }

    &__number {
      color: var(--primary);
      font-size: 18px;
      font-weight: 700;
      line-height: 120%;
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }

    &__title {
      color: var(--red);
      font-size: 16px;
      font-weight: 500;
      line-height: 120%;
      text-transform: capitalize;
      @media (max-width: 767px) {
        font-size: 12px;
      }
    }
  }
</style>
