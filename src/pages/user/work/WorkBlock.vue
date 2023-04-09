<script setup lang="ts">
import TaskCard from './ui/TaskCard.vue';
import { chunk } from 'lodash';
import { exampleCards } from './ui/Card';
import { Screen } from 'quasar';
import { computed } from 'vue';

const cards = exampleCards;
const chunkSize = computed(() => {
  return Screen.lt.md ? 1 : 2;
});
</script>

<template>
  <div class="work-block bg-primary" :class="{ 'middle-screen': Screen.lt.lg }">
    <div class="content-wrapper structure">
      <div class="cards column">
        <div class="titles row">
          <h1 class="title text-accent">В процессе</h1>
          <h1 class="title">Старые работы</h1>
        </div>
        <div class="cards column">
          <q-scroll-area class="task-scroller">
            <div class="task-wrapper row no-wrap">
              <div class="in-progress">
                <TaskCard
                  class="card"
                  v-for="(card, index) in cards.inProgress"
                  :key="index"
                  :card="card"
                />
              </div>
              <div class="done">
                <div
                  class="slide row justify-center no-wrap"
                  v-for="(slide, index) in chunk(cards.done, chunkSize)"
                  :key="index"
                >
                  <TaskCard
                    class="card"
                    v-for="(card, index) in slide"
                    :key="index"
                    :card="card"
                  />
                </div>
              </div>
            </div>
          </q-scroll-area>
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
    margin-bottom: 1rem;
  }

  .titles {
    justify-content: space-between;
  }

  .task-scroller {
    height: calc(var(--subblock-height) - 5rem);

    .task-wrapper {
      margin: 1.2rem;
      column-gap: 1.5rem;

      justify-content: space-between;
    }
  }

  .in-progress {
    .card {
      margin-bottom: 1rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .done {
    .slide {
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  // &.middle-screen {
  //   .done {
  //     .task-scroller {
  //       width: 16rem;
  //     }
  //   }
  // }

  @media (max-width: $screen-md) {
    .title {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    .titles {
      justify-content: space-around;
    }

    .task-scroller .task-wrapper {
      justify-content: space-around;
    }
  }
  @media (max-width: $screen-sm) {
    .structure {
      width: 90%;
    }

    .title {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }

    .task-scroller {
      height: calc(var(--subblock-height) + 3rem);
    }
  }
}
</style>
