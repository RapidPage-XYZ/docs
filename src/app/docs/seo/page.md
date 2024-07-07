---
title: SEO
nextjs:
  metadata:
    title: SEO
    description: SEO management in the RapidPage App Starter kit.
---

We have made it easy to use SEO in the RapidPage App Starter kit. You can manage the SEO of your app with ease.

---
## Introduction

SEO is a crucial part of any app. It helps you to rank higher in search engines and get more traffic to your app. We have made it easy to manage the SEO of your app in the RapidPage App Starter kit.

---

## How does it work?

In every layout file, you have 3-4 different props you can use to enter the SEO information for your page.

```js
<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";

</script>

<template>
    <DefaultLayout
        title="Streamline Your Projects"
        description="Empower your team to achieve more with TaskMaster, the ultimate project management solution. Seamlessly plan, track, and collaborate on tasks from a single, intuitive platform."
        url="/"
        keywords="project management software, task management tool, team collaboration platform, TaskMaster project management, project planning software, task tracking solution"
    >
```


### Default Layout & Guest Layout

Well, none of the SEO props you see in the example above are not required, but it is recommended to use them. The more information you provide, the better your SEO will be.

- `title`: The title of the page.
- `description`: The description of the page.
- `url`: The URL of the page.
- `keywords`: The keywords of the page.

These props are available in the Default Layout and Guest Layout.

---

### Other layouts

In the other layouts that are available in the RapidPage App Starter kit, you only have access to the `title` & `description` props.

- `title`: The title of the page.
- `description`: The description of the page.

```js
<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
</script>

<template>
    <AuthenticatedLayout
        title="Dashboard"
        description="Dashboard for TaskManager"
    >

    // Your content here... 

    </AuthenticatedLayout>
</template>
```

Billing layout

```js
<script setup lang="ts">
import BillingLayout from "@/Layouts/BillingLayout.vue";
</script>

<template>
    <BillingLayout title="Subscriptions">

    // Your content here... 
    
    </BillingLayout>
</template>
```
