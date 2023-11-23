<script>
  export default {
    emits: ['clickedButton'],
    props: {
      icon: {
        type: String,
        default: () => ''
      },
      color: {
        type: String,
        default: () => ''
      },
      adminButton: {
        type: Boolean,
        default: () => null
      }
    },
    computed: {
      classes: function () {
        return [
          'button',
          `button--${this.color}`,
          {
            // 'button--admin-button': this.adminButton,
          }
        ]
      }
    }
  }
</script>

<template>
  <button :class="classes" @click="$emit('clickedButton')" type="submit">
    <div class="button-content">
      <slot></slot>
    </div>
    <base-icon v-if="icon" class="button-icon" :icon="icon"></base-icon>
  </button>
</template>

<style lang="scss" scoped>
  .button {
    width: 100%;
    height: 34px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    color: #fff;
    border: 1px solid transparent;
    font-weight: 700;
    font-size: 14px;
    border-radius: 4px;
    gap: 14px;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #1b3d62da;
    }
    &:active {
      transform: scale(1.04);
    }
    @media (max-width: 767px) {
      width: 100px;
      height: 30px;
      font-size: 12px;
      cursor: none;
    }

    &-hovereffect {
      min-width: 200px;
      min-height: 60px;
      border-radius: 39px;
      background-color: var(--black2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.1s ease 0s;
      @media (min-width: 767px) {
        &:hover {
          width: 205px;
          height: 65px;
          font-size: 19px;
        }
      }
      @media (max-width: 767px) {
        width: 100% !important;
        height: 50px;
        &:active {
          height: 55px;
          font-size: 19px;
        }
      }
    }

    &-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        width: 16px;
        height: 16px;
      }
    }

    &--admin-button {
      width: 97px;
      height: 45px;
      font-size: 14px;
      border-radius: 8px;
      background-color: #3361ff;
    }

    &--widthfull {
      @media (max-width: 767px) {
        min-width: 100% !important;
      }
    }

    &--cancel {
      background-color: transparent;
      border: 3px solid var(--border-color);
      color: var(--button-color);
      text-transform: none;
    }

    &--lowercase {
      text-transform: none;
    }

    &--contact {
      background-color: transparent;
      color: #fff;
      text-transform: none;
      border-radius: 39px;
      font-weight: 700;
      font-size: 18px;
      transition: all 0.3s ease-in-out;
      min-width: 210px;
      min-height: 70px;
    }

    &--transparent {
      background-color: #f7f5ff;
      color: var(--primary);
      border: 1px solid var(--primary);
    }

    &--banner {
      border-radius: 50px;
      padding: 22px 40px;
      font-weight: 700;
    }

    &--catalog {
      border-radius: 50px;
      padding: 28px 50px;
      font-weight: 700;
      background-color: var(--primary);
      color: #fff;
      @media (max-width: 767px) {
        padding: 18px 16px;
      }
    }

    &--login {
      padding: 20px;
      height: 54px;
      background-color: #3361ff;
      border-radius: 10px;
    }
  }
</style>
