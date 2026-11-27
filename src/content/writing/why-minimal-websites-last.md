---
title: Why Minimal Websites Last
description: On choosing plain HTML, calm typography, and zero-maintenance infrastructure for a personal corner of the web.
pubDate: 2026-11-20
draft: true
---

Most personal websites do not disappear because their owners run out of things to say. They disappear because maintaining the machinery behind them eventually costs more attention than writing.

A database requires backups. A dynamic server needs security patches. A complex front-end stack breaks quietly after six months of neglected dependency updates.

> Good personal software should ask almost nothing of you when you are busy, and stay out of your way when you return.

## Three rules for longevity

When putting together this site, I kept three constraints in mind:

1. **Plain text as the source of truth.** Every post lives as a standard Markdown file in Git. Even if the framework changes years from now, the content stays portable.
2. **Zero runtime weight.** Static HTML and a single stylesheet render instantly on any connection and need no server-side runtime.
3. **Typography over decoration.** Clear hierarchy, generous spacing, and careful line length age far better than visual trends.

## A small example

Adding a new post is just creating a file under `src/content/writing/`:

```markdown
---
title: My Next Note
description: A short summary for search engines and RSS.
pubDate: 2026-12-01
---

Write in plain Markdown and push to `main`.
```

GitHub Actions handles the build and publishes the updated pages automatically in under a minute.
