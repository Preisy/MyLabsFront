<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="content-wrapper structure text-primary">
      <h1 class="title">
        {{ $t('pages.landing.footerBlock.title') }}
      </h1>
      <div class="details row">
        <div class="contacts column">
          <h2>{{ $t('pages.landing.footerBlock.contacts') }}</h2>
          <a
            href="https://t.me/cockyasfxck"
            target="_blank"
            class="tg link text-primary"
          >
            {{ $t('pages.landing.footerBlock.tg') }}
          </a>
          <a
            href="https://vk.com/cockyasfxck"
            target="_blank"
            class="vk link text-primary"
          >
            {{ $t('pages.landing.footerBlock.vk') }}
          </a>
        </div>
        <div class="info column">
          <h2>{{ $t('pages.landing.footerBlock.information') }}</h2>
          <a href="#" class="about-us link text-primary">
            {{ $t('pages.landing.footerBlock.about') }}
          </a>
          <a href="/referral" class="referral link text-primary">
            {{ $t('pages.landing.footerBlock.referral') }}
          </a>
        </div>
      </div>
      <div class="copyright">
        <h2>© 2022—2023 MyLabs</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: url('assets/digital_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  .content-wrapper {
    margin-top: 8rem;
    margin-bottom: 3.5rem;
    box-sizing: border-box;
    position: relative;

    .title {
      text-align: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 4rem;
    }

    .details {
      justify-content: end;
      .column {
        margin-right: 3.6rem;

        &:last-of-type {
          margin: 0;
        }
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

  @media (max-width: $screen-md-lg) {
    .content-wrapper {
      .title {
        font-size: 1.5rem;
      }
      .details {
        h4 {
          font-size: 1.1rem;
        }

        padding-bottom: 5rem;
        justify-content: center;
      }
    }
  }

  @media (max-width: $screen-sm) {
    .content-wrapper {
      margin-top: 4rem;
      margin-bottom: 2rem;
      overflow: hidden;

      .title {
        line-height: unset;
        margin-bottom: 2rem;
      }

      .details {
        justify-items: unset;
        flex-wrap: nowrap;

        margin-bottom: 4rem;
        .column {
          margin-right: 2rem;
        }
      }
    }
  }
}
</style>
