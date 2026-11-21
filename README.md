# Noushad Ali - Portfolio

My personal portfolio website: a simple single-page site built with plain **HTML, CSS and JavaScript**.
No frameworks, no build step, so it runs directly on GitHub Pages.
Icons come from [Font Awesome](https://fontawesome.com) and the font (Poppins) from Google Fonts, both via CDN.

**Live:** https://noushadleghari.github.io

## Features

- Single page with About, Skills, Experience, Projects, Education and Contact sections
- Dark and light mode (remembers your choice, follows system setting by default)
- Responsive layout with a mobile menu
- Small scroll animations (disabled if the visitor prefers reduced motion)
- Downloadable CV

## Project structure

```
.
├── index.html            # all page content
├── css/
│   └── style.css         # styles + light/dark theme colors
├── js/
│   └── main.js           # theme toggle, menu, scroll effects
└── assets/
    ├── Noushad-Ali-CV.pdf
    └── images/
        └── avatar.svg
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to GitHub Pages

1. Create a repository named `noushadleghari.github.io`.
2. Push this folder to the `main` branch.
3. In **Settings → Pages**, set the source to `main` / root.

The site will be live at `https://noushadleghari.github.io`.

## Contact

- Email: noshadalilaghari46@gmail.com
- LinkedIn: [noushadleghari](https://www.linkedin.com/in/noushadleghari/)
- GitHub: [noushadleghari](https://github.com/noushadleghari)
