<template>
  <h1>Transaction Detail</h1>
  <!-- sử dụng v-if để kiểm tra xem  transaction có dữ liệu hay không, nếu không có thì không làm gì để tránh bị lỗi undefine-->
  <div v-if="transaction">
    <h1>{{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Cost: {{ transaction.cost }}</p>
  </div>
  <div v-else>
    <h1>Loading.....</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>

<style></style>
