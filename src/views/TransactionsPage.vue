<template>
  <h1>Transactions</h1>
  <div class="item" v-for="transaction in transactions" :key="transaction.id">
    <!-- <router-link :to="`/transactions/${transaction.id}`"> -->
    <router-link
      :to="{ name: 'transactions-detail', params: { id: transaction.id } }"
    >
      {{ transaction.name }}</router-link
    >
    <div class="price">Cost:{{ transaction.cost }} đ</div>
  </div>
</template>

<script>
export default {
  setup() {
    const transactions = [
      {
        id: 1,
        name: "Di xem phim",
        cost: 10000000000,
      },
      {
        id: 2,
        name: "Di mua sam",
        cost: 20000000000,
      },
      {
        id: 3,
        name: "Di du lich",
        cost: 30000000000,
      },
    ];
    return { transactions };
  },
};
</script>

<style></style>
