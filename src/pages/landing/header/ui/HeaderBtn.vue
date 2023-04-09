<script setup lang="ts">
interface Props {
  modelValue: number;
  id: number;
  label: string;
  target: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

function onclick() {
  emit('update:modelValue', props.id);
  document.querySelector(`#${props.target}`)?.scrollIntoView(true);
}
</script>

<template>
  <q-btn
    class="header-btn q-px-xs"
    :class="{ active: id === modelValue }"
    color="dark"
    no-caps
    flat
    :label="props.label"
    @click="onclick"
  />
</template>

<style scoped lang="scss">
.header-btn {
  --highlight-padding: 0%;
  --highlight-width: calc(100% + var(--highlight-padding));
  --highlight-middlepoint: calc(var(--highlight-width) / 2);
  --highlight-offset: calc(-1 * var(--highlight-padding) / 2);

  font-weight: 600;
  height: 1.4rem;
  font-size: 1rem;

  &::before {
    content: '';
    top: 75%;
    left: var(--highlight-middlepoint);
    width: 0;
    height: 0.25rem;
    background-color: $accent;

    transition: 0.2s all ease-in-out;
  }

  &.active::before,
  &:hover::before {
    left: var(--highlight-offset);
    width: var(--highlight-width);
  }
}
</style>

<style lang="scss">
.header-btn:hover,
.header-btn:focus,
.header-btn:active {
  .q-focus-helper {
    background: $primary !important;
    opacity: 0 !important;
  }
}

.header-btn {
  .q-ripple {
    display: none;
  }
}
</style>
