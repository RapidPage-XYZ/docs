---
title: Testimonial Component
nextjs:
  metadata:
    title: Testimonial Component
    description: Learn how to use the Testimonial component in the RapidPage App Starter Kit
---

Having testimonials on your website can help build trust with your users. The RapidPage App Starter Kit comes with a Testimonial component that you can use to display testimonials on your website.

---

## Introduction

The Testimonial component is used to display testimonials on your website. The component is located in the `resources/js/Components/Testimonial` directory.

---

## Testimonial Component

The testimonial component offers a simple way to display testimonials on your website. By default you can add one featured testimonial and multiple other normal testimonials.

The component is named `Testimonial.vue` and you can use it like this:

```jsx
<script setup lang="ts">
import Testimonial from "@/Components/Testimonial/Testimonial.vue";
</script>

<template>
    <Testimonials>
        <template #title> Testimonials</template>
    
        <template #description>
            We have worked with thousands of amazing people
        </template>
    </Testimonials>
</template>
```

To edit and change the testimonal data, you can do so in the `Testimonial.vue` file like this:

```js
// Testimonial.vue
<script setup lang="ts">
const featuredTestimonial = {
    body: "Create, assign, and track tasks with ease. Set deadlines, priorities, and dependencies to ensure timely completion. Utilize Kanban boards, Gantt charts, and list views for flexible task visualization.",
    author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
};

const testimonials = [
    [
        [
            {
                body: "Share files, comments, and updates in real-time. Integrate with popular communication tools like Slack and Microsoft Teams. Collaborative document editing to keep everyone on the same page.",
                author: {
                    name: "Leslie Alexander",
                    handle: "lesliealexander",
                    imageUrl:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
            {
                body: "Create, assign, and track tasks with ease. Set deadlines, priorities, and dependencies to ensure timely completion. Utilize Kanban boards, Gantt charts, and list views for flexible task visualization.",
                author: {
                    name: "Leslie Alexander",
                    handle: "lesliealexander",
                    imageUrl:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
        [
            {
                body: "Generate detailed reports on project progress, team performance, and resource allocation. Customizable dashboards to track key metrics and KPIs. Export reports in various formats for stakeholder presentations.",
                author: {
                    name: "Lindsay Walton",
                    handle: "lindsaywalton",
                    imageUrl:
                        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
    ],
    [
        [
            {
                body: "Track time spent on tasks and projects for accurate billing. Generate invoices directly from logged hours and expenses. Integrate with accounting software like QuickBooks and Xero.",
                author: {
                    name: "Tom Cook",
                    handle: "tomcook",
                    imageUrl:
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
        [
            {
                body: "Track time spent on tasks and projects for accurate billing. Generate invoices directly from logged hours and expenses. Integrate with accounting software like QuickBooks and Xero.",
                author: {
                    name: "Leonard Krasner",
                    handle: "leonardkrasner",
                    imageUrl:
                        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
            {
                body: "Track time spent on tasks and projects for accurate billing. Generate invoices directly from logged hours and expenses. Integrate with accounting software like QuickBooks and Xero.",
                author: {
                    name: "Leonard Krasner",
                    handle: "leonardkrasner",
                    imageUrl:
                        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                },
            },
        ],
    ],
];
</script>
```
