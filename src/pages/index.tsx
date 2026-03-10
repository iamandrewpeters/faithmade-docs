import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Set up your account, pick a starter site, and get your church website live.',
    link: '/getting-started/your-faithmade-dashboard',
  },
  {
    icon: '📝',
    title: 'Content Management',
    description: 'Manage your staff page, blog posts, and site-wide announcements.',
    link: '/content-management/managing-your-staff-page',
  },
  {
    icon: '📅',
    title: 'Events',
    description: 'Create events, manage registration, set locations, and handle recurring events.',
    link: '/events/adding-a-new-event',
  },
  {
    icon: '🎙️',
    title: 'Sermons',
    description: 'Add sermons, manage series, import your library, and add sermon notes.',
    link: '/sermons/adding-a-new-sermon',
  },
  {
    icon: '👥',
    title: 'Groups',
    description: 'Set up small groups, assign leaders, manage locations, and share guides.',
    link: '/groups/adding-a-new-group',
  },
  {
    icon: '🤝',
    title: 'Connect Points',
    description: 'Build connect flows and info cards that guide visitors to take next steps.',
    link: '/connect-points/setting-up-connect-flows',
  },
  {
    icon: '🏗️',
    title: 'Page Builder',
    description: 'Build and edit pages with the drag-and-drop page builder.',
    link: '/page-builder/understanding-your-site-pages',
  },
  {
    icon: '🎨',
    title: 'Design',
    description: 'Customize colors, fonts, logo, header, and footer in the Customizer.',
    link: '/design/customizing-your-sites-look',
  },
  {
    icon: '🔍',
    title: 'SEO',
    description: 'Configure global SEO settings, per-page fields, and custom scripts.',
    link: '/seo/global-seo-settings',
  },
  {
    icon: '🛠️',
    title: 'Tools',
    description: 'Work with forms, resources, and other built-in site tools.',
    link: '/tools/editing-a-form',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description: 'Connect Planning Center, Google Analytics, YouTube, and more.',
    link: '/integrations/connecting-planning-center',
  },
];

export default function Home() {
  return (
    <Layout title="Help Center" description="Find answers and guides for your FaithMade church website.">
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>How can we help?</h1>
          <p className={styles.heroSubtitle}>
            Search our help center or browse topics below.
          </p>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search for answers..."
              onFocus={(e) => {
                const btn = document.querySelector('.DocSearch-Button') as HTMLElement;
                if (btn) { e.currentTarget.blur(); btn.click(); }
              }}
            />
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.title} to={cat.link} className={styles.card}>
              <span className={styles.cardIcon}>{cat.icon}</span>
              <h2 className={styles.cardTitle}>{cat.title}</h2>
              <p className={styles.cardDesc}>{cat.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
