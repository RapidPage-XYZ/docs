---
title: Footer Components
nextjs:
  metadata:
    title: Footer Components
    description: Learn how to use the different footer components in the RapidPage App Starter Kit.
---

The RapidPage App Starter kit comes with a set of footer components that you can use to create footers in your app.

---

## Introduction

All footer components are located in the `resources/js/Components/Footers` directory. These components make it easy to create different types of footers in your app.

The following footer components are available:
- **Footer**
- **Footer Four Column**

---

## Footer

The **Footer** component is used to create a simple footer in your app. You can use it like this:

```jsx
<script setup lang="ts">
import Footer from "@/Components/Footer/Footer.vue";
</script>

<template>
    <Footer />
</template>
```

The different footer links can be changed within the `Footer.vue` file like this:

```js
// Footer.vue
<script setup lang="ts">
const navigation = {
    main: [
        { name: "Features", href: "#features" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Pricing", href: "#pricing" },
        { name: "Terms of Service", href: "/tos" },
        { name: "Privacy Policy", href: "/privacy-policy" },
    ],
};
</script>
```

---

## Footer Four Column

The **FooterFourColumn** component is used to create a footer with four columns in your app. The component is named `FooterFourCol.vue`.

You can use it like this:
```jsx
<script setup lang="ts">
import FooterFourCol from "@/Components/Footer/FooterFourCol.vue";
</script>

<template>
    <FooterFourCol />
</template>
```

The different footer links can be changed within the `FooterFourCol.vue` file like this:

```js
// FooterFourCol.vue
<script setup lang="ts">
import { defineComponent, h } from "vue";

const navigation = {
    solutions: [
        { name: "Features", href: "/#features" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Faqs", href: "/#faqs" },
    ],
    support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Services", href: "/tos" },
    ],
    social: [
        {
            name: "X",
            href: "#",
            icon: defineComponent({
                render: () =>
                    h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                        h("path", {
                            d: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z",
                        }),
                    ]),
            }),
        },
        // more social links...
    ],
};
</script>
```
