<script setup lang='ts'>
import AInput from 'components/AInput.vue';
import { ref } from 'vue';
import ABtn from 'components/ABtn.vue';
const task_val = ref('');

</script>

<template>
  <div class="form">
    <div class="form__line row">
      <a-input
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
      <a-input
        class="col"
        label="Язык программирования"
        :model-value="task_val"
      />
      <a-input
        class="col-4"
        label="Дедлайн"
        :model-value="task_val"
      />
    </div>
    <div class="form__line">
      <a-input
        class="col"
        label="Ваше имя"
        :model-value="task_val"
      />
    </div>
    <div class="form__line">
      <a-input
        class="col"
        label="Электронная почта"
        :model-value="task_val"
      />
    </div>
    <div class="form__line">
      <a-input
        class="col"
        label="Контакт для связи"
        :model-value="task_val"
      />
    </div>
    <div class="form__line row">
      <a-input
        class="col"
        label="ПРОМОКОД"
        bgColor="grey"
        :model-value="task_val"
      />
      <a-btn class="col-5" label="Заказать"></a-btn>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.form {
  width: 20rem;

  .form__line {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
}
</style>
