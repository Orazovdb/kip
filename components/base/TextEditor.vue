<template>
  <div class="text-editor-wrapper">
    <div class="text-editor-wrapper__text-editor">
      <div class="text-editor-wrapper__text-editor-item active">
        <base-icon icon="h1Icon" />
      </div>
      <div class="text-editor-wrapper__text-editor-item">
        <base-icon icon="h2Icon" />
      </div>
      <div class="text-editor-wrapper__text-editor-item">
        <base-icon icon="quoteIcon" />
      </div>
      <div class="text-editor-wrapper__text-editor-item">
        <base-icon icon="boldIcon" />
      </div>
      <div class="text-editor-wrapper__text-editor-item">
        <base-icon icon="underlinedIcon" />
      </div>
      <div class="text-editor-wrapper__text-editor-item">
        <base-icon icon="italicIcon" />
      </div>
    </div>
    <!-- <div class="text-editor-wrapper__calendar">
          <admin-input label="Calendar" type="date" appendIcon="calendar" />
        </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-editor-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  &__text-editor {
    display: flex;
    gap: 6px;
    padding: 6px;
    border-radius: 8px;
    background-color: var(--gray-800);
  }

  &__text-editor-item {
    padding: 7px;
    border-radius: 4px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: var(--gray-900);
    }

    &.active {
      background-color: var(--primary);
      &:deep() {
        svg {
          width: 20px;
          height: 20px;
          color: #fff;
        }
      }
    }

    &:deep() {
      svg {
        width: 20px;
        height: 20px;
        color: #333333;
      }
    }
  }

  &__calendar {
  }
}
</style>
