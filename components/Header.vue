<template>
  <header class="header">
    <div class="header__body">
      <div :class="['burger-wrapper', { open: openLanguages }]">
        <div class="burger" @click="toggleLanguages">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="languages" @mouseleave="openLanguages = false">
          <div class="languages__icon">
            <base-icon icon="closeIcon" @clicked="toggleLanguages" />
          </div>
          <div class="languages__block">
            <h2 class="languages__title">Language</h2>
            <div class="languages__link-wrapper">
              <nuxt-link v-for="locale in selectedLocale" exact :key="locale.code" :to="switchLocalePath(locale.code)" class="languages__link">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <nav class="menu">
        <div class="menu__body">
          <ul class="menu__list">
            <li class="menu__item" v-for="link in links" :key="link.id">
              <nuxt-link :to="link.url" class="menu__link"> {{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        linkActive: null,
        openLanguages: false,
        links: [
          {
            id: 1,
            name: 'Home',
            url: '/'
          },
          {
            id: 2,
            name: 'About us',
            url: '/about-us'
          },
          {
            id: 3,
            name: 'News',
            url: '/news'
          },
          {
            id: 4,
            name: 'Projects',
            url: '/projects'
          },
          {
            id: 5,
            name: 'Partner',
            url: '/partner'
          },
          {
            id: 6,
            name: 'Gallery',
            url: '/gallery'
          },
          {
            id: 7,
            name: 'Vacancy',
            url: '/vacancy'
          }
        ]
      }
    },
    computed: {
      selectedLocale() {
        return this.$i18n.locales
      }
    },
    methods: {
      toggleLanguages() {
        this.openLanguages = !this.openLanguages
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    padding: 10px 20px 10px 30px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 967px;
    margin: 0 auto;
    border-radius: 10px;
    border: 1px solid var(--primary);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(31px);
    z-index: 100;
    position: none;

    &__body {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    .burger-wrapper {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      &.open {
        .languages {
          transform: translate(0, 0);
          opacity: 1;
          pointer-events: auto;
          transition: 0.2s all;
          z-index: 10;
        }
      }
    }

    .burger {
      cursor: pointer;
      min-width: 26px;
      height: 16px;
      position: relative;
      z-index: 200;
      background-color: transparent;
      display: flex;
      justify-content: center;
      transition: 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      span {
        background-color: #fff;
      }
      span {
        height: 2px;
        position: absolute;
        border-radius: 10px;
        background-color: #fff;
        transition: 0.1s;
        &:nth-child(1) {
          top: 0;
          width: 100%;
          transition: 0.1s;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
          width: 100%;
          left: -10px;
          transition: 0.1s;
        }
        &:nth-child(3) {
          top: calc(100% - 2px);
          width: 100%;
          transition: 0.1s;
        }
      }
      &.active {
        min-width: 30px;

        span {
          transition: 0.1s;
          background-color: #fff;

          &:nth-child(1) {
            top: 50%;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 50%;
          }
        }
      }
    }
  }
  .menu {
    &__body {
      // @media (max-width: 992px) {
      //   position: fixed;
      //   left: -100%;
      //   width: 70%;
      //   height: 100%;
      //   background: var(--black);
      //   transition: all 0.3s ease 0s;
      // }
    }

    &__list {
      display: flex;
      gap: 40px;
      justify-content: flex-end;
      // @media (max-width: 992px) {
      //   flex-direction: column;
      //   justify-content: flex-start;
      // }
    }

    &__item {
    }

    &__link {
      padding: 10px;
      border-radius: 99px;
      color: var(--text);
      font-size: 20px;
      font-weight: 500;
      display: block;
      white-space: nowrap;
      transition: 0.2s;
      &:hover {
        background: rgba(255, 255, 255, 0.09);
      }
      &.nuxt-link-active,
      &.nuxt-link-exact-active {
        background: rgba(255, 255, 255, 0.2);
        color: var(--text);
      }
    }
  }
  .languages {
    position: absolute;
    left: -20px;
    top: calc(100% + 25px);
    width: 248px;
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30.5px);
    z-index: 10;
    transform: translate(-10px, -10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.1s all;
    &__icon {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
    }

    &__block {
      padding: 5px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
    }

    &__title {
      margin-bottom: 10px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }

    &__link-wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__link {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      padding: 5px 10px;
      border-radius: 14px;
      transition: 0.2s;
      &:hover {
        background: rgba(255, 255, 255, 0.09);
      }
      &.nuxt-link-active,
      &.nuxt-link-exact-active {
        background: rgba(255, 255, 255, 0.2);
        color: var(--text);
      }
    }
  }
</style>
