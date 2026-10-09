# INSTALL — Start Here

Welcome. This is the complete ESP First Five Project — a mobile-friendly website that gamifies your National Conference for members in their first five years.

This one-page guide gets you from "I downloaded a zip" to "I'm looking at the app" in **three steps and about five minutes**. The deeper reading is linked at the end.

---

## What you have

```
first-five-app/
├── INSTALL.md            ← YOU ARE HERE — the quickstart
├── README.md             ← The full builder's guide (deployment + customization)
├── backend/SETUP.md      ← The Google Sheet backend setup (optional, for live mode)
│
└── everything else       ← The actual website files
```

The folder is already a complete, working website. You don't need to install anything, compile anything, or buy anything.

---

## Step 1 — See it work on your own computer (2 minutes)

You just need to serve the files through a tiny web server. Double-clicking `index.html` works for the look, but the service worker and a few other features need a real server.

### On a Mac

1. Open **Terminal** (Cmd+Space, type "terminal," press Enter).
2. Type `cd ` (with the space after). Drag the `first-five-app` folder from Finder into the Terminal window. Press Enter.
3. Type `python3 -m http.server 8000` and press Enter.
4. Open Safari or Chrome and visit **http://localhost:8000**

### On Windows

1. Open **PowerShell** (Start → type "PowerShell").
2. Type `cd ` (with the space), paste the path to the `first-five-app` folder, press Enter.
3. Type `python -m http.server 8000` and press Enter. (If Python isn't installed, grab it from python.org — 5 minutes.)
4. Open Edge or Chrome and visit **http://localhost:8000**

You'll see the sign-in screen. Try one of these demo emails (they're printed on screen too):

- `tyrone@example.org`
- `marisol@example.org`
- `denzel@example.org`

When you're done poking around, press **Ctrl+C** in the terminal to stop the server.

---

## Step 2 — Put it on the internet (15 minutes, free)

The fastest route for a first-timer is **Netlify Drop**. No account dance, no CLI:

1. Open **https://app.netlify.com/drop** in your browser.
2. Sign up with your Google account (or email).
3. Drag the entire `first-five-app` folder onto the big drop zone in the middle of the page.
4. Wait ten seconds. You'll be given a URL like `https://amazing-newton-abc123.netlify.app`.

That URL is a real, live, mobile-ready website. Open it on your phone. Sign in with a demo email. You're ninety percent of the way to a conference-ready product.

Two other hosting paths (GitHub Pages, Vercel) are in `README.md` if you prefer them.

---

## Step 3 — Make it live for your members (25 minutes, optional but recommended)

In **demo mode** (the default), progress saves on the member's phone only, and only the six demo emails can sign in.

To unlock **self-signup** and a **live admin spreadsheet** that updates in real time during conference, you connect a Google Sheet as the backend. It's free and uses only Google tools (Drive + Apps Script).

Open `backend/SETUP.md` and follow it. It's 25 minutes of clicking, no coding. You'll end with:

- A sign-up link on the sign-in screen so new members can register themselves.
- Every task completion written to a shared Google Sheet.
- A **Live Progress** tab in that Sheet that auto-recalculates each member's name, chapter, points, and tier — one line per member, updated as data flows in. Admin staff keep this open on a second monitor during conference.

Once the sheet is wired up, open `js/config.js` and paste the Apps Script URL into the `apiUrl` field. The website flips to live mode automatically. Nothing else changes.

---

## What to read next

| If you want to… | Open |
|---|---|
| Understand the full architecture and customize the task list, roster, or branding | **`README.md`** |
| Set up the Google Sheet backend for self-signup and live progress tracking | **`backend/SETUP.md`** |
| See what's in the task list without editing code | `backend/admin-sheet-template.xlsx` (the Tasks Reference tab) |

---

## Common first-day questions

**Do I need to know how to code?**
No. If you can drag-and-drop a folder and follow numbered steps, you can run this.

**Do my members need to install anything?**
No. They open the website URL on their phone and tap "Add to Home Screen" — iOS and Android both support this. The app then opens full-screen and behaves like a native app.

**How much does hosting cost?**
Netlify is free for ESP's scale. Google Workspace is free. The entire system costs $0 to run.

**Can I test it before conference?**
Yes — step 1 above lets you demo it entirely on your own computer. Step 2 gets you a shareable URL you can send to a few test-panel members. Only step 3 (the backend) involves any irreversible setup.

**Who do I ask for help?**
First try the Troubleshooting section at the end of `README.md`. If something's genuinely broken, the specific file and line number almost always shows up in your browser's developer console (right-click → Inspect → Console tab).

See you at the top of the leaderboard.
