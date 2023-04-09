<script setup lang="ts">
import UnregisteredLeadForm from 'pages/landing/homePage/ui/UnregisteredLeadForm.vue';
import ATypingText from 'components/ATypingText.vue';
import { useAuthStore } from 'src/stores/AuthStore';
import { onMounted, ref } from 'vue';
import { $api } from 'src/boot/axios';

let a = ref('123');

onMounted(async () => {
  a.value = await $api.get('/users');
  console.log(a.value);
});
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
      <UnregisteredLeadForm
        :class="{ isAuth: useAuthStore().isAuth }"
        class="form-homepage"
      />
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

  .structure {
    padding: 12rem 0;
  }

  .content-wrapper {
    position: relative;

    .description {
      line-height: 2.9rem;
      margin-bottom: 2.2rem;
      border-radius: 2.4rem;
      box-sizing: content-box;

      width: 60%;
    }

    .homepage-img {
      position: absolute;
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

  .isAuth.form-homepage {
    margin-top: 7rem;
  }

  @media (min-width: $screen-xl) {
    .structure {
      padding-bottom: 6rem;
    }
  }

  @media (max-width: $screen-lg) {
    .content-wrapper {
      .description {
        width: 100%;
      }
      .homepage-img {
        bottom: 2rem;

        .man-on-chair {
          width: 32rem;
        }
      }
    }
  }

  @media (max-width: $screen-md-lg) {
    .content-wrapper {
      .homepage-img {
        bottom: 6rem;
        left: 60%;
        .man-on-chair {
          width: 27.5rem;
        }
      }
    }
  }

  @media (max-width: $screen-md) {
    .structure {
      padding: 6rem 0;
    }

    .content-wrapper {
      text-align: center;
      position: unset;

      .homepage-img {
        left: 50%;
        transform: translate(-50%, 50%);
        bottom: -2rem;
      }
      .form-homepage {
        margin-left: auto;
        margin-right: auto;
        margin-top: 5rem;
        margin-bottom: 4rem;
      }
    }
  }

  @media (max-width: $screen-sm) {
    .structure {
      padding: 4rem 0;
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;

      .homepage-img {
        position: relative;
        width: 120%;
        left: -10%;
        right: auto;
        bottom: 0;

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

      .form-homepage {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
    }
  }
}
</style>
