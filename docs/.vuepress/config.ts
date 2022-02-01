import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'traP 3DCG体験会',
  description: '新入生向け 東京工業大学デジタル創作同好会traP 3DCG体験会',
  base: '/modeling-trial/',
  head: [['link', { rel: 'icon', href: '/modeling-trial/images/logo/3dcg_logo.ico' }]],

  extendsMarkdown: md => {
    md.use(require("markdown-it-footnote"));
  },

  themeConfig: {
    navbar: [
      {
        text: 'はじめに',
        link: '/guide/'
      },
      {
        text: '座学編',
        link: '/lectures/'
      },
      {
        text: '実習編',
        link: '/practical/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: "はじめに",
          children: ['/guide/README.md', '/guide/notes.md', '/guide/preparation.md', '/guide/blender-installation.md']
        }
      ],
      '/lectures/': [
        {
          text: '座学編',
          children: ['/lectures/README.md', '/lectures/what-can.md', '/lectures/how-to.md', '/lectures/what-used.md']
        }
      ],
      '/practical/': [
        {
          text: '実習編',
          children: ['/practical/README.md', '/practical/basic_operation.md', '/practical/model_creation.md', '/practical/rendering.md',]
        }
      ],
    },
    logo: '/images/logo/3dcg_logo.svg',
  },
  plugins: [
    [
      '@vuepress/container',
      {
        type: 'training',
        locales: {
          '/': {
            defaultInfo: '実習'
          }
        }
      }
    ]
  ]
})