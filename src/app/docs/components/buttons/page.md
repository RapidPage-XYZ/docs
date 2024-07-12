---
title: Button components
nextjs:
  metadata:
    title: Button components
    description: Learn how to use the different button components in the RapidPage App Starter Kit.
---

The RapidPage App Starter kit comes with a set of button components that you can use to create interactive elements in your app.

---

## Introduction

All button components are located in the `resources/js/Components/Buttons` directory. These components make it easy to create different types of buttons in your app.

The following button components are available:
- **Danger Button**
- **Primary Button**

---

## Primary Button

The **PrimaryButton** component is used to create primary buttons in your app. You can use it like this:

```jsx
<script setup lang="ts">
import PrimaryButton from "@/Components/Buttons/PrimaryButton.vue";
</script>

<template>
    <PrimaryButton>
        Get Started
    </PrimaryButton>
</template>
```

---

## Danger Button

The **DangerButton** component is used to create danger buttons in your app. You can use it like this:

```jsx
<script setup lang="ts">
import DangerButton from "@/Components/Buttons/DangerButton.vue";
</script>

<template>
    <DangerButton>
        Delete your Account
    </DangerButton>
</template>
