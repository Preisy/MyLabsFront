<script setup lang="ts"></script>

<template>
  <div class="qa-card bg-primary">
    <div class="wrapper">
      <h4 class="question">
        <slot name="question"></slot>
      </h4>
      <q-btn
        class="btn br-15px"
        text-color="primary"
        color="dark"
        icon="expand_more"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.qa-card {
  padding: 1.5rem;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;

  box-shadow: 0 0 20px 0 #00000020;

  .wrapper {
    position: relative;
  }

  .question {
    font-weight: 700;
    padding-right: 3rem;
  }
  .btn {
    --size: 2.25rem;
    width: var(--size);
    height: var(--size);

    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
