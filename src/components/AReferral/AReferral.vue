<script setup lang="ts">
import AReferralElement from './AReferralElement.vue';
import heartImg from 'assets/pop_up/heart.png';
</script>

<template>
  <div class="referral">
    <div class="structure content-wrapper">
      <h1 class="title text-center">Условия реферальной программы:</h1>
      <div class="content">
        <AReferralElement>
          <p>
            Вы можете предоставить свою уникальную ссылку для регистрации
            другому человеку и будете получитать бонусы!
          </p>
          <p class="text-weight-bold q-mt-lg">
            Которыми можете покрыть не более 50% на своих будущих заказов.
          </p>
        </AReferralElement>
        <AReferralElement>
          <p>Бонусные рубли начисляются следующим образом:</p>
          <p class="text-weight-bold q-mt-lg">
            Пригласивший пользователь получает 5% со стоимости первых пяти
            заказов приглашенного им пользователя!
          </p>
        </AReferralElement>
        <AReferralElement :is-last="true">
          <p>
            Бонус для новых пользователей. После регистрации по чьей-то
            реферальной ссылке вы получаете скидку:
          </p>
          <ul class="text-weight-bold q-mt-lg numerical-list">
            <li>
              На свой первый заказ в размере 5% при заказе, стоимость которого
              была оценена до 3000 рублей.
            </li>
            <li>
              Или скидку в 500 рублей при заказе, стоимость которого была
              оценена от 3000 рублей и выше!
            </li>
          </ul>
        </AReferralElement>

        <div class="heart-holder text-center">
          <img class="heart-img" :src="heartImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.numerical-list {
  list-style: decimal;
  margin-left: 1.1rem;
}
.heart-img {
  width: 10rem;
  margin-top: 3rem;
}
</style>
