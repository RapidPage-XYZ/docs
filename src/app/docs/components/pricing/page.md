---
title: Pricing Components
nextjs:
  metadata:
    title: Pricing Components
    description: Learn how to use the Pricing components in the RapidPage App Starter Kit
---

This section will cover on how to use the Pricing components in the RapidPage App Starter Kit.

---

## Introduction

It's important to have a pricing section in your app to show the different pricing options that you offer. 

The RapidPage App Starter Kit comes with a set of pricing components that you can use to create pricing sections in your app.

---

## Setup

Before you can use the pricing components, you need to set up the subscription & tier config. You can follow the steps in the [Subscriptions](/docs/subscriptions) documentation.

---

## Pricing Components

All pricing components are located in the `resources/js/Components/Pricing` directory. These components make it easy to create different types of pricing sections in your app.

The following pricing components are available:
- **Pricing Card**
- **Pricing Three Tiers**
- **Pricing Two Tiers**


### Pricing Card

The **Pricing Card** component is used to show the different pricing options that you offer. You can use it like this:

```jsx
<script setup lang="ts">
import PricingCard from "@/Components/Pricing/PricingCard.vue";
</script>

<template>
    <PricingCard
        v-for="tier in filteredTiers"
        :key="tier.name"
        :tier="tier"
        :frequency="frequency"
        :href="getHref(tier, frequency.value)"
    />
</template>
```

The **Tier**, **Frequency**, and **Href** props are passed to the Pricing Card component. 

- The **Tier** prop is used to show the different pricing options. 
- The **Frequency** prop is used to show the different billing frequencies.
- The **Href** prop is used to link to the pricing page.

All these props are available in [Pricing Three Tiers](/) and **Pricing Two Tiers** components.


### Pricing Three Tiers

The **Pricing Three Tiers** component is used to show three different pricing options that you offer.

This component is mainly used if you have a none-payable tier, for e.g an **Enterprise** tier. This is talked about in the [Subscriptions](/docs/subscriptions) documentation.

If you don't have a none-payable tier, you should use the [Pricing Two Tiers](/docs/components/pricing#pricing-two-tiers) component.

Here is how to use the **Pricing Three Tiers** component:

```jsx
// Welcome.vue
<script setup lang="ts">
import PricingThreeTiers from "@/Components/Pricing/PricingThreeTiers.vue";
import { Tier } from "@/types";

defineProps<{
    tiers: {
        monthly: Tier[];
        yearly: Tier[];
        notPayable: Tier;
    };
}>();
</script>

<template>
    <PricingThreeTiers :tiers="tiers">
        <template #title>
            Flexible Pricing Plans to Fit Your Needs
        </template>

        <template #description>
            TaskMaster offers tailored pricing plans, from essential tools
            for small teams to advanced features and custom solutions for
            large enterprises.
        </template>
    </PricingThreeTiers>
</template>
```

The **Tiers** prop is passed to the Pricing Three Tiers component. 

This prop contains the different tiers that you offer, and subscription info for [Stripe](https://stripe.com), and is served from the **Welcome Controller** in `app/Http/Controllers/WelcomeController.php`.

### Pricing Two Tiers

The **Pricing Two Tiers** component is used to show two different pricing options that you offer. 

This component is mainly used if you don't have a none-payable tier. If you have a none-payable tier, you should use the [Pricing Three Tiers](/docs/components/pricing#pricing-three-tiers) component.

Here is how to use the **Pricing Two Tiers** component:

```jsx
// Welcome.vue
<script setup lang="ts">
import PricingTwoTiers from "@/Components/Pricing/PricingTwoTiers.vue";
import { Tier } from "@/types";

defineProps<{
    tiers: {
        monthly: Tier;
        yearly: Tier;
    };
}>();
</script>

<template>
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
</template>
```
