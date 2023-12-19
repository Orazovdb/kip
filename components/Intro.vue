<template>
  <div class="intro" ref="aos">
    <div
      :class="['contact-modal', { active: openContact }]"
      @click.stop="openContact = false"
      v-if="openContact"
    >
      <div class="contact-modal__wrapper">
        <div class="contact-modal__box" @click.stop>
          <h1 class="contact-modal__title">Contact us</h1>
          <li class="contact-modal__item">
            <base-icon icon="call" />
            <div class="contact-modal__content">
              <p>{{ intro?.contact?.phone }}</p>
              <p>{{ intro?.contact?.mobilePhone }}</p>
            </div>
          </li>
          <li class="contact-modal__item">
            <a
              :href="intro?.contact?.instagramLink"
              target="”_blank”"
              class="flex flex-y-center gap-10"
            >
              <base-icon icon="insta" />
              <p>{{ intro?.contact?.instagram }}</p>
            </a>
          </li>
          <li class="contact-modal__item">
            <a
              :href="`mailto:${intro?.contact?.info}`"
              class="flex flex-y-center gap-10"
            >
              <base-icon icon="email" />
              <p>{{ intro?.contact?.info }}</p>
            </a>
          </li>
          <li class="contact-modal__item">
            <base-icon icon="location" />
            <p>{{ translateAddress(intro?.contact) }}</p>
          </li>
        </div>
      </div>
    </div>
    <div class="intro__left-bg" />
    <h1 class="intro__title">{{ translateTagline(intro) }}</h1>
    <div class="intro__center-items">
      <div class="relative mobile-button-circle-primary" ref="contact">
        <base-button-circle @clicked="openContact = !openContact">
          Contact
        </base-button-circle>
        <div class="button-arrow-title left">
          <h2 class="button-arrow-title__text white">Contact us</h2>
          <base-icon icon="contactWhiteArrow" />
        </div>
      </div>
      <div class="intro__logo" ref="image">
        <img src="@/assets/img/kip-logo.svg" alt="logo" />
      </div>
      <div class="relative mobile-button-circle-white" ref="project">
        <base-button-circle :url="`/1.pdf`" primary>
          Download catalog
        </base-button-circle>
        <!-- <base-icon icon="circleCursor" class="circle-cursor" /> -->
        <div class="button-arrow-title">
          <base-icon icon="workBlackArrow" class="black-arrow" />
          <h2 class="button-arrow-title__text">Catalog</h2>
          <base-icon icon="workBlackArrowMini" class="black-arrow-mini" />
        </div>
      </div>
    </div>
    <div class="intro__swiper" ref="swiper">
      <swiper-item title="Gallery" :photos="intro?.galary"> </swiper-item>
    </div>
    <div class="intro__title-block" ref="titleBlock">
      <div class="intro__title-block-box-wrapper">
        <img
          src="@/assets/img/intro-title-wrapper.png"
          class="intro__title-block-box"
          alt=""
        />
        <h3 class="intro__title-block-name">
          ES ‘’Kopugurly inzhenerchilik payhaslary”
        </h3>
      </div>
    </div>

    <div class="representative" ref="representative">
      <h2 class="representative__title">DEALERSHIP</h2>
      <representative-home :representatives="intro?.dealership" />
    </div>
  </div>
</template>

<script>
import translate from "@/mixins/translate";
export default {
  props: {
    intro: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [translate],
  data() {
    return {
      openContact: false,
      observer: null,
    };
  },
  mounted() {
    if (this.$refs.aos) {
      const options =
        {
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.4,
        } || {};
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            this.$refs.image.classList.add("aos");
            this.$refs.contact.classList.add("aos");
            this.$refs.project.classList.add("aos");
            this.$refs.representative.classList.add("aos");
            this.$refs.titleBlock.classList.add("aos");
            this.$refs.swiper.classList.add("aos");
          }
        });
      }, options);
    }
    this.observer.observe(this.$refs.aos);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
