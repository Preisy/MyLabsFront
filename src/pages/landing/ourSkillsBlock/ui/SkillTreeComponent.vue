<script setup lang="ts">
import SkillComponent from './SkillComponent.vue';
import { skillsDesktop, skillsMobile } from './skills';
import { onMounted, onUnmounted, Ref, ref } from 'vue';
import { Direction, Skill } from 'pages/landing/ourSkillsBlock/ui/types';

let skills: Ref<
  (Skill & {
    line?: Direction | undefined;
  })[]
> = ref([]);

let choose = () => {
  if (innerWidth > 1500) skills.value = skillsDesktop;
  else skills.value = skillsMobile;
};
choose();
onMounted(() => window.addEventListener('resize', choose));
onUnmounted(() => window.removeEventListener('resize', choose));
</script>

<template>
  <div class="skilltree">
    <SkillComponent
      v-for="(skill, i) in skills"
      :skill="skill"
      :key="i"
      :line="skill.line"
    />
  </div>
</template>

<style scoped lang="scss">
.skilltree {
  margin: 0 auto;
  width: min-content;
  --scale: 3rem;
  display: grid;
  grid-template: repeat(12, var(--scale)) / repeat(12, var(--scale));

  @media (max-width: $screen-lg) {
    grid-template: repeat(15, var(--scale)) / repeat(7, var(--scale));
  }

  @media (max-width: $screen-md) {
    --scale: 2rem;
  }
}
</style>
