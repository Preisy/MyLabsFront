<script setup lang='ts'>
import { ref } from 'vue';

interface ATypingText {
  text: string
}
const props = defineProps<ATypingText>()

let text = ref('')
let i = 0;
let id = setInterval(() => {
  if (i == props.text.length - 1) clearInterval(id);
  text.value += props.text[i];
  ++i;
}, 30)
</script>

<template>
{{ text }}
</template>

<style scoped lang='scss'>

</style>
