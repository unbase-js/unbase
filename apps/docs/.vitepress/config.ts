import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'unBase',
  description: 'The Edge-First TypeScript BaaS',
  
  // Configuration pour GitHub Pages
  base: '/unbase/',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/unbase-js/unbase' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Core API', link: '/api/' },
            { text: 'Configuration', link: '/api/config' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/unbase-js/unbase' }
    ]
  }
})
