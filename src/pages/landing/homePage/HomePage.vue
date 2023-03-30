<script setup lang="ts">
import UnregisteredLeadForm from 'pages/landing/homePage/ui/UnregisteredLeadForm.vue';
import ATypingText from 'components/ATypingText.vue';
</script>

<template>
  <div class="homepage">
    <div class="structure content-wrapper">
      <h1 class="description">
        <ATypingText :text='$t("pages.landing.homePage.title")' />
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
      line-height: 2.9rem;
      margin-bottom: 2.2rem;
      border-radius: 2.4rem;
      box-sizing: content-box;

      width: 60%;
    }

    .homepage-img {
      position: absolute;
      top: 0;
      right: 6rem;
      .man-on-chair {
        position: relative;
        z-index: -1;
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

  @media (max-width: $screen-sm) {
    .content-wrapper {
      margin: 1.5rem auto;
      .homepage-img {
        position: relative;
        width: 120%;
        top: unset;
        left: -10%;
        right: auto;

        img {
          width: 100% !important;
        }
      }

      .description {
        line-height: 1.5rem;
        width: 100%;
        padding: 0;
      }
    }
  }
}
</style>
