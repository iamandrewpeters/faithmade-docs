---
sidebar_position: 3
---

# Enable Push Notifications on iOS

If you want your iOS app to send push notifications — new sermon alerts, event reminders, prayer wall activity — Apple requires a credential called an **APNs key** from your Apple Developer account. It takes about 3 minutes.

:::tip This is separate from your App Store Connect API key
You already generated an API key in [Apple Developer Account Setup](./apple-developer-account#step-5-generate-an-app-store-connect-api-key) so FaithMade can submit builds. The APNs key below is a different credential, just for push notifications. You need both.
:::

## Step 1: Create the APNs Key

1. Go to [developer.apple.com](https://developer.apple.com) and sign in with your church's Apple Developer account
2. Navigate to **Account → Certificates, Identifiers & Profiles**
3. In the left sidebar, click **Keys**
4. Click the **+** button to register a new key
5. Give it a name — something like **"FaithMade Push"**
6. Check the box for **Apple Push Notifications service (APNs)**
7. Click **Continue**, then **Register**

## Step 2: Download the Key

Apple will show you a confirmation page with a **Download** button and a **Key ID** — a 10-character code shown right on the page.

1. **Download the .p8 file now** — note where it saves
2. Copy down the **Key ID** shown on the page

:::caution Download the .p8 file immediately
Apple only lets you download this file once. If you leave the page without downloading it, that key is gone for good and you'll need to register a new one from scratch. Don't skip this step or wait until later.
:::

## Step 3: Add the Key to Your FaithMade Dashboard

1. In your FaithMade Dashboard, go to **Apps → Launch**
2. Find the **Apple credentials** section
3. Paste the 10-character code into **APNs Push Key ID**
4. Open the `.p8` file you downloaded in a text editor, copy its contents, and paste them into **APNs Push Key**
5. Click **Save**

## What Happens Next

Your push key is encrypted at rest and is never shown again after saving — not even to you. That's expected; it's the same one-time-download behavior Apple itself uses.

If you ever lose access to the key (for example, the `.p8` file is deleted before it's saved to the dashboard), go back to **Certificates, Identifiers & Profiles → Keys** in your Apple Developer account, revoke the old key, and create a new one following the steps above.

**Related:** [Apple Developer Account Setup](./apple-developer-account) · [Google Play Setup](./google-play-setup) · [Launch Checklist & Timeline](./launch-checklist)
