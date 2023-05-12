<script setup lang="ts"></script>

<template>
  <div class="friend-card bg-primary br-15px">
    <div class="content-wrapper column justify-between">
      <div class="name row items-center no-wrap">
        <div class="profile-img" />
        <h2 class="title">{{ $t('pages.user.referrals.placeholder') }}</h2>
      </div>
      <div class="price-wrapper"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.friend-card {
  box-shadow: 0 0 1rem 0 #00000040;
  padding: 1.5rem;

  .content-wrapper {
    height: 100%;
  }

  .name {
    margin-bottom: 0.8rem;

    .title {
      margin-bottom: 0;
      margin-left: 0.5rem;
      color: #eaeaee;
    }

    .profile-img {
      --size: 3.75rem;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;

      background: #eaeaee;
    }
  }

  .price-wrapper {
    width: 8rem;
    height: 1.5rem;
    border-radius: 16px;
    background: #eaeaee;
  }

  @media (max-width: $screen-md) {
    padding: 1rem;
  }
}
</style>