.representative {
  position: absolute;
  bottom: 2.6%;
  right: 2.8%;
  z-index: 1;
  transition: 1s all;
  transform: translateX(80px);
  opacity: 0;
  &.aos {
    opacity: 1;
    transform: translateY(0px);
    transition: 1s all;
  }
  @media (max-width: 479px) {
    right: 3%;
  }
  &__title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    text-transform: capitalize;
    margin-bottom: 5px;
    @media (max-width: 479px) {
      font-size: 10px;
      max-width: 100px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
.mobile-button-circle-primary {
  transition: 1s all;
  transform: translateX(-80px);
  opacity: 0;
  &.aos {
    opacity: 1;
    transform: translateY(0px);
    transition: 1s all;
  }
  @media (max-width: 767px) {
    position: absolute !important;
    bottom: 10%;
    left: 10%;
  }
  @media (max-width: 479px) {
    left: 15%;
  }
}
.mobile-button-circle-white {
  transition: 1s all;
  transform: translateX(80px);
  opacity: 0;
  &.aos {
    opacity: 1;
    transform: translateY(0px);
    transition: 1s all;
  }
  @media (max-width: 767px) {
    position: absolute;
    top: 20%;
    right: 10%;
  }
}
.intro {
  width: 100%;
  height: 100vh;
  position: relative;
  @media (max-width: 767px) {
    cursor: none;
  }

  &::after {
    content: "";
    fill: rgba(24, 58, 96, 0.5);
    background: var(--primary);
    filter: blur(70.4336166381836px);
    width: 120px;
    height: 120px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &__left-bg {
    &::before {
      content: "";
      width: 50%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: var(--primary);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 150px;
      left: -50px;
      background-color: rgba(196, 196, 196, 0.5);
      filter: blur(80px);
      width: 240px;
      height: 240px;
      z-index: -1;
    }
  }
  &__title {
    padding-top: 150px;
    margin-left: 50px;
    color: #fff;
    font-size: 34px;
    font-weight: 700;
    line-height: 120%;
    @media (max-width: 767px) {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      line-height: 120%;
      max-width: 150px;
      margin-left: 30px;
    }
    @media (max-width: 767px) {
      margin-left: 20px;
      font-size: 22px;
    }
  }

  &__center-items {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: calc(100% - 340px);
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    margin: 0 170px;
    @media (max-width: 767px) {
      transform: none;
      position: static;
    }
  }

  &__logo {
    max-width: 250px;
    max-height: 250px;
    border-radius: 50%;
    position: relative;
    transition: 1s all;
    transform: translateY(80px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0);
      transition: 1s all;
    }
    &::before {
      content: "";
      width: 200px;
      height: 200px;
      background-color: #183a6079;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: -1;
    }

    @media (max-width: 767px) {
      &.aos {
        transform: translate(-50%, -50%);
      }
      &::before {
        content: "";
        width: 135px;
        height: 135px;
        background-color: #183a6079;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -1;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media (max-width: 767px) {
      margin: 0 auto;
      width: 170px;
      height: 170px;
    }
    @media (max-width: 479px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__swiper {
    position: absolute;
    bottom: 2.6%;
    left: 40px;
    z-index: 10;
    width: 250px;
    transition: 1s all;
    transform: translateX(-80px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__title-block {
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translate(-50%, 80px);
    transition: 1s all;
    opacity: 0;

    &.aos {
      opacity: 1;
      transform: translate(-50%, 0px);
      transition: 1s all;
    }
    @media (max-width: 756px) {
      max-width: 200px;
    }
    @media (max-width: 479px) {
      bottom: 18%;
      max-width: 170px;
    }
  }

  &__title-block-box-wrapper {
    position: relative;
  }

  &__title-block-box {
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__title-block-box2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__title-block-name {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary);
    text-align: center;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 15px;
    }
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
}
.circle-cursor {
  position: absolute;
  top: -70px;
  right: -57px;
  cursor: fill !important;
  @media (max-width: 767px) {
    display: none;
  }
}
.button-arrow-title {
  position: absolute;
  bottom: -80px;
  right: -190%;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  z-index: 1;
  @media (max-width: 767px) {
    left: -100%;
    bottom: -60px;
  }
  .black-arrow {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .black-arrow-mini {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }

  &.left {
    right: 56%;
    @media (max-width: 767px) {
      left: -67%;
      right: auto;
      &:deep() {
        span {
          svg {
            width: 26px;
          }
        }
      }
    }
  }
  &__text {
    white-space: nowrap;
    font-size: 14px;
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

.contact-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(14px);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &.active {
    opacity: 1;
    pointer-events: auto;
    .contact-modal__box {
      transform: scale(1);
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__title {
    font-size: 24px;
    color: var(--primary);
    position: relative;
    padding-bottom: 7px;
    display: inline-block;
    margin-bottom: 10px;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 70%;
      height: 2px;
      background-color: var(--red);
    }
  }

  &__box {
    max-width: 400px;
    margin: 0 20px;
    padding: 14px;
    border-radius: 10px;
    background-color: #fff;
    transition: all 0.3s;
    transform: scale(-0.4);
  }

  &__item {
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
    a {
      color: #000;
    }
    p {
      font-weight: 300;
      font-size: 14px;
      &:first-child {
        margin-bottom: 2px;
      }
      &:last-child {
      }
    }
  }
}
</style>
