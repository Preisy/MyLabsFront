<script setup lang='ts'>
import ButtonComponent from 'components/ABtn.vue';
import SkillTreeComponent from 'src/components/SkillTreeComponent.vue';</script>

<template>
  <div class='our-skills bg-base'>
    <div class='our-skills__wrapper structure'>
      <h2 class='title text-center'>Возможности</h2>
      <div class='content row justify-around items-center'>
        <div class='our-skills__description col-3'>
          <p class='description__details'>
            Если вашего языка или фреймворка тут нет, свяжитесь с нами и мы вас
            проконсультируем!
          </p>
          <ButtonComponent
            class='q-px-xl q-py-sm'
            label='Контакты'
          ></ButtonComponent>
        </div>
        <div class='skills-diagram'>
          <SkillTreeComponent></SkillTreeComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.our-skills {
  background-color: $primary;
  border-radius: 2rem 2rem 0 0;

  position: relative;
  z-index: 1;

  .our-skills__wrapper {
    padding-top: 8rem;

    .title {
      margin-bottom: 3.5rem;
    }

    .our-skills__description {
      .description__details {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
