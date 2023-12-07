<template>
  <div class="projects">
    <div class="projects__title-wrapper">
      <h1 class="projects__title">Projects</h1>
    </div>
    <div class="projects__row">
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/projects_1.jpg" alt="" />
        </div>
        <h1 class="projects__item-title">СF / BCF YARNS</h1>
      </div>
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/projects_2.png" alt="" />
        </div>
        <h1 class="projects__item-title">RIETER PATHFINDER 222</h1>
      </div>
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/engineering_1.jpg" alt="" />
        </div>
        <h1 class="projects__item-title">СF / BCF YARNS</h1>
      </div>
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/engineering_2.jpg" alt="" />
        </div>
        <h1 class="projects__item-title">RIETER PATHFINDER 222</h1>
      </div>
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/lemmer.jpg" alt="" />
        </div>
        <h1 class="projects__item-title">Lemmer</h1>
      </div>
      <div
        class="projects__item"
        @click="$router.push(localeLocation(`/projects/${index + 1}`))"
      >
        <div class="projects__image">
          <img src="@/assets/img/projects_1.jpg" alt="" />
        </div>
        <h1 class="projects__item-title">СF / BCF YARNS</h1>
      </div>
    </div>
    <div class="projects__button-wrapper">
      <button class="projects__button" @click="$router.push('/projects')">
        See all
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      sliders: [
        {
          image: "engineering_1.jpg",
          title: "СF / BCF YARNS",
        },
        {
          image: "engineering_2.jpg",
          title: "СF / BCF YARNS",
        },
      ],
      telecom: [
        {
          image: "telecom_2.png",
          title: "СF / BCF YARNS",
        },
        {
          image: "projects_1.jpg",
          title: "СF / BCF YARNS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-block {
  &__title {
    color: var(--red);
    font-size: 34px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
    transition: 0.3s;
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 12px;
    }
  }
}
.projects {
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: 2;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) {
    padding-top: 80px;
    height: 100%;
  }
  &__title-wrapper {
    text-transform: capitalize;
    position: absolute;
    left: 50%;
    top: 12%;
    transform: translateX(-50%);
    @media (max-width: 767px) {
      position: relative;
      top: 0;
      left: 20px;
      transform: none;
    }
  }

  &__title {
    color: var(--primary);
    font-size: 30px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.45px;
    position: relative;
    padding-bottom: 7px;
    display: inline-block;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60%;
      background-color: var(--red);
      height: 1px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
      margin-bottom: 14px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 150px 100px 20px 100px;
    @media (max-width: 992px) {
      max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      margin: 0 20px;
      overflow: hidden;
      height: auto;
    }
  }

  &__item {
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.04);
    }
  }

  &__image {
    height: 230px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__item-title {
    font-size: 22px;
    margin-top: 10px;
  }

  &__button-wrapper {
    max-width: 1200px;
    margin: 0 100px 0 auto;
  }

  &__button {
    text-align: right;
    padding: 10px;
    border-radius: 6px;
    color: var(--red);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: transparent;
    transition: 0.2s all;
    cursor: pointer;
  }
}
</style>
