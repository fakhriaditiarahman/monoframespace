# Monoframe Website

Website resmi Monoframe - Creative brand yang menaungi Monobox (Photobooth), Monodev (Web Development), dan Monoframe Studio (Photography).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database & Auth**: Supabase
- **Icons**: Lucide React + Material Symbols

## Getting Started

### Installation

```bash
# Clone repository
git clone https://github.com/fakhriaditiarahman/monoframespace.git
cd monoframespace

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local dengan Supabase credentials Anda

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Project Structure

```
src/
├── app/
│   ├── admin/           # Admin panel (login, dashboard, CRUD)
│   ├── monobox/         # Monobox service page
│   ├── monodev/         # Monodev service page
│   ├── studio/          # Monoframe Studio page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── layout/          # Header, Footer
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # Utilities
└── types/
    └── database.ts      # TypeScript types
```

## Pages

### Public
| Page | Route |
|------|-------|
| Home | `/` |
| Monobox | `/monobox` |
| Monodev | `/monodev` |
| Studio | `/studio` |

### Admin
| Page | Route |
|------|-------|
| Login | `/admin/login` |
| Dashboard | `/admin/dashboard` |
| Orders | `/admin/dashboard/orders` |
| Portfolios | `/admin/dashboard/portfolios` |
| Testimonials | `/admin/dashboard/testimonials` |
| Content | `/admin/dashboard/content` |
| Settings | `/admin/dashboard/settings` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |


## License

Proprietary and confidential.

---

Built with ❤️ by Monoframe Team
