<template>
  <div class="base-textarea">
    <h4 class="base-textarea__label">{{ label }}</h4>
    <textarea
      type=""
      class="base-textarea__textarea"
      :placeholder="placeholder"
      rows="6"
      :style="`height:${height}px`"
      @input="(e) => $emit('updateValue', e.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    height: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-textarea {
  width: 100%;

  &__label {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 4px;
    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__textarea {
    border: 1px solid #f3f3f3 !important;
    border-radius: 4px;
    color: var(--border);
    font-size: 16px;
    width: 100%;
    transition: 0.3s ease 0s;
    padding: 10px 17px 10px 10px;
    background: #f3f3f3;
    position: relative;
    resize: none;
    &::placeholder {
      border-radius: 16px;
      color: var(--text4);
      font-weight: 400;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
</style>