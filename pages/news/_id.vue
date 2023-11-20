<template>
  <div class="news-id">
    <div class="news-id__container">
      <div class="news-id__back">
        <base-icon icon="arrowLeft" class="project-icon" @clicked="$router.back(localeLocation(-1))" />
      </div>
      <div class="news-id__box">
        <div class="news-id__image">
          <img src="@/assets/img/news.png" alt="" />
        </div>
        <h1 class="news-id__title">New company</h1>
        <p class="news-id__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p class="news-id__date">06.11.2023</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .news-id {
    padding: 40px 0;
    @media (max-width: 767px) {
      padding: 30px 0 20px 0;
    }
    &__container {
    }

    &__back {
      width: 50px;
      height: 50px;
      margin-left: 100px;

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
        margin-left: 0;
        margin-bottom: 20px;
        &:deep() {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    &__box {
      max-width: 600px;
      margin: 0 auto;
    }

    &__image {
      width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 12px;
      }
    }

    &__title {
      margin-bottom: 10px;
      color: var(--primary);
      font-family: 'Oxanium';
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.39px;
      text-transform: capitalize;
    }

    &__description {
      color: var(--text3);
      font-size: 18px;
      line-height: 21px;
      font-weight: 500;
      margin-bottom: 6px;
    }

    &__date {
      color: var(--text3);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: right;
    }
  }
</style>
