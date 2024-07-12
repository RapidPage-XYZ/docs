---
title: Configuration
nextjs:
  metadata:
    title: Configuration
    description: Learn how to configure the RapidPage App Starter kit for your next project.
---

The RapidPage App Starter kit is highly configurable and can be customized to fit your needs. This guide will cover the configuration options available in the starter kit and how you can customize them.

---

## Introduction
All the configuration files for the RapidPage App Starter kit are located in the `config` directory. 

You can find the configuration files for Stripe Subscription, Legal (TOS & Privacy Policy), and more.

```shell
├── config/
    |── stripe.php # Stripe Subscription configuration & Subscription tiers
    |── legal.php # Legal configuration TOS & Privacy Policy
```
---

### App
You can change the name of the application in the `.env` file in the root directory of your project. 

The `APP_NAME` variable is used to set the name of the application.

The `APP_URL` variable is used to set the URL of the application.

```shell
# .env file

APP_NAME=RapidPage
APP_URL=https://rapidpage.xyz
```

To change between production and development environments, you can set the `APP_ENV` & `APP_DEBUG` variable in the `.env` file.

```shell
# .env file

# The application is now in production mode
APP_ENV=production
APP_DEBUG=false

# The application is now in development mode
APP_ENV=local
APP_DEBUG=true
```

---

### Database
By default, the RapidPage App Starter kit uses SQLite as the database. You can change the database configuration in the `.env` file.

```shell
# .env file

# SQLite Database Configuration
DB_CONNECTION=sqlite

# MYSQL Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

---

### Mail
RapidPage supports various mail drivers thanks to Laravel. You can configure the mail driver in the `.env` file.

```shell
# .env file

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@rapidpage.com"
MAIL_FROM_NAME="${APP_NAME}"
```

{% callout title="Supported mail drivers" %}
Supported [Mail drivers](https://laravel.com/docs/11.x/mail#driver-prerequisites)
{% /callout %}

---

### OAuth

RapidPage supports OAuth authentication with GitHub and Google by default. That means you only have to set up the OAuth keys in the `.env` file.

You can always add more OAuth providers by following the [Laravel Socialite Documentation](https://laravel.com/docs/socialite).

{% callout title="Supported Providers" %}
Use [Socialite Providers](https://socialiteproviders.com/) to find more OAuth providers.
{% /callout %}

{% callout type="warning" title="Be carefull!" %}
Remember that the provider that you use from Socialite Providers must have these returns fields:

- email
- name
- nickname
{% /callout %}

```shell
# .env file

# OAuth Providers
# GitHub
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_REDIRECT_URI=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
```

We highly recommend that you not set more OAuth providers than there already is from the starter kit. This is to avoid any time spending on setting up the OAuth providers.

But you're free to [add more](/docs/oauth) OAuth providers if you want to!

---

### Stripe Subscription

The RapidPage App Starter kit comes with a built-in Stripe Subscription system. We will cover the Stripe Subscription configuration in the [Subscription](/docs/subscription) guide. This is only for the environment variables that you need to set in the `.env` file.

To obtain the Stripe keys, you need to create an account on [Stripe](https://stripe.com/).
To obtain the Stripe Webhook secret, you get one when you run the `php artisan cashier:webhook` or `stripe` cli command.

```shell
# .env file

# Stripe
STRIPE_KEY=your-stripe-key
STRIPE_SECRET=your-stripe-secret
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

You should now be set up with Subscription that you get from the starter kit.

---


### Super Admin Credentials
RapidPage comes with a pre-built admin dashboard that you can access by setting the super admin credentials!

```shell
# .env file

# Super Admin Credentials
USER_SUPER_ADMIN_EMAIL=
USER_SUPER_ADMIN_PASSWORD=
```

{% callout type="warning" title="Seed your database" %}
After you have set the super admin credentials, you need to seed the database to create the super admin user.

```shell
php artisan db:seed
```
{% /callout %}

---

### Analytics
RapidPage uses [PostHog](https://eu.posthog.com) for analytics. You can get the API key from the PostHog dashboard.

```shell
# .env file

# Posthog
VITE_POSTHOG_API_KEY=
VITE_POSTHOG_HOST=https://eu.i.posthog.com
```

PostHog is initialized in the `./resources/js/app.ts` file, as it runs client sided.

---

### Cookie Bot
RapidPage uses [Cookie Bot](https://www.cookiebot.com/) for cookie consent. You can get the domain group ID from the Cookie Bot dashboard.

```shell
# .env file

# Cookie Bot
COOKIEBOT_DOMAIN_GROUP_ID=
COOKIEBOT_HOST=https://consent.cookiebot.eu/uc.js
```

---

## Whats next?

After you have configured the RapidPage App Starter kit, you can start building your application.
    
{% quick-links %}

{% quick-link title="Quick Start" icon="installation" href="/docs/tutorials/quick-start" description="Get started with the RapidPage App Starter kit in no time." /%}

{% quick-link title="Features" icon="presets" href="/docs/admin" description="Learn all about the features RapidPage starter kit has to offer." /%}

{% quick-link title="Subscriptions" icon="plugins" href="/docs/subscriptions" description="Learn to easily create and customize Stripe Subscription for you app." /%}

{% quick-link title="Components" icon="theming" href="/docs/components/dashboard" description="A list of all components that RapidPage starter has to offer." /%}

{% /quick-links %}
