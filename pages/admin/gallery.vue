<template>
  <div class="admin-gallery">
    <admin-header> Gallery </admin-header>
    <div class="admin-gallery__row">
      <base-file-input @file="uploadPhoto"></base-file-input>
      <template v-if="photos && photos.length">
        <div
          v-for="photo in photos"
          :key="photo.uuid"
          class="admin-gallery__item"
        >
          <div class="admin-gallery__item-image">
            <img :src="`${imgURL}gallery/${photo.image}`" alt="" />
          </div>
          <div class="admin-gallery__item-icons">
            <div></div>
            <base-icon
              icon="adminCrash"
              @clicked="deleteImage(photo.uuid)"
            ></base-icon>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
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

<style lang="scss" scoped></style>
