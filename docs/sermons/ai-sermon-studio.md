---
sidebar_position: 6
---

# AI Sermon Studio

AI Sermon Studio turns one sermon recording into a week's worth of ready-to-use content — automatically. One click after you publish and you've got a searchable transcript, a sermon summary, an SEO-friendly blog post draft, a small-group discussion guide, a 5-day devotional, and social media captions, all drawn directly from what was preached.

Everything is editable. Nothing goes anywhere until you're ready. The AI never puts words in the pastor's mouth — it works strictly from the transcript of what was actually said.

:::tip
AI Sermon Studio is rolling out site by site. If you don't see it yet, it's coming to your site soon — no action needed on your end.
:::

---

## What Gets Generated

| Content | What It Is |
|---|---|
| **Transcript** | Full word-for-word text of the sermon, timestamped and searchable |
| **Summary** | A concise paragraph capturing the main message and key points |
| **Blog Post** | A readable, SEO-friendly draft ready to publish on your site |
| **Discussion Guide** | Small-group questions tied to the actual content of the message |
| **5-Day Devotional** | A short daily reading for each day of the week following the sermon |
| **Social Captions** | Three caption options with hashtags, ready to copy and post |

---

## Connecting AI Sermon Studio (One Time)

1. In your WordPress dashboard, go to **Sermons → AI Studio Settings**
2. Find the **Connection** card and click **Connect**

That's it — the connection happens instantly, and you only do this once. After that, AI Sermon Studio is active for every sermon on your site.

:::caution Audio required
AI Sermon Studio works by transcribing your sermon audio. Each sermon needs an audio source — an audio file or podcast feed connected through FaithMade. Sermons with only a YouTube video can't be transcribed yet. If a sermon is missing audio, a warning will appear in AI Studio for that sermon.
:::

---

## Settings

On the **Sermons → AI Studio Settings** page you'll find:

**Auto-generate on publish** — When this is on (the default), publishing any sermon that has audio automatically kicks off content generation in the background. Come back in about five minutes and everything is ready to review.

**Content to generate** — A checklist of which content types you want generated. Uncheck anything you don't need — for example, if your church doesn't have small groups, uncheck Discussion Guide.

**Show transcript on sermon pages** — When enabled, a collapsible "Read the full transcript" section appears on each sermon page. Great for accessibility, helpful for members who prefer reading, and excellent for search engines indexing the full text.

---

## Generating Content for a Sermon

### Option A: Auto-generate (recommended)

With **Auto-generate on publish** turned on, just publish a sermon with audio and walk away. Generation starts immediately and takes about five minutes for a full-length sermon.

### Option B: Generate manually

1. Go to **Sermons → AI Studio**
2. Choose a sermon from the dropdown
3. Click **Generate All**

A progress bar walks through each step. Transcription takes a few minutes; writing the content adds about a minute more.

You can also generate or regenerate individual content types from their own tabs once the initial run is complete.

---

## Reviewing and Editing Content

Each content type has its own tab inside AI Studio. Every tab gives you:

- An **editable text area** where you can adjust wording, add context, or cut anything that doesn't fit
- A **Copy** button to grab the content and paste it anywhere
- A **Save edits** button to keep your changes
- A **Generate / Regenerate** button to run that content type again

### Edit protection

Once you hand-edit and save a piece of content, it's marked **"Edited — protected from regeneration."** The AI will never silently overwrite your work. If you later want to regenerate that section, you'll be asked to confirm before your edits are replaced.

:::tip
Think of AI Sermon Studio as your first draft, not your final word. Read through everything, adjust the voice to match your church's tone, and add any context the AI wouldn't know — then publish with confidence.
:::

---

## The Clips Tab

The **Clips** tab previews an upcoming feature: AI-suggested shareable moments from the sermon with ready-to-use captions. It's coming soon — for now the tab shows sample data so you know what to expect.

---

## Showing AI Content on Your Site

Once you've reviewed and saved content, there are three ways to display it on your sermon pages.

### 1. Sermon AI Content module (recommended)

The **Sermon AI Content** module is available in the Themer Modules group under the Sermons category in Beaver Builder. Drop it into your single-sermon Themer layout and choose which sections to display: summary, discussion guide, devotional, and/or full transcript. You can also show or hide the heading for each section.

On many FaithMade sites this module is already placed in the sermon layout — if you're seeing AI content on sermon pages already, that's why.

### 2. Shortcode

Place `[fm_sermon_ai]` anywhere on a sermon page — in the content editor, a text module, or a custom template. All enabled sections for that sermon will render automatically.

### 3. Automatic (no setup needed)

On sites using a standard (non-Themer) sermon layout, AI content sections are appended after the sermon content automatically when they exist and are enabled in settings.

:::tip
Sections only appear for content that has actually been generated and is enabled in your settings. Nothing shows up blank — if a section isn't ready, it simply doesn't render.
:::

---

## Your Church App

Any AI content you publish — summary, discussion guide, devotional — automatically flows to your church's mobile app sermon screens. Your congregation gets the same rich content whether they're on the website or in the app.

---

## Frequently Asked Questions

**Why don't I see AI Sermon Studio in my dashboard?**
The feature is rolling out gradually. If you don't see it yet, it's coming to your site soon. No action needed.

**Why does a sermon say "no audio source"?**
AI Sermon Studio transcribes audio, so each sermon needs an audio file or podcast feed attached. If a sermon only has a YouTube link, transcription isn't available yet. Add an audio source to that sermon and you're good to go.

**How long does generation take?**
About five minutes for a full-length sermon — a few minutes for transcription, then about a minute for the writing steps. Shorter sermons finish faster.

**Will the AI ever overwrite edits I've made?**
No. Once you save edits to any piece of content, it's protected. The AI won't touch it unless you explicitly choose to regenerate and confirm you want to replace your version.

**Is the content accurate to the sermon?**
AI Sermon Studio is built to stay faithful to the transcript — it won't invent scripture references or add content that wasn't in the message. That said, you're always the editor. Read through each piece before publishing and adjust anything that needs your voice.

**Can I choose which content types get generated?**
Yes. Go to **Sermons → AI Studio Settings** and uncheck anything you don't want. Changes take effect immediately for future generation runs.

**Does the transcript help with SEO?**
Yes. When "Show transcript on sermon pages" is enabled, the full sermon text is on the page and indexable by search engines. Search results can surface your sermons for scripture passages, topics, and exact phrases from the message — that's meaningful reach for your congregation and beyond.

---

**Related:** [Adding a New Sermon](./adding-a-new-sermon) · [Sermon Notes](./sermon-notes) · [Managing Sermon Series](./managing-sermon-series)
