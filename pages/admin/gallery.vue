<template>
  <div>
    <admin-header> Gallery </admin-header>
    <div class="admin-gallery">
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Title"
        placeholder="..."
        class="mb-2"
      />
      <div class="admin-gallery__row mb-1">
        <base-file-input @file="uploadPhoto" style="height: 200px" imgUpload />
      </div>
      <div class="admin-gallery__row">
        <admin-input
          @updateValue="(val) => (main[`title${activeLang}`] = val)"
          :value="main[`title${activeLang}`]"
          label="Priority"
          placeholder="..."
          type="number"
          class="mb-2"
          appendIcon="starIcon"
        />
      </div>
      <div class="admin-gallery__row">
        <base-uploaded-file
          adminCrash
          positionNumber='1'
          v-for="item in 10"
          :key="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
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
    async uploadPhoto(file) {
      try {
        const { data, status } = await addAboutGallery({
          data: { file: file },
        });
        if (!status) return;
        await this.fetchGalleryPhoto();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-gallery {
  padding: 0 36px 30px;

  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
  }

  &__item {
  }

  &__item-image {
  }

  &__item-icons {
  }
}
</style>
