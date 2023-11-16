<template>
  <div class="about">
    <div class="about__left" />
    <div class="about__row">
      <div class="about__logo">
        <img src="@/assets/img/kip-logo.svg" alt="" />
      </div>
      <div class="about__content">
        <h1 class="about__title">About us</h1>
        <p class="about__description">
          KIP Engineering – молодая и амбициозная компания выполняющая полный комплекс работ промышленного инжиниринга. Основные деятельности KIP
          направлены на эффективное и своевременное выполнение интересов заказчика, выполнение нестандартных и трудных задач, использование самых
          современных и высокотехнологических инженерных решений. Наш ключ к успеху — это профессионалы, преданные своему делу.
        </p>
        <div class="about__button-wrapper">
          <button class="about__button">DOWAMYNY GOR</button>
        </div>
      </div>
      <div class="about__information-button">
        <div class="relative">
          <div :class="['information-button-dropdown', { open: isVisible }]">
            <div class="information-button-dropdown__items">
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">3</p>
                  <h2 class="information-button-dropdown__title">Yurtlar</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">3</p>
                  <h2 class="information-button-dropdown__title">Yurtlar</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">3</p>
                  <h2 class="information-button-dropdown__title">Yurtlar</h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">3</p>
                  <h2 class="information-button-dropdown__title">Yurtlar</h2>
                </div>
              </div>
            </div>
          </div>
          <base-button-circle primary @clicked="isVisible = !isVisible">Work</base-button-circle>
          <div class="button-arrow-title">
            <base-icon icon="workBlackArrow" />
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
        isVisible: false
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
    }

    &__content {
      margin-bottom: 30%;
      max-width: 627px;
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
      &::after {
        content: '';
        position: absolute;
        width: 70px;
        height: 1px;
        background-color: var(--red2);
        bottom: 0;
        left: 0;
      }
    }

    &__description {
      color: var(--text3);
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
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
    &__text {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 500;
      &.white {
        color: #fff;
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
    }

    &__icon {
    }

    &__content {
    }

    &__number {
      color: var(--primary);
      font-size: 18px;
      font-weight: 700;
      line-height: 120%;
    }

    &__title {
      color: var(--red);
      font-size: 16px;
      font-weight: 500;
      line-height: 120%;
      text-transform: capitalize;
    }
  }
</style>
