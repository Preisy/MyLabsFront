<script setup lang="ts">
import { chunk } from 'lodash';
import { LabModel, OrderModel } from './ui/Card';
import { Screen } from 'quasar';
import { computed, onMounted, ref } from 'vue';
import { useLabsStore } from 'src/stores/LabsStore';
import { useOrderStore } from 'src/stores/OrderStore';
import OrderCard from './ui/OrderCard.vue';
import LabCard from './ui/LabCard.vue';

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
  console.log(orders);
  console.log(orderStore.currentOrders);
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
        <div class="titles row">
          <h1 class="title text-accent q-ml-lg">
            {{ $t('pages.user.work.inProgress') }}
          </h1>
          <h1 class="title q-mr-lg">{{ $t('pages.user.work.oldWorks') }}</h1>
        </div>
        <div class="cards column">
          <q-scroll-area class="task-scroller">
            <div class="task-wrapper row no-wrap">
              <div class="in-progress">
                <OrderCard
                  class="card"
                  v-for="(card, index) in cards.orders"
                  :key="index"
                  :card="card"
                />
              </div>
              <div class="done">
                <div
                  class="slide row justify-center no-wrap"
                  v-for="(slide, index) in chunk(cards.labs, chunkSize)"
                  :key="index"
                >
                  <LabCard
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

      min-width: 8rem;
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
      // justify-content: space-around;
    }

    .task-scroller .task-wrapper {
      // justify-content: space-around;
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
