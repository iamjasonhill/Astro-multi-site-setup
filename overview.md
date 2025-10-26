# SEO Hub & Knowledge Base Vision

## Purpose
- Centralise shared tooling, documentation, and automation that support all domains under the `2025 Project` umbrella (e.g., Moveroo, Car Transport Programmatic, future sites).
- Provide a single source of truth for SEO playbooks, process knowledge, and change logs.
- Orchestrate audits, reporting, and coordination tasks across heterogeneous stacks and hosting setups.

## Core Components
- **Knowledge Base (Astro or similar docs app):** captures internal processes, style guides, incident retros, and stack-specific playbooks.
- **SEO Auditor Toolkit (Node/TypeScript CLI or service):** runs Lighthouse/PageSpeed, sitemap + robots validation, broken-link scans, and other automated checks; outputs per-project reports.
- **Shared Config Package:** defines typed schemas for project metadata (framework, endpoints, build commands), enabling consistent usage across scripts.

## Multi-Stack Support
- Store project definitions in `projects/<name>.config.(json|yaml)` with keys like `type`, `entryUrls`, `buildCommand`, and `auditTargets`.
- Implement adapters so audits can trigger stack-specific actions (Astro build, Next.js export, WordPress REST fetch) while sharing common HTTP-based tests.
- Encapsulate reusable styling tokens, content fragments, or deployment templates where cross-project alignment is needed.

## Live Documentation Integration
- Reference external documentation via API/search integrations (e.g., framework doc APIs, npm registry, GitHub releases) instead of duplicating manuals.
- Cache responses with short TTL and record retrieval timestamps to ensure contributors see the latest authoritative guidance.
- Schedule update checks that create knowledge base entries or tasks when new releases or advisories appear.

## Automation & Reporting
- GitHub Actions or scheduled jobs to run audits (on demand, on schedule, or post-deploy) and publish results into the hub (e.g., `reports/<project>/<timestamp>.json`).
- Optional notification hooks: Slack/email summaries, PR/issue comments linking to actionable tasks.

## Next Steps
1. Initialise repo structure (knowledge base app, auditor app, shared config package, `projects/` directory).
2. Draft initial project configs for existing sites (Moveroo, Car Transport Programmatic).
3. Scaffold CLI commands (`pnpm seo-audit <project>`) plus docs on onboarding new domains.
4. Set up minimal workflows to run audits manually; iterate toward scheduled automation and integration with deployment pipelines.
