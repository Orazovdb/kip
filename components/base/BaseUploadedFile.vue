<template>
  <div class="base-uploaded-file">
    <div class="base-uploaded-file__image">
      <img src="@/assets/img/projects_2.png" alt="" />
    </div>
    <base-icon class="base-uploaded-file__icon-left" icon="imgUpload" />
    <base-icon class="base-uploaded-file__icon-right" icon="adminCrash" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.base-uploaded-file {
  position: relative;
  &__image {
    height: 216px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__icon-left {
    padding: 6px;
    position: absolute;
    bottom: 14px;
    left: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.07);
    }
  }

  &__icon-right {
    padding: 6px;
    position: absolute;
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
