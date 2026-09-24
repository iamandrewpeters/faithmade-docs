import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FaithMade Help Center',
  tagline: 'Everything you need to build your church website.',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://help.faithmade.com',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'iamandrewpeters',
  projectName: 'faithmade-docs',

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        searchBarPosition: 'right',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  // The helpdesk widget, on every KB page. Same origin now that the KB and the
  // portal share help.faithmade.com, so no CORS involved.
  scripts: [
    { src: '/widget.js', async: true, defer: true, 'data-brand': 'faithmade' },
  ],

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
        src: 'img/logo.png',
        style: {height: '32px', width: 'auto'},
      },
      items: [
        {
          // Same host, same tab. An absolute URL made Docusaurus treat this as
          // an external link: new tab plus the external-link icon. `to` and a
          // relative `href` both fail the broken-link check, because /portal is
          // served by the helpdesk app, not by Docusaurus. `pathname://` is
          // Docusaurus's own escape hatch for "a path on this host I do not own".
          href: 'pathname:///portal',
          target: '_self',
          // Docusaurus still draws its external-link icon on any `href` item,
          // labelled "(opens in new tab)", which is false here. Hidden in
          // custom.css; display:none also drops the false label for readers.
          className: 'portal-link',
          label: 'My requests',
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
            {label: 'Getting Started', to: '/getting-started/your-faithmade-dashboard'},
            {label: 'Page Builder', to: '/page-builder/understanding-your-site-pages'},
            {label: 'Sermons', to: '/sermons/adding-a-new-sermon'},
            {label: 'Integrations', to: '/integrations/connecting-planning-center'},
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
