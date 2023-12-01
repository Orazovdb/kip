<template>
  <div>
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Title"
        class="mb-2"
        placeholder="..."
      />
      <div class="text-editor-wrapper">
        <div class="text-editor-wrapper__text-editor">
          <div class="text-editor-wrapper__text-editor-item">
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
      <admin-textarea
        @updateValue="(val) => (main[`content${activeLang}`] = val)"
        :value="main[`content${activeLang}`]"
        label="Content"
        class="mb-2"
        placeholder="..."
      />
      <div class="flex flex-x-end">
        <base-button
          @clickedButton="addAbout"
          style="width: 150px"
          class="admin-header__button"
        >
          Save
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
import { ADD_ABOUT } from "@/api/admin.api";

export default {
  data() {
    return {
      activeLang: "Tm",
      main: {
        titleTm: "",
        titleRu: "",
        titleEn: "",
        contentTm: "",
        contentRu: "",
        contentEn: "",
      },
    };
  },
  methods: {
    async addAbout() {
      try {
        const { data, status } = await ADD_ABOUT({ data: this.main });
        console.log(data);
        if (!status) return;
      } catch (error) {
        console.log(error);
      }
    },

    toggleLanguage(key) {
      console.log(key);
      this.activeLang = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-form {
  padding: 0 36px;
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
      background-color: var(--primary);
      color: #fff;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.07);
      }

      &:deep() {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    &__calendar {
    }
  }
}
</style>
