<template>
  <div>
    <admin-header> Partners </admin-header>
    <div class="admin-partners">
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">DEALERSHIP</h1>
      </div>
      <div class="admin-partners__block-row-wrapper">
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input imgUpload style="min-height: 200px" class="mb-1" />
            <admin-input
              label="Priority"
              placeholder="..."
              type="number"
              class="mb-2"
              appendIcon="starIcon"
            />
            <base-button>Save</base-button>
          </form>
          <base-uploaded-file class="admin-partners__block-image" />
          <base-uploaded-file class="admin-partners__block-image" />
          <base-uploaded-file class="admin-partners__block-image" />
          <base-uploaded-file class="admin-partners__block-image" />
        </div>
      </div>
    </div>
    <pop-up-delete></pop-up-delete>
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style lang="scss" scoped>
.admin-partners {
  padding: 0 36px 30px;

  &__block {
  }

  &__block-title {
    font-size: 20px;
    color: var(--text4);
    margin-bottom: 13px;
    position: relative;
    padding-bottom: 7px;
    display: inline-block;
    &::after {
      content: "";
      width: 70%;
      height: 1px;
      background-color: red;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__block-row-wrapper {
    width: calc(100vw - 100px);
    overflow-x: auto;
  }

  &__block-row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  &__block-form {
  }

  &__block-image {
    height: 200px;
    flex: 0 1 290px;
  }
}
</style>
