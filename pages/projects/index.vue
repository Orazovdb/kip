<template>
  <div class="projects">
    <div class="projects__container">
      <div class="projects__top">
        <base-icon
          icon="arrowLeft"
          class="projects__icon"
          @clicked="$router.push(localeLocation('/'))"
        />
        <h1 class="projects__title">Projects</h1>
      </div>
      <div class="projects__items">
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/engineering_1.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <!-- <div class="projects-item__profile">
              <img src="" alt="" />
            </div> -->
            <div class="projects-item__content">
              <h1 class="projects-item__title">СF / BCF YARNS</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/telecom_2.png" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">RIETER PATHFINDER 222</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/lemmer.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">Lemmer</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/lemmer.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">Lemmer</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/lemmer.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">Lemmer</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/lemmer.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">Lemmer</h1>
            </div>
          </div>
        </div>
        <div
          class="projects-item"
          @click="$router.push(localeLocation(`/projects/${index + 1}`))"
        >
          <div class="projects-item__image">
            <img src="@/assets/img/lemmer.jpg" alt="" />
          </div>
          <div class="projects-item__bottom">
            <div class="projects-item__content">
              <h1 class="projects-item__title">Lemmer</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
  &__container {
    max-width: 1165px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__top {
    display: flex;
    margin-top: 100px;
    gap: 50px;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 767px) {
      gap: 30px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  &__icon {
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
    @media (max-width: 767px) {
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__title {
    color: var(--red);
    font-size: 34px;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
}
.projects-item {
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    .projects-item__image {
      transition: 0.3s all;
      transform: scale(1.04);
    }
  }
  &__image {
    height: 215px;
    margin-bottom: 10px;
    position: relative;
    transition: 0.3s all;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
    }
    &::before {
      content: "";
      width: 50px;
      height: 50px;
      border-radius: 0 0 10px 0;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
    }
    &::after {
      content: "";
      width: 80px;
      height: 40px;
      border-radius: 10px 0 0 0;
      background-color: #fff;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__profile {
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    background-color: var(--primary);
  }

  &__content {
  }

  &__title {
    color: var(--text3);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
}
</style>
