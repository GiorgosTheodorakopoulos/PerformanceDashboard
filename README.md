# Eco Performance Dashboard

A modern, responsive dashboard for monitoring environmental and energy performance metrics in real-time.

## Features

- **Real-time Monitoring**
  - Current emissions tracking
  - System health status
  - Energy flow visualization
  - Power distribution analytics

- **Key Performance Indicators**
  - Emissions rate and cost metrics
  - Battery status and storage levels
  - Solar and wind power generation
  - System warnings and alerts

- **Interactive Components**
  - Real-time data updates
  - Dynamic charts and graphs
  - System health indicators
  - Performance statistics

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Wouter (for routing)
- Lucide Icons
- TanStack Query

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd PerformanceDashboard
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and helpers
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Theme Customization

The dashboard uses a customizable theme system with support for both light and dark modes. Colors and other design tokens can be modified in:

- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles and CSS variables

## License

MIT License
