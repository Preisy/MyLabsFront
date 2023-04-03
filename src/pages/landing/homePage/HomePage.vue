<script setup lang="ts">
import UnregisteredLeadForm from 'pages/landing/homePage/ui/UnregisteredLeadForm.vue';
import ATypingText from 'components/ATypingText.vue';
</script>

<template>
  <div class="homepage">
    <div class="structure content-wrapper">
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

      <h1 class="description">
        <ATypingText :text="$t('pages.landing.homePage.title')" />
      </h1>
      <UnregisteredLeadForm class="form-homepage" />
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
    margin: 14rem auto 9rem;

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
      left: 50%;
      z-index: -1;
      .man-on-chair {
        position: relative;
        z-index: -1;
        aspect-ratio: 753/591.22;
        width: 37.5rem;
      }

      .floor-light {
        position: absolute;
        bottom: -9rem;
        right: -30%;
        z-index: -2;
      }

      img {
        user-select: none;
      }
    }
  }

  @media (min-width: $screen-xl) {
    .content-wrapper {
      min-width: 70%;
    }
  }

  @media (max-width: $screen-lg) {
    .content-wrapper {
      .description {
        width: 100%;
      }
      .homepage-img {
        top: 8rem;
      }
    }
  }

  @media (max-width: $screen-md-lg) {
    .content-wrapper {
      .homepage-img {
        top: 10rem;
        left: 60%;
        .man-on-chair {
          width: 27.5rem;
        }
      }
    }
  }

  @media (max-width: $screen-md) {
    .content-wrapper {
      text-align: center;
      position: unset;
      margin-top: 6rem;

      .homepage-img {
        top: unset;
        left: 50%;
        transform: translate(-50%, 50%);
        bottom: 0;
      }
      .form-homepage {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      margin: 1.5rem auto;
      display: flex;
      flex-direction: column;

      .homepage-img {
        position: relative;
        width: 120%;
        top: unset;
        left: -10%;
        right: auto;
        margin-top: 2rem;

        transform: unset;

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
