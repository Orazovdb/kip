<template>
  <div :class="['news', { active: openVideo }]">
    <div class="news__row">
      <div class="news__left">
        <div class="news__left-items">
          <div class="news__left-item">
            <div class="news__left-item-image">
              <img src="@/assets/img/news_1.png" alt="news" />
            </div>
            <div class="news__left-item-content">
              <h1 class="news__left-item-title">A Contract With Ashgabat International Airport</h1>
              <p class="news__left-item-description">
                KIP Engineering signed a contract with Ashgabat International Airport about IT system design work: correcting errors in AMOS system
              </p>
              <p class="news__left-item-date">06.11.2023</p>
            </div>
          </div>
          <div class="news__left-item">
            <div class="news__left-item-image">
              <img src="@/assets/img/news_2.png" alt="news" />
            </div>
            <div class="news__left-item-content">
              <h1 class="news__left-item-title">A New Manufacturing Plant</h1>
              <p class="news__left-item-description">
                We are in the process of building of own factory which at the beginning will consist of facility for recycling of PET, facility of PSF
                production.
              </p>
              <p class="news__left-item-date">06.11.2023</p>
            </div>
          </div>
        </div>
      </div>
      <div class="news__center">
        <div class="news__center-image">
          <img src="@/assets/img/news-new.png" alt="" />
        </div>
        <div class="news__center-content">
          <!-- <h1 class="news__center-title">New company</h1> -->
          <p class="news__center-description">
            KIP Engineering has been awarded the status оf Registered Reseller of Zebra company. Zebra Technologies, Inc. offers enterprise mobility
            solutions that combine industry-leading, world-class data collection products (barcode scanners and data collection terminals), RFID
            technology others. Mobility products and solutions of Zebra Technologies, Inc. increase productivity, reduce operating costs and increase
            productivity, creating a competitive advantage for businesses of all sizes.
          </p>
          <p class="news__center-date">06.11.2023</p>
        </div>
      </div>
      <div class="news__right">
        <h1 class="news__right-title">News</h1>
        <h2 class="news__right-subtitle">News of the company</h2>
        <div class="news__right-button">
          <div class="relative">
            <base-button-circle primary @clicked="openVideo = !openVideo">
              <base-icon icon="playIcon" />
            </base-button-circle>
            <div class="button-arrow-title">
              <base-icon icon="workBlackArrow" />
              <h2 class="button-arrow-title__text">More video</h2>
            </div>
          </div>
        </div>
        <!-- <button @click="$router.push('/news')" class="news__watch-button">See all</button> -->
      </div>
    </div>
    <div class="video-wrapper" @click="pauseVid">
      <video @click.stop controls ref="myVideo">
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openVideo: false
      }
    },
    methods: {
      playVideo() {
        const vid = this.$refs.myVideo
        vid.play()
      },

      pauseVid() {
        const vid = this.$refs.myVideo
        vid.pause()
        this.openVideo = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    &.active {
      .video-wrapper {
        opacity: 1;
        pointer-events: auto;
        transition: 0.3s;
        video {
          transform: scale(1);
          transition: 0.3s;
        }
      }
    }
    .video-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      z-index: 320;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: 0.3s;
		cursor: auto;
      video {
        width: 80%;
        height: 70%;
        background: rgba(0, 0, 0, 0.7);
        transform: scale(-0.4);
        transition: 0.3s;
      }
      @media (max-width: 767px) {
        video {
          width: 90%;
          height: 50%;
        }
      }
    }

    &__row {
      display: grid;
      grid-template-columns: minmax(250px, 328px) 1fr minmax(250px, 328px);
      gap: 50px;
      height: 100%;
      align-items: center;
      margin: 0 40px;
      padding: 90px 0;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 0;
        margin: 0 15px;
        padding: 90px 0 0 0;
      }
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
      @media (max-width: 767px) {
        order: 3;
        height: 100%;
        margin-top: 30px;
        &::-webkit-scrollbar-track {
          background-color: #d5d5d5;
          transition: 0.3s all;
        }

        &::-webkit-scrollbar-thumb {
          background: var(--primary);
          transition: 0.3s all;
        }
        &::after {
          display: none;
        }
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
      cursor: pointer;
    }

    &__left-item-image {
      min-width: 158px;
      height: 98px;
      background-color: #183a6079;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    &__left-item-content {
    }

    &__left-item-title {
      color: var(--text2);
      font-size: 12px;
      font-weight: 700;
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
      @media (max-width: 767px) {
        order: 2;
        margin-top: 0;
      }
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
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      line-clamp: 8;
      -webkit-box-orient: vertical;
      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 10px;
        -webkit-line-clamp: 4;
        line-clamp: 4;
      }
    }

    &__center-date {
      color: var(--text3);
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      text-align: right;
      @media (max-width: 767px) {
        font-size: 16px;
      }
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
      @media (max-width: 767px) {
        order: 1;
        margin-bottom: 30px;
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
      display: inline-block;
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: var(--red);
        position: absolute;
        left: 0;
        bottom: 0;
      }

      @media (max-width: 767px) {
        font-size: 24px;
        margin-bottom: 10px;
        &::after {
          width: 130%;
        }
      }
    }

    &__right-subtitle {
      color: var(--primary);
      font-size: 34px;
      font-weight: 400;
      line-height: 120%;
      @media (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }

    &__right-button {
      position: absolute;
      top: 50%;
      left: 13%;

      @media (max-width: 767px) {
        top: -30%;
        right: 10%;
        left: auto;
      }
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
      @media (max-width: 767px) {
        position: relative;
        right: auto;
        bottom: auto;
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
    @media (max-width: 767px) {
      right: -80%;
      span {
        &:deep() {
          svg {
            width: 32px;
          }
        }
      }
    }

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
      @media (max-width: 767px) {
        font-size: 10px;
      }
    }
  }
</style>
