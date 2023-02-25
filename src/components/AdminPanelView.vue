<script setup lang="ts">
import AdminNavButton from '@/views/AdminNavButton.vue'</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/orders">
        <AdminNavButton text="Orders"></AdminNavButton>
      </RouterLink>
      <RouterLink to="/labs">
        <AdminNavButton text="Labs"></AdminNavButton>
      </RouterLink>

    </nav>

    <main>
      <RouterView></RouterView>
    </main>

  </div>
</template>


<style scoped>
.wrapper {
  display: flex;
}

nav, main {
  height: 100vh;
  box-sizing: border-box;
}

nav {
  padding: 2rem 1rem;
  background-color: var(--green-color);
}

main {
  padding: 2rem;
  width: 100%;
  overflow-y: scroll;
}

</style>