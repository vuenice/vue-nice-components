# VueNice Components Documentation

Documentation app showcasing all VueNice components built with [VitePress](https://vitepress.dev/).

## Project Structure

```
vue-nice-components/
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs
│   ├── components/
│   │   └── *.md (component docs)
│   ├── guide/
│   │   └── getting-started.md
│   └── index.md
├── package.json
└── .gitignore
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Available Components

- Button
- Input
- Table
- Accordion
- Alert
- Autocomplete
- Checkbox
- Debug
- Loader
- Logs
- Modal
- Pagination
- Popover
- Progress
- Sidebar
- Switch
- Tabs
- Tag
- Validate

## Live Demos

Each component page contains live code examples showcasing:
- Props and their usage
- Events and how to handle them
- Interactive examples

## License

MIT