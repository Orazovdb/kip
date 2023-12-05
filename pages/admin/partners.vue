<template>
  <div>
    <admin-header> Partners </admin-header>
    <div class="admin-partners">
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">DEALERSHIP</h1>
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input
              imgUpload
              style="width: 290px; min-height: 200px"
              class="mb-1"
            />
            <admin-input
              label="Priority"
              placeholder="..."
              type="number"
              class="mb-2"
              appendIcon="starIcon"
            />
            <base-button>Save</base-button>
          </form>
          <div class="admin-partners__block-row-wrapper">
            <base-uploaded-file
              class="admin-partners__block-image"
              v-for="item in 10"
              :key="item"
              imgUpload
              positionNumber="1"
              adminCrash
            />
          </div>
        </div>
      </div>
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">DEALERSHIP</h1>
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input
              imgUpload
              style="width: 290px; min-height: 200px"
              class="mb-1"
            />
            <admin-input
              label="Priority"
              placeholder="..."
              type="number"
              class="mb-2"
              appendIcon="starIcon"
            />
            <base-button>Save</base-button>
          </form>
          <div class="admin-partners__block-row-wrapper">
            <base-uploaded-file
              class="admin-partners__block-image"
              v-for="item in 10"
              :key="item"
              imgUpload
              positionNumber="1"
              adminCrash
            />
          </div>
        </div>
      </div>
    </div>
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
    margin-bottom: 40px;
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

  &__block-row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  &__block-row-wrapper {
    width: calc(55vw);
    overflow-x: auto;
    display: flex;
    gap: 20px;
    padding-bottom: 4px;
    &::-webkit-scrollbar-track {
      background-color: #d5d5d5;
      transition: 0.3s all;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      transition: 0.3s all;
    }
  }

  &__block-form {
  }

  &__block-image {
    height: 200px;
    flex: 0 0 290px;
  }
}
</style>
