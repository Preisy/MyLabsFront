<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="content-wrapper structure text-primary">
      <h1 class="title">
        {{ $t('pages.landing.footerBlock.title') }}
      </h1>
      <div class="details row">
        <div class="contacts column">
          <h4>{{ $t('pages.landing.footerBlock.contacts') }}</h4>
          <a href="#" class="tg link text-primary">
            {{ $t('pages.landing.footerBlock.tg') }}
          </a>
          <a href="#" class="vk link text-primary">
            {{ $t('pages.landing.footerBlock.vk') }}
          </a>
        </div>
        <div class="info column">
          <h4>{{ $t('pages.landing.footerBlock.information') }}</h4>
          <a href="#" class="about-us link text-primary">
            {{ $t('pages.landing.footerBlock.about') }}
          </a>
          <a href="#" class="referral link text-primary">
            {{ $t('pages.landing.footerBlock.referral') }}
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
