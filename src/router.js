import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage";
import TransactionsPage from "./views/TransactionsPage";
import TransactionDetail from "./views/TransactionDetail";
import NotFoundPage from "./views/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/transactions",
    name: "transactions",
    component: TransactionsPage,
  },
  {
    path: "/transactions/:id",
    name: "transactions-detail",
    component: TransactionDetail,
  },
  {
    path: "/ts",
    name: "transactions-redirect",
    redirect: "/transactions",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
