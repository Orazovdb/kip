<template>
  <div class="about-page">
    <div class="about-page__container">
      <div class="about-page__row">
        <div class="about-page__back">
          <base-icon icon="arrowLeft" class="project-icon" @clicked="$router.back(localeLocation(-1))" />
        </div>
        <div class="about-page__content">
          <h1 class="about-page__title">About us</h1>
          <p class="about-page__description">
            Our company was founded in 2020. KIP Engineering holds a distinct position in its ndustry and is a con dent business that is expanding
            quickly. We successfully oversee projects from the outset, through the phases of planning, execution, and commissioning, and all the way
            through to the project's completion. The company holds a prominent position in the services industry, providing cutting-edge technological
            solutions and services to its partners and clients that keep up with the times. The goals, needs, and preferences of the client form the
            foundation of the business. Our goals revolve around our capacity to deliver to clients the best possible solutions in terms of scope,
            eﬀectiveness, and suitability under the pertinent circumstances in the shortest amount of time, along with post-purchase guarantees that
            include free technical support and consulting. Our team of highly skilled specialists and engineers enables us to conduct in-depth
            analyses of markets and procedures within the industries we work in. Public sector representatives and private industrial organizations
            are among our company's clientele. KIP Engineering has established itself in a wide range of industries. We deal with IT technologies,
            oﬀering our own in-house developed products along with the option of integrating them with those of our international and domestic
            partners. Our work is presented in the textile, food, agricultural, and household chemical industries. We undertake projects in the
            industrial sector. Our determination to create a highly productive process and solve complicated problems lead us to continuously grow and
            explore new frontiers, enhancing our skills and making devoted partners and friends. Our Mission Elevating possibilities through
            engineering and IT mastery. Our mission is to lead with creativity, integrity, and a commitment to client success, shaping a future where
            technology empowers and connects us all.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .about-page {
    padding: 100px 0;
    @media (max-width: 767px) {
      padding: 40px 0;
    }
    &__container {
    }

    &__row {
      display: grid;
      grid-template-columns: minmax(100px, 250px) 1fr;
      gap: 20px;
      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }

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

    &__content {
      padding-top: 30px;
      max-width: 600px;
      @media (max-width: 767px) {
        padding-top: 0;
      }
    }

    &__title {
      position: relative;
      padding-bottom: 5px;
      color: var(--primary);
      font-family: 'Oxanium';
      font-size: 26px;
      font-weight: 600;
      letter-spacing: 0.39px;
      display: inline-block;
      margin-bottom: 10px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80%;
        height: 1px;
        background-color: var(--red);
      }
    }

    &__description {
      color: var(--text-3);
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      @media (max-width: 479px) {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
</style>
