<template>
  <div class="news-id">
    <div class="news-id__container">
      <div class="news-id__back">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
      </div>
      <div class="news-id__box">
        <div class="news-id__image">
          <img :src="`${imageURL}${news?.image}`" alt="" />
        </div>
        <h1 class="news-id__title">
          {{ translateTitle(news) }}
        </h1>
        <p class="news-id__description" v-html="translateContent(news)"></p>
        <p class="news-id__date">
          {{ new Date(news?.createdAt).toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_NEWS_ID } from "@/api/home.api";
import translate from "@/mixins/translate";
import { mapGetters } from "vuex";

export default {
  mixins: [translate],
  computed: {
    ...mapGetters(["imageURL"]),
  },
  data() {
    return {
      news: {},
    };
  },

  async mounted() {
    await this.fetchNews();
  },

  methods: {
    async fetchNews() {
      try {
        const { data, statusCode } = await GET_NEWS_ID({
          data: { newsId: this.$route.params.id },
        });
        if (statusCode) this.news = data;
        console.log(this.news);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
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
    font-family: "Oxanium";
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
