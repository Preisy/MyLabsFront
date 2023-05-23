<script setup lang="ts"></script>

<template>
  <div class="card-wrapper">
    <div class="card-body">
      <div class="row justify-between items-start fit-content no-wrap">
        <div class="title-wrapper row items-center no-wrap q-mr-sm">
          <div class="title">Здесь будет отображен заказ</div>
        </div>
      </div>
      <div class="details row justify-between items-end">
        <div class="date" />
        <div class="price" color="grey" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-body {
  position: relative;
  background-color: $primary;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0 #00000020;
  width: 15rem;

  &.open {
    z-index: 9999;
  }

  @media (max-width: $screen-lg) {
    max-width: 13rem;
  }
  @media (max-width: $screen-md) {
    max-width: 12rem;
    padding: 0.8rem;
    box-shadow: 0 0 0.8rem 0 #00000020;
  }
  @media (max-width: $screen-sm) {
    max-width: 10rem;
    padding: 0.5rem;
    box-shadow: 0 0 0.4rem 0 #00000020;
    border-radius: 0.7rem;
  }

  .title-wrapper {
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 80%;

    .title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #eaeaea;
    }
  }

  .details {
    .date {
      width: 4rem;
      height: 1.3rem;
      border-radius: 1.4rem;
      background: #eaeaea;
    }
    .price {
      width: 4rem;
      height: 1.3rem;
      border-radius: 1.4rem;
      background: #eaeaea;
    }
  }
}
</style>
