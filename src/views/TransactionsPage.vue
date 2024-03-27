<template>
  <h1>Transactions</h1>
  <div v-if="transactions.length > 0">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <!-- <router-link :to="`/transactions/${transaction.id}`"> -->
      <router-link
        :to="{ name: 'transactions-detail', params: { id: transaction.id } }"
      >
        {{ transaction.name }}</router-link
      >
      <div class="price">Cost:{{ transaction.cost }} đ</div>
    </div>
  </div>
  <div v-else><h1>Loading transactions .....</h1></div>
</template>

<script>
export default {
  data() {
    return { transactions: [] };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>

<style></style>
