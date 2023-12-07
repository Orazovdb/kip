<template>
  <div class="representative">
    <div class="representative__columns">
      <div class="representative__title-wrapper">
        <h1 class="representative__title">Partners</h1>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">DEALERSHIP</div>
        <div v-swiper:mySwiper="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/bosch.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/mennan.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/zebra.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/interflon.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/airpol.svg" alt="" />
            </div>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">Our clients</div>
        <div v-swiper:mySwiper4="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/airlines.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/arcalyk.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/tach.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/smthng.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/tdm.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/mebel.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/bereket.svg" alt="" />
            </div>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">Our projects</div>
        <div v-swiper:mySwiper1="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/ozmak.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/oerlikon.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/oerlikon_2.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/oerlikon_3.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/gea.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/imgo.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/ektam.svg" alt="" />
            </div>
            <div class="representative__image swiper-slide">
              <img src="@/assets/img/krones.svg" alt="" />
            </div>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
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
      options: {
        slidesPerView: 6,
        speed: 1100,
        spaceBetween: 40,
        loop: true,
        //  autoplay: {
        //    delay: 4,
        //    disableOnInteraction: false,
        //    speed: 1000
        //  },
        navigation: {
          nextEl: ".representative__swiper-next-navigation",
          prevEl: ".representative__swiper-prev-navigation",
        },
        breakpoints: {
          320: {
            speed: 1500,
            slidesPerView: 2,
          },
          479: {
            speed: 1500,
            slidesPerView: 2,
          },
          767: {
            speed: 1000,
            slidesPerView: 6,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
//   .swiper-wrapper {
//     transition-timing-function: linear !important;
//   }
.representative {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  &__title-wrapper {
    flex: 1 1 auto;
    margin-top: 150px;
    display: inline-block;
    text-align: center;
    @media (max-width: 767pc) {
      margin-top: 60px;
      flex: 0 0 0%;
    }
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
    @media (max-width: 767px) {
      font-size: 22px;
    }

    &::before {
      content: "";
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
    gap: 40px;
    margin: 0 150px;
    padding-bottom: 80px;
    justify-content: center;
    height: 100%;
    @media (max-width: 767px) {
      margin: 0 50px;
    }
  }

  &__column {
    @media (max-width: 767px) {
    }
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

  &__swiper {
    width: 100%;
    position: relative;
    padding: 0 40px;
    overflow: hidden;

    &-navigations {
    }

    &-prev-navigation {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
      &:deep() {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }

    &-next-navigation {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
      &:deep() {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  &__images {
    display: flex;
    width: fit-content;
  }

  &__image {
    width: 100%;
    height: 70px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s;
    }
  }
}
</style>
