# Docs Notes Inbox

Working capture file. Claude appends doc-worthy items here during platform work;
ripe items get promoted into real Docusaurus pages and removed. Two buckets:
**[SUPPORT]** = church-facing (publish), **[INTERNAL]** = FaithMade ops (HQ vault/runbook, do not publish).

Format per item: *symptom or question a church would ask → the answer → where it belongs.*

---

## Seeded from the June 10–11 build sessions

### [INTERNAL] Apple agreement renewals can silently kill the pipeline
The Program License Agreement gets reissued periodically (e.g., issued Mar 30 2026,
must accept by Jun 23 2026). If not accepted by the **Account Holder**, Apple suspends
Certificates + ASC + **the ASC API** → every church build/submit breaks at once with
confusing errors. Runbook: when ANY build fails with ASC auth errors, check
developer.apple.com/account for an agreement banner FIRST. Consider a quarterly
calendar check. (Same class of issue: Play Console policy acknowledgments.)

### [INTERNAL] First iOS build auto-provisions everything — expectations
EAS iOS credentials store is empty by design; the build server passes EXPO_ASC_* env
vars so EAS creates dist cert + provisioning profile + APNs push key inside the team
on first build. If a first iOS build fails on credentials, check the ASC key role
(App Manager minimum) and the agreement banner above.

### [INTERNAL] Android push needs per-app Firebase registration
Expo Push on Android requires google-services.json per package name + FCM service
account in EAS. Not wired yet — apps build and run fine, push silently no-ops on
Android until this is provisioned (iOS unaffected). Automate later via Firebase
Management API on the build server.

### [INTERNAL] Play first release is manual, forever
Google has no API for first-time app creation/publishing: create app record, content
questionnaires, upload first AAB by hand (~30–60 min/church, FaithMade does it via
invited access). Subsequent releases automate via the service account.

### [INTERNAL] Dashboard saves send the whole settings object (known issue, queued)
Saving from one tab can clobber settings changed elsewhere after page load (e.g., a
wp-cli change). Fix queued: per-section PUTs. Until then: refresh dashboard before
long editing sessions; don't edit settings simultaneously in two tabs.

### [INTERNAL] Where everything lives (quick reference)
Store account facts: HQ → Faithmade/Product/store-accounts.md. System walkthrough:
app repo docs/HOW-IT-ALL-WORKS.html (+ HQ snapshot). Build server deploys:
faithmade-git tools/build-server/DEPLOY.md. App repo: The-Reach-Co/faithmade-app.

---

## Promoted

- `customizing-wording.md` — "I changed wording but app still says Sermons"; hero message field; preview vs installed-app update timing
- `choosing-your-template.md` — six templates with personality/best-for table; switching never touches content; how to preview
- `store-listing-assets.md` — auto-generated screenshots (store sizes, regenerate after changes); automatic splash; app icon defaults + override; bundle ID is auto-derived and permanent
- `member-accounts.md` — what accounts unlock (saved sermon notes / My Notes); accounts live on church's own site; in-app deletion is real deletion; prayer wall behavior (moderation queue, per-device prayed counts, private requests, rate limit)
- `troubleshooting.md` — "app preview is blank/404" → Permalinks save; "app colors differ from demos" → brand palette inheritance (also added to FAQ)
- Weaved store-listing-assets and bundle-ID pointers into `apple-developer-account.md`, `google-play-setup.md`, `launch-checklist.md`
- Added "Why is my app a different color than the demo screenshots?" entry to `faq.md`
