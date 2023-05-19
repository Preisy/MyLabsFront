<script setup lang="ts">
import AReferralElement from './AReferralElement.vue';
import heartImg from 'assets/pop_up/heart.png';
</script>

<template>
  <div class="referral">
    <div class="structure content-wrapper">
      <h1 class="title text-center">{{ $t('components.AReferral.title') }}</h1>
      <div class="content">
        <AReferralElement>
          <p>
            {{ $t('components.AReferral.elements.1.common') }}
          </p>
          <p class="text-weight-bold q-mt-lg">
            {{ $t('components.AReferral.elements.1.bold') }}
          </p>
        </AReferralElement>
        <AReferralElement>
          <p>{{ $t('components.AReferral.elements.2.common') }}</p>
          <p class="text-weight-bold q-mt-lg">
            {{ $t('components.AReferral.elements.2.bold') }}
          </p>
        </AReferralElement>
        <AReferralElement :is-last="true">
          <p>
            {{ $t('components.AReferral.elements.3.common') }}
          </p>
          <ul class="text-weight-bold q-mt-lg numerical-list">
            <li>
              {{ $t('components.AReferral.elements.3.bold.1') }}
            </li>
            <li>
              {{ $t('components.AReferral.elements.3.bold.2') }}
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
.structure {
  padding-bottom: 8rem;
}
.numerical-list {
  list-style: decimal;
  margin-left: 1.1rem;
}
.heart-img {
  width: 10rem;
  margin-top: 3rem;
}
</style>
