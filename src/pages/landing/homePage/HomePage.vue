<script setup lang="ts">
import UnregisteredLeadForm from 'pages/landing/homePage/ui/UnregisteredLeadForm.vue';
</script>

<template>
  <div class="homepage">
    <div class="structure content-wrapper">
      <h1 class="description">
        {{ $t('pages.landing.homePage.title') }}
      </h1>
      <UnregisteredLeadForm />
      <div class="homepage-img">
        <img
          src="src/assets/homepage/man_on_chair.png"
          class="man-on-chair"
          alt=""
        />
        <img
          src="src/assets/homepage/floor_shadow.svg"
          class="floor-light"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepage {
  background: $primary;
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;

  position: relative;
  z-index: 1;

  .content-wrapper {
    position: relative;
    margin: 12rem auto;
    padding: 0;

    .description {
      font-size: 2.4rem;
      line-height: 2.9rem;
      font-weight: 700;
      margin-bottom: 2.2rem;

      width: 60%;
    }

    .homepage-img {
      position: absolute;
      top: 0;
      right: 6rem;
      .man-on-chair {
        position: relative;
        z-index: 1;
        aspect-ratio: 753/591.22;
        width: 37.5rem;
      }

      .floor-light {
        position: absolute;
        z-index: -1;
        top: 50%;
        right: -60%;
      }

      img {
        user-select: none;
      }
    }
  }
}

.text-bold {
  font-weight: 600;
}
</style>
