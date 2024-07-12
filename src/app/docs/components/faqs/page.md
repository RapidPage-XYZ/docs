---
title: Faqs Component
nextjs:
  metadata:
    title: Faqs Component
    description: Learn how to use the FAQs component in the RapidPage App Starter Kit.
---

FAQs are a great way to provide answers to common questions that your users might have.

---

## Introduction

The FAQs component is located in the `resources/js/Components/Faqs` directory. This component makes it easy to create a FAQs section in your app.

---

## Usage

To use the FAQs component, you can import it like this:

```jsx
<script setup lang="ts">
import Faqs from "@/Components/Faqs/Faqs.vue";
</script>

<template>
    <Faqs />
</template>

```

To customize the questions and answers, you need to go into the `Faqs.vue` file and update the faqs array like this:

```js
// Faqs.vue
<script setup>
const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept major credit and debit cards (Visa, MasterCard, American Express), as well as PayPal for online payments.",
    },
    // Add more FAQs as needed
];
</script>
```

{% callout title="More components are in the making!" %}
We currently only have one Faqs component available, but we are working on adding more components to the RapidPage App Starter Kit. Stay tuned for updates!
{% /callout %}
