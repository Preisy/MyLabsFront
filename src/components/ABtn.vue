<script setup lang='ts'>
interface ButtonProps {
  color?: string;
  textColor?: string;
  label: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  textColor: 'primary'
});
</script>

<template>
  <q-btn
    class='br-15px text-weight-600 btn'
    unelevated
    :color='props.color'
    :text-color='props.textColor'
    no-caps
    :label='props.label'
  />
</template>

<style scoped lang='scss'>
.btn {
  font-size: 0.8rem;
}

.text-weight-600 {
  font-weight: 600;
}
</style>
