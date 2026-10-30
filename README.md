# Learn-Dev | System Design Community

Learn-Dev is a **free open source community** platform for learning about **system design with visualization**. Master Low-Level Design (LLD) and High-Level Design (HLD) concepts through interactive lessons and visual representations.

## Features

- **LLD Section**: Classes & Objects, Design Patterns, SOLID Principles, UML Diagrams
- **HLD Section**: Scalability, Distributed Systems, Caching, Databases, Load Balancing, Microservices
- **Interactive Visualizations**: Coming soon for both LLD and HLD concepts
- **Modern Theme**: Custom color palette using #c7f9cc, #80ed99, #001233, #57cc99, #22577a, #386641
- **Typography**: Roboto (sans-serif) and Fira Code (monospace) fonts
- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Automatic support based on system preferences

## Theme Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Light | #c7f9cc | Background accents, highlights |
| Primary | #80ed99 | Primary actions, CTAs |
| Dark Blue | #001233 | Dark backgrounds, text |
| Accent | #57cc99 | Accents, borders |
| HLD Primary | #22577a | HLD section branding |
| Secondary | #386641 | Secondary actions, LLD accents |

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── layout.tsx          # Root layout with Roboto & Fira Code fonts
├── globals.css        # Custom theme with specified colors
├── page.tsx           # Home page with LLD & HLD sections
├── lld/
│   ├── page.tsx       # LLD overview page
│   ├── classes/
│   │   └── page.tsx   # Classes & Objects lesson
│   ├── patterns/
│   │   └── page.tsx   # Design Patterns lesson
│   ├── solid/
│   │   └── page.tsx   # SOLID Principles lesson
│   └── uml/
│       └── page.tsx   # UML Diagrams lesson
└── hld/
    ├── page.tsx       # HLD overview page
    ├── scalability/
    │   └── page.tsx   # Scalability lesson
    ├── distributed/
    │   └── page.tsx   # Distributed Systems lesson
    ├── caching/
    │   └── page.tsx   # Caching lesson (coming soon)
    ├── databases/
    │   └── page.tsx   # Databases lesson (coming soon)
    ├── load-balancing/
    │   └── page.tsx   # Load Balancing lesson (coming soon)
    └── microservices/
        └── page.tsx   # Microservices lesson (coming soon)
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Roboto, Fira Code (via Next.js Fonts)
- **Language**: TypeScript

## Contributing

Learn-Dev is an open source project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
