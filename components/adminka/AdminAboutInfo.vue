<template>
  <div>
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <!-- :value="datas[information[]]" -->
      <admin-input
        @updateValue="(val) => (main.info1[`title${activeLang}`] = val)"
        label="Countries"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info1.count = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info2[`title${activeLang}`] = val)"
        :value="main"
        label="Employees"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info2.count = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info3[`title${activeLang}`] = val)"
        :value="main"
        label="Clients"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info3.count = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info4[`title${activeLang}`] = val)"
        :value="main"
        label="Projects"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info4.count = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <div class="flex flex-x-end admin-header-button">
        <base-button
          @clickedButton="addAboutInfo"
          style="width: 150px"
          class=""
        >
          Save
        </base-button>
      </div>
    </form>
    <popup-error :errorPupUp="errorPupUp"></popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { ADD_ABOUT_INFO } from "@/api/admin.api";
export default {
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      main: {
        info1: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info2: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info3: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info4: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
      },
    };
  },
  methods: {
    async addAboutInfo() {
      try {
        const { data, statusCode } = await ADD_ABOUT_INFO({ data: this.main });
        this.activePupUp = true;
        setTimeout(() => {
          this.activePupUp = false;
        }, 2000);
        if (!statusCode) return;
      } catch (error) {
        console.log(error);
        this.errorPupUp = true;
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
.admin-header-button {
  grid-column: 1 / span 2;
}
.admin-form {
  padding: 0 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  gap: 30px;
  .text-editor-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
    }

    &__calendar {
    }
  }
}
</style>
