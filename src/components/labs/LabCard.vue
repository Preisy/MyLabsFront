<script setup lang="ts">
import PopUp from "@/components/PopUp.vue"
import {ref} from "vue";
import type {LabModel} from "@/model/LabModel";
import PopupLabCard from "@/components/labs/PopupLabCard.vue";


defineProps<{
  lab: LabModel
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
    <div v-on:click="openPopUp" class="lab">
      <p><span>Title:</span> {{ lab.title }}</p>
      <p><span>Duration:</span> {{ lab.duration }}</p>
      <p><span>Price:</span> {{ lab.price }}</p>
      <p><span>Type:</span> {{ lab.type }}</p>
    </div>
    <PopUp :isOpen="isPopUpOpened" v-on:closePopUp="closePopUp">
      <PopupLabCard :lab="lab"></PopupLabCard>
    </PopUp>
  </div>

</template>

<style scoped>
.lab {
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.15s ease-in-out;

  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  line-height: 1.25rem;
}

.lab:hover {
  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.6);
}


span {
  color: var(--green-color);
}
</style>