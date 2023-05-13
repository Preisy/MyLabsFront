import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { mergeI18n } from './merge';

import { useLocaleStore } from 'boot/i18n/useLocaleStore';

import { THomePageI18n } from 'pages/landing/homePage';
import { TCounterBlockI18n } from 'pages/landing/counterBlock';
import { TFooterBlockI18n } from 'src/pages/landing/footer';
import { TReviewsBlockI18n } from 'src/pages/landing/reviewsBlock';
import { TOurSkillsBlockI18n } from 'src/pages/landing/ourSkillsBlock';
import { TExamplesBlockI18n } from 'src/pages/landing/examplesBlock';
import { TFaqBlockI18n } from 'src/pages/landing/faqBlock';
import { THeaderI18n } from 'src/pages/landing/header/i18n';
import { TADynamicFormI18n } from 'src/components/ADynamicForm/i18n';
import { TMainBlockI18n } from 'src/pages/user/main';
import { TUserHeaderI18n } from 'src/pages/user/header';
import { TReferralsUserBlockI18n } from 'src/pages/user/referrals';
import { TSettingsBlockI18n } from 'src/pages/user/settings';
import { TWorkBlockI18n } from 'src/pages/user/work';
import { TReferralBlockI18n } from 'src/pages/landing/referralBlock/i18n';
import { TReferralHeaderI18n } from 'src/pages/referral/header';

export default boot(({ app }) => {
  // Set i18n instance on app

  const localeStore = useLocaleStore();
  const i18n = createI18n({
    locale: localeStore.locale, // todo switch
    legacy: false,
    messages: mergeI18n(
      THomePageI18n,
      TCounterBlockI18n,
      TOurSkillsBlockI18n,
      TExamplesBlockI18n,
      TReviewsBlockI18n,
      TReferralBlockI18n,
      TReferralHeaderI18n,
      TFaqBlockI18n,
      TFooterBlockI18n,
      THeaderI18n,
      TADynamicFormI18n,
      TMainBlockI18n,
      TUserHeaderI18n,
      TReferralsUserBlockI18n,
      TSettingsBlockI18n,
      TWorkBlockI18n
    ),
  });

  app.use(i18n);
});
