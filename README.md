# Nakul | Front-End Web Developer Portfolio

A responsive, accessible, single-page personal portfolio built with plain **HTML5, CSS3 and vanilla JavaScript**. No frameworks, build tools or dependencies are needed. Just open the page in a browser.

## Features

- **Responsive layout** that adapts from mobile to tablet to desktop, using CSS Grid, Flexbox and media queries (breakpoints at 700px and 900px).
- **Mobile navigation menu** with a hamburger button that updates `aria-expanded` and `aria-label`.
- **Light / dark theme toggle.** The choice is saved in `localStorage`, and the first visit follows the system `prefers-color-scheme` setting.
- **Personalised greeting.** Visitors pick Recruiter, Teacher or Friend and get a matching message.
- **Project filter** to show all projects or only web development ones.
- **Expandable project cards** with a "Show Details" / "Hide Details" toggle.
- **Contact form validation** with inline error messages. It checks name length, email format and message length. The form is a demo and does not send any data.
- **Sticky header with active-section highlighting** while scrolling.
- **Back-to-top button** that appears after scrolling down 400px.
- **Auto-updating footer year.**

## Sections

| Section  | Description                                              |
| -------- | -------------------------------------------------------- |
| Home     | Introduction, greeting chips and a call-to-action button |
| About    | Short background and career goals                        |
| Skills   | Web development, design and personal skills as tags      |
| Projects | Filterable, expandable project cards                     |
| Contact  | Email link and a validated contact form                  |

## Projects showcased

1. **Library Book Borrowing & Return System**: manages borrowing, returns, due dates and automatic late fines.
2. **Random Quote Generator**: shows a random motivational quote on each button click.
3. **Basic Calculator**: performs addition, subtraction, multiplication and division.

## Accessibility

- "Skip to content" link for keyboard users
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Visible `:focus-visible` outlines
- `aria-live`, `aria-pressed`, `aria-expanded` and `aria-controls` used on interactive elements
- Form fields with linked labels and `aria-invalid` error states
- Dark theme error colours adjusted for contrast
- `prefers-reduced-motion` respected (smooth scrolling is turned off)

## Project structure

The HTML links to `css/style.css` and `js/script.js`, so organise the files like this:

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/          (optional, for project screenshots)
```

> **Note:** the uploaded JavaScript file is named `script_1.js`. Rename it to `script.js` and place it in the `js/` folder, and put `style.css` in the `css/` folder. Otherwise the page will not find them.

## Getting started

1. Download or clone the project.
2. Arrange the files as shown above.
3. Open `index.html` in any modern browser.

Optionally, serve it locally, for example with the VS Code **Live Server** extension or `python -m http.server`.

## Customisation

- **Personal info:** edit the name, text, skills and projects in `index.html`.
- **Email:** replace `your-email@example.com` in the Contact section with your real address.
- **Colours:** change the CSS variables at the top of `style.css` (`:root` for light mode, `[data-theme="dark"]` for dark mode).
- **Add a project:** copy an `<article class="card">` block in `index.html`. Give it a unique `id` for the details panel and update the matching `aria-controls`. Set `data-cat` to `web`, or add a new filter button with a matching `data-filter` value.
- **Greeting messages:** edit the `messages` object in the JavaScript file.
- **Screenshots:** the `.shot` blocks are placeholders. Replace them with `<img>` tags if you want real previews.

## Known notes

- The contact form only validates input and shows a confirmation message. To receive real messages, connect it to a backend or a service such as Formspree or EmailJS.
- `index.html` contains an older, commented-out version of the page at the top. It is safe to delete.
- The initials in the hero art ("NK") and the meta tags are set in the HTML and should be updated if you change the name.

## Tech stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- JavaScript (ES6+, no libraries)

## License

This project is for personal and educational use. Add a license of your choice (for example MIT) if you plan to share it publicly.
