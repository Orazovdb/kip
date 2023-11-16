<template>
  <div class="representative">
    <div class="representative__columns">
      <div class="representative__title-wrapper">
        <h1 class="representative__title">Project</h1>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">Официальное представительство</div>
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
        <div class="representative__subtitle">Наши клиенты</div>
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
        <div class="representative__subtitle">Наши проекты</div>
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
    &__title-wrapper {
      flex: 1 1 auto;
      margin-top: 150px;
      display: inline-block;
      text-align: center;
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
    }

    &__column {
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
    }

    &__image {
      width: 100%;
      cursor: pointer;
      img {
        width: 100%;
        filter: grayscale(100%);
        object-fit: contain;
      }
      &:hover {
        img {
          filter: grayscale(0%);
        }
      }
    }
  }
</style>
