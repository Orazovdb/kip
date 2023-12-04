<template>
  <div class="admin-projects">
    <admin-header>Projects</admin-header>
    <div class="header-buttons">
      <base-button
        v-for="button in buttons"
        :key="button.key"
        :prevIcon="button.prevIcon"
        @clickedButton="changeButtonPage(button.key)"
        :class="[
          'header-buttons__button',
          { active: activeBtn === button.key },
        ]"
        :adminButton="button.adminButton"
        :adminButtonSecond="button.adminButtonSecond"
      >
        {{ button.name }}
      </base-button>
    </div>
    <div v-if="activeBtn === 1">
      <admin-project />
    </div>
    <div v-else-if="activeBtn === 2">
      <admin-project-list />
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      activeBtn: 1,
      activeLang: "Tm",

      buttons: [
        {
          key: 1,
          prevIcon: "addIcon",
          name: "Add project",
          adminButton: true,
        },
        {
          key: 2,
          prevIcon: "adminBurger",
          name: "Article list",
          adminButtonSecond: true,
        },
      ],
    };
  },
  methods: {
    toggleLanguage(key) {
      console.log(key);
      this.activeLang = key;
    },
    changeButtonPage(key) {
      this.activeBtn = key;
      this.activeLang = "Tm";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 36px;
  &__button {
    flex: 0 1 250px;
    background-color: #e1e1e1;
    color: var(--primary);
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    &:deep {
      svg {
        color: var(--primary);
      }
    }
    &.active {
      background-color: var(--primary);
      color: #fff;
      &:hover {
        background-color: #1b3d62da;
      }
      &:deep {
        svg {
          color: #fff;
        }
      }
    }
  }
}
</style>
