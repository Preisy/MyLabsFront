<script setup lang="ts">
interface AReferralListProps {
  isLast?: boolean;
}

withDefaults(defineProps<AReferralListProps>(), {
  isLast: false,
});
</script>

<template>
  <div class="referral-element">
    <slot></slot>
    <br v-if="!isLast" class="break-elements q-my-lg" />
  </div>
</template>

<style scoped lang="scss">
.referral-element {
  .break-elements {
    display: block;
    padding-top: 4px;
    background: $accent;
    border-radius: 8px;
    content: '';
  }
}
</style>
