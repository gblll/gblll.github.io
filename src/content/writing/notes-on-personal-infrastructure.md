---
title: Notes on Personal Infrastructure
description: Decoupling static publishing, domain email, and cloud compute so each piece stays resilient and replaceable.
pubDate: 2026-08-14
draft: true
---

When you set up your first cloud server, it is tempting to host everything on a single virtual machine: your homepage, your blog, your email server, and your personal utilities.

In practice, coupling unrelated services onto one machine creates fragile dependencies. Rebuilding a server or rotating an IP address should never take down your personal website or interrupt your inbox.

## Separating responsibilities

A calmer architecture splits personal infrastructure into three independent layers:

| Layer | Responsibility | Ideal Host |
| :--- | :--- | :--- |
| **Static Web** | Personal homepage, CV, essays | GitHub Pages / Cloudflare Pages |
| **Email** | Custom domain address | Forwarding + SMTP relay |
| **Compute** | Dynamic apps, APIs, networking | Cloud VPS on a subdomain |

With this separation, each component can be upgraded, migrated, or retired without touching the others. Your identity on the web stays anchored to a domain you control, not to a single server instance.
