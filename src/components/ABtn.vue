<script setup lang="ts">
interface ButtonProps {
  label: string;
  color?: string;
  textColor?: string;
  type?: 'button' | 'reset' | 'submit';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'dark',
  textColor: 'primary',
  type: 'button',
});
</script>

<template>
  <q-btn
    class="br-15px text-weight-600 btn"
    unelevated
    :color="props.color"
    :text-color="props.textColor"
    no-caps
    :label="props.label"
    :type="props.type"
  />
</template>

<style scoped lang="scss">
.btn {
  font-size: 0.8rem;
}

.text-weight-600 {
  font-weight: 600;
}
</style>
