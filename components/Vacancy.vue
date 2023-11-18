<template>
  <div class="vacancy">
    <div class="vacancy__row">
      <div class="vacancy__logo">
        <img src="@/assets/img/kip-logo.svg" alt="" />
      </div>
      <div class="vacancy__form-wrapper">
        <h1 class="vacancy__title">Vacancy</h1>
        <form class="vacancy__form">
          <base-input placeholder="Your name" />
          <base-input placeholder="Your email" />
          <base-input placeholder="File" />
          <base-textarea placeholder="About us" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .vacancy {
    width: 100%;
    height: 100vh;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background-color: var(--primary);
      width: 25%;
      height: 100%;
      z-index: -1;
    }
    &__row {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      max-width: 1440px;
      height: 100%;
    }

    &__logo {
      margin-left: calc(25% - 20px);
      max-width: 400px;
      height: 400px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }

    &__form-wrapper {
      margin-right: calc(25% - 20px);
    }

    &__title {
      color: var(--text2);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      padding-bottom: 7px;
      margin-bottom: 30px;
      position: relative;
      display: inline-block;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80%;
        height: 1px;
        background-color: var(--red);
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
