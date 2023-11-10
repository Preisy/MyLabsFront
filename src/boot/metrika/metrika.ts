/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { boot } from 'quasar/wrappers';
import { VueYandexMetrika } from 'vue-yandex-metrika';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  app.use(VueYandexMetrika, {
    id: 95517633,
    router: router,
    env: process.env.NODE_ENV,
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      ecommerce: 'Baza'
    }
  });
});
