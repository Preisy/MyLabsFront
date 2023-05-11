<script setup lang="ts">
import ContactsModal from 'src/components/AContactModal/ContactsModal.vue';
</script>

<template>
  <div class="description">
    <p class="description-details">
      {{ $t('pages.landing.ourSkillsBlock.details') }}
    </p>
    <ContactsModal theme="dark" />
  </div>
</template>

<style scoped lang="scss">
.description {
  width: 13rem;
  .description-details {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: $screen-lg) {
  .description {
    width: 35%;
  }
}

@media (max-width: $screen-md) {
  .description {
    width: 18rem !important;
    .description-details {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  }
}

@media (max-width: $screen-sm) {
  .description {
    width: 100% !important;
  }
}
</style>
