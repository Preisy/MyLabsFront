<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface ATypingText {
  text: string;
}
const props = defineProps<ATypingText>();
let wrapper = ref<HTMLSpanElement>()

let text = ref<string[]>(new Array(props.text.length));
//   new Array(props.text.length).fill(' ').map((el, i) => {
//   return props.text[i] == ' ' ? ' ' : 'M'
// })
onMounted(() => {
  wrapper.value!.innerText = props.text
  let height = wrapper.value?.getBoundingClientRect().height
  wrapper.value!.innerText = ''
  wrapper.value!.style.height = `${height}px`
})
let i = 0;
let id = setInterval(() => {
  if (i == props.text.length - 1) {
    clearInterval(id);
    wrapper.value!.style.height = ''
  }
  text.value[i] = props.text[i];
  ++i;
}, 30);
</script>

<template>
  <span ref="wrapper">{{ text.join('') }}</span>
  <!-- {{ text.length }} -->
</template>

<style scoped lang="scss">
span {
  display: inline-block;
}
</style>
