<script setup lang="ts">
const _this = 'pages.landing.footerBlock';
</script>

<template>
  <div class="footer">
    <div class="content-wrapper structure text-primary">
      <h1 class="title">
        {{ $t(`${_this}.title`) }}
      </h1>
      <div class="details row justify-end">
        <div class="contacts column">
          <h4>{{ $t(`${_this}.contacts`) }}</h4>
          <a href="#" class="tg link text-primary">{{ $t(`${_this}.tg`) }}</a>
          <a href="#" class="vk link text-primary">{{ $t(`${_this}.vk`) }}</a>
        </div>
        <div class="info column">
          <h4>{{ $t(`${_this}.information`) }}</h4>
          <a href="#" class="about-us link text-primary">
            {{ $t(`${_this}.about`) }}
          </a>
          <a href="#" class="referral link text-primary">
            {{ $t(`${_this}.referral`) }}
          </a>
        </div>
      </div>
      <div class="copyright">
        <h4>© 2022—2023 MyLabs</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: url('src/assets/digital_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  .content-wrapper {
    margin-top: 8rem;
    margin-bottom: 3.5rem;
    box-sizing: border-box;
    position: relative;

    .title {
      line-height: 3rem;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 4rem;
    }

    .details {
      .column {
        margin-left: 3.6rem;
      }
      .link {
        margin-top: 3.5rem;
        text-decoration: underline;
      }
    }

    .copyright {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
