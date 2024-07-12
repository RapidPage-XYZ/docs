---
title: LogoClouds Component
nextjs:
  metadata:
    title: LogoClouds Component
    description: Learn how to use the LogoClouds component in the RapidPage App Starter Kit
---

The **LogoClouds** component is used to show a list of logos in your app. This component is useful for showing the logos of your customers, partners, or sponsors.

---

## Introduction

The **LogoClouds** component is located in the `resources/js/Components/LogoClouds` directory.

---

## LogoClouds Component

The **LogoClouds** component is super easy to use and can be used like this:

```jsx
<script setup lang="ts">
import LogoClouds from "@/Components/LogoClouds/LogoClouds.vue";
</script>

<template>
    <LogoClouds />
</template>
```

### Changing the Logos

The different logos can be changed within the `LogoClouds.vue`.

This component uses Vue.js svg components in the `resources/js/Components/Logos` directory.
