---
title: Logo Components
nextjs:
  metadata:
    title: Logo Components
    description: Learn how to use the Logo components in the RapidPage App Starter Kit
---

This section will cover on how to use svg logos as Vue.js components in the RapidPage App Starter Kit.

---

## Introduction

In the `resources/js/Components/Logos` directory, you will find the different logos that are used in the starter kit.

In this directory you add the svg logos that you want to use in your app. The logos are used in the different components in the starter kit.

---

## Application Logo

This component is necessary for displaying the logo throughout the app.

You can find the `ApplicationLogo.vue` component in the `resources/js/Components/Logos` directory.

You can use it like this:

```jsx
<script setup lang="ts">
import ApplicationLogo from "@/Components/Logos/ApplicationLogo.vue";
</script>

<template>
    <ApplicationLogo />
</template>
```

You should change the contents of this component with your own svg logo.

---

## GitHub Logo

The GitHub logo is used for the Oauth login with GitHub.

You can find the `GitHubLogo.vue` component in the `resources/js/Components/Logos` directory.

---

## Google Logo

The Google logo is used for the Oauth login with Google.

You can find the `GoogleLogo.vue` component in the `resources/js/Components/Logos` directory.

---

## Other Logos

The other logos in the `resources/js/Components/Logos` directory are just placeholder logos for landing page, and you should also replace them with your own svg logos.
