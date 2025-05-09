# 📘 Pixll – Internship Test Project

This is a landing page project for **Pixll**, built using: **Next.js, TypeScript, Tailwind CSS**

---

## ▶️ Clone & Run

To set up this project locally:

```bash
# Clone the repository
git clone https://github.com/Takib-Ahmed/pixll.git

# Navigate into the project folder
cd pixll

# Install dependencies
npm install

# Run the development server
npm run dev
```

> Open http://localhost:3000 in your browser to see the project in action.
> 

---

## 📁 File & Folder Structure

### `/public`

- `/public/BGcovers` – Cover images and background graphics
    
    Used directly in raw CSS as background images.
    
- `/public/logos` – Logo files used throughout the site

---

### `/app/assets`

- `/app/assets/icons` – SVG icon components
- `/app/assets/bgElements` – Background shapes and elements (section-wise)
- `/app/assets/partners` – Logos of partner companies or brands
- `/app/assets/showcase` – Images used in the Showcase section
- `/app/assets/images` – Images for the Works/Projects section
  - `/app/assets/images/works/`  - Images for the Works/Projects section
  - `/app/assets/images/samples/`- samples of the Works

> All visual assets are organized per section for clarity and maintainability.
> 

---

### `/app/shared`

- `/app/shared/components` – Reusable UI components used across the site
- `/app/shared/modules` – Components structured for each landing page section
- `/app/shared/widgets` – Layout elements like Header and Footer

---

### `/styles`

- `/styles/configs.css` – Custom Tailwind configurations including:
    - Color palette
    - Responsive breakpoints
    - Utility tokens (e.g., spacing, font sizes)
- `/styles/breakpoints.css` – Custom media query utilities
- `/styles/gradient.css` – Gradient styles used in backgrounds
- `/styles/slider.css` – Styles related to sliders/carousels
- `/styles/sections.css` – Section-specific overrides and additional styling
