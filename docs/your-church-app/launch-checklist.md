---
sidebar_position: 4
---

# Launch Checklist & Timeline

Use this as your running checklist. It mirrors the Launch checklist inside your FaithMade dashboard (**FaithMade App → Launch**).

## The Checklist

### Apple App Store

- [ ] **Search for an existing DUNS number** — check before requesting a new one
- [ ] **Request DUNS number** (if you don't have one) — free at dnb.com; up to 30 days
- [ ] **Enroll in Apple Developer Program as an Organization** — [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/) using your church's legal name
- [ ] **Request the nonprofit fee waiver** — [developer.apple.com/support/membership-fee-waiver](https://developer.apple.com/support/membership-fee-waiver/)
- [ ] **Invite FaithMade in App Store Connect** — Users and Access → + → App Manager role
- [ ] **Generate App Store Connect API key** — Users and Access → Integrations → download the .p8 file
- [ ] **Paste Key ID, Issuer ID, and .p8 into FaithMade Dashboard** — FaithMade App → Launch

### Google Play

- [ ] **Create Google Play Developer account** — play.google.com/console — $25 one-time fee
- [ ] **Invite FaithMade in Play Console** — Users & Permissions → invite with Release Manager access
- [ ] **Generate service account key** — Setup → API access → service account → JSON key
- [ ] **Upload JSON key to FaithMade Dashboard** — FaithMade App → Launch

## Timeline Expectations

### If You're Starting from Zero

| Milestone | Estimated Time |
|---|---|
| DUNS number requested | Day 1 |
| DUNS number confirmed | Up to 30 days |
| Apple Developer enrollment submitted | Day after DUNS confirmed |
| Apple enrollment approved | ~1 week after submission |
| Apple app submitted to review | After FaithMade builds |
| Apple app live | 1–3 days after submission (Apple review) |
| **Total Apple timeline** | **2–5 weeks** |

| Milestone | Estimated Time |
|---|---|
| Google Play account created | Day 1 |
| Google Play account approved | Same day |
| Android app live | A few days after credentials shared |
| **Total Android timeline** | **Same week** |

### The Smart Move

Ship your Android app first. Get it live, test the experience, gather feedback — all while your Apple enrollment clears. Don't wait on Google Play just because Apple takes longer.

:::caution The DUNS is the long pole
Everything about the Apple timeline depends on the DUNS lookup. It is the one thing you cannot speed up. Start it the day you sign up with FaithMade.
:::

:::tip Expedited DUNS available
If you're on a tight timeline, Dun & Bradstreet offers expedited DUNS number processing for a fee. Worth it if you have a hard launch date.
:::

## What FaithMade Needs Before Building

Before FaithMade can submit your app, make sure these are in your dashboard:

- App Store Connect API key (Key ID + Issuer ID + .p8 file)
- Google Play service account key (JSON)
- Your app icon and branding assets *(your FaithMade team will confirm what's needed)*
- Content connected and populated in your FaithMade site (sermons, groups, etc.)

**Related:** [Overview](./overview) · [Apple Developer Account Setup](./apple-developer-account) · [Google Play Setup](./google-play-setup) · [FAQ](./faq)
