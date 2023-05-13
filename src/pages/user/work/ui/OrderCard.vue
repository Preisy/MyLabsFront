<script setup lang="ts">
import { taskTypeToImg } from 'src/global/LabTypes';
import { OrderModel } from './Card';
import FileDisplayDialog from './FileDisplayDialog.vue';
import { ref } from 'vue';
import CardPopup from './CardPopup.vue';
import { QBtn } from 'quasar';

interface Props {
  card: OrderModel;
}

const props = defineProps<Props>();
const fileDisplay = ref<InstanceType<typeof FileDisplayDialog>>();
const fileBtn = ref<InstanceType<typeof QBtn>>();

const popup = ref<InstanceType<typeof CardPopup>>();
const isOpen = ref<boolean>(false);
const onclick = (e: Event) => {
  if ((e.target as HTMLElement).tagName.toLowerCase() === 'i') return;

  popup.value?.show();
  isOpen.value = true;
};
const onclose = () => {
  // console.log('close');
  isOpen.value = false;
};
</script>

<template>
  <div class="card-wrapper">
    <div class="card-body" @click="onclick">
      <div class="row justify-between items-start fit-content no-wrap">
        <div class="title-wrapper row items-center no-wrap q-mr-sm">
          <img
            class="title-icon"
            :src="taskTypeToImg(props.card.type)"
            alt=""
          />
          <h2 class="title">{{ props.card.taskText.slice(0, 10) }}...</h2>
        </div>
      </div>
      <div class="details row justify-between items-end">
        <div class="date">
          <span>
            {{ props.card.deadline }}
          </span>
        </div>
        <q-btn
          ref="fileBtn"
          icon="attachment"
          color="grey"
          text-color="dark"
          class="attachment-btn br-15px"
          @click="fileDisplay?.open"
          v-if="card.taskFiles.length > 0"
        />
      </div>
      <file-display-dialog
        ref="fileDisplay"
        :files="card.taskFiles"
        :order-id="card.id"
      />
    </div>
    <CardPopup ref="popup" :data="card" :is-open="isOpen" @close="onclose" />
  </div>
</template>
<style scoped lang="scss">
.card-body {
  // position: relative;
  background-color: $primary;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 1rem 0 #00000020;
  max-width: 15rem;
  height: 100%;

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

    .title-icon {
      --size: 1.2rem;
      width: var(--size);
      height: var(--size);

      user-select: none;

      margin-right: 0.4rem;
      margin-top: 0.3rem;
    }

    .title {
      font-size: 1.3rem;
      line-height: 1.35rem;
      margin-bottom: 0.5rem;

      @media (max-width: $screen-sm) {
        font-size: 1rem;
        line-height: 1.05rem;
      }
    }
  }

  .attachment-btn {
    padding: 0.5rem;
    min-width: fit-content;
    margin-left: 0.5rem;

    @media (max-width: $screen-sm) {
      padding: 0.3rem;
      font-size: 0.8rem;
    }
  }

  .details {
    font-size: 1.2rem;

    @media (max-width: $screen-lg) {
      font-size: 0.9rem;
    }
    .icon {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }

    .date {
      font-weight: 700;
    }
  }

  .link {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
  }
}
</style>
