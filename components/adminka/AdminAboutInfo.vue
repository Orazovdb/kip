<template>
  <div>
    <form class="admin-form">
      <!-- :value="datas[information[]]" -->
      <admin-input
        @updateValue="(val) => $emit('update', 'title', val)"
        label="Countries"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Employees"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Clients"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Projects"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main = val)"
        :value="main"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      default: null,
      information: {
        infoFirst: {
          type: Object,
          default: null,
        },
        infoSecond: {
          type: Object,
          default: null,
        },
        infoSecond: {
          type: Object,
          default: null,
        },
        infoSecond: {
          type: Object,
          default: null,
        },
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
