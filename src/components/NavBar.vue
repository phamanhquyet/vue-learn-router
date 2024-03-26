<template>
  <a class="back-btn" @click="$router.go(-1)">Back to the last page</a>
  <nav class="nav">
    <router-link to="/">Overview</router-link>
    <!-- truy cap thong qua to="" voi duong dan cu the -->
    <!-- <router-link to="/transactions">Transactions</router-link> -->
    <!-- truy cap thong qua name -->
    <router-link :to="{ name: 'transactions' }">Transactions</router-link>
    <router-link to="/">Budgets</router-link>
    <router-link to="/">Reports</router-link>
    <router-link to="/">Settings</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.back-btn {
  display: block;
  margin: 10px;
  cursor: pointer;
  background: #f1f1f1;
  width: 150px;
  padding: 10px;
}

.back-btn:hover {
  background: #e1e1e1;
}
</style>
