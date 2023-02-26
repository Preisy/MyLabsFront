<script setup lang="ts">
import LabCard from "@/components/labs/LabCard.vue";
import {onBeforeMount, ref} from "vue";
import type {AxiosResponse} from "axios";
import axios from "axios";
import type {LabModel} from "@/model/LabModel";

let labs = ref([] as LabModel[]);
onBeforeMount(async function () {
  let a: AxiosResponse<LabModel[]> = await axios.get(`/api/labs`)
  labs.value = a.data
})
</script>

<template>
  <div>
    <h2>Labs</h2>
    <div class="task_wrapper">
      <LabCard v-for="lab in labs" :lab="lab"></LabCard>
    </div>
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