# Accordion Component

The Accordion component displays collapsible content panels.

## Installation

```bash
npm install @vuenice/accordion
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | Accordion items |

## Usage

```vue
<script setup>
import { VueNiceAccordion } from '@vuenice/accordion'

const items = [
  { title: 'Section 1', content: 'Content 1' }
]
</script>

<template>
  <VueNiceAccordion :items="items" />
</template>
```