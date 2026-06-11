---
sidebar_position: 2
---

# Apple Developer Account Setup

Your church needs its own Apple Developer account to publish on the App Store. This is a four-part process: DUNS number, enrollment, fee waiver, then granting FaithMade access. The whole thing takes 2–5 weeks, almost entirely because of the DUNS lookup.

:::caution Start this today
The DUNS number step alone can take up to 30 days. Start the moment you decide you want an app — not after everything else is settled.
:::

## Step 1: Get a DUNS Number

A DUNS number is a free business identifier from Dun & Bradstreet. Apple requires it to verify your church is a legitimate organization.

1. Go to [dnb.com/duns-number/get-a-duns-number.html](https://www.dnb.com/duns-number/get-a-duns-number.html)
2. Search for your church first — you may already have one from a bank account or loan application
3. If you don't have one, request it for free
4. Standard turnaround is up to 30 days; expedited processing is available if you're in a hurry

**What to use for your church name:** Use your church's exact legal name — the one on your incorporation or 501(c)(3) documents. Apple will cross-reference this.

:::tip Already have a DUNS number?
Search for your church before requesting a new one. Many churches already have a DUNS from prior business filings. If you find yours, you can skip ahead to Step 2 immediately.
:::

## Step 2: Enroll in Apple Developer Program as an Organization

Once your DUNS number is confirmed:

1. Go to [developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll/)
2. Sign in with an Apple ID — use a church-owned Apple ID, not a personal one
3. Select **Organization** as your enrollment type (not Individual — that won't work for app submissions on behalf of a church)
4. Enter your DUNS number and your church's legal name exactly as registered with D&B
5. Complete the identity verification steps Apple requires
6. Enrollment review typically takes about one week after your DUNS is confirmed

Apple will contact your organization's legal representative during this process. Make sure whoever that is knows it's coming.

## Step 3: Request the Nonprofit Fee Waiver

Apple waives the $99/year Apple Developer Program fee for qualifying nonprofits and government entities.

1. Visit [developer.apple.com/support/membership-fee-waiver](https://developer.apple.com/support/membership-fee-waiver/)
2. Submit your waiver request during enrollment — do this before paying
3. Apple will review your 501(c)(3) status and typically responds within a few weeks

If your waiver isn't approved before the enrollment deadline, you'll need to pay the $99 to keep your account active. You can request a refund afterward if the waiver is approved. Either way, renew the waiver each year.

:::tip $99 is not a lot, but free is better
Most churches qualify. The only way to miss the waiver is to not ask for it. Request it.
:::

## Step 4: Invite FaithMade in App Store Connect

Once your account is active:

1. Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com) and sign in
2. Navigate to **Users and Access**
3. Click the **+** button to invite a new user
4. Enter the FaithMade team email address *(check your FaithMade dashboard or contact support for the current address — TODO: confirm apps@faithmade.com)*
5. Set the role to **App Manager**
6. Send the invite

FaithMade will accept the invitation and gain the access needed to submit your app.

## Step 5: Generate an App Store Connect API Key

This is separate from the user invite — it's the programmatic credential FaithMade uses for automated build submissions.

1. In App Store Connect, go to **Users and Access → Integrations → App Store Connect API**
2. Click **Generate API Key**
3. Name it something like "FaithMade Build Access"
4. Set the access level to **App Manager**
5. Click **Generate**

Apple will show you three things:
- **Key ID** — copy it
- **Issuer ID** — copy it
- **.p8 file** — download it (you can only download this once)

6. In your FaithMade Dashboard, go to **FaithMade App → Launch**
7. Paste in the Key ID, Issuer ID, and upload the .p8 file

:::caution Download the .p8 file immediately
Apple only lets you download the .p8 key file once. If you close the page without downloading it, you'll need to generate a new key. Don't skip this.
:::

## What Happens Next

FaithMade will use your credentials to build and submit your app. You'll still be listed as the publisher in the App Store. Reviews, ratings, and your app listing all belong to your church.

Your app's **bundle ID** (`com.faithmade.yourdomain`) is set automatically from your website address when your first build runs — you don't choose it. See [Store Listing Assets — Your Bundle ID](./store-listing-assets#your-bundle-id) if Apple asks for it during account setup.

**Related:** [Overview](./overview) · [Google Play Setup](./google-play-setup) · [Launch Checklist & Timeline](./launch-checklist) · [Store Listing Assets](./store-listing-assets)
