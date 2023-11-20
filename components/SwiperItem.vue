<template>
  <div :class="classes">
    <div v-swiper:mySwiper="options" class="swiper-block__swiper swiper">
      <h1 class="swiper-block__title" v-if="title">News</h1>
      <!-- <div class="swiper-block__circle"></div>
      <div class="swiper-block__box"></div> -->
      <div class="swiper-block__wrapper swiper-wrapper">
        <div class="swiper-block__slide swiper-slide" v-for="slider in 3" :key="slider">
          <div class="swiper-block__image">
            <img src="@/assets/img/news.png" />
          </div>
          <div class="swiper-block__title-wrapper">
            <h1 class="swiper-block__slide-title">A New Manufacturing Plant</h1>
          </div>
        </div>
      </div>
      <div class="swiper-block__navigations">
        <div class="swiper-block__prev-navigation swiper-button-prev">
          <base-icon icon="prevNavigation" />
        </div>
        <div class="swiper-block__next-navigation swiper-button-next">
          <base-icon icon="nextNavigation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: () => ''
      },
      projects: {
        type: Boolean,
        default: () => null
      }
    },
    computed: {
      classes: function () {
        return [
          'swiper-block',
          {
            'swiper-block--projects': this.projects
          }
        ]
      }
    },
    data() {
      return {
        options: {
          slidesPerView: 1,
          speed: 200,
          spaceBetween: 4,
          autoplay: {
            delay: 4000
          },
          navigation: {
            nextEl: '.swiper-block__next-navigation',
            prevEl: '.swiper-block__prev-navigation'
          },
          breakpoints: {
            320: {
              speed: 1000
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-block {
    width: 100%;
    position: relative;

    &__swiper {
      width: 100%;
      overflow: hidden;
    }

    &__title {
      color: var(--red);
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 10px;
    }

    &__wrapper {
      display: flex;
      width: fit-content;
      border-radius: 10px;
    }

    &__circle {
      width: 35px;
      height: 35px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 33px;
      left: 0;
      z-index: 10;
    }

    &__box {
      position: absolute;
      left: 0;
      top: 33px;
      width: 45px;
      height: 45px;
      border-radius: 0 0 10px 0;
      background-color: var(--primary);
      z-index: 3;
    }

    &__slide {
      position: relative;
    }

    &__image {
      width: 100%;
      height: 150px;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
      }
    }

    &__title-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 100%;
      border-radius: 0px 0px 10px 10px;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      padding: 7px 20px;
      z-index: 2;
    }

    &__slide-title {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--red);
        top: 50%;
        transform: translateY(-50%);
        left: -12px;
      }
    }

    &__navigations {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      gap: 6px;
      padding: 4px 6px;
      background-color: var(--primary);
      border-radius: 10px 0 0 0;
      z-index: 10;
      &:deep() {
        .swiper-button-disabled {
          transition: 0.1s all;
          background-color: transparent !important;
          cursor: auto;
          &:active {
            transform: scale(1);
          }
          svg {
            color: #fff !important;
            cursor: auto;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          background-color: #fff;
          transition: 0.1s all;
          cursor: pointer;
          svg {
            color: #000;
          }
        }
      }
    }

    &__prev-navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border: 1px solid #fff;
      border-radius: 50%;

      &:active {
        transform: scale(1.2);
      }
    }

    &__next-navigation {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border: 1px solid #fff;
      border-radius: 50%;

      &:active {
        transform: scale(1.2);
      }
    }

    &--projects {
      .swiper-block__title {
        font-size: 36px;
      }
      .swiper-block__image {
        height: 400px;
        @media (max-width: 767px) {
          height: 220px;
        }
      }
      .swiper-block__circle {
        width: 60px;
        height: 60px;
        background-color: var(--primary);
        top: 5px;
        left: 5px;
        @media (max-width: 767px) {
          width: 40px;
          height: 40px;
        }
      }

      .swiper-block__box {
        width: 70px;
        height: 70px;
        background-color: #fff;
        top: 0;
        @media (max-width: 767px) {
          width: 50px;
          height: 50px;
        }
      }
      .swiper-block__navigations {
        padding: 6px 12px;
        background-color: #fff;
        &:deep() {
          .swiper-button-disabled {
            transition: 0.2s all;
            background-color: transparent !important;
            cursor: auto;
            &:active {
              transform: scale(1);
            }
            svg {
              color: var(--primary) !important;
              transition: 0.2s all;
              cursor: auto;
            }
          }
          .swiper-button-prev,
          .swiper-button-next {
            background-color: var(--primary);
            transition: 0.2s all;
            cursor: pointer;
            svg {
              color: white;
              transition: 0.2s all;
            }
          }
        }
      }
      .swiper-block__prev-navigation {
        width: 35px;
        height: 35px;
        border: 1px solid var(--primary);
      }
      .swiper-block__next-navigation {
        width: 35px;
        height: 35px;
        border: 1px solid var(--primary);
      }
      .swiper-block__title-wrapper {
        padding: 14px 40px;
      }
      .swiper-block__slide-title {
        font-size: 18px;
        &::before {
          content: '';
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--red);
          left: -22px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
