---
title: Container Component
nextjs:
  metadata:
    title: Container Component
    description: Learn how to use the Container component in the RapidPage App Starter Kit
---

The **Container** component is used to wrap the content of your website in a container. This helps to keep the content centered and aligned with the rest of the website.

---

## Introduction

The Container component is located in the `resources/js/Components/Container` directory.

The **Container** component is a wrapper that centers its content and constrains its maximum width. It ensures that the content inside it remains within a visually appealing and readable area, especially on larger screens.

---

## Container Component

The **Container** component is super easy to use and can be used like this:

```jsx
<script setup lang="ts">
import Container from "@/Components/Container/Container.vue";
</script>

<template>
    <Container>
        // Your content here...
    </Container>
</template>
```
