<template>
  <div class="gallery-popup" @click="$emit('clicked')">
    <div class="gallery-popup__box" @click.stop>
      <div class="gallery-popup__box-close">
        <base-icon @clicked="$emit('clicked')" icon="closeIcon2" />
      </div>
      <div
        class="gallery-popup__swiper-top gallery-popup-top swiper mySwiper2"
        ref="swiperTop"
      >
        <div class="gallery-popup-top__wrapper swiper-wrapper">
          <div
            class="gallery-popup-top__slide swiper-slide"
            v-for="item in items"
            :key="item.galleryId"
          >
            <div class="gallery-popup-top__image">
              <img :src="`${imageURL}${item.image}`" alt="" />
            </div>
          </div>
        </div>
        <div class="gallery-popup-top__navigation-prev swiper-button-prev">
          <base-icon icon="arrowGallery" />
        </div>
        <div class="gallery-popup-top__navigation-next swiper-button-next">
          <base-icon icon="arrowGallery" />
        </div>
      </div>
      <div
        v-show="items && items.length > 1"
        class="gallery-popup__swiper-mini gallery-popup-mini swiper mySwiper"
        ref="mySwiperSmall"
        :options="swiperSmallOptions"
      >
        <div class="gallery-popup-mini__wrapper swiper-wrapper">
          <div
            v-for="item in items"
            :key="item.galleryId"
            class="gallery-popup-mini__slide swiper-slide"
          >
            <div class="gallery-popup-mini__image">
              <img :src="`${imageURL}${item.image}`" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="gallery-popup__text" v-html="datas?.description"></div> -->
  </div>
</template>

<script>
import Swiper from "@/plugins/thumbs";
import { mapGetters } from "vuex";
export default {
  props: {
    datas: {
      type: Object,
      default: () => {},
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
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
    swiperSmall() {
      return this.$refs.mySwiperSmall.$swiper;
    },
  },
  mounted() {
    this.swiperMainMini();
    this.swiperMainBig();
  },
  methods: {
    swiperMainMini() {
      this.swiperSmallOptions = new Swiper(".gallery-popup-mini", {
        spaceBetween: 20,
        slidesPerView: 5,
        speed: 1500,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: true,
      });
    },
    swiperMainBig() {
      this.swiperSmallOptions = new Swiper(".gallery-popup-top", {
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
  },
};
</script>

<style lang="scss" scoped>
.gallery-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15.5px);
  cursor: auto;
  overflow: hidden;

  &__box {
    max-width: 980px;
    position: relative;
    @media (max-width: 767px) {
      max-width: calc(100% - 40px);
      margin: 0 20px;
    }
  }

  &__box-close {
    position: absolute;
    z-index: 1;
    right: 15px;
    top: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      background: rgba(51, 51, 51, 0.7);
    }
  }

  &__swiper-top {
    width: 100%;
    overflow: hidden;
    margin-bottom: 30px;
  }

  &__swiper-mini {
    width: 100%;
    overflow: hidden;
  }
}
.gallery-popup-top {
  position: relative;
  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
    width: 100%;
  }

  &__image {
    width: 100%;
    height: 450px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 767px) {
      height: 370px;
    }
  }

  &__navigation-prev {
    position: absolute;
    top: 55%;
    left: 20px;
    background: rgba(51, 51, 51, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      transform: rotate(180deg);
    }
    transition: 0.3s;
    &:hover {
      background: rgba(51, 51, 51, 0.7);
    }
    @media (max-width: 767px) {
      &:deep(svg) {
        width: 25px;
        height: 25px;
      }
    }
  }

  &__navigation-next {
    position: absolute;
    top: 55%;
    right: 20px;
    background: rgba(51, 51, 51, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover {
      background: rgba(51, 51, 51, 0.7);
    }
    @media (max-width: 767px) {
      &:deep(svg) {
        width: 25px;
        height: 25px;
      }
    }
  }
}
.gallery-popup-mini {
  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
    position: relative;
    cursor: pointer;
    width: 100%;
    @media (max-width: 767px) {
      min-width: 130px;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    &.swiper-slide-thumb-active {
      &::before {
        display: none;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
