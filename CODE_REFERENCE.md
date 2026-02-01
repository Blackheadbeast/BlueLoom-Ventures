# Code Snippets & Quick Reference

## Main Page Structure

The landing page is structured as a single-page application in Next.js:

```typescript
// app/page.tsx
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyBlueloom from '@/components/WhyBlueloom';
import Products from '@/components/Products';
import Technology from '@/components/Technology';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <WhyBlueloom />
      <Products />
      <Technology />
      <Contact />
      <Footer />
    </main>
  );
}
```

## Navigation Component Pattern

```typescript
// components/Navigation.tsx
'use client';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      {/* Logo and nav links */}
    </nav>
  );
}
```

## Card Component Pattern

All cards use this consistent pattern:

```typescript
<div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
  {/* Content */}
</div>
```

## Button Variants

**Primary Button (CTA):**
```html
<a href="#" className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all transform hover:scale-105">
  Click Me
</a>
```

**Secondary Button (Outline):**
```html
<a href="#" className="px-8 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all hover:bg-white/5">
  Click Me
</a>
```

## Form Component Pattern

```typescript
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

## Typography Classes

```css
/* Hero Title */
text-5xl sm:text-6xl lg:text-7xl font-bold text-white

/* Section Title */
text-3xl sm:text-4xl font-bold text-white

/* Body Text */
text-gray-400 text-lg

/* Small Text */
text-gray-400 text-sm
```

## Responsive Grid Patterns

```html
<!-- 1 col mobile, 3 cols desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  <!-- Cards -->
</div>

<!-- Two column layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <!-- Left column -->
  <!-- Right column -->
</div>
```

## Icon Pattern

```typescript
import { Zap } from 'lucide-react';

<div className="p-3 rounded-lg bg-blue-500/10">
  <Zap className="w-6 h-6 text-blue-400" />
</div>
```

## Gradient Text

```html
<h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

## Glassmorphism Effect

```html
<div class="backdrop-blur-md bg-black/80 border border-white/10 rounded-2xl p-6">
  <!-- Content -->
</div>
```

## SVG Background Pattern

```html
<svg class="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 172, 254, 0.1)" strokeWidth="0.5" />
    </pattern>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2F7CF6" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
```

## Hover Scale Effect

```html
<a href="#" class="transition-all transform hover:scale-105">
  Hover me
</a>
```

## Color Opacity Variants

```
white/5   - 5% opacity
white/10  - 10% opacity
white/20  - 20% opacity
white/50  - 50% opacity
blue-600/10  - blue with 10% opacity
```

## Layout Constants

```typescript
// Max width container
max-w-7xl mx-auto

// Padding
px-4 sm:px-6 lg:px-8  // Horizontal padding
py-20 sm:py-24       // Vertical padding

// Gaps
gap-4 sm:gap-6       // Responsive gaps
gap-6 lg:gap-8
```

## Transition Classes

```css
transition-colors         /* Color changes */
transition-all           /* All properties */
transition-all duration-300  /* With timing */
```

## Border Classes

```css
border-b border-white/5      /* Subtle bottom border */
border border-white/10       /* Full border, subtle */
hover:border-blue-500/50     /* Hover border glow */
```

## Shadow Variants

```css
hover:shadow-xl                    /* Large shadow */
hover:shadow-blue-500/10           /* Colored shadow */
hover:shadow-xl hover:shadow-blue-500/10  /* Combined */
```

## Mobile Menu Pattern

```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

{mobileMenuOpen && (
  <div className="md:hidden pb-4 border-t border-white/5">
    {/* Mobile menu items */}
  </div>
)}
```

## SEO Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Blueloom Ventures - Automation. Simplified.",
  description: "Software that works while you don't.",
  keywords: "automation, SaaS, products",
  openGraph: {
    title: "Blueloom Ventures",
    description: "Automation-first SaaS tools",
    type: "website",
  },
};
```

## Accessibility Classes

```html
<!-- Semantic HTML -->
<nav>Navigation</nav>
<section>Section</section>
<footer>Footer</footer>

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>

<!-- Form labels -->
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

---

## Common Tailwind Utilities Used

| Utility | Usage |
|---------|-------|
| `sticky top-0 z-50` | Sticky header |
| `min-h-screen` | Full viewport height |
| `max-w-7xl mx-auto` | Container max width + center |
| `grid grid-cols-1 md:grid-cols-3` | Responsive grid |
| `flex items-center justify-between` | Flexbox layout |
| `rounded-lg` | Border radius |
| `bg-black/80` | Background with opacity |
| `border border-white/10` | Border with opacity |
| `hover:scale-105` | Hover scale effect |
| `transition-all` | Smooth transitions |
| `backdrop-blur-md` | Glassmorphism effect |
| `bg-gradient-to-r` | Gradient background |

---

## Performance Tips

1. **Use `'use client'` only when needed** - For interactive components (Navigation, Contact form)
2. **Keep components focused** - Each component has one responsibility
3. **Leverage Tailwind** - All styling is utility-based, no custom CSS needed
4. **SVG backgrounds** - More performant than images for patterns
5. **CSS gradients** - Lightweight visual effects
6. **Next.js Image** - Use for any actual images

---

## Modification Examples

### Change a button color:
```typescript
// FROM
bg-blue-600 hover:bg-blue-700

// TO
bg-purple-600 hover:bg-purple-700
```

### Add a new feature card:
```typescript
const features = [
  // ... existing features
  {
    icon: YourIcon,
    title: 'New Feature',
    description: 'Feature description',
  },
];
```

### Update navigation link:
```typescript
<a href="#new-section" className="text-gray-300 hover:text-white">
  New Section
</a>
```

---

This code reference covers the main patterns used throughout the project. For more details, consult IMPLEMENTATION.md.
