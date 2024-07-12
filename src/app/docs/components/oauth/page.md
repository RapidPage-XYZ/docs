---
title: OAuth Components
nextjs:
  metadata:
    title: OAuth Components
    description: Learn how to use the OAuth components in the RapidPage App Starter Kit
---

This section will cover on how to use the OAuth components in the RapidPage App Starter Kit.

---

## Introduction

The components in the `resources/js/Components/OAuth` directory are used for the OAuth login in the starter kit.

To read more about how the OAuth logic works in the starter kit, you can read the [OAuth documentation](/docs/oauth).

The different components are:
- **OAuth Login Section**
- **OAuth Login**

---

## OAuth Login Section

The **OAuthLoginSection** component is used under the **Login** and **Register** forms in the starter kit.

This component shows the different OAuth [login options](/docs/components/oauth#o-auth-login) that are available in the app.

You can use it like this:

```jsx
// resources/js/Pages/Auth/Login.vue
<script setup lang="ts">
import OAuthLoginSection from "@/Components/OAuth/OAuthLoginSection.vue";
</script>

<template>
    <form>
        // Login form...
    </form>
    
    <OAuthLoginSection />
</template>
```

---

## OAuth Login

The **OAuthLogin** component is used in the **OAuthLoginSection** component. 

This component is used to show the different OAuth login options e.g **GitHub**, **Google**.

You can use it like this:

```jsx
// resources/js/Components/OAuth/OAuthLoginSection.vue
<script setup lang="ts">
import OAuthLogin from "@/Components/OAuth/OAuthLogin.vue";
</script>

<template>
    <section>
        // OAuth login section...
        <div class="mt-5 grid grid-cols-2 gap-4">
            <OAuthLogin
                :github="route('auth.github')"
                :google="route('auth.google')"
            />
        </div>
    </section>
</template>
```

In this example, the **OAuthLogin** component shows the **GitHub** and **Google** login options.

To add more or change the OAuth login options, you can [read more here](/docs/oauth#adding-o-auth-providers).

{% callout type="warning" title="Heads up" %}
We recommend that you only use the OAuth providers that are already set up in the starter kit. This is to avoid any time spending on setting up the OAuth providers.
{% /callout %}

