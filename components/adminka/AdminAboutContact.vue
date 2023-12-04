<template>
  <div class="admin-about-contact">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main.phone = val)"
        :value="main?.phone"
        label="Phone"
        class="mb-2"
        type="number"
        placeholder="..."
      />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-header-button {
  grid-column: 1 / span 2;
}
.admin-form {
  padding: 0 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  gap: 30px;
}
</style>
