<script setup lang="ts">
import type {LabModel} from "@/model/LabModel";
import {LabType} from "@/model/LabType";
import {ref} from "vue";
import axios from "axios";
import CompletedIcon from "@/components/orders/CompletedIcon.vue";

let props = defineProps<{
  orderId: number,
}>()

let tmp = LabType.C
let createButton = ref<HTMLSpanElement>()

let title = ref<string>();
let duration = ref<string>();
let price = ref<string>();
let type = ref(null as LabType | null);

let isCompleted = ref(false);

async function createLab() {
  if (duration.value == null || price.value == null || title.value == null || type.value == null ||
      duration.value == '' || price.value == '' || title.value == '') {
    showErrorMessage()
    return;
  }

  let lab: LabModel = {
    duration: Number(duration.value!),
    price: Number(price.value!),
    title: title.value!,
    type: type.value!,
  }

  try {
    await axios.post(`/api/orders/${props.orderId}/status`, {
      "status": "Complete",
      "metadata": lab
    })
  } catch (e) {
    showErrorMessage();
    return;
  }
  isCompleted.value = true;
}

function showErrorMessage() {
  createButton.value?.classList.add("error_button")
  setTimeout(() => {
    createButton.value?.classList.remove("error_button")
  }, 300)
}

</script>

<template>
  <div class="popup_create_lab_card">
    <div class="wrapper">
      <transition name="fade">
        <div v-if="!isCompleted" class="form">
          <p><span>Title: </span> <input type="text" placeholder="title" v-model="title"></p>
          <p><span>Duration: </span> <input type="text" placeholder="duration" v-model="duration"></p>
          <p><span>Price: </span> <input type="text" placeholder="price" v-model="price"></p>

          <p><span>Lab type: </span></p>
          <div class="lab_types">
            <template v-for="(t, i) in LabType">
              <label><input type="radio" :id="i" v-model="type" :value="t">{{ t }}</label>
            </template>
          </div>
          <span ref="createButton" @click="createLab" class="complete_button">Create</span>
        </div>

        <div class="icon_wrapper" v-else>
          <CompletedIcon></CompletedIcon>
        </div>
      </transition>

    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup_create_lab_card {
  width: 50vw;
  transition: all 0.15s ease-in-out;
}

.wrapper {
  height: 80vh;
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}

p {
  margin-bottom: 1.3rem;
}


span {
  color: var(--green-color);
  margin-right: 1rem;
}

.lab_types label {
  white-space: nowrap;
}

.lab_types {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 0.2rem;
  width: min-content;
}

.complete_button {
  margin: 2rem 0.2rem 0;
  padding: 0.5rem 1.2rem;
  background-color: var(--green-color);
  outline: 2px solid transparent;
  border-radius: 50px;
  color: var(--white-color);
  /*display: inline-block;*/
  white-space: nowrap;
  width: min-content;
  display: block;

  transition: all 0.15s ease-in-out;
}

.complete_button:hover {
  background-color: var(--white-color);
  color: var(--green-color);
  outline: 2px solid var(--green-color);
}

.error_button {
  --error-color: red;
  background-color: var(--error-color);
  animation: error_button_anim 0.3s;
}

.error_button:hover {
  background-color: var(--error-color);
  color: var(--white-color);
  outline: 2px solid var(--error-color);
}

@keyframes error_button_anim {
  0% {
    transform: translateX(0px);
  }
  20% {
    transform: translateX(0.2rem);
  }
  40% {
    transform: translateX(-0.2rem);
  }
  60% {
    transform: translateX(0.1rem);
  }
  80% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(0px);
  }
}

.icon_wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}


</style>