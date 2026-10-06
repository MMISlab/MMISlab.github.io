# Editing guide

All editing can be done in the browser on github.com — open a file, click the **pencil icon (Edit)**, change the text, then click **Commit changes**. The live site updates about 1–2 minutes later.

> **One rule for `.yml` files:** indentation matters. Use spaces (never tabs) and keep new lines lined up exactly like the lines around them. If the site stops updating after an edit, check the **Actions** tab on GitHub — a red ✗ usually means a spacing mistake in the last file you changed.

---

## 1. Launch the site (one time, ~10 minutes)

1. Sign in at **github.com** (create a free account if needed).
2. Click **+ → New repository**.
   - Name it **`<your-username>.github.io`** (e.g. `paragk.github.io`) → the site will be at `https://<your-username>.github.io`.
   - Or use any name, e.g. `mmis-lab` → the site will be at `https://<your-username>.github.io/mmis-lab/`. In this case, open `_config.yml` and set `baseurl: "/mmis-lab"`.
   - Make it **Public**, then click **Create repository**.
3. On the new repository page click **uploading an existing file**. Unzip `mmis-lab-website.zip` on your computer, open the `mmis-lab` folder, select **everything inside it** (including the folders that start with `_`) and drag it into the browser. Click **Commit changes**.
   - On a Mac, folders starting with `_` and `.` may be hidden; press **Cmd + Shift + .** in Finder to show them.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, then **Save**.
5. Wait 1–2 minutes and open the address shown at the top of that page.

**First edits to make:** in `_config.yml`, replace `your.email@iitj.ac.in` with your email and add your Google Scholar / LinkedIn / ORCID links. Do the same email in `_data/team.yml`.

*Optional — custom domain (e.g. `mmislab.iitj.ac.in`):* ask IITJ IT to add a CNAME record pointing to `<your-username>.github.io`, then enter the domain under **Settings → Pages → Custom domain**.

---

## 2. Add a news item

1. Open the `_posts` folder → **Add file → Create new file**.
2. Name it `YYYY-MM-DD-short-title.md`, e.g. `2026-11-15-new-phd-student.md`. The date in the name is the date shown on the site.
3. Paste and edit:

```markdown
---
title: "Welcome to our new PhD student, Asha Verma"
category: Team
image: /assets/images/news/asha-welcome.jpg
image_caption: "Asha in the lab"
---

Asha joins the lab to work on AI-based denoising for SPECT. She holds an M.Tech from ...

Write as many paragraphs as you like. The first paragraph is shown as the summary on the News page.
```

- `category` is a short label (e.g. Lab, Team, Paper, Talk, Award, Openings, Research Update).
- Delete the `image:` and `image_caption:` lines if there is no picture.
- Newest posts appear first, and the three latest appear on the home page automatically.

**Text formatting:** `**bold**`, `*italic*`, `[link text](https://...)`, `- ` at the start of a line for a bullet, `## ` for a heading.

---

## 3. Add a picture

1. Open the right folder: `assets/images/news/`, `assets/images/team/` or `assets/images/research/`.
2. **Add file → Upload files**, drop the picture in, **Commit changes**.
3. Use its path where needed, e.g. `/assets/images/news/asha-welcome.jpg`.

Tips: use lower-case file names without spaces (`lab-opening-2026.jpg`); resize to about **1600 px wide** (team photos: square, about **600 × 600 px**) and keep each file under ~500 KB so pages load fast on phones.

**Pictures inside a news post** (more than one): add this line where you want it in the text:

```markdown
![Short description of the picture](/assets/images/news/second-photo.jpg)
```

**A picture for a research area:** in the file in `_research/`, remove the `#` before `image:` and set the path. It then appears on the research page and on the home-page card.

---

## 4. Add a team member

Open `_data/team.yml`, find the right group (PhD Students, M.Tech / MS (Research) Students, Research Interns, Alumni), and add under it. If the group currently says `members: []`, change it to `members:` and add the person below it:

```yaml
- group: "PhD Students"
  members:
    - name: "Asha Verma"
      role: "PhD Scholar (2026–)"
      photo: "/assets/images/team/asha.jpg"
      email: "asha@iitj.ac.in"
      website: ""
      bio: "Working on AI-based denoising for SPECT."
```

- Leave `photo: ""` to show their initials in a circle instead.
- Empty groups are hidden automatically.
- When someone graduates, move their block to **Alumni** and update `role` (e.g. `"PhD 2031, now at …"`).

---

## 5. Add a publication

Open `_data/publications.yml` and add a block at the top (newest first):

```yaml
- title: "Task-based evaluation of AI denoising in SPECT"
  authors: "A. Verma, **P. Khobragade**"
  venue: "Journal of Nuclear Medicine, 67(4), 2026"
  year: 2026
  type: journal          # journal | conference | patent | book-chapter
  link: "https://doi.org/10.xxxx/xxxxx"
```

Publications are grouped by year automatically. The example entry with `hidden: true` is not shown; delete it once you have added real entries.

---

## 6. Edit research areas and openings

Each research area is one file in `_research/`. The part between the `---` lines holds the title, one-line summary and the **openings** box; the text below it is the page itself. To add a third research area, copy one file, rename it (e.g. `ct-imaging.md`), and set `order: 3`. For the icon, use `molecular`, `sensor`, or anything else for a generic image icon.

Openings are also summarised on `join.md` — update both when a position is filled.

---

## 7. Recruiting banner and your bio

**Recruiting highlight** — in `_config.yml`, under `recruiting:`
- `show: true` shows the gold bar at the top of every page and turns **Join Us** in the menu into a button. Set `show: false` when you are not recruiting.
- `message` is the desktop text; `short_message` is the shorter phone text. Update the year each admission cycle.
- The "Join us as a PhD or Master's student" box on the home page is in `index.html` (search for `Admissions`).

**Your bio** — in `_data/team.yml`: `short_bio` appears on the home page, `bio` on the Team page, and `interests` as tags. To add your photo, upload it to `assets/images/team/` and set `photo:`.

---

## 8. Change the menu, colours or fonts

- **Menu:** `navigation:` in `_config.yml`.
- **Colours / fonts:** the variables at the top of `assets/css/style.css` (e.g. `--primary: #1E3A5F;`).

---

## Preview on your computer (optional)

Not needed — GitHub builds the site for you. If you want to preview locally: install Ruby, then in the site folder run `bundle install` once and `bundle exec jekyll serve`, and open `http://localhost:4000`.
