<template>
  <div class="ehs">
    <div class="ehs__back">
      <base-icon
        icon="arrowLeft"
        class="project-icon"
        @clicked="$router.back(localeLocation(-1))"
      />
    </div>
    <h1 class="ehs__title">EHS</h1>
    <div class="ehs__box">
      <div class="ehs__swiper-top ehs-top swiper mySwiper2" ref="swiperTop">
        <div class="ehs-top__wrapper swiper-wrapper">
          <div
            class="ehs-top__slide swiper-slide"
            v-for="item in datas.images"
            :key="item"
          >
            <div class="ehs-top__image">
              <img :src="`${imageURL}${item}`" alt="" />
            </div>
          </div>
        </div>
        <div class="ehs-top__navigation-prev swiper-button-prev">
          <base-icon icon="arrowGallery" />
        </div>
        <div class="ehs-top__navigation-next swiper-button-next">
          <base-icon icon="arrowGallery" />
        </div>
      </div>
      <div
        class="ehs__swiper-mini ehs-mini swiper mySwiper"
        ref="mySwiperSmall"
        :options="swiperSmallOptions"
      >
        <div class="ehs-mini__wrapper swiper-wrapper">
          <div
            v-for="item in datas.images"
            :key="item"
            class="ehs-mini__slide swiper-slide"
          >
            <div class="ehs-mini__image">
              <img :src="`${imageURL}${item}`" alt="" />
            </div>
          </div>
        </div>
      </div>
      <h2 class="ehs__box-title">
        {{ translateTitle(datas) }}
      </h2>
      <p class="ehs__box-description" v-html="translateContent(datas)"></p>
    </div>
  </div>
</template>

<script>
import { GET_EHS } from "@/api/home.api";
import translate from "@/mixins/translate";
import Swiper from "@/plugins/thumbs";
import { mapGetters } from "vuex";
export default {
  mixins: [translate],
  computed: {
    swiperSmall() {
      return this.$refs.mySwiperSmall.$swiper;
    },
    // swiperTop() {
    //   return this.$refs.swiperTop.$swiper;
    // },
  },
  data() {
    return {
      datas: {
        images: [],
      },
      swiperSmallOptions: null,
      swiperOptionThumbs: {
        spaceBetween: 20,
        slidesPerView: 5,
        speed: 1500,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: true,
      },
      swiperOptionTop: {
        slidesPerView: 1,
        loop: true,
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  computed: {
    ...mapGetters(["imageURL"]),
  },

  mounted() {
    this.fetchEhs();
    this.swiperMainMini();
    this.swiperMainBig();
  },
  methods: {
    swiperMainMini() {
      this.swiperSmallOptions = new Swiper(".ehs-mini", {
        spaceBetween: 10,
        slidesPerView: 5,
        speed: 1500,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: true,
      });
    },
    swiperMainBig() {
      this.swiperSmallOptions = new Swiper(".ehs-top", {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: this.swiperSmallOptions,
        },
      });
    },

    async fetchEhs() {
      try {
        const { data, statusCode } = await GET_EHS();
        if (statusCode) {
          this.datas = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ehs {
  margin: 60px 250px;
  &__back {
    width: 50px;
    height: 50px;
    .project-icon {
      transition: 0.3s;
      border-radius: 50%;
      animation: arrowAnimate 2s infinite linear alternate;
      padding: 6px;
      &:hover {
        transform: scale(1.1);
        background-color: rgb(0, 0, 0, 0.1);
      }
      @keyframes arrowAnimate {
        0% {
          transform: translateX(10px);
        }

        100% {
          transform: translateX(0px);
        }
      }
    }
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  &__title {
    color: var(--primary);
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-align: center;
  }

  &__box {
  }

  &__swiper-top {
    width: 100%;
    overflow: hidden;
  }

  &__swiper-mini {
    width: 100%;
    overflow: hidden;
  }

  &__box-title {
    color: var(--primary);
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.39px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  &__box-description {
    color: #383838;
    font-size: 22px;
    font-weight: 500;
  }
}
.ehs-top {
  position: relative;
  margin-bottom: 10px;
  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
  }

  &__image {
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__navigation-prev {
    position: absolute;
    left: 10px;
    top: 70%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      transform: rotate(180deg);
    }
    &:hover {
      background: rgba(51, 51, 51, 0.7);
    }
  }

  &__navigation-next {
    position: absolute;
    right: 10px;
    top: 70%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: rgba(51, 51, 51, 0.7);
    }
  }
}
.ehs-mini {
  margin-bottom: 20px;
  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    &.swiper-slide-active {
      &::before {
        display: none;
      }
    }
  }

  &__image {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
