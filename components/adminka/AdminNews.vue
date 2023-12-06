<template>
  <div class="admin-news-page">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Title"
        placeholder="..."
      />

      <div class="text-editor-wrapper__calendar" style="width: 200px">
        <admin-input label="Calendar" type="date" appendIcon="calendar" />
      </div>
      <admin-textarea
        @updateValue="(val) => (main[`description${activeLang}`] = val)"
        :value="main[`description${activeLang}`]"
        label="Description"
        class="mb-2 admin-textarea"
        placeholder="..."
      />
    </form>
    <div class="admin-news-page__images-wrapper">
      <base-file-input imgUpload style="height: 216px" />
      <div class="admin-news-page__switches-wrapper">
        <div class="admin-news-page__switches">
          <admin-input
            label="Priority"
            placeholder="..."
            type="number"
            @updateValue="(val) => (main.dealership.priority = val)"
            :value="main?.dealership?.priority"
            appendIcon="starIcon"
            style="height: 66px"
          />
          <base-switch title="Home"></base-switch>
          <base-switch title="News"></base-switch>
        </div>
        <base-button
          @clickedButton="upsertData('dealership')"
          style="width: 200px; margin-bottom: 20px; margin-left: 150px"
        >
          Save
        </base-button>
      </div>
    </div>

    <popup-error :errorPupUp="errorPupUp"></popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      main: {
        titleTm: "",
        titleRu: "",
        titleEn: "",
        contentTm: "",
        contentRu: "",
        contentEn: "",
        taglineTm: "",
        taglineRu: "",
        taglineEn: "",
      },
    };
  },
  methods: {
    async addAbout() {
      try {
        const { data, statusCode } = await ADD_ABOUT({ data: this.main });
        this.activePupUp = true;
        setTimeout(() => {
          this.activePupUp = false;
        }, 2000);
        if (!statusCode) return;
      } catch (error) {
        console.log(error);
        this.errorPupUp = true;
      }
    },
    toggleLanguage(key) {
      console.log(key);
      this.activeLang = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-news-page {
  padding: 0 36px 30px;

  &__images-wrapper {
    display: grid;
    gap: 10px;
    grid-template-columns: 290px 1fr;
  }

  &__switches-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__switches {
    display: grid;
    grid-template-columns: 290px 70px 70px;
    gap: 10px;
    flex: 1 1 auto;
  }

  &__images {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

.admin-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.admin-textarea {
  grid-column: 1 / span 2;
}
.grid-column {
  grid-column: 1 / span 2;
}
</style>
