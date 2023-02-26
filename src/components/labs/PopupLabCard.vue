<script setup lang="ts">

import type {LabModel} from "@/model/LabModel";

defineProps<{
  lab: LabModel
}>()

</script>

<template>
  <div class="popup_lab_card">

    <div class="wrapper">
<!--      <div class="aside_wrapper">-->
<!--        <div class="executor">-->
<!--          <div v-if="order.executor != null && order.executor !== 'None'" class="active_executor">-->
<!--            <p><span>Executor:</span> {{ order.executor }}</p>-->
<!--            <div class="order_card_remove_icon_wrapper" @click="removeExecutor">-->
<!--              <svg viewBox="81 220 595.275 841.891" xml:space="preserve">-->
<!--<g>-->
<!--	<path style="fill:#FFFFFF;"-->
<!--        d="M326.039,513.568h-69.557v-9.441c0-10.531,2.12-19.876,6.358-28.034   c4.239-8.156,13.165-18.527,26.783-31.117l12.33-11.176c7.322-6.678,12.684-12.973,16.09-18.882   c3.4-5.907,5.105-11.817,5.105-17.727c0-8.99-3.084-16.022-9.248-21.098c-6.166-5.073-14.773-7.611-25.819-7.611   c-10.405,0-21.646,2.152-33.719,6.455c-12.075,4.305-24.663,10.693-37.765,19.171v-60.5c15.541-5.395,29.735-9.375,42.582-11.946   c12.843-2.568,25.241-3.854,37.186-3.854c31.342,0,55.232,6.392,71.678,19.171c16.439,12.783,24.662,31.439,24.662,55.973   c0,12.591-2.506,23.862-7.516,33.815c-5.008,9.956-13.553,20.649-25.625,32.08l-12.332,10.983   c-8.736,7.966-14.451,14.354-17.148,19.171s-4.045,10.115-4.045,15.896V513.568z M256.482,542.085h69.557v68.593h-69.557V542.085z"/>-->
<!--</g>-->
<!--                <circle style="fill:#F44336;" cx="299.76" cy="439.067" r="218.516"/>-->
<!--                <g>-->

<!--		<rect x="267.162" y="307.978" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)"-->
<!--          style="fill:#FFFFFF;" width="65.545" height="262.18"/>-->

<!--                  <rect x="266.988" y="308.153" transform="matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)"-->
<!--                        style="fill:#FFFFFF;" width="65.544" height="262.179"/>-->
<!--</g></svg>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div v-else>-->
<!--            <p><span>Set executor:</span></p>-->
<!--            <input type="text" v-on:keyup.enter="setExecutor">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="complete_button_wrapper">-->
<!--          <div><span>Complete order</span></div>-->
<!--        </div>-->
<!--      </div>-->

      <p><span>Title:</span> {{ lab.title }}</p>
      <p><span>Duration:</span> {{ lab.duration }}</p>
      <p><span>Price:</span> {{ lab.price }}</p>
      <p><span>Type:</span> {{ lab.type }}</p>

    </div>
  </div>
</template>

<style scoped>
.popup_lab_card {
  width: 50vw;
  background-color: var(--white-color);

  border-radius: 10px;
  transition: all 0.15s ease-in-out;

}
.wrapper {
  height: 40vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0.2rem;
}

p {
  margin-bottom: 1.3rem;
}

span {
  color: var(--green-color);
}

</style>