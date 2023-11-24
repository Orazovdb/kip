<template>
  <div class="base-input">
    <h4 class="base-input__label" v-if="label">
      {{ label }}
    </h4>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :style="`height: ${height}px`"
      @input="
        (e) =>
          $emit(
            'updateValue',
            type === 'number' ? Number(e.target.value) : e.target.value
          )
      "
      :value="value"
    />
    <base-icon icon="file" v-if="appendIcon" class="base-input__icon" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => "text",
    },
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
      type: String | Number,
    },
    appendIcon: {
      type: Boolean,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  position: relative;

  &__label {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: var(--text);
    margin-bottom: 10px;
    font-size: 16px;

    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__icon {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 38px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 479px) {
      font-size: 12px;
      height: 34px;
    }
  }

  &__icon-close {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 12px;
    display: none;
    justify-content: center;
    align-items: center;
  }
}

input[type="file"]::file-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input[type="file"] {
  opacity: 0;
}

.input {
  border: 1px solid var(--border) !important;
  border-radius: 4px;
  color: var(--border);
  font-size: 16px;
  width: 100%;
  height: 42px;
  transition: 0.3s ease 0s;
  padding: 10px 17px 10px 10px;
  background: #fff;
  position: relative;
  &::placeholder {
    border-radius: 16px;
    color: var(--border);
    font-weight: 400;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    height: 40px;
  }
}
</style>
