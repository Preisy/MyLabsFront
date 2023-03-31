<script setup lang="ts">
import SkillTreeComponent from './ui/SkillTreeComponent.vue';
import OurSkillsDescription from './ui/OurSkillsDescription.vue';
</script>

<template>
  <div class="our-skills bg-base">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.ourSkillsBlock.title') }}
      </h1>
      <div class="content row justify-between items-center">
        <OurSkillsDescription />
        <div class="skills-diagram">
          <SkillTreeComponent class="skills"></SkillTreeComponent>
          <img class='blue-shadow' src='/src/assets/ourSkills/blue_shadow.svg' alt=''>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-skills {
  background-color: $primary;
  border-radius: 2rem 2rem 0 0;

  position: relative;
  z-index: 1;
  overflow: hidden;

  .skills-diagram {
    position: relative;
    width: min-content;

    .blue-shadow {
      user-select: none;
      position: absolute;
      top: -36%;
      right: -60%;
      z-index: -1;
    }
  }

  .content-wrapper {
    padding-top: 8rem;

    .content {
      display: flex;
      flex-direction: row;
    }

    .title {
      margin-bottom: 3.5rem;
    }

  }

  @media (max-width: 1500px) {
    .skills-diagram {
      flex: 1;
    }
  }

  @media (max-width: 900px) {
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
  .content-wrapper {
    padding-top: 7rem;
    padding-bottom: 1rem;

    .title {
      margin-bottom: 3rem;
    }
  }
}
</style>
