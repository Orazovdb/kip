<template>
  <div class="news">
    <div class="news__row">
      <div class="news__left">
        <div class="news__left-items">
          <div class="news__left-item" v-for="item in 4" :key="item">
            <div class="news__left-item-image">
              <img src="@/assets/img/news.png" alt="news" />
            </div>
            <div class="news__left-item-content">
              <h1 class="news__left-item-title">New company</h1>
              <p class="news__left-item-description">
                KIP Engineering – молодая и амбициозная компания выполняющая полный комплекс работ инжиниринга.
              </p>
              <p class="news__left-item-date">06.11.2023</p>
            </div>
          </div>
        </div>
      </div>
      <div class="news__center">
        <div class="news__center-image">
          <img src="@/assets/img/news.png" alt="" />
        </div>
        <div class="news__center-content">
          <h1 class="news__center-title">New company</h1>
          <p class="news__center-description">
            KIP Engineering – молодая и амбициозная компания выполняющая полный комплекс работ промышленного инжиниринга.
          </p>
          <p class="news__center-date">06.11.2023</p>
        </div>
      </div>
      <div class="news__right">
        <h1 class="news__right-title">News</h1>
        <h2 class="news__right-subtitle">Karhananyn icerki tazelikleri</h2>
        <div class="news__right-button">
          <div class="relative">
            <base-button-circle primary><base-icon icon="playIcon" /></base-button-circle>
            <div class="button-arrow-title">
              <base-icon icon="workBlackArrow" />
              <h2 class="button-arrow-title__text">More video</h2>
            </div>
          </div>
        </div>
        <button class="news__watch-button">Hemmesini gormek</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    height: 100vh;
    &__row {
      display: grid;
      grid-template-columns: minmax(250px, 328px) 1fr minmax(250px, 328px);
      gap: 50px;
      height: 100%;
      align-items: center;
      margin: 0 40px;
      padding: 90px 0;
    }

    &__left {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        right: -25px;
        top: 50%;
        transform: translateY(-50%);
        height: 85vh;
        width: 1px;
        background-color: rgba(223, 222, 222, 0.24);
      }
    }

    &__left-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__left-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__left-item-image {
      min-width: 158px;
      height: 98px;
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }

    &__left-item-content {
    }

    &__left-item-title {
      color: var(--text2);
      font-size: 14px;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.21px;
      text-transform: capitalize;
      margin-bottom: 4px;
    }

    &__left-item-description {
      color: var(--text3);
      font-size: 12px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 2px;
    }

    &__left-item-date {
      color: var(--text3);
      font-size: 10px;
      font-weight: 500;
      line-height: normal;
      text-align: right;
    }

    &__center {
    }

    &__center-image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }

    &__center-content {
      margin-top: 20px;
    }

    &__center-title {
      color: var(--text2);
      font-size: 26px;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.39px;
      text-transform: capitalize;
      margin-bottom: 6px;
    }

    &__center-description {
      color: var(--text3);
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 4px;
    }

    &__center-date {
      color: var(--text3);
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      text-align: right;
    }

    &__right {
      position: relative;
      height: 100%;
      &::after {
        content: '';
        position: absolute;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
        height: 85vh;
        width: 1px;
        background-color: rgba(223, 222, 222, 0.24);
      }
    }

    &__right-title {
      color: var(--text2);
      font-size: 30px;
      font-weight: 400;
      line-height: 120%;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      padding-bottom: 7px;
      position: relative;
      margin-bottom: 30px;
      display: flex;

      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--red);
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }

    &__right-subtitle {
      color: var(--primary);
      font-size: 34px;
      font-weight: 400;
      line-height: 120%;
    }

    &__right-button {
      position: absolute;
      top: 50%;
      left: 13%;
    }

    &__watch-button {
      position: absolute;
      bottom: 0;
      right: 40px;
      color: var(--red);
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      background-color: transparent;
      transition: 0.2s all;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .button-arrow-title {
    position: absolute;
    bottom: -80px;
    right: -170%;
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
      text-transform: capitalize;
      &.white {
        color: #fff;
      }
    }
  }
</style>
