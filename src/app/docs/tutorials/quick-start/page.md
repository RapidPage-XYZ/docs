---
title: Quick Start
nextjs:
  metadata:
    title: Quick Start
    description: Quick starter guide on how to use the RapidPage App Starter Kit
---

This guide covers on how to set up and use the different components in the RapidPage App Starter Kit.

---

## Introduction

Before you start on this guide, make sure you have finished the [Installation](/docs/installation) guide and the [Configuration](/docs/configuration) guide.

---

## Landing Page

The landing page is the first page that users see when they visit your app.

Here is quick example on how it can look like:

```jsx
<script setup lang="ts">
import Hero from "@/Components/Hero.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import Features from "@/Components/Features.vue";
import LogoClouds from "@/Components/LogoClouds.vue";
import Testimonials from "@/Components/Testimonial/Testimonials.vue";
import Faqs from "@/Components/Faqs/Faqs.vue";
import { Tier } from "@/types";
import PricingTwoTiers from "@/Components/Pricing/PricingTwoTiers.vue";

defineProps<{
    tiers: {
        monthly: Tier[];
        yearly: Tier[];
    };
}>();
</script>

<template>
    <DefaultLayout
        title="Streamline Your Projects"
        description="Empower your team to achieve more with TaskMaster, the ultimate project management solution. Seamlessly plan, track, and collaborate on tasks from a single, intuitive platform."
        url="/"
        keywords="project management software, task management tool, team collaboration platform, TaskMaster project management, project planning software, task tracking solution"
    >
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

        <LogoClouds>
            <template #title>
                Trusted by the world’s most innovative teams
            </template>
        </LogoClouds>

        <Features>
            Powerful Features to Enhance Your Project Management
        </Features>

        <Testimonials>
            <template #title> Testimonials</template>

            <template #description>
                We have worked with thousands of amazing people
            </template>
        </Testimonials>

        <PricingTwoTiers :tiers="tiers">
            <template #title>
                Flexible Pricing Plans to Fit Your Needs
            </template>

            <template #description>
                TaskMaster offers tailored pricing plans, from essential tools
                for small teams to advanced features and custom solutions for
                large enterprises.
            </template>
        </PricingTwoTiers>

        <Faqs />
    </DefaultLayout>
</template>
```

This is what you need for the landing page, and now you can create something awesome with the RapidPage App Starter Kit!
