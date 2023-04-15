<template>
  <div class="content">
    <img class="icon" src="src/assets/soon.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  user-select: none;

  .icon {
    display: block;
    max-width: 100vw;
    max-height: 100%;
    pointer-events: none;
  }
}
</style>

