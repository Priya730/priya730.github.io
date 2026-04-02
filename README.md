# 🌱 Priya's Portfolio

This is my personal space on the internet.
A place where I share what I am building and learning.

## Live

https://priya730.github.io/

## What is here

* Projects I have worked on
* Things I am learning
* Small experiments

## 🧩 Run locally

```bash
git clone https://github.com/Priya730/priya730.github.io.git
cd priya730.github.io
npm install
npm run dev
```

---

<details>
<summary>Notes</summary>

### Branches

* init/new-project (source code)
* deploy (live site)

### Workflow

```bash
git checkout init/new-project
npm run dev

git add .
git commit -m "update"
git push origin init/new-project

npm run build
npm run deploy
```

### Config

```ts
// vite.config.ts
base: "/"
```

```json
// package.json
"homepage": "https://priya730.github.io",
"scripts": {
  "deploy": "gh-pages -d dist -b deploy"
}
```

### Reminders

* do not edit deploy branch manually
* always run deploy after changes
* if site breaks check base path

</details>
