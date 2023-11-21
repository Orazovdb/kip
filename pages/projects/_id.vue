<template>
  <div class="projects-id">
    <div class="projects-id__container">
      <div class="projects-id__arrow">
        <base-icon icon="arrowLeft" class="project-icon" @clicked="$router.push(localeLocation('/projects'))" />
      </div>
      <div class="projects-id__project">
        <div class="projects-id__project-image">
          <img src="@/assets/img/mennan.svg" alt="" />
        </div>
        <div class="projects-id__project-content">
          <p class="projects-id__project-text">
            <span>Location:</span>
            <span>Industrial Area in north side of Ashgabat</span>
          </p>
          <p class="projects-id__project-text">
            <span>Status:</span>
            <span>Active production</span>
          </p>
          <p class="projects-id__project-text">
            <span class="projects-id__project-span">Engineering Period:</span>
            <span>March 2022 - August 2022 </span>
          </p>
          <p class="projects-id__project-text">
            <span class="projects-id__project-span">Product:</span>
            <span>PP yarns </span>
          </p>
        </div>
      </div>
      <div class="projects-id__description-wrapper">
        <h1 class="projects-id__description-title">Description</h1>
        <p class="projects-id__description-description">
          Our company had coped with the huge challenge on recovering of CF / BCF machine of Rieter. Detailed on data on what kind of jobs we had
          performed on this project you can nd on the page 26 of current document. Now production line of lament yarns is fully functioning. <br />

          Together with partner - producer of plastic products we have joint <br />
          production of multi lament PP yarns in Ashgabat.<br />
          The plant is equipped with equipment from the world famous Austrian company «Rieter».<br />
          Сontinuous lament yarns are used for a large number of applications, such as big-bag sewing yarns, nets, ropes or belts. Additional to this
          CF yarns used for weaving fabrics for furniture apartments. This production <br />
          site produces СF yarn of various numbers and colors. The range of produced yarn consists of the following numbers: <br />
          2124 dtex; <br />
          2290 dtex; <br />
          4000 dtex.
        </p>
      </div>
      <div class="projects-id__images-wrapper">
        <h1 class="projects-id__images-title">Photo</h1>
        <div class="projects-id__images-row">
          <div class="projects-id__images-img">
            <img src="@/assets/img/engineering_1.jpg" alt="" />
          </div>
          <div class="projects-id__images-img">
            <img src="@/assets/img/engineering_2.jpg" alt="" />
          </div>
          <div class="projects-id__images-img">
            <img src="@/assets/img/engineering_1.jpg" alt="" />
          </div>
          <div class="projects-id__images-img">
            <img src="@/assets/img/engineering_2.jpg" alt="" />
          </div>
          <div class="projects-id__images-img">
            <img src="@/assets/img/engineering_1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .projects-id {
    padding: 120px 0;
    @media (max-width: 767px) {
      padding: 30px 0;
    }
    &__container {
      max-width: 1165px;
      padding: 0 20px;
      margin: 0 auto;
    }

    &__arrow {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 30px;
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
    }

    &__project {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 980px;
      margin-bottom: 30px;
    }

    &__project-image {
      max-width: 180px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
      display: none;
    }

    &__project-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__project-text {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      text-transform: capitalize;
    }

    &__project-span {
      margin-right: 4px;
    }

    &__description-wrapper {
      margin-bottom: 30px;
    }

    &__description-title {
      color: var(--primary);
      font-size: 30px;
      font-weight: 400;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      padding-bottom: 7px;
      position: relative;
      display: inline-block;
      margin-bottom: 14px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60%;
        height: 1px;
        background-color: var(--red);
      }
      @media (max-width: 767px) {
        font-size: 22px;
      }
    }

    &__description-description {
      color: var(--primary);
      font-size: 17px;
      font-weight: 500;
      line-height: normal;
      @media (max-width: 767px) {
        font-size: 15px;
      }
    }

    &__images-wrapper {
    }

    &__images-title {
      color: var(--primary);
      font-size: 30px;
      font-weight: 400;
      letter-spacing: 0.45px;
      text-transform: capitalize;
      padding-bottom: 7px;
      position: relative;
      display: inline-block;
      margin-bottom: 30px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60%;
        height: 1px;
        background-color: var(--red);
      }
      @media (max-width: 767px) {
        font-size: 22px;
        margin-bottom: 14px;
      }
    }

    &__images-row {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      max-width: 100%;
      padding-bottom: 10px;
      @media (max-width: 479px) {
        gap: 16px;
      }
    }

    &__images-img {
      flex: 0 0 25%;
      height: 155px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
      }
      @media (max-width: 479px) {
        flex: 0 0 50%;
        height: 130px;
      }
    }
  }
</style>
