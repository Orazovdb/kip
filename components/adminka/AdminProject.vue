<template>
  <div class="admin-project-page">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Project name"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Company name"
        placeholder="..."
      />

      <div class="flex gap-10">
        <admin-input
          @updateValue="(val) => (main[`title${activeLang}`] = val)"
          :value="main[`title${activeLang}`]"
          label="number"
          placeholder="..."
          type="number"
          style="width: 200px"
          appendIcon="starIcon"
        />
        <div class="text-editor-wrapper__calendar" style="width: 200px">
          <admin-input label="Calendar" type="date" appendIcon="calendar" />
        </div>
      </div>
      <div></div>
      <admin-textarea
        @updateValue="(val) => (main[`description${activeLang}`] = val)"
        :value="main[`description${activeLang}`]"
        label="Description"
        class="mb-2 admin-textarea"
        placeholder="..."
      />
      <div class="flex flex-x-end grid-column">
        <base-button
          @clickedButton="addAbout"
          style="width: 150px"
          class="admin-header__button"
        >
          Save
        </base-button>
      </div>
    </form>
    <div class="admin-project-page__images-wrapper">
      <base-file-input imgUpload :image="main.image" style="height: 216px" />
    </div>
    <div class="admin-project-page__images">
      <base-uploaded-file v-for="item in 6" :key="item"></base-uploaded-file>
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
.admin-project-page {
  padding: 0 36px 30px;

  &__images-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
