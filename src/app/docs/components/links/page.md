---
title: Link Components
nextjs:
  metadata:
    title: Link Components
    description: Learn how to use the Link components in the RapidPage App Starter Kit
---

RapidPage Starter kit offers different links for the navbar for both mobile and desktop

---

## Introduction

The components in the `resources/js/Components/Links` are used for the navbar in the layouts for the starter kit. 

The different components are:
- **Nav Link**
- **Sidebar Nav Link**
- **Sidebar Profile Nav Link**

---

## Nav Link

The Nav Link component is used in the [Header Component](/docs/components/header) and the [Footer Component](/docs/components/footers) on the landing page of your app.

It's easy to use, and here is how to use it:

```jsx
<script setup lang="ts">
import NavLink from "@/Components/Links/NavLink.vue";
<script>

<template>
    <NavLink :href="route('dashboard')">
        Dashboard
    </NavLink>
</template>
```

In this example, the Nav Link goes to the dashboard of app.

---

## Sidebar Nav Link

The Sidebar Nav Link is used in the [Header Component](/docs/components/header) as a mobile navigation on the landing page of your app.

It's easy to use, and here is how to use it:

```jsx
<script setup lang="ts">
import SidebarNavLink from "@/Components/Links/SidebarNavLink.vue";
<script>

<template>
    <SidebarNavLink :href="route('dashboard')">
        Dashboard
    </SidebarNavLink>
</template>
```

In this example, the Sidebar Nav Link goes to the dashboard of app.

---

## Sidebar Profile Nav Link

The Sidebar Profile Nav Link is used in the [Header Component](/docs/components/header) as a mobile navigation on the landing page of your app.

It's easy to use, and here is how to use it:

```jsx
<script setup lang="ts">
import SidebarProfileNavLink from "@/Components/Links/SidebarProfileNavLink.vue";
<script>

<template>
    <SidebarProfileNavLink />
</template>
```

If the user is logged in, it will display the user's username. If the user is not logged in, it will display a login button.

---

