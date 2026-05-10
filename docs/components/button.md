# Button Component

The Button component is a customizable button for Vue 3 applications.

## Installation

```bash
npm install @vuenice/button
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `String` | `'primary'` | Button style variant: `'primary'`, `'secondary'`, `'outline'` |
| `size` | `String` | `'md'` | Button size: `'sm'`, `'md'`, `'lg'` |
| `disabled` | `Boolean` | `false` | Whether the button is disabled |
| `loading` | `Boolean` | `false` | Show loading spinner |
| `icon` | `String` | `null` | Icon name |

## Events

| Event | Description |
|-------|-------------|
| `click` | Emitted when button is clicked |

## Usage

```vue
<script setup>
import { VueNiceButton } from '@vuenice/button'
</script>

<template>
  <VueNiceButton variant="primary" @click="handleClick">
    Click Me
  </VueNiceButton>
</template>
```

## Live Example

```vue
<script setup>
import { ref } from 'vue'
import { VueNiceButton } from '@vuenice/button'

const loading = ref(false)

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <VueNiceButton :loading="loading" @click="handleClick">
    Submit
  </VueNiceButton>
</template>
```