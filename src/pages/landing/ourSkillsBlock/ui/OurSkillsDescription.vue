<script setup lang="ts">
import ButtonComponent from 'components/ABtn.vue';
</script>

<template>
  <div class="description">
    <p class="description-details">
      {{ $t('pages.landing.ourSkillsBlock.details') }}
    </p>
    <ButtonComponent
      class="q-px-xl q-py-sm"
      :label="$t('pages.landing.ourSkillsBlock.contacts-btn')"
    ></ButtonComponent>
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
