# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Exit Insights Site** — marketing and landing page website for the Exit Insights SaaS product (employee offboarding/exit interview analytics platform). Built with Next.js 16, React 19, and Tailwind CSS 4. Deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Email:** Resend (contact form / lead capture)
- **Analytics:** Vercel Analytics
- **Language:** TypeScript 5
- **Hosting:** Vercel

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Directory Structure

```
src/app/
  page.tsx           # Homepage / landing page
  layout.tsx         # Root layout
  globals.css        # Global styles
  sitemap.ts         # Dynamic sitemap generation
  api/               # API routes (contact form, etc.)
  contact/           # Contact page
  privacy/           # Privacy policy
  terms/             # Terms of service
  sample/            # Sample/demo page
public/              # Static assets
```

## Key Notes

- This is the **marketing site** for Exit Insights, not the SaaS application itself. The SaaS app lives in a separate repository.
- Uses Next.js App Router with server components.
- Contact form sends emails via Resend API.
- SEO optimized with dynamic sitemap and OpenGraph image generation.
