---
title: Installation
nextjs:
  metadata:
    title: Installation
    description: Learn how to get the RapidPage App Starter kit set up for your next project.
---

Here is a quick guide to get you started with the RapidPage App Starter kit. This guide will cover the installation process and how to get the starter kit up and running.

---

## Clone the repository
Once you have gotten the invite for the RapidPage App Starter kit from GitHub, you can start by installing the starter kit. You can install the starter kit by running the following command in your terminal:

```shell
git clone https://github.com/RapidPage-XYZ/rapidpage-app-starter.git [YOUR PROJECT NAME]
cd [YOUR PROJECT NAME]
git remote remove origin
```

### Installing dependencies

After you have installed the starter kit, you can install the dependencies by running the following command in your terminal:

```shell
composer install
npm install
```

### Environment setup
After you have installed the dependencies, you can set up the environment by creating a `.env` file in the root of your project. 

Copy the `.env.example` file and rename it to `.env`:

Fill out the following fields in the `.env` file:

```shell
# OAuth Providers
# GitHub
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_REDIRECT_URI=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=

# Stripe
STRIPE_KEY=your-stripe-key
STRIPE_SECRET=your-stripe-secret
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# Super Admin Credentials
USER_SUPER_ADMIN_EMAIL=
USER_SUPER_ADMIN_PASSWORD=

# Posthog
VITE_POSTHOG_API_KEY=
VITE_POSTHOG_HOST=https://eu.i.posthog.com

# Cookie Bot
COOKIEBOT_DOMAIN_GROUP_ID=
COOKIEBOT_HOST=https://consent.cookiebot.eu/uc.js
```

{% callout title="Configuration guide" %}
You can find a detailed configuration guide for the `.env` file [here](/docs/configuration).
{% /callout %}

### Database setup
By default, the starter kit uses SQLite as the database. You can change the database configuration in the `.env` file. To migrate the database, you can run the following command in your terminal:

```shell
php artisan migrate
```

After you have successfully migrated the database, you can seed the database by running the following command in your terminal:
```shell
php artisan db:seed
```

{% callout title="You should know!" %}
Laravel support multitude of databases, you can see here [link](https://laravel.com/docs/11.x/installation#databases-and-migrations) for more information.
{% /callout %}

---

## Running the application

When you have successfully set up the environment and the database, you can run the application by running the following these commands simultaneously in your terminal:

```shell
php artisan serve
```
And
```shell
npm run dev
```

### Stripe Webhooks
{% callout title="You should know!" %}
You may use the [Stripe CLI](https://docs.stripe.com/stripe-cli) to help test webhooks during local development.
{% /callout %}

To ensure your application can handle Stripe webhooks, be sure to configure the webhook URL in the Stripe control panel. By default, Cashier's webhook controller responds to the `/stripe/webhook` URL path. -[Laravel Documentation](https://laravel.com/docs/11.x/billing#handling-stripe-webhooks)

RapidPage Starter kit uses Laravel Cashier to handle Stripe subscriptions, and for that convenience, you can use the following command artisan command to start the webhook server:
```shell
php artisan cashier:webhook
```

You can also use the Stripe CLI to help test webhooks during local development.
```shell
stripe listen --forward-to 127.0.0.1:8000/stripe/webhook
```
