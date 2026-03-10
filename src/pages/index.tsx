import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Launch your church website, connect your domain, and set up your account.',
    link: '/getting-started/',
  },
  {
    icon: '💳',
    title: 'Account & Billing',
    description: 'Manage your subscription, update payment info, and understand your plan.',
    link: '/account-billing/',
  },
  {
    icon: '🏗️',
    title: 'Website Builder',
    description: 'Build and edit pages, add content blocks, and manage your site structure.',
    link: '/website-builder/',
  },
  {
    icon: '🎨',
    title: 'Design & Themes',
    description: 'Customize colors, fonts, layouts, and your church site\'s overall look.',
    link: '/design-themes/',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description: 'Connect Planning Center, streaming platforms, and other ministry tools.',
    link: '/integrations/',
  },
  {
    icon: '🔧',
    title: 'Troubleshooting',
    description: 'Fix common issues, clear errors, and get your site back on track.',
    link: '/troubleshooting/',
  },
  {
    icon: '✅',
    title: 'Best Practices',
    description: 'Tips and recommendations for getting the most out of FaithMade.',
    link: '/best-practices/',
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
                // Trigger Docusaurus search if available
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
