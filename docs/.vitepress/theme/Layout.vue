import DefaultTheme from 'vitepress/theme'
import { enhanceApp } from '/home/kirti/code/vuenice-components/docs/.vitepress/theme/index.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    enhanceApp({ app })
  }
}