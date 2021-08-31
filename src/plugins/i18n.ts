import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import sp from '../locales/sp.json'
import kr from '../locales/kr.json'
import fr from '../locales/fr.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    kr,
    fr,
    sp,
  },
})
