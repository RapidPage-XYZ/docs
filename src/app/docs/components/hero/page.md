---
title: Hero Component
nextjs:
  metadata:
    title: Hero Component
    description: Learn how to use the Hero component in the RapidPage App Starter Kit
---

The **Hero** component is used to create a hero section in your app. The hero section is the first thing that users see when they visit your app, so it's important to make it visually appealing and engaging.

---

## Introduction

The **Hero** component is located in the `resources/js/Components/Hero` directory.

---

## Hero Component

The **Hero** component is super easy to use and can be used like this:

```jsx
<script setup lang="ts">
import Hero from "@/Components/Hero/Hero.vue";
</script>

<template>
    <Hero href1="#pricing" href2="#features">
        <template #title>
            Streamline Your
            <span class="text-primary-500">Projects</span> with TaskMaster
        </template>
    
        <template #description>
            Empower your team to achieve more with TaskMaster, the ultimate
            project management solution. Seamlessly plan, track, and
            collaborate on tasks from a single, intuitive platform.
        </template>
    
        <template #button1> Get Started</template>
    
        <template #button2> Learn More</template>
    </Hero>
</template>
```

When it comes to the **href1** and **href2** props, you can pass the links that you want the buttons to navigate to.

{% callout title="Usefully Tips" %}
- The title slot should answer the question: "What is this app about?" or "What problem does this app solve?"
- The description slot should answer the question: "How does this app solve the problem?"

Remember to keep the content concise and engaging to capture the user's attention.
{% /callout %}

