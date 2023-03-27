<script setup lang="ts">
import ButtonComponent from 'components/ABtn.vue';
import SkillTreeComponent from 'src/components/SkillTreeComponent.vue';
</script>

<template>
  <div class="our-skills bg-base">
    <div class="content-wrapper structure">
      <h1 class="title text-center">
        {{ $t('pages.landing.ourSkillsBlock.title') }}
      </h1>
      <div class="content row justify-between items-center">
        <div class="description col-3">
          <p class="description-details">
            {{ $t('pages.landing.ourSkillsBlock.details') }}
          </p>
          <ButtonComponent
            class="q-px-xl q-py-sm"
            :label="$t('pages.landing.ourSkillsBlock.contacts-btn')"
          ></ButtonComponent>
        </div>
        <div class="skills-diagram">
          <SkillTreeComponent></SkillTreeComponent>
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

  .content-wrapper {
    padding-top: 8rem;

    .title {
      margin-bottom: 3.5rem;
    }

    .description {
      .description-details {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
