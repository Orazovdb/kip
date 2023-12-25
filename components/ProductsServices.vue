<template>
  <div class="services" ref="aos">
    <h1
      class="services__title"
      @click="$router.push(localeLocation('/products-services'))"
    >
      Products/services
    </h1>
    <div class="services__row" ref="images">
      <div
        class="services__item"
        v-for="item in items.services"
        :key="item.id"
        @click="$router.push(localeLocation(`/products-services/${item?.id}`))"
      >
        <div class="services__image">
          <img :src="`${imageURL}${item?.images[0]}`" alt="" />
        </div>
        <div class="services__content">
          <div class="services__content-logo">
            <img :src="`${imageURL}${item?.logo}`" alt="" />
          </div>
          <p>Company: {{ translateName(item) }}</p>

          <p>Type: {{ item?.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import translate from "@/mixins/translate";
import { mapGetters } from "vuex";
export default {
  mixins: [translate],
  computed: {
    ...mapGetters(["imageURL"]),
  },
  props: {},
  data() {
    return {
      observer: null,
      items: {
        products: [],
        services: [],
      },
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
            this.$refs.images.classList.add("aos");
            const elemAos = document.querySelectorAll(".aos");
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
.services {
  padding: 80px 100px 20px 100px;
  &__title {
    position: relative;
    padding-bottom: 7px;
    color: var(--text2);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.33px;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 20px;
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 30px 20px 10px;
    }
  }

  &__item {
    display: flex;
    gap: 10px;
  }

  &__image {
    height: 180px;
    box-shadow: 0.1px 0.1px 2px 2px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 767px) {
      width: 200px;
    }
    @media (max-width: 479px) {
      width: 100%;
    }
  }

  &__content {
    p {
      color: #000;
      font-size: 18px;
      font-weight: 300;
      text-transform: capitalize;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__content-logo {
    width: 180px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #bab8b8;
    background: #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
    @media (max-width: 479px) {
      width: 140px;
      height: 80px;
    }
  }
}
</style>
