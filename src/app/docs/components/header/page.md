---
title: Header Component
nextjs:
  metadata:
    title: Header Component
    description: Learn how to use the Header component in the RapidPage App Starter Kit
---

The **Header** component is a crucial part of you app, as it is the primary navigation for your users.

---

## Introduction

The **Header** component is located in the `resources/js/Components/Header` directory.

---

## Header Component

The **Header** component is super easy to use and can be used like this:

```jsx
// Layouts/DefaultLayout.vue
<script setup lang="ts">
import Header from "@/Components/Header/Header.vue";
</script>

<template>
    <Header />
</template>
```

### Changing the Navigation Links

The different navigation links can be changed within the `Header.vue` file like this:

```js
// Header.vue
<script setup lang="ts">
import { 
BoltIcon, 
ChatBubbleLeftRightIcon, 
BanknotesIcon, 
QuestionMarkCircleIcon, 
BriefcaseIcon, 
EyeSlashIcon } from "@heroicons/vue/24/outline";

const navigation = [
    { name: "Features", href: "/#features", icon: BoltIcon },
    {
        name: "Testimonials",
        href: "/#testimonials",
        icon: ChatBubbleLeftRightIcon,
    },
    { name: "Pricing", href: "/#pricing", icon: BanknotesIcon },
    { name: "Faqs", href: "/#faqs", icon: QuestionMarkCircleIcon },
    {
        name: "Terms of Service",
        href: "/tos",
        icon: BriefcaseIcon,
        onlySidebar: true,
    },
    {
        name: "Privacy Policy",
        href: "/privacy-policy",
        icon: EyeSlashIcon,
        onlySidebar: true,
    },
];
</script>
```

The `onlySidebar` property is used to show the link only in the sidebar navigation on mobile devices.
