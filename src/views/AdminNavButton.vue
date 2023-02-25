<script setup lang="ts">
// export default {
//   name: "AdminNavButton"
// }
defineProps<{
  text: string
}>()
</script>

<template>
  <div>
    <span>{{ text }}</span>
  </div>
</template>


<style scoped>
div {
  padding: 0.7rem 1.5rem;
  background-color: var(--green-color);
  outline: 0 solid transparent;
  border-radius: 50px;
  color: var(--white-color);
  /*display: inline-block;*/
  white-space: nowrap;
  width: min-content;

  margin-bottom: 1.5rem;
  transition: all 0.15s ease-in-out;
}

div:hover {
  background-color: var(--white-color);
  color: var(--green-color);
  outline: 4px solid var(--green-color);
}

</style>