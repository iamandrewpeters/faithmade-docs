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

  // Brand values are NOT written in this repo. /brand/faithmade.css is served by
  // the helpdesk app on this same host, generated from its brand-tokens.ts, and
  // src/css/custom.css maps Docusaurus's theme onto it. Same file the portal and
  // the widget read, so the KB can never drift to its own green again.
  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Ubuntu:wght@400;500;700&display=swap',
    '/brand/faithmade.css',
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
    // Light only, like the portal: the brand has no dark palette, and a dark KB
    // next to a light portal on one host would read as two sites.
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'FaithMade Help',
      logo: {
        alt: 'FaithMade Logo',
        src: 'img/logo.png',
        style: {height: '28px', width: 'auto'},
      },
      items: [
        {
          // Matches the portal header: Help center, then My requests.
          to: '/',
          label: 'Help center',
          position: 'right',
          activeBaseRegex: '^/(?!portal)',
        },
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
