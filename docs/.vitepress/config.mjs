import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VueNice Components',
  description: 'Documentation for all VueNice components',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Table', link: '/components/table' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Autocomplete', link: '/components/autocomplete' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Debug', link: '/components/debug' },
          { text: 'Loader', link: '/components/loader' },
          { text: 'Logs', link: '/components/logs' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Sidebar', link: '/components/sidebar' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Validate', link: '/components/validate' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuenice/vue-nice-components' }
    ]
  }
})