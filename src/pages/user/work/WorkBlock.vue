<script setup lang="ts">
import ACarousel from 'src/components/ACarousel.vue';
import { ref } from 'vue';
import TaskCard from './ui/TaskCard.vue';

const i = ref<string>('0');
const inProgressCards = [
  {
    title: 'Backup system',
    price: 3000,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3100,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3200,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
];

const doneWorksCards = [
  {
    title: 'Backup system',
    price: 3000,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3100,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3200,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3000,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3100,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
  {
    title: 'Backup system',
    price: 3200,
    date: '19.03.23',
    link: '#',
    imgSrc: '#',
  },
];
</script>

<template>
  <div class="work-block bg-primary">
    <div class="content-wrapper structure">
      <div class="titles row justify-between">
        <h1 class="title text-accent">В процессе</h1>
        <h1 class="title">Старые работы</h1>
      </div>
      <div class="cards row justify-between">
        <div class="in-progress column">
          <TaskCard
            v-for="(card, index) in inProgressCards"
            :key="index"
            :title="card.title"
            :price="card.price.toString()"
            :date="card.date"
            :img-src="card.imgSrc"
            :link="card.link"
          ></TaskCard>
        </div>
        <div class="done column">
          <TaskCard
            v-for="(card, index) in doneWorksCards"
            :key="index"
            :title="card.title"
            :price="card.price.toString()"
            :date="card.date"
            :img-src="card.imgSrc"
            :link="card.link"
          ></TaskCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-block {
  margin-top: -5rem;
  border-radius: 2rem;

  .titles {
    padding-top: 2rem;
  }
}
</style>
