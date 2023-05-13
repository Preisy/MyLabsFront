<script setup lang="ts">
import { chunk } from 'lodash';
import { LabModel, OrderModel } from './ui/Card';
import { Screen } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import { useLabsStore } from 'src/stores/LabsStore';
import { useOrderStore } from 'src/stores/OrderStore';
import OrderCard from './ui/OrderCard.vue';
import LabCard from './ui/LabCard.vue';
import PreloaderCard from './ui/PreloaderCard.vue';

const cards = ref<{ orders: OrderModel[]; labs: LabModel[] }>({
  orders: [],
  labs: [],
});
const chunkSize = computed(() => {
  return Screen.lt.md ? 1 : 2;
});

const labsStore = useLabsStore();
const orderStore = useOrderStore();
onMounted(async () => {
  if (!cards.value) return;

  getLabs();
  getOrders();
});

const getLabs = async () => {
  const labs = await labsStore.getLabs();

  if ('error' in labs) {
    console.warn('For some reason cant fetch labs');
    return;
  }
  cards.value.labs = labs;
};
const getOrders = async () => {
  const orders = await orderStore.getOrders();

  if ('error' in orders || !orderStore.currentOrders) {
    console.warn('For some reason cant fetch orders');
    return;
  }
  cards.value.orders = orderStore.currentOrders;
};
</script>

<template>
  <div class="work-block bg-primary" :class="{ 'middle-screen': Screen.lt.lg }">
    <div class="content-wrapper structure">
      <div class="cards column">
        <div class="cards column">
          <q-scroll-area class="task-scroller">
            <div
              class="task-wrapper no-wrap"
              :class="{ row: !Screen.lt.sm, column: Screen.lt.sm }"
            >
              <div class="in-progress">
                <h1 class="title text-accent text-center">
                  {{ $t('pages.user.work.inProgress') }}
                </h1>
                <OrderCard
                  class="card"
                  v-for="(card, index) in cards.orders"
                  :key="index"
                  :card="card"
                />
                <template v-if="cards.orders.length === 0">
                  <PreloaderCard class="card" v-for="index in 2" :key="index" />
                </template>
              </div>
              <div class="done">
                <h1 class="title text-center">
                  {{ $t('pages.user.work.oldWorks') }}
                </h1>
                <div
                  class="slide justify-center no-wrap"
                  :class="{ row: !Screen.lt.md, column: Screen.lt.md }"
                  v-for="(slide, index) in chunk(cards.labs, chunkSize)"
                  :key="index"
                >
                  <LabCard
                    class="card"
                    :class="{
                      right:
                        (index % 2 === 1 || chunkSize === 1) && !Screen.lt.sm,
                    }"
                    v-for="(card, index) in slide"
                    :key="index"
                    :card="card"
                  />
                </div>
                <template v-if="cards.labs.length === 0">
                  <div
                    class="slide justify-center no-wrap"
                    :class="{ row: !Screen.lt.md, column: Screen.lt.md }"
                    v-for="slide in [2, 2]"
                    :key="slide"
                  >
                    <PreloaderCard
                      class="card"
                      v-for="index in slide"
                      :key="index"
                    />
                  </div>
                </template>
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

      // min-width: 10rem;
    }
  }

  .done {
    .slide {
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: $screen-md) {
    .title {
      font-size: 1.6rem;
      line-height: 1.6rem;
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

    .done .slide {
      gap: 1rem;
      margin-bottom: 1rem;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }

    .in-progress .card {
      width: fit-content;
    }
  }
}
</style>
