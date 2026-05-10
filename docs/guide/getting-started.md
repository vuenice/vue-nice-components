# Getting Started

## Installation

Install individual components or all at once:

```bash
# Install individual component
npm install @vuenice/button

# Or install all components
npm install @vuenice/components
```

## Quick Start

```vue
<script setup>
import { VueNiceButton } from '@vuenice/button'
</script>

<template>
  <VueNiceButton>Click Me</VueNiceButton>
</template>
```

## Configuration

Configure the components library in your main.js:

```js
import { createUI } from '@vuenice/components'

const ui = createUI()

app.use(ui)
```