// Theme entry point
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register all VueNice components globally
    const components = [
      // Add your component imports here
    ]
    
    for (const [name, component] of components) {
      app.component(name, component)
    }
  }
}