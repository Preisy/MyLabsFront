<script setup lang='ts'>
import SkillComponent from './SkillComponent.vue';
import cpp from 'assets/ourSkills/c++icon.png';
import cSharp from 'assets/ourSkills/csicon.png';
import c from 'src/assets/ourSkills/cicon.png';
import linux from 'src/assets/ourSkills/linuxicon.png';
import java from 'src/assets/ourSkills/javaicon.png';
import python from 'src/assets/ourSkills/pyhtonicon.png';
import office from 'src/assets/ourSkills/officeicon.png';
import { Skill } from './Skill';

console.log(cSharp);

let skills: (Skill & {
  line?: string
})[] = [
  { x: 2, y: 1, image: cpp, description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 6, y: 2, image: cSharp, line: 'rb', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 10, y: 1, image: c, line: 'rt', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 11, y: 5, image: linux, line: 'br', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 1, y: 7, image: python, line: 'lb', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 5, y: 6, image: java, line: 'bl', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' },
  { x: 9, y: 7, image: office, line: 'rb', description: 'stl, opengl, libcurl, json, googletest, tinyXML2' }
];

</script>

<template>
  <div class='skilltree'>
    <SkillComponent v-for='(skill, i) in skills' :skill='skill' :key='i' :line='skill.line' />
  </div>
</template>

<style scoped lang='scss'>
.skilltree {
  --scale: 3rem;
  display: grid;
  grid-template: repeat(8, var(--scale)) / repeat(13, var(--scale));
}
</style>
