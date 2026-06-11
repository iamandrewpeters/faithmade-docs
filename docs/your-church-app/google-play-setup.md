---
sidebar_position: 3
---

# Google Play Setup

The Google Play side is straightforward compared to Apple. Account approval happens the same day, there's a one-time $25 fee, and your app can be live within the same week you start.

## Step 1: Create a Google Play Developer Account

1. Go to [play.google.com/console](https://play.google.com/console)
2. Sign in with a Google account — use a church-owned Google account, not a personal one
3. Click **Create account** and follow the prompts
4. Pay the one-time **$25 registration fee** (this is a one-time cost, not annual)
5. Fill in your developer profile using your church's legal name and real contact info
6. Account review is typically completed the same day

:::tip Use a church-owned Google account
Create a dedicated Google account for your church (like `apps@yourchurch.org`) if you don't already have one. Tying your Play developer account to a personal Gmail means access headaches down the road.
:::

## Step 2: Invite FaithMade in Play Console

Once your account is active:

1. In Google Play Console, go to **Users & Permissions**
2. Click **Invite new users**
3. Enter the FaithMade team email address *(check your FaithMade dashboard or contact support for the current address)*
4. Under **Account permissions**, select **Admin** — or under **App permissions**, add your app and set the role to **Release manager**
5. Send the invite

FaithMade will accept and can begin building your app.

## Step 3: Generate a Service Account Key

Google Play uses a service account for automated build submissions. This is a one-time setup.

1. Go to **Setup → API access** in Play Console
2. Click **Create new service account** (or link an existing Google Cloud project if you have one)
3. Follow the link to **Google Cloud Console**
4. Create a new service account, give it a name like "FaithMade Build Service"
5. Grant it the **Service Account User** role
6. Under **Keys**, click **Add Key → Create new key**
7. Choose **JSON** format and click **Create** — a `.json` file downloads automatically
8. Back in Play Console, grant the service account **Release manager** access (or the level your FaithMade onboarding instructions specify)
9. In your FaithMade Dashboard, go to **FaithMade App → Launch**
10. Upload the JSON key file

:::caution Keep the JSON key file secure
This key file gives programmatic access to your Play Console. Don't email it or store it in a shared Google Drive folder. Upload it directly to the FaithMade dashboard and then store a backup somewhere only your team can access.
:::

## What Happens Next

FaithMade will use the service account to submit and update your Android app. Your church's name appears as the developer on the Play Store listing. Ratings, reviews, and your listing are yours.

**Related:** [Overview](./overview) · [Apple Developer Account Setup](./apple-developer-account) · [Launch Checklist & Timeline](./launch-checklist)
