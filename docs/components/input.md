# Input Component

The Input component is a form input field for Vue 3 applications.

## Installation

```bash
npm install @vuenice/input
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `String` | `''` | Input value (v-model) |
| `type` | `String` | `'text'` | Input type |
| `placeholder` | `String` | `''` | Placeholder text |
| `disabled` | `Boolean` | `false` | Whether input is disabled |
| `readonly` | `Boolean` | `false` | Whether input is readonly |
| `error` | `String` | `null` | Error message |

## Events

| Event | Description |
|-------|-------------|
| `update:modelValue` | Emitted on value change |

## Usage

```vue
<script setup>
import { ref } from 'vue'
import { VueNiceInput } from '@vuenice/input'

const value = ref('')
</script>

<template>
  <VueNiceInput v-model="value" placeholder="Enter text" />
</template>
```