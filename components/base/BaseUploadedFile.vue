<template>
  <div class="base-uploaded-file">
    <div class="base-uploaded-file__image">
      <img src="@/assets/img/projects_2.png" alt="" />
    </div>
    <div v-if="positionNumber" class="base-uploaded-file__icon-position">
      {{ positionNumber }}
    </div>
    <base-icon
      class="base-uploaded-file__icon-left"
      v-if="imgUpload"
      icon="imgUpload"
    />
    <base-icon
      class="base-uploaded-file__icon-right"
      v-if="adminCrash"
      icon="adminCrash"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgUpload: {
      type: Boolean,
      default: () => null,
    },
    positionNumber: {
      type: String,
      default: () => '',
    },
    adminCrash: {
      type: Boolean,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-uploaded-file {
  position: relative;
  &__image {
    height: 216px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.2);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__icon-left {
    padding: 4px;
    position: absolute;
    bottom: 14px;
    left: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    z-index: 2;
    &:hover {
      transform: scale(1.07);
    }
  }

  &__icon-right {
    padding: 4px;
    position: absolute;
    z-index: 2;
    bottom: 14px;
    right: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.07);
    }
  }
}
</style>
