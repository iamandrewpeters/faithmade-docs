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
calendar check. (Same class of issue: Play Console policy acknowledgments.) STATUS: the Jun 23 2026 deadline was cleared — accepted 2026-06-11.

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

### [INTERNAL] AI Sermon Studio launch gates (from July 1 post-hoc review)
Three deployment gates, in order: (1) broker must serve `ai_provision_key` — until
then no tenant can /connect and the whole pipeline is inert (bootstrap.php:56 is the
launch switch); (2) CF account needs Containers entitlement or the render container
blocks deploying the ENTIRE worker — consider splitting render into its own Worker;
(3) fresh deploys need Worker secrets KEY_ENCRYPTION_KEY + PLATFORM_PROVISION_KEY or
/connect + /key return 503 (README omits them). Behavioral bugs queued: auto-publish
silently skips clips (AutoTrigger.php:57); r2:// audio path unresolvable by ffmpeg
(render.ts:87, masked because WP always sends public URLs); whisper multi-chunk
timestamps collapse if a chunk reports duration 0. Public clip GET is enumerable by
URL guess + unthrottled — acceptable for public clips, know what it is.

### [INTERNAL] Tenant→build-server traffic bypasses Cloudflare via origin pin (July 1)
CF Bot Fight Mode challenges datacenter-IP POSTs, breaking every tenant's build
requests with an HTML "Just a moment" page (WP sees 403, build server logs show
nothing — that silence is the tell). Fix in place: tenant servers pin
`build.faithmade.app` to 178.156.232.23 in /etc/hosts, and faithmade-app trusts
Cloudflare's public Origin-CA roots via `Faithmade_App_Build_CA::bundle_path()`
(origin nginx serves a CF Origin Certificate). Traffic stays TLS + HMAC. NEW MT
SERVER RUNBOOK STEP: add the /etc/hosts line. Also: the CF dashboard SPA
boot-loops in automated Chrome (no console errors) — use the session API
(dash.cloudflare.com/api/v4/*) for reads; mutations need the real dash.

### [INTERNAL] HMAC byte-parity: ALWAYS JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
Second time this class of bug has bitten (WorkerClient learned it in June; the
build relay re-learned it July 1). PHP escapes unicode by default (\u2014) while
JS JSON.stringify re-emits literal chars — any em-dash/smart-quote in church
content (the DEFAULT app description contains one!) breaks the signature with a
confusing 401. Rule: every wp_json_encode that feeds an HMAC shared with Node
gets BOTH flags. Candidate for a shared Faithmade_Signing helper.

### [INTERNAL] Build-server GitHub access is a read-only deploy key now (July 1)
The old fine-grained PAT was scoped to the retired `faithmade-app-mobile` repo
and 403'd on the consolidated `The-Reach-Co/faithmade-app` — the first Zoe
canary build died at clone. Both clone sites use
`git@github.com:The-Reach-Co/faithmade-app.git` with the deploy key at
`~/.ssh/faithmade_app_deploy` (GitHub key id 156121846, read-only). Rotation
recipe is in tools/build-server/DEPLOY.md.

### [INTERNAL] .easignore ≠ .gitignore — the archive EAS builds is filtered separately (July 1)
Three Android builds died at Metro's EAGER_BUNDLE with "Unable to resolve
./home/index" while every file was tracked and pushed. Cause: a stale
`.easignore` line (`src/screens/home/` — from the "placeholder templates" era)
silently dropped the whole template directory from the EAS upload. Lesson:
when EAS can't resolve a module that exists in git, check `.easignore` FIRST.

### [INTERNAL] iOS store builds: non-interactive EAS can never CREATE credentials (July 1)
`eas build --non-interactive` only reuses credentials already on Expo's
servers (literal `// TODO: implement validation` in eas-cli). Each new
house-account bundle id needs a one-time credential mint, and push capability
must be enabled on the bundle id BEFORE the profile is created or Xcode fails
with "profile doesn't support Push Notifications". Full runbook (ASC API
capability enable + scripted `eas credentials`) lives in
tools/build-server/DEPLOY.md. Still user-gated: APNs push KEY creation
requires Apple-ID login + 2FA (ASC API keys are rejected for that operation),
and Android push needs a Firebase project (google-services.json +
FCM v1 service key on EAS) that doesn't exist yet.

### [INTERNAL] HMAC parity, third strike: sign and verify the SAME object shape (July 2)
Build-webhook 401'd forever because Node signed `{build_id, status, downloads,
timestamp}` while PHP recomputed over `{build_id, status, timestamp}` — a
structural mismatch no encoding flag can fix. Also: an empty `downloads` must
re-encode as `{}` (stdClass) not `[]`. Fixed in faithmade-app 1.0.15. The
Faithmade_Signing helper idea grows stronger — one shared canonical-payload
builder on each side, never hand-listed keys.

---

## Promoted

- `customizing-wording.md` — "I changed wording but app still says Sermons"; hero message field; preview vs installed-app update timing
- `choosing-your-template.md` — six templates with personality/best-for table; switching never touches content; how to preview
- `store-listing-assets.md` — auto-generated screenshots (store sizes, regenerate after changes); automatic splash; app icon defaults + override; bundle ID is auto-derived and permanent
- `member-accounts.md` — what accounts unlock (saved sermon notes / My Notes); accounts live on church's own site; in-app deletion is real deletion; prayer wall behavior (moderation queue, per-device prayed counts, private requests, rate limit)
- `troubleshooting.md` — "app preview is blank/404" → Permalinks save; "app colors differ from demos" → brand palette inheritance (also added to FAQ)
- Weaved store-listing-assets and bundle-ID pointers into `apple-developer-account.md`, `google-play-setup.md`, `launch-checklist.md`
- Added "Why is my app a different color than the demo screenshots?" entry to `faq.md`
- `apple-push-key.md` — new page: generating an APNs push key (Certificates, Identifiers & Profiles → Keys) and pasting the Key ID + .p8 contents into Apps → Launch
- Added "Create your app listing in App Store Connect" section to `apple-developer-account.md` — one-time manual app-listing creation Apple requires before TestFlight
- Added "Your first Android release (one-time manual upload)" section to `google-play-setup.md` — self-serve walkthrough for churches who upload their own first .aab instead of granting FaithMade Admin access
