<script setup lang='ts'>
import UnregisteredLeadForm from 'pages/landing/homePage/ui/UnregisteredLeadForm.vue';</script>

<template>
  <div class='homepage bg-base'>
    <div class='homepage__wrapper structure'>
      <div class='homepage__left-part'>
        <h2 class='description'>
          {{ $t('pages.landing.homePage.h1') }}
        </h2>
        <UnregisteredLeadForm />
      </div>
      <div class='homepage__right-part'>
        <img src='src/assets/homepage/man_on_chair.png' class='man-on-chair' alt='' />
        <img src='src/assets/homepage/floor_shadow.svg' class='floor-light' alt='' />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.homepage {
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;

  position: relative;
  z-index: 1;

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
