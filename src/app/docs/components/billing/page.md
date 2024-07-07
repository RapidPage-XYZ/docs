---
title: Billing components
nextjs:
  metadata:
    title: Billing components
    description: Learn how to use the billing components in the RapidPage App Starter Kit.
---

The billing components are used to display billing information to the user.

---

## Introduction

All billing components are located in the `resources/js/Components/Billing` directory. These components make it easy to display billing information to your users.

The following billing components are available:

- **Subscription Alert**
- **Tier Card**
- **Tier Card Buttons**

These components are used on the `/billing` page of the starter kit.

---

## Subscription Alert

This alert is used to display to the user that they are currently not subscribed to any plans offered in your app.

You can use it like this:

```js
<script setup lang="ts">
import SubscriptionAlert from "@/Components/Billing/SubscriptionAlert.vue";

const props = defineProps<{
    isSubscribed: boolean;
}>();
</script>

<template>
    <SubscriptionAlert v-if="!isSubscribed" />
</template>
```

---

## Tier Card

The **TierCard** component is used to display information about the different tiers of your app.

You can see how it actually works in the `resources/js/Pages/Billing.vue` file, but here is a quick example.

```js
<script setup lang="ts">
import TierCard from "@/Components/Billing/TierCard.vue";
</script>

<template>
    <TierCard
        v-for="tier in filteredTiers"
        :isSubscribed="isSubscribed" // checks if the user is subscribed to this tier
        :tier="tier" // the tier object
        :activeSubscriptionPriceId="activeSubscriptionPriceId" // checks if the user is subscribed to this tier
        :frequency="frequency" // monthly or annually
    />
</template>
```

### Tier Card Buttons

The **TierCardButtons** component is used to display the buttons for the different tiers of your app.

This is only used within the **TierCard** component.

```js
<script setup lang="ts">
import TierCardButtons from "@/Components/Billing/TierCardButtons.vue";
</script>

<template>
    // This is used within the TierCard component
    <TierCardButtons
        :isSubscribed="isSubscribed"
        :activeSubscriptionPriceId="activeSubscriptionPriceId"
        :subscription="tier.subscription"
        :priceId="tier.subscription?.price_id"
    />
</template>
```

---
