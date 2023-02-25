<script setup lang="ts">
import type {OrderModel} from "@/model/OrderModel";
import PopupOrderCard from "@/components/orders/PopupOrderCard.vue"
import PopUp from "@/components/PopUp.vue"
import {ref} from "vue";

defineProps<{
  order: OrderModel
}>()

let isPopUpOpened = ref(false);

function openPopUp() {
  isPopUpOpened.value = true;
}

function closePopUp() {
  isPopUpOpened.value = false;
}
</script>

<template>
  <div>
    <div v-on:click="openPopUp" class="order">
      <p><span>Name:</span> {{ order.username }}</p>
      <p><span>Contacts:</span> {{ order.contacts }}</p>
      <p><span>Deadline:</span> {{ order.deadline }}</p>
      <div v-if="order.taskText != null" class="taskText">
        <p><span>Task:</span></p>
        <p>{{ order.taskText.length < 50 ? order.taskText : order.taskText.substring(0, 50) + '...' }}</p>
      </div>

    </div>
    <PopUp :isOpen="isPopUpOpened" v-on:closePopUp="closePopUp">
      <PopupOrderCard :order="order"></PopupOrderCard>
    </PopUp>
  </div>

</template>

<style scoped>
.order {
  border-radius: 10px;
  flex: 1;
  padding: 1rem;
  transition: all 0.15s ease-in-out;

  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  line-height: 1.25rem;
}

.order:hover {
  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
}


span {
  color: var(--green-color);
}
</style>