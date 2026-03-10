---
sidebar_position: 3
---

# Adding Custom Scripts

Custom scripts let you add third-party code to your Faithmade site. Analytics tools, chat widgets, accessibility plugins, tracking pixels — if someone gave you a code snippet and said "paste this on your website," this is where it goes.

## The Three Injection Points

**Head (before `</head>`)**
For scripts that need to load before the page renders. Most analytics and tracking scripts (Google Analytics, Facebook Pixel, Google Tag Manager).

**Body Top (after `<body>`)**
For scripts that need to load early but after the page starts rendering. Some chat widgets and A/B testing tools.

**Body Bottom (before `</body>`)**
For scripts that can load last. Chat widgets, survey tools, non-critical tracking scripts. Best for site performance.

:::tip
Not sure which to use? **Body Bottom** is usually the safest bet.
:::

## How to Add a Script

1. Go to **Settings** in your Faithmade dashboard
2. Click on **Custom Scripts** (or find it under Integrations)
3. Choose your injection point
4. Paste your script into the text area
5. Click **Save**

Your script is now live on every page. You can add multiple scripts to the same injection point.

## Common Uses

- Accessibility widgets (AccessiBe, UserWay)
- Live chat tools (Tawk.to, Olark)
- Donation platform widgets
- Retargeting pixels

:::caution
Only add scripts from sources you trust. Test after adding — if something breaks, remove it immediately. Every script adds a small amount of load time, so less is more.
:::

**Related:** [Connecting Google Analytics](../integrations/connecting-google-analytics) · [Global SEO Settings](./global-seo-settings)
