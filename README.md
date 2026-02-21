# Monoframe Website

Website resmi Monoframe - Creative brand yang menaungi Monobox (Photobooth), Monodev (Web Development), dan Monoframe Studio (Photography).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database & Auth**: Supabase
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun
- Supabase account (for backend features)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd monoframestudio
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx           # Landing page
│   │   ├── monobox/           # Monobox photobooth page
│   │   ├── monodev/           # Monodev web dev page
│   │   └── studio/            # Monoframe Studio page
│   ├── admin/
│   │   ├── login/             # Admin login page
│   │   ├── layout.tsx         # Admin layout with sidebar
│   │   └── dashboard/
│   │       ├── page.tsx       # Dashboard home
│   │       ├── orders/        # Orders management
│   │       ├── portfolios/    # Portfolio CRUD
│   │       ├── testimonials/  # Testimonials CRUD
│   │       ├── content/       # Page content management
│   │       └── settings/      # Settings page
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   └── textarea.tsx
│   └── layout/
│       ├── Header.tsx         # Site header
│       └── Footer.tsx         # Site footer
├── lib/
│   ├── supabase.ts            # Supabase client
│   └── utils.ts               # Utility functions
└── types/
    └── database.ts            # TypeScript types
```

## Pages Overview

### Public Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with overview of all services |
| Monobox | `/monobox` | Photobooth services, packages, gallery, booking form |
| Monodev | `/monodev` | Web development services, portfolio, project request form |
| Studio | `/studio` | Photography studio, packages, gallery, booking form |

### Admin Pages

| Page | Route | Description |
|------|-------|-------------|
| Login | `/admin/login` | Admin authentication |
| Dashboard | `/admin/dashboard` | Overview and stats |
| Orders | `/admin/dashboard/orders` | Manage bookings |
| Portfolios | `/admin/dashboard/portfolios` | CRUD for portfolio items |
| Testimonials | `/admin/dashboard/testimonials` | CRUD for testimonials |
| Content | `/admin/dashboard/content` | Edit page content |
| Settings | `/admin/dashboard/settings` | Business settings |

## Database Schema

See PRD.md for complete database schema. Main tables:

- `profiles` - User profiles with roles
- `orders` - Booking/orders data
- `portfolios` - Portfolio items
- `testimonials` - Client testimonials
- `page_content` - Dynamic page content
- `settings` - Business settings

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy

## License

This project is proprietary and confidential.

---

Built with ❤️ by Monoframe Team
