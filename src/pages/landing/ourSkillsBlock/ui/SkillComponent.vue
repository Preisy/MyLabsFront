<script setup lang="ts">
import ConnectionLine from 'pages/landing/ourSkillsBlock/ui/connectionLine';
import { Direction, Skill } from './types';

interface SkillComponentProps {
  skill: Skill;
  line?: Direction;
}

const props = defineProps<SkillComponentProps>();
</script>

<template>
  <div
    class="skill"
    :style="{ gridColumnStart: props.skill.x, gridRowStart: props.skill.y }"
  >
    <div class="content">
      <img :src="props.skill.image" alt="" />
      <p class="p">{{ props.skill.description }}</p>
    </div>
    <ConnectionLine
      v-if="props.line"
      class="connection-line"
      :direction="props.line"
    />
  </div>
</template>

<style scoped lang="scss">
@mixin box-shadow($val) {
  -webkit-box-shadow: $val;
  -moz-box-shadow: $val;
  box-shadow: $val;
}

.skill {
  grid-column-end: span 2;
  grid-row-end: span 2;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10rem;
  box-sizing: border-box;
  position: relative;

  .content {
    height: 100%;
    width: 100%;
    background-color: #fff;
    @include box-shadow(0 0 3rem 0 rgba(0, 0, 0, 0.1));
    position: relative;
    padding: 1em;
    border-radius: 10rem;
    text-align: left;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    overflow: hidden;

    img {
      width: calc(var(--skill-size) - 2rem);
      margin-right: 1rem;
      height: 100%;
      transition: all 0.1s ease-in-out;
      user-select: none;
    }
    .p {
      opacity: 0;
      line-height: 1.45rem;
      transition: all 0.05s ease-in-out;
    }
  }

  &:hover .content {
    text-align: left;
    width: 300%;
    z-index: 1;
    margin-left: -2rem;
    overflow: unset;

    @media (max-width: 750px) {
      margin-left: -70%;
      width: 250%;
    }

    img {
      height: 80%;
    }

    .p {
      opacity: 1;
      transition: all 0.15s 0.3s ease-in-out;
    }
  }

  @media (max-width: $screen-md) {
    .content {
      .p {
        font-size: 0.7rem;
        line-height: 0.75rem;
      }
    }
  }
}
</style>
