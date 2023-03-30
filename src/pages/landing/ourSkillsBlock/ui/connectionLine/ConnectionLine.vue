<script setup lang='ts'>
import ConnectionLineHorizontal from './ConnectionLineHorizontal.vue';
import ConnectionLineVertical from './ConnectionLineVertical.vue';

interface ConnectionLineProps {
  direction: 'rb' | 'rt' | 'br' | 'bl' | 'lt' | 'lb'
}
const props = withDefaults(defineProps<ConnectionLineProps>(), {
  direction: 'rb'
})
</script>

<template>
  <ConnectionLineHorizontal v-if='props.direction[0] === "r" || props.direction[0] === "l"' :class='props.direction'/>
  <ConnectionLineVertical v-else :class='props.direction' />
</template>

<style scoped lang='scss'>
svg {
  position: absolute;
  z-index: -1;
}

.rb {
  transform: scale(1, -1);
  bottom: calc(50% - 0.1rem);
  left: -100%;
}
.rt {
  top: calc(50% - 0.1rem);
  left: -100%;
}
.lb {
  transform: scale(1, 1);
  bottom: calc(50% - 0.1rem);
  left: 100%;
}
//.lt {
//  transform: translateY(50%);
//  left: 100%;
//}

.br {
  transform: scale(-1, 1);
  right: calc(50% - 0.1rem);
  top: -100%;
}
.bl {
  left: calc(50% - 0.1rem);
  top: -100%;
}



</style>
