import { boot } from 'quasar/wrappers';
import VueLodash from 'vue-lodash'

export default boot(({ app }) => {

  // Set i18n instance on app
  app.use(VueLodash);
});
