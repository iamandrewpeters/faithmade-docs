---
sidebar_position: 6
---

# Store Listing Assets

Screenshots, the splash screen, and your app icon are all handled for you. Here's how each one works so you know what to expect when it's time to submit.

## Screenshots — Automatic, at Exact Store Sizes

Both the App Store and Google Play require screenshots at specific pixel dimensions. FaithMade generates these automatically from your live app.

To generate or refresh your screenshots:

1. Go to **Church App → Launch → Screenshots & Assets**
2. Click **Generate Screenshots**
3. FaithMade renders your app with your real content at the required sizes

**Current sizes generated:**
- App Store: 6.7" display (iPhone Pro Max — required by Apple)
- Google Play: standard phone screenshot set

Regenerate your screenshots any time after:
- Switching to a new template
- Updating your hero message or wording
- Adding new content you want featured
- Changing your brand colors

:::tip Before submitting, regenerate
If any visual change has happened since your last screenshot set, regenerate before you submit to the stores. Stale screenshots can make your listing look different from the actual app.
:::

## Splash Screen — Automatic

The splash screen (the branded screen members see while the app loads) is generated automatically at build time using your brand color and app icon. There's nothing to configure — FaithMade handles it.

## App Icon

The app icon defaults to your WordPress **Site Icon** (set in **Appearance → Customize → Site Identity → Site Icon**). If your Site Icon is already set and looks good at small sizes, you're done.

If you want a different icon specifically for the app — or if your Site Icon is a full logo that doesn't read well as a small square — you can upload a custom app icon in **Church App → Settings**.

**Icon requirements:**
- Square image (1:1 ratio)
- At least 1024×1024 px recommended
- Should be legible as a small square — no fine text, no complex detail
- Transparent background not supported by Apple; use a solid background

:::caution Simple icons work best
The App Store and Google Play both display your icon at small sizes alongside hundreds of other apps. A simple shape or letter mark almost always outperforms a full logo. When in doubt, zoom your mockup out to 60px and see if it still reads clearly.
:::

## Your Bundle ID

Your app's bundle identifier — the unique technical name Apple and Google use to track your app in their systems — is set automatically from your church's website address. It follows the format `com.faithmade.yourdomain` and is assigned the first time your app is built.

**The bundle ID is permanent.** Once your app is live on the App Store or Google Play, Apple and Google tie your listing to this ID forever. It cannot be changed without creating a brand-new listing (which would lose all your ratings and reviews). FaithMade handles this automatically so you never have to think about it.

You can see your bundle ID in **Church App → Launch** — it's displayed as a reference in case Apple or Google asks for it during account setup.

**Related:** [Apple Developer Account Setup — API Key](./apple-developer-account#step-5-generate-an-app-store-connect-api-key) · [Google Play Setup — Service Account Key](./google-play-setup#step-3-generate-a-service-account-key) · [Launch Checklist & Timeline](./launch-checklist)
