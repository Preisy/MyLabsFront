<script setup lang="ts">
import type {OrderModel} from "@/model/OrderModel";
import env from "@/env.json"
import type {AxiosResponse} from "axios"
import axios from "axios";

let props = defineProps<{
  order: OrderModel
}>()

async function setExecutor(event: Event) {
  let inp = event.currentTarget as HTMLInputElement
  axios.patch<OrderModel>(`/api/orders/${props.order.id}`, {
    "executor": inp.value
  }).then((order: AxiosResponse<OrderModel>) => {
    props.order.executor = order.data.executor
  })
}

async function removeExecutor(event: Event) {
  axios.patch<OrderModel>(`/api/orders/${props.order.id}`, {
    "executor": "None"
  }).then((order: AxiosResponse<OrderModel>) => {
    props.order.executor = order.data.executor
  })
}

async function completeLab(event: Event) {
  // axios.post()
}

</script>

<template>
  <div class="popup_order_card">

    <div class="wrapper">

      <div class="aside_wrapper">
        <div class="executor">
          <div v-if="order.executor != null && order.executor !== 'None'" class="active_executor">
            <p><span>Executor:</span> {{ order.executor }}</p>
            <div class="order_card_remove_icon_wrapper" @click="removeExecutor">
              <svg viewBox="81 220 595.275 841.891" xml:space="preserve">
<g>
	<path style="fill:#FFFFFF;"
        d="M326.039,513.568h-69.557v-9.441c0-10.531,2.12-19.876,6.358-28.034   c4.239-8.156,13.165-18.527,26.783-31.117l12.33-11.176c7.322-6.678,12.684-12.973,16.09-18.882   c3.4-5.907,5.105-11.817,5.105-17.727c0-8.99-3.084-16.022-9.248-21.098c-6.166-5.073-14.773-7.611-25.819-7.611   c-10.405,0-21.646,2.152-33.719,6.455c-12.075,4.305-24.663,10.693-37.765,19.171v-60.5c15.541-5.395,29.735-9.375,42.582-11.946   c12.843-2.568,25.241-3.854,37.186-3.854c31.342,0,55.232,6.392,71.678,19.171c16.439,12.783,24.662,31.439,24.662,55.973   c0,12.591-2.506,23.862-7.516,33.815c-5.008,9.956-13.553,20.649-25.625,32.08l-12.332,10.983   c-8.736,7.966-14.451,14.354-17.148,19.171s-4.045,10.115-4.045,15.896V513.568z M256.482,542.085h69.557v68.593h-69.557V542.085z"/>
</g>
                <circle style="fill:#F44336;" cx="299.76" cy="439.067" r="218.516"/>
                <g>

		<rect x="267.162" y="307.978" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)"
          style="fill:#FFFFFF;" width="65.545" height="262.18"/>

                  <rect x="266.988" y="308.153" transform="matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)"
                        style="fill:#FFFFFF;" width="65.544" height="262.179"/>
</g></svg>
            </div>
          </div>
          <div v-else>
            <p><span>Set executor:</span></p>
            <input type="text" v-on:keyup.enter="setExecutor">
          </div>
        </div>
        <div class="complete_button_wrapper">
          <div><span>Complete order</span></div>
        </div>
      </div>

      <p><span>Name:</span> {{ order.username }}</p>
      <p><span>Contacts:</span> {{ order.contacts }}</p>
      <p><span>Deadline:</span> {{ order.deadline }}</p>

      <div class="task_description">
        <div v-if="order.taskText != null" class="taskText">
          <p><span>Task:</span></p>
          <p>{{ order.taskText }}</p>
        </div>
        <div v-if="order.taskFiles.length > 0" class="taskFile">
          <p><span>TaskFiles:</span></p>
          <template v-for="file in order.taskFiles">
            <p>
              <a :href="`${env.api}/orders/${order.id}/files/${file.filename}`" target="_blank">
                {{ env.api }}/orders/{{ order.id }}/files/{{ file.filename }}
              </a>
            </p>
          </template>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.popup_order_card {
  height: 80vh;
  width: 85vw;
  background-color: var(--white-color);

  border-radius: 10px;
  flex: 1;
  padding: 2rem 0;
  transition: all 0.15s ease-in-out;

  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
}


.wrapper {
  height: 80vh;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2rem;
  overflow-y: scroll;
}

p {
  margin-bottom: 1.3rem;
}

span {
  color: var(--green-color);
}

.task_description {
  margin-top: 3rem;
}

.task_description p {
  line-height: 1.2rem;
}

.aside_wrapper {
  float: right;
  padding-top: 0.2rem;
}

.executor {
  padding-bottom: 2rem;
}

.active_executor {
  display: flex;
}

.active_executor p {
  margin-right: 1rem;
}

.active_executor .order_card_remove_icon_wrapper {
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  transition: all 0.15s ease-in-out;
}

.active_executor svg {
  width: 1.7rem;
  fill: #F44336 !important;
  transition: all 0.15s ease-in-out;
}

.active_executor .order_card_remove_icon_wrapper:hover {
  transform: scale(1.1);
}

.active_executor .order_card_remove_icon_wrapper:hover svg {
  fill: #d43c31 !important;
}

.active_executor .order_card_remove_icon_wrapper:active {
  transform: translateY(0.05rem);
}

input {
  line-height: 1.25rem;
  font-size: 1rem;
  user-select: none;
  border: 1px solid #000;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
}

input:focus {
  outline: none;
  -webkit-appearance: none;
  border: 1px solid #000;

  /*-webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.6);*/
  /*-moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.6);*/
  /*box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.6);*/
}

.complete_button_wrapper div {
  padding: 0.5rem 1.2rem;
  background-color: var(--green-color);
  outline: 2px solid var(--white-color);
  border-radius: 50px;
  color: var(--white-color);
  /*display: inline-block;*/
  white-space: nowrap;
  width: min-content;

  transition: all 0.15s ease-in-out;
}

.complete_button_wrapper span {
  color: var(--white-color);
}

.complete_button_wrapper div:hover {
  background-color: var(--white-color);
  color: var(--green-color);
  outline: 2px solid var(--green-color);
}

.complete_button_wrapper div:hover span {
  color: var(--green-color);
}

@media (min-width: 1300px) {
  .popup_order_card {
    width: 70vw;
  }
}

</style>