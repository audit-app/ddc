# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Project Architecture

This is a Next.js 16 application for an adult classified ads platform targeting Bolivia (es_BO locale). The app uses:

- **Framework**: Next.js 16.0.3 with App Router and React 19.2.0
- **Language**: TypeScript (strict mode, target ES6)
- **Styling**: Tailwind CSS v4 with custom OKLCH color system
- **UI Components**: Radix UI primitives + shadcn/ui components (New York style)
- **Theme**: next-themes with dark mode default
- **Analytics**: Vercel Analytics
- **Forms**: React Hook Form with Zod validation

### Directory Structure

```
/app                    # Next.js App Router pages
  /anuncios            # Listings pages
    /[id]              # Dynamic listing detail pages
    anuncios-client.tsx # Client component for listings page
    page.tsx           # Server component wrapper
  layout.tsx           # Root layout with metadata
  page.tsx             # Homepage
  globals.css          # Tailwind styles and CSS variables

/components            # React components
  /ui                  # shadcn/ui components
  header.tsx           # Navigation header
  footer.tsx           # Site footer
  hero.tsx             # Homepage hero section
  category-*.tsx       # Category filtering/display components
  anuncio-*.tsx        # Listing-related components
  search-*.tsx         # Search functionality
  theme-*.tsx          # Theme switching

/lib                   # Utilities and data
  anuncios-data.ts     # Main data source (Anuncio interface + anunciosData array)
  utils.ts             # Utility functions

/hooks                 # Custom React hooks
  use-toast.ts         # Toast notifications
  use-mobile.ts        # Mobile detection
```

### Key Architectural Patterns

**Server/Client Component Separation**: The app follows Next.js App Router best practices:
- Server components in `/app/**/page.tsx` handle metadata and SEO
- Client components (`"use client"`) handle interactivity (search, filters, modals)
- Example: `/app/anuncios/page.tsx` (server) wraps `anuncios-client.tsx` (client)

**Data Structure**: All listings data lives in `/lib/anuncios-data.ts`:
```typescript
interface Anuncio {
  date: string
  link: string
  city: string
  title: string
  anuncio: string
  whatsapp: string
  precio: number | null
  fotos: string[]
  email?: string
  telefono?: string
  edad?: number
  servicios?: string[]
  ubicacion?: string
  disponibilidad?: string
  verificado?: boolean
  vistas?: number
}
```
The `anunciosData` array is the single source of truth for all listings.

**Path Aliases**: Using `@/*` for imports:
- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/hooks` → `/hooks`

**Dynamic Routes**: Listing detail pages use Next.js dynamic routing at `/anuncios/[id]` where `id` is the array index from `anunciosData`.

**Styling System**: Custom OKLCH-based color palette defined in `globals.css`:
- Light mode: Elegant purples (`--primary: oklch(0.48 0.12 290)`)
- Dark mode: Nocturnal purples/magentas (`--background: oklch(0.12 0.02 280)`)
- Theme toggle via next-themes provider in root layout

**Build Configuration**: `next.config.mjs` has:
- `typescript.ignoreBuildErrors: true` (TypeScript errors won't block builds)
- `images.unoptimized: true` (Next.js image optimization disabled)

## Important Notes

- **SEO**: Comprehensive metadata in `/app/layout.tsx` targeting Bolivia market (es_BO), includes OpenGraph, Twitter cards, and structured robots directives
- **Icons**: Adaptive icons based on color scheme (light/dark variants)
- **Forms**: When adding forms, use react-hook-form + @hookform/resolvers with Zod schemas
- **UI Components**: Use shadcn/ui components from `/components/ui` - they're pre-configured with the custom theme
- **Filtering**: Listings can be filtered by city and search terms (see `anuncios-client.tsx` for reference pattern)
