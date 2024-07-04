---
title: Deployment
nextjs:
  metadata:
    title: Deployment
    description: Learn how to deploy your app built with the RapidPage App Starter kit.
---

When your application is ready for deployment, you can follow this guide to deploy your app built with the RapidPage App Starter kit.

---

## Prerequisites

### Laravel
RapidPage App Starter kit is build on top of Laravel and Vue.js and requires the following prerequisites to be met before you can deploy your app.

{% callout type="warning" title="Laravel Server Requirements" %}
The Laravel framework has a few system requirements. You will need to make sure your server meets the [following requirements](https://laravel.com/docs/deployment#server-requirements)
{% /callout %}

---

### Node.js Requirements
```shell
Node.js >= 21.x
NPM >= 10.x
```

---

### Deployment

Please follow the [Laravel Deployment Guide](https://laravel.com/docs/deployment) to deploy your Laravel application.

{% callout type="warning" title="Remember your .env variables" %}
Remember to set your environment variables on your server. Use this [guide](/docs/configuration) to set your environment variables.
{% /callout %}
