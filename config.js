// config for all the things

const docsSections = [
  {
    id: 'tutorials',
    text: 'Tutorials',
    link: '/docs/tutorials',
    subtitle: 'Learn how Qri Works',
    description: 'Welcome!  These tutorials are aimed at beginners and will break things down so you can get started quickly.',
    colorClass: 'text-qriorange-600'
  },
  {
    id: 'guides',
    text: 'Guides',
    link: '/docs/guides',
    subtitle: 'Learn how to do things in Qri',
    description: 'These step-by-step guides will help you perform specific tasks. Refer to them when you need to do one thing well.',
    colorClass: 'text-qripink-600'
  },
  {
    id: 'concepts',
    text: 'Concepts',
    link: '/docs/concepts',
    subtitle: 'Dive Deeper into Qri',
    description: 'These docs will help explain Qri\'s core concepts and underlying technology',
    colorClass: 'text-qrigreen-600'
  },
  {
    id: 'reference',
    text: 'Reference',
    link: '/docs/reference',
    subtitle: 'Get the specs',
    description: 'These technical reference docs will help you use Qri\'s APIs and write custom data transform scripts',
    colorClass: 'text-qrinavy-300'
  },
  {
    id: 'transform-snippets',
    text: 'Transform Snippets',
    link: '/docs/transform-snippets',
    subtitle: 'Automate your Datasets',
    description: 'These snippets of Starlark Code can help you learn the syntax and quickly use common patterns in your Qri workflows',
    colorClass: 'text-qrinavy-300'
  }
]

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://qri.io',
    gaTrackingId: null
  },
  header: {
    mainLinks: [
      {
        text: 'Datasets',
        link: 'https://qri.cloud'
      },
      {
        text: 'Documentation',
        link: '/docs'
      },
      {
        text: 'Blog',
        link: 'https://medium.com/qri-io'
      },
      {
        text: 'Jobs',
        link: 'https://jobs.lever.co/Qri'
      },
      {
        text: 'FAQ',
        link: '/docs/faq'
      }
    ],
    docsLinks: [
      ...docsSections.map((d) => ({
        text: d.text,
        link: d.link,
        colorClass: d.colorClass
      })),
      {
        text: 'FAQ',
        link: '/docs/faq'
      }
    ]
  },
  sidebar: {
    // modified from original config, this is now only for ordering top-level groups
    forcedNavOrder: [
      'getting-started',
      'dataset-components',
      'working-with-datasets',
      'integrating-qri',
      'reference'
    ],
    links: [
      // { "text": "", "link": ""},
    ],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'Qri.io',
    description: 'Qri Website and Documentation',
    ogImage: null,
    docsLocation: 'https://github.com/qri-io/website/blob/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  docsSections
}

module.exports = config
