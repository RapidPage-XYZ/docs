---
title: Features Component
nextjs:
  metadata:
    title: Features Component
    description: Learn how to use the Features component in the RapidPage App Starter Kit
---

A feature section is a great way to show what your product has to offer. The RapidPage App Starter Kit comes with a `Features` component that you can use to create feature sections in your app.

---

## Introduction

The `Features` component is located in the `resources/js/Components/Features` directory.

---

## Features Component

The `Features` component is super easy to use and can be used like this:

```jsx
<script setup lang="ts">
import Features from "@/Components/Features/Features.vue";
</script>

<template>
    <Features>
        Powerful Features to Enhance Your Project Management
    </Features>
</template>
```

### Customizing Features

You can customize the features by changing the **Main feature** and **features** data in the `Features.vue` file like this:

```js
// Features.vue
<script setup lang="ts">
import {
    ClockIcon,
    GlobeAltIcon,
    RectangleStackIcon,
    UserGroupIcon,
    PresentationChartLineIcon,
} from "@heroicons/vue/24/solid";

const mainFeature = {
    title: "Advanced Task Management",
    description:
        "Create, assign, and track tasks effortlessly; set deadlines, priorities, and dependencies; and visualize tasks using Kanban boards, Gantt charts, and list views.",
    href: "#",
    image: "https://laravel.com/assets/img/welcome/docs-light.svg",
};

type Feature = {
    title: string;
    description: string;
    href?: string;
    icon: any;
};

const features: Feature[] = [
    {
        title: "Real-time Collaboration",
        description: `Share files, comments, and updates instantly; integrate with Slack and Microsoft Teams; and edit documents collaboratively to keep everyone aligned.`,
        href: "#",
        icon: UserGroupIcon,
    },
    {
        title: "Comprehensive Reporting and Analytics",
        description:
            "Generate detailed reports on project progress, team performance, and resource allocation; customize dashboards to track key metrics and KPIs; and export reports for stakeholder presentations.",
        href: "#",
        icon: PresentationChartLineIcon,
    },
    {
        title: "Time Tracking and Invoicing",
        description: `Track time spent on tasks for accurate billing; generate invoices from logged hours and expenses; and integrate with QuickBooks and Xero for seamless accounting.`,
        icon: ClockIcon,
    },
];
</script>
```
