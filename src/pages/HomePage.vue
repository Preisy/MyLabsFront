<script setup lang="ts">
import ButtonComponent from 'src/components/ButtonComponent.vue';
import InputComponent from 'src/components/InputComponent.vue';
import { ref } from 'vue';

const task_val = ref('');
</script>

<template>
  <div class="homepage bg-base">
    <div class="homepage__wrapper structure">
      <div class="homepage__left-part">
        <h2 class="description">
          Мы быстро и эффективно решим ваши проблемы с учебой!
        </h2>
        <div class="form">
          <div class="form__line row">
            <InputComponent
              class="col"
              label="Задание, проблема"
              :model-value="task_val"
            />
            <q-btn
              class="clip-button br-15px"
              text-color="dark"
              color="grey"
              icon="attach_file"
            />
          </div>
          <div class="form__line row">
            <InputComponent
              class="col"
              label="Язык программирования"
              :model-value="task_val"
            />
            <InputComponent
              class="col-4"
              label="Дедлайн"
              :model-value="task_val"
            />
          </div>
          <div class="form__line">
            <InputComponent
              class="col"
              label="Ваше имя"
              :model-value="task_val"
            />
          </div>
          <div class="form__line">
            <InputComponent
              class="col"
              label="Электронная почта"
              :model-value="task_val"
            />
          </div>
          <div class="form__line">
            <InputComponent
              class="col"
              label="Контакт для связи"
              :model-value="task_val"
            />
          </div>
          <div class="form__line row">
            <InputComponent
              class="col"
              label="ПРОМОКОД"
              bgColor="grey"
              :model-value="task_val"
            />
            <ButtonComponent class="col-5" label="Заказать"></ButtonComponent>
          </div>
        </div>
      </div>
      <div class="homepage__right-part">
        <img src="src/assets/homepage/man_on_chair.png" class="man-on-chair" />
        <img src="src/assets/homepage/floor_shadow.svg" class="floor-light" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepage {
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;
  .homepage__wrapper {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 12rem 0;

    .homepage__left-part {
      width: min-content;
      margin-right: 8rem;
      .description {
        font-size: 2.4rem;
        line-height: 2.9rem;
        font-weight: 700;
        margin-bottom: 2.2rem;

        width: 175%;
      }
      .form {
        width: 20rem;

        .form__line {
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
      }
    }

    .homepage__right-part {
      position: relative;
      .man-on-chair {
        position: relative;
        z-index: 1;
        aspect-ratio: 753/591.22;
        width: 37.5rem;
      }
      .floor-light {
        position: absolute;
        z-index: 0;
        top: 50%;
        right: -60%;
      }

      img {
        user-select: none;
      }
    }
  }

  .text-bold {
    font-weight: 600;
  }
}
</style>

<style lang="scss">
.homepage {
  .homepage__wrapper {
    .homepage__left-part {
      .clip-button {
        i {
          transform: rotateZ(45deg) !important;
        }
      }
    }
  }
}
</style>
