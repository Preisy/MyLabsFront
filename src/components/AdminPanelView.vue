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
<!--      todo: remove before prod build-->
<!--      <transition name="fade">-->
        <RouterView></RouterView>
<!--      </transition>-->

<!--      this way not working correctly-->
<!--        <router-view v-slot="{ Component }">-->
<!--          <transition name="fade">-->
<!--            <component :is="Component" />-->
<!--          </transition>-->
<!--        </router-view>-->
    </main>

  </div>
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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