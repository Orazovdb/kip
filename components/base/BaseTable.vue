<template>
  <div class="table">
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table {
  width: 100%;
  overflow-y: auto;
  height: 80vh;
  table {
    width: 100%;
    border-collapse: collapse;
    position: relative;
    thead {
      margin-bottom: 14px;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      tr {
        th {
          background-color: var(--gray-1000);
          border-bottom: 1px solid #e9e7fd;
          padding: 14px 20px;
          color: var(--primary);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          &:first-child {
            width: 40px;
            text-align: center;
          }
          &:nth-child(2) {
            text-align: left;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: #23272e;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
          padding: 10px;
          background-color: #fff;
          &:first-child {
            text-align: center;
          }
          img {
            width: 75px;
            height: 46px;
          }
        }
      }
    }
  }
}
</style>
