import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FaithMade Help Center',
  tagline: 'Everything you need to build your church website.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://support.faithmade.com',
  baseUrl: '/',

  organizationName: 'iamandrewpeters',
  projectName: 'faithmade-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/iamandrewpeters/faithmade-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/faithmade-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FaithMade Help',
      logo: {
        alt: 'FaithMade Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://faithmade.com',
          label: 'Back to FaithMade',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Help',
          items: [
            {label: 'Getting Started', to: '/getting-started/'},
            {label: 'Website Builder', to: '/website-builder/'},
            {label: 'Troubleshooting', to: '/troubleshooting/'},
          ],
        },
        {
          title: 'FaithMade',
          items: [
            {label: 'faithmade.com', href: 'https://faithmade.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} FaithMade. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
