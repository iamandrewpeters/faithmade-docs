---
sidebar_position: 9
---

# Troubleshooting

Quick fixes for the most common issues churches run into.

## App Preview Is Blank or Shows a 404

**Symptom:** You open the app preview tab in your dashboard and see a blank white page, a 404, or "page not found."

**Fix:** Go to your WordPress admin → **Settings → Permalinks** → click **Save Changes** (you don't need to change anything — just saving flushes the URL rules). Then refresh the preview tab.

**Why it happens:** WordPress uses URL rewriting to serve the `/app` route. Occasionally after a plugin activation or deactivation cycle those rules need to be refreshed. Saving the Permalinks page re-registers them.

:::note Fixed in v1.0.14
This happened automatically before version 1.0.14. If you're on 1.0.14 or later and see it again, the Permalinks save is still the right fix — it's a one-second operation and harmless to do any time.
:::

## App Colors Look Different from the Demo Screenshots

**Symptom:** Your app looks different than the sample screenshots on FaithMade's website or in template previews.

**This is expected behavior, not a bug.** Your app inherits your church's own brand palette from your website design settings. The demo screenshots use sample branding. Different colors mean the system is working correctly — it's pulling your church's identity into the app.

If your colors don't match your website's brand, check your website's design settings (the color variables set in your FaithMade theme or customizer). Updating those will cascade into the app automatically.

See also: [FAQ: Why is my app a different color than the demo screenshots?](./faq#why-is-my-app-a-different-color-than-the-demo-screenshots)

## Wording Changes Aren't Showing in the App

**Symptom:** You updated a tab name or the hero message, saved, but the installed app still shows the old wording.

**Fix:** Close the app fully on your phone (swipe it away from the app switcher) and reopen it. The app fetches its latest configuration on launch — a background session won't pick up changes.

The web preview updates as soon as you save and refresh the preview tab. Installed apps update on the next fresh launch.

## Screenshots Look Outdated in the Store

**Symptom:** Your App Store or Google Play listing shows screenshots that don't match your current app design.

**Fix:** Go to **Church App → Launch → Screenshots & Assets**, regenerate your screenshots, then re-submit to the stores.

Screenshots are generated on demand — they don't update automatically when you change templates or content. Any time you make a visual change, regenerate before your next store submission.

See: [Store Listing Assets](./store-listing-assets)

## I Can't Find My Bundle ID

Your bundle ID is displayed in **Church App → Launch**. It's in the format `com.faithmade.yourdomain` and is generated automatically — you don't set it yourself. See [Store Listing Assets — Your Bundle ID](./store-listing-assets#your-bundle-id) for more.

## Something Else

If you're seeing something not covered here, contact FaithMade support from your dashboard. Include a screenshot if you can — it speeds things up considerably.

**Related:** [FAQ](./faq) · [Launch Checklist & Timeline](./launch-checklist)
