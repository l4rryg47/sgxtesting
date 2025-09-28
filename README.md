# PetroTest - Crude Oil Testing Company Website

A modern, responsive website for PetroTest, a leading provider of crude oil testing and analysis services. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern, professional UI with smooth animations
- Contact form with validation
- Service pages with detailed information
- SEO optimized
- Fast performance with Next.js static site generation

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Form handling with validation
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons

## Prerequisites

- Node.js 14.6.0 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/oil-testing-company.git
   cd oil-testing-company
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_TRACKING_ID=YOUR_GA_TRACKING_ID
```

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-docs) from the creators of Next.js.

### Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your site:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy
   ```

4. Follow the prompts to complete deployment.

## Project Structure

```
.
├── public/                 # Static files
│   └── images/             # Image assets
├── src/
│   ├── app/                # App router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   └── lib/                # Utility functions
├── .eslintrc.json          # ESLint config
├── .gitignore
├── next.config.js          # Next.js config
├── package.json
├── postcss.config.js       # PostCSS config
├── README.md
└── tailwind.config.js      # Tailwind CSS config
```

## Customization

### Colors

Update the color scheme in `src/app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: #1e40af;
  --primary-dark: #1e3a8a;
  --secondary: #4b5563;
  --accent: #3b82f6;
  --background: #ffffff;
  --text: #111827;
}
```

### Fonts

To change the font, update the `inter` import in `src/app/layout.tsx` and the corresponding Tailwind configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
