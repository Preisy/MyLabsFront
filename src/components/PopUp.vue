<script setup lang="ts">
import {defineComponent, ref, watch} from "vue";

const props = defineProps<{
  isOpen: boolean
}>()

const emits = defineEmits(['closePopUp'])


function closePopUpEsc(event: KeyboardEvent) {
  if (event.code == "Escape") {
    closePopUp()
  }
}

let firstMousePopUpClick = false;

function closePopUpClick(event: MouseEvent) {
  if (!firstMousePopUpClick) {
    firstMousePopUpClick = true
    return;
  }
  const target = event.target as Element
  if (!target.closest('div.pop_up')) {
    closePopUp()
  }
}

let isPopUpOpened = ref(false);

function closePopUp() {
  document.querySelector("main")?.classList.remove("overlapped")
  isPopUpOpened.value = false
  document.removeEventListener('keydown', closePopUpEsc)
  document.removeEventListener("click", closePopUpClick)
  emits('closePopUp');

}

function createPopUp() {
  document.querySelector("main")?.classList.add("overlapped");
  isPopUpOpened.value = true
  document.addEventListener("keydown", closePopUpEsc)
  document.addEventListener("click", closePopUpClick)
  firstMousePopUpClick = false;
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
  <transition name="fade">
    <div v-if="isPopUpOpened === true">
      <div class="overlay"></div>
      <div class="pop_up">
        <slot></slot>
      </div>
    </div>
  </transition>

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
}

</style>