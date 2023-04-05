<script setup lang="ts">
import TaskCard from './ui/TaskCard.vue';
import { chunk } from 'lodash';
import { exampleCards } from './ui/Card';

// const i = ref<string>('0');
const cards = exampleCards;
</script>

<template>
  <div class="work-block bg-primary">
    <div class="content-wrapper structure">
      <div class="cards row justify-between">
        <div class="in-progress column items-center">
          <h1 class="title text-accent">В процессе</h1>
          <TaskCard
            v-for="(card, index) in cards.inProgress"
            :key="index"
            :card="card"
          ></TaskCard>
        </div>
        <div class="done column items-center">
          <h1 class="title">Старые работы</h1>
          <div
            class="slide row"
            v-for="(slide, index) in chunk(cards.done, 2)"
            :key="index"
          >
            <TaskCard
              class="card"
              v-for="(card, index) in slide"
              :key="index"
              :card="card"
            ></TaskCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-block {
  background-color: $primary;
  border-radius: 2rem;

  .structure {
    padding: 0;
  }

  .title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .card {
    margin-bottom: 1rem;
  }

  .done {
    .card:first-of-type {
      margin-right: 2rem;
    }
  }
}
</style>
