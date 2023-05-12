<script setup lang="ts">
interface Props {
  label: string;
  href?: string;
}

const props = defineProps<Props>();
defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();
</script>

<template>
  <q-btn
    class="contact-btn"
    color="dark"
    no-caps
    flat
    :href="href"
    :label="props.label"
    :ripple="false"
  />
</template>

<style scoped lang="scss">
.contact-btn {
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

.contact-btn:hover,
.contact-btn:focus,
.contact-btn:active {
  :deep(.q-focus-helper) {
    background: $primary !important;
    opacity: 0 !important;
  }
}
</style>
