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
            <span>Date:</span>
            <span>12.10.2023</span>
          </p>
          <p class="projects-id__project-text">
            <span>Company name:</span>
            <span>Mennan makina</span>
          </p>
          <p class="projects-id__project-text">
            <span class="projects-id__project-span">Project:</span>
            <span>Engineering</span>
          </p>
        </div>
      </div>
      <div class="projects-id__description-wrapper">
        <h1 class="projects-id__description-title">Discription</h1>
        <p class="projects-id__description-description">
          KIP Engineering – молодая и амбициозная компания выполняющая полный комплекс работ промышленного инжиниринга. Основные деятельности KIP
          направлены на эффективное и своевременное выполнение интересов заказчика, выполнение нестандартных и трудных задач, использование самых
          современных и высокотехнологических инженерных решений. Наш ключ к успеху — это профессионалы, преданные своему делу.
        </p>
      </div>
      <div class="projects-id__images-wrapper">
        <h1 class="projects-id__images-title">Photo</h1>
        <div class="projects-id__images-row">
          <div class="projects-id__images-img" v-for="(item, index) in 7" :key="index">
            <img src="@/assets/img/news.png" alt="" />
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
    }

    &__description-description {
      color: var(--primary);
      font-size: 17px;
      font-weight: 500;
      line-height: normal;
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
    }

    &__images-row {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      max-width: 100%;
      padding-bottom: 10px;
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
    }
  }
</style>
