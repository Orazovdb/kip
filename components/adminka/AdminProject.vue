<template>
  <div class="admin-project-page">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Project name"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Company name"
        class="mb-2"
        placeholder="..."
      />

      <div class="flex gap-10">
        <admin-input
          @updateValue="(val) => (main[`title${activeLang}`] = val)"
          :value="main[`title${activeLang}`]"
          label="number"
          class="mb-2"
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
      <text-editor></text-editor>
      <admin-textarea
        @updateValue="(val) => (main[`content${activeLang}`] = val)"
        :value="main[`content${activeLang}`]"
        label="Content"
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
    <base-file-input style="width: 290px; height: 216px"></base-file-input>
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
        const { data, statusCode } = await ADD_ABOUT({
          // data: {
          //   titleTm: this.main.titleTm,
          //   contentTm: this.main.contentTm,
          //   titleRu: this.main.titleRu,
          //   contentRu: this.main.contentRu,
          //   titleEn: this.main.titleEn,
          //   contentEn: this.main.contentEn,
          //   taglineTm: this.main.taglineTm,
          //   taglineRu: this.main.taglineRu,
          //   taglineEn: this.main.taglineEn,
          // },
        });
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
.admin-form {
  padding: 0 36px;
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