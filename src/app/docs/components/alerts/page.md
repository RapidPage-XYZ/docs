---
title: Alert components
nextjs:
  metadata:
    title: Alert components
    description: Learn how to use the different alert components in the RapidPage App Starter Kit.
---

The RapidPage App Starter kit comes with a set of alert components that you can use to display messages to your users.

---

## Introduction

All alert components are located in the `resources/js/Components/Alerts` directory. These components make it easy to display different types of alerts to your users.

The following alert components are available:

- **Error Alert**
- **Success Alert**
- **Warning Alert**

---

## Success Alert

The **SuccessAlert** component is used to display success messages to your users. You can use it like this:

```js
<script setup lang="ts">
import SuccessAlert from "@/Components/Alerts/SuccessAlert.vue";

const props = defineProps<{
    isSubscribed: boolean;
}>();
</script>

<template>
    <SuccessAlert v-if="isSubscribed">
        You have successfully subscribed to our newsletter 🎉
    </SuccessAlert>
</template>
```

---

## Error Alert

The **ErrorAlert** component is used to display error messages to your users. You can use it like this:

```js
<script setup lang="ts">
import ErrorAlert from "@/Components/Alerts/ErrorAlert.vue";

const props = defineProps<{
    isSubscribed: boolean;
}>();
</script>

<template>
    <ErrorAlert v-if="!isSubscribed">
        An error occurred while subscribing to our newsletter. Please try again later.
    </ErrorAlert>
</template>
```

{% callout type="warning" title="Use Inertia.js Error Props" %}
When returning an error from a Laravel controller in an Inertia.js response, instead of relying on the errors trough props.

You can access the error prop through the `$page.props.errors` object.

```js
<ErrorAlert v-if="$page.props.errors[0]">
    {{ $page.props.errors[0] }}
</ErrorAlert>
```
{% /callout %}

---

## Warning Alert

The **WarningAlert** component is used to display warning messages to your users. You can use it like this:

```js
<script setup lang="ts">
import WarningAlert from "@/Components/Alerts/WarningAlert.vue";

const props = defineProps<{
    isSubscribed: boolean;
}>();
</script>

<template>
    <WarningAlert v-if="isSubscribed">
        You are already subscribed to our newsletter.
    </WarningAlert>
</template>

