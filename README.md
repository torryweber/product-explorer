# Product Explorer

An iPhone-style product discovery web app.

**Flow:** Brands (Home Screen icons) → Categories → Products → Detail

## Features

- Clean iOS-inspired UI (Home Screen icons, native navigation, status bar, home indicator)
- Smooth screen transitions
- Responsive (mobile-first, works on desktop)
- Pure HTML + CSS + JavaScript — no frameworks or build step required
- Sample brands: Apple, Nike, Samsung, Sony, Adidas, Dyson, Bose, LEGO

## How to run

Just open `index.html` in any modern browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080

# or Node
npx serve .
```

Then visit http://localhost:8080

## Project structure

```
product-explorer/
├── index.html      # Main page structure
├── styles.css      # All styles (iOS-like design system)
├── app.js          # Data + navigation logic
├── .gitignore
└── README.md
```

## Customization

Edit the `DATA` object in `app.js` to add your own brands, categories, and products.

## License

MIT
