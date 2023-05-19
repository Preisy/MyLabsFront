<script setup lang="ts">
import { chunk } from 'lodash';
import { LabModel } from './ui/Card';
import { Screen } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import { useLabsStore } from 'src/stores/LabsStore';
import { useOrderStore } from 'src/stores/OrderStore';
import OrderCard from './ui/OrderCard.vue';
import LabCard from './ui/LabCard.vue';
import PreloaderCard from './ui/PreloaderCard.vue';
import { storeToRefs } from 'pinia';

const labsStore = useLabsStore();
const orderStore = useOrderStore();

const orders = storeToRefs(orderStore).currentOrders;
const labs = ref<LabModel[]>([]);
const chunkSize = computed(() => {
  return Screen.lt.md ? 1 : 2;
});

onMounted(async () => {
  getLabs();
  getOrders();
});

const getLabs = async () => {
  const labsResp = await labsStore.getLabs();

  if ('error' in labsResp) {
    console.warn('For some reason cant fetch labs');
    return;
  }
  labs.value = labsResp;
};
const getOrders = async () => {
  const ordersResp = await orderStore.getOrders();

  if ('error' in ordersResp || !orderStore.currentOrders) {
    console.warn('For some reason cant fetch orders');
    return;
  }
};
</script>

<template>
  <div
    class="work-block bg-primary full-height"
    :class="{ 'middle-screen': Screen.lt.lg }"
  >
    <div class="content-wrapper structure full-height">
      <div class="cards column full-height">
        <div class="titles row" v-if="!Screen.lt.sm">
          <h1 class="title text-accent">
            {{ $t('pages.user.work.inProgress') }}
          </h1>
          <h1 class="title">
            {{ $t('pages.user.work.oldWorks') }}
          </h1>
        </div>
        <q-scroll-area class="task-scroller">
          <div
            class="task-wrapper no-wrap"
            :class="{ row: !Screen.lt.sm, column: Screen.lt.sm }"
          >
            <div class="in-progress">
              <h1 v-if="Screen.lt.sm" class="title text-accent text-center">
                {{ $t('pages.user.work.inProgress') }}
              </h1>
              <OrderCard
                class="card"
                v-for="(card, index) in orders"
                :key="index"
                :card="card"
              />
              <template v-if="orders.length === 0">
                <PreloaderCard class="card" v-for="index in 1" :key="index" />
              </template>
            </div>
            <div class="done">
              <h1 v-if="Screen.lt.sm" class="title text-center">
                {{ $t('pages.user.work.oldWorks') }}
              </h1>
              <div
                class="slide justify-center no-wrap"
                :class="{ row: !Screen.lt.md, column: Screen.lt.md }"
                v-for="(slide, index) in chunk(labs, chunkSize)"
                :key="index"
              >
                <LabCard
                  class="card"
                  :class="{
                    right:
                      (index % 2 === 1 ||
                        chunkSize === 1 ||
                        slide.length === 1) &&
                      !Screen.lt.sm,
                  }"
                  v-for="(card, index) in slide"
                  :key="index"
                  :card="card"
                />
              </div>
              <template v-if="labs.length === 0">
                <div
                  class="slide justify-center no-wrap"
                  :class="{ row: !Screen.lt.md, column: Screen.lt.md }"
                  v-for="slide in [2]"
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
</template>

<style scoped lang="scss">
.work-block {
  background-color: $primary;
  border-radius: 2rem;

  .structure {
    padding: 0;
    padding-top: 4rem;
  }

  .title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .titles {
    justify-content: space-between;
  }

  .task-scroller {
    margin-top: 2rem;
    // height: calc(var(--subblock-height) - 5rem);
    height: calc(100% - 8rem);

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
      padding-top: 0;
    }

    .title {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }

    .task-scroller {
      height: calc(var(--subblock-height) - 3rem);
      margin-top: 0;
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
