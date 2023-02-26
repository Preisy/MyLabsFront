<script setup lang="ts">
import {defineComponent, ref, watch} from "vue";

const props = defineProps<{
  isOpen: boolean
}>()
const emits = defineEmits(['closePopUp'])

let isPopUpOpened = ref(false);

function closePopUp() {
  document.querySelector("main")?.classList.remove("overlapped")
  isPopUpOpened.value = false
  emits('closePopUp');
}

function createPopUp() {
  document.querySelector("main")?.classList.add("overlapped");
  isPopUpOpened.value = true
}

watch(() => props.isOpen, (newValue, oldValue) => {
  if (!oldValue && newValue) {
    createPopUp()
  } else if (oldValue && !newValue) {
    closePopUp()
  }
})

defineComponent({
  methods: {
    foo: function () {
      console.log("foo")
    }
  }
})
</script>

<template>
  <div ref="root" class="pop_up_wrapper">
    <transition name="fade">
      <div v-if="isPopUpOpened === true">
        <div class="overlay" ref="overlay"></div>
        <div class="pop_up">
          <svg @click="closePopUp" class="close_icon" id="svg2" height="25" width="25">
            <g transform="translate(3.9661017,3.5677966)">
              <path stroke-miterlimit="4" d="M -2.5783352e-4,-0.00146808 17.435473,18.212367" id="imagebot_5" style="opacity:1;fill:#5f6368;stroke:#5f6368;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1"/>
              <path stroke-miterlimit="4" d="M -2.5783352e-4,18.212367 17.435473,-0.00146808" id="imagebot_4" style="opacity:1;fill:#5f6368;stroke:#5f6368;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1"/>
            </g>
          </svg>
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.18);
}

.pop_up {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 2.5rem;
  background-color: var(--white-color);
  border-radius: 10px;


  -webkit-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  -moz-box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
  box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.4);
}

.close_icon {
  width: 1.7rem;
  transition: all 0.15s ease-in-out;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
}
.close_icon path {
  stroke: #66686a !important;
}

.close_icon:hover {
  transform: scale(1.1);
}
.close_icon:hover path {
  stroke: #44474b !important;
}

.close_icon:active {
  transform: translateY(0.05rem);
}

</style>