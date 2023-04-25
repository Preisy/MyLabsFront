<script setup lang="ts">
interface Props {
  modelValue: number;
  id: number;
  label: string;
  to?: string;
}

const props = defineProps<Props>();
defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();
</script>

<template>
  <q-btn
    class="header-btn"
    :class="{ active: id === modelValue }"
    color="dark"
    no-caps
    flat
    :to="to"
    :label="props.label"
    @click="$emit('update:modelValue', props.id)"
  />
</template>

<style scoped lang="scss">
.header-btn {
  --highlight-padding: 5%;
  --highlight-width: calc(100% + var(--highlight-padding));
  --highlight-middlepoint: calc(var(--highlight-width) / 2);
  --highlight-offset: calc(-1 * var(--highlight-padding) / 2);

  font-weight: 600;
  height: 1.4rem;
  font-size: 1rem;
  padding: 0;

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
