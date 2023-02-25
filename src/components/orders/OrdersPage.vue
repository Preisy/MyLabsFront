<script setup lang="ts">
import type {AxiosResponse} from "axios";
import axios from "axios";
import type {OrderModel} from "@/model/OrderModel";
import OrderCard from "@/components/orders/OrderCard.vue"
import type {Ref} from "vue";
import {onBeforeMount, ref} from "vue";

let orders: Ref<OrderModel[]> = ref([] as OrderModel[]);

onBeforeMount(async function () {
  let a: AxiosResponse<OrderModel[]> = await axios.get(`/api/orders`)
  orders.value = a.data
})

</script>

<template>
  <h2>Orders</h2>
  <div class="task_wrapper">
    <OrderCard v-for="order in orders" :order="order"></OrderCard>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.task_wrapper {
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}

@media (min-width: 1250px) {
  .task_wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .task_wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>