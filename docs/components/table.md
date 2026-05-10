# Table Component

The Table component is a data table for displaying tabular data.

## Installation

```bash
npm install @vuenice/table
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array` | `[]` | Table data array |
| `columns` | `Array` | `[]` | Column definitions |
| `sortable` | `Boolean` | `false` | Enable sorting |
| `paginated` | `Boolean` | `false` | Enable pagination |

## Usage

```vue
<script setup>
import { VueNiceTable } from '@vuenice/table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
]

const data = [
  { name: 'John', email: 'john@example.com' }
]
</script>

<template>
  <VueNiceTable :columns="columns" :data="data" />
</template>
```