<template>
  <div class="admin-news-list">
    <base-table>
      <thead>
        <tr>
          <th>N*</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Priority</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in 15" :key="index">
          <td>{{ index + 1 }}.</td>
          <td>
            <img src="@/assets/img/zebra.png" alt="" />
          </td>
          <td>Mennan makina</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            rerum nobis ea illo quo officia, aut exercitationem minus doloremque
            ab, eveniet amet harum itaque deserunt. Sapiente minus mollitia
            omnis provident.
          </td>
          <td class="date">01.01.2024</td>
          <td class="star"><base-icon icon="starIcon" /></td>
          <td>
            <div class="controller">
              <base-icon icon="adminCrash" />
              <base-icon icon="editIcon" />
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin-news-list {
  padding: 0 36px;
  margin-top: 20px;
}
</style>
