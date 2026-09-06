# Forma UI

A responsive app UI kit and documentation site built with semantic HTML, CSS custom properties, Flexbox, Grid, and vanilla JavaScript. No build process or runtime dependency is required.

## Included

- 56 documented component examples with side-by-side light and dark previews
- Primitive and semantic design tokens; light, dark, and system themes with persistent preference
- Responsive documentation navigation, search, copyable HTML, and token inspector
- Authentication (login, registration, password reset), dashboard, settings, profile, notifications, search, member table, empty dashboard, and 404 examples
- Native dialogs, tabs, dropdowns, upload filename preview, OTP paste, selection, CSV export, validation, and toast feedback
- 20 standalone HTML entrypoints, with shared hash-based documentation navigation
- Reusable Stack, Inline, Cluster, Grid, Container, Sidebar, Split, Center, Spacer, Divider, Hug, and Fill classes

## Run

Open `index.html` or `dist/index.html` directly. JavaScript must be enabled for the documentation browser. Alternatively:

```bash
python3 -m http.server 8080 --directory dist
```

Then open http://localhost:8080. No npm installation is needed.

## Structure

```text
forma-ui/
├── index.html                 # Opens the documentation
├── README.md
├── LICENSE
├── package.json
├── .github/workflows/pages.yml
├── tests/render-check.cjs
└── dist/                      # Authored, tracked static source
    ├── index.html
    ├── css/                   # Reset, primitives, themes, typography,
    │                          # layout, utilities, components, docs, responsive
    ├── js/                    # Theme, icons, catalog, documentation, interactions
    ├── components/            # Actions, forms, navigation, data display, feedback
    ├── patterns/              # Application example entrypoints
    ├── docs/                  # Foundations, usage, accessibility, tokens
    └── assets/icons/          # Reserved for consumers' exported SVG assets
```

`dist/` is the source here, not generated build output. HTML entrypoints share the documentation shell. The source ZIP available in the documentation excludes hosting identity and credentials.

## Use and customize

Copy component HTML from a live preview. Load CSS in this order: tokens, themes, reset, typography, layout, utilities, components. Load `js/theme.js` synchronously in the document head to avoid an incorrect-theme flash.

```html
<button class="btn">Continue</button>
<button class="btn secondary">Cancel</button>
<div class="stack">
  <label class="field">
    <span class="field-label">Name</span>
    <input class="input" autocomplete="name">
  </label>
</div>
```

Simple components use CSS alone. Data-attribute interactions are implemented in `js/components.js`; use the shared scripts and dialog markup from the documentation shell or adapt handlers to your application. Overlay trigger snippets alone do not include their companion dialog. `__ID__` markers in catalog source are replaced with unique per-preview IDs; use unique IDs when repeating examples.

### Defaults

- Brand: Forma; primary `#4F46E5`.
- Font: Inter first, with a system sans-serif fallback. Inter is not bundled or downloaded; add a licensed local font and `@font-face` for identical cross-device typography.
- Base: 16px font, 4px spacing unit.
- Radii: 4, 8, 12, 16px, pill.
- Grid: 4 columns below 768px, 8 from 768px, 12 from 1024px. Additional wide-screen tuning at 1440px.
- Icons: consistent original outline SVG vocabulary, MIT licensed, 16/20/24px, 1.8px stroke. Lucide is not a dependency.

Edit primitives in `css/tokens.css`, then semantic mappings in `css/themes.css`. Components consume semantic colors. Foundation swatches intentionally display primitives. CSS breakpoint variables are documentation values; media queries use the matching literal widths because CSS variables cannot be used in media conditions.

## GitHub and Pages

Repository: https://github.com/razusardar/Component-APP-UI-KIt

Live preview: https://forma-ui-kit.ohidulsora.chatgpt.site (owner-private Sites preview).

```bash
git clone https://github.com/razusardar/Component-APP-UI-KIt.git
cd Component-APP-UI-KIt
python3 -m http.server 8080 --directory dist
```

To publish on GitHub Pages, choose **Settings → Pages → Source: GitHub Actions**. The included workflow uploads `dist/` and deploys on pushes to main. Run it manually from Actions after enabling Pages. GitHub Pages must be enabled before this workflow can deploy successfully.

## Contributing

1. Add samples and descriptions to `dist/js/catalog.js`.
2. Keep styles in `dist/css/components.css`, with responsive changes in `responsive.css`.
3. Add delegated handlers in `dist/js/components.js`.
4. Include labels, meaningful states, unique IDs, both themes, and wrapping for longer copy.
5. Run `npm test` (Node only, no install), inspect source links, and perform browser checks.

## Accessibility and browser support

Visible keyboard focus, native labelled controls, native dialog focus containment, Escape dismissal, keyboard tabs, live toast status, reduced-motion support, labelled table scroll regions, and non-color-only statuses are included. Buttons and mobile navigation retain at least 44px touch targets. Components are not a certification of a final application's WCAG conformance.

Target: current Chrome, Edge, Firefox, and Safari supporting native dialog, CSS `:has`, and modern Grid/Flexbox. Native date/time/datalist presentation varies by browser. Clipboard copy needs a secure context; otherwise the example is selected for manual copying.

## Validation performed

- Syntax checks on all JavaScript files
- 26 generated route render checks, including duplicate IDs and unreplaced placeholders
- Theme persistence and system preference change logic checks
- All local script and stylesheet references in 20 HTML entrypoints resolve
- Key text and action color pairs checked numerically; primary on white is 6.29:1

The available static Sites workflow has no compatible browser preview server. Therefore browser screenshots, console inspection, keyboard interaction, theme rendering, and viewport checks at 360/768/1024/1440px were not performed. These remain required before describing the kit as production verified. Tests simulate template rendering and theme logic; they do not replace browser QA.

## Screenshots / previews

Use the live documentation overview, component categories, and application patterns as the preview. Screenshots are not included because browser capture was unavailable in this workflow.

## Demo boundaries and next steps

Authentication, registration, password reset, invitations, uploads, settings, and project creation are UI demonstrations. They do not create accounts, send email, upload files, or persist business data. Metrics and team members are illustrative. Theme preference is device-local. CSV export produces the displayed demonstration rows.

Before production: complete browser and assistive-technology testing, bundle Inter if required, integrate real backend services, and expand component-specific state matrices for your application. Individual primitive variants are demonstrated where relevant; this is not an exhaustive screenshot of every possible state combination.

## License

MIT. See LICENSE.
