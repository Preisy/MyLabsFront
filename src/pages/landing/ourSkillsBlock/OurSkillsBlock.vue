<script setup lang="ts">
import SkillTreeComponent from './ui/SkillTreeComponent.vue';
import OurSkillsDescription from './ui/OurSkillsDescription.vue';
import floorImg from 'assets/header/floor.svg';
</script>

<template>
  <div id="possibilities" class="our-skills bg-base possibilities-header-link">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.ourSkillsBlock.title') }}
      </h1>
      <div class="content row justify-between items-center">
        <OurSkillsDescription />
        <div class="skills-diagram">
          <SkillTreeComponent class="skills"></SkillTreeComponent>
        </div>
      </div>
    </div>
    <img :src="floorImg" class="floor" alt="" ref="floor" />
  </div>
</template>

<style scoped lang="scss">
.our-skills {
  background-color: $primary;
  border-radius: 2rem 2rem 0 0;

  position: relative;
  z-index: 1;
  overflow: hidden;

  .floor {
    user-select: none;
    position: absolute;
    top: 0;
    right: -5%;
    z-index: -1;
    opacity: 0.5;
  }

  .skills-diagram {
    position: relative;
    width: min-content;
    padding: 2rem;
    .blue-shadow {
      user-select: none;
      position: absolute;
      top: -36%;
      right: -60%;
      z-index: -1;
    }
  }

  .content-wrapper {
    .title {
      margin-bottom: 3rem;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .description {
      .description-details {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (max-width: $screen-lg) {
    .content-wrapper {
      .content {
        justify-content: unset;
      }
    }
    .skills-diagram {
      flex: 1;
    }
  }

  @media (max-width: $screen-md) {
    .content {
      flex-direction: column-reverse !important;
      gap: 4rem;
      align-content: center;
    }
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      padding-top: 1.5rem;
      padding-bottom: 2rem;

      .content {
        flex-direction: column-reverse;
        align-content: center;
      }

      .title {
        margin-bottom: 1.5rem;
      }

      .skills-diagram {
        margin-bottom: 1.5rem;
        .skills {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: $screen-xl) {
    .content-wrapper {
      .content {
        justify-content: center;

        .description {
          margin-right: 3rem;
        }
      }
    }
  }
}
</style>
