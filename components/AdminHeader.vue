<template>
  <div class="admin-header">
    <h1 class="admin-header__title">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-header {
  padding: 14px 36px;
  border-bottom: 1px solid var(--gray-light);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;
    line-height: 48px;
  }
  &__button {
    width: 120px !important;
    justify-content: center !important;
  }
}
</style>
