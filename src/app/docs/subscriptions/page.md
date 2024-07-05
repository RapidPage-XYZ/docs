---
title: Subscriptions
nextjs:
  metadata:
    title: Subscriptions
    description: Subscriptions management in the RapidPage App Starter kit.
---

The subscriptions management system in the RapidPage App Starter kit is built to be flexible and easy to use. You can manage you subscriptions and plans for the subscription with ease.

---
## Introduction

Before we built RapidPage App Starter kit, we wanted it to be easy as possible to handle subscription within your app. We decided to go on a config build approach where everything about the subscription is handled in one config file.

Everything is handled in the `/config/stripe.php` config file.

---

## Billing paths

In the stripe config have four pre-defined routes: 
- `billing` Where all the subscription plans are for the user
- `portal` Where the user can manage the subscription with Stripe
- `success` The URL to redirect to after a successful subscription creation.
- `cancel` The URL to redirect to if the subscription creation is canceled.

```js
// config/stripe.php

'billing' => [
    'path' => '/billing',
    'portal' => '/billing-portal',
    'success' => 'dashboard', // Route named "dashboard"
    'cancel' => 'dashboard',  // Route named "dashboard"
],
```

---

## Storing Subscription Plans

To save the subscription plans, you have to seed the database with the following command.

```shell
php artisan db:seed
```

## Subscription Plans

The subscription plans are defined in an associative array called subscriptions. Each subscription plan includes various details such as name, slug, Stripe price ID, trial days, and promotion code availability. Additionally, each plan contains a tier with specific details.

Before you enter any information of the subscription plan, you should make sure you have made a Stripe Product with reoccurring payments. You can make them in the Stripe Dashboard.


### Subscription

Every subscription entry need to starter with the Stripe Subscription information.

- `name`: The name of the subscription plan.
- `slug`: A URL-friendly version of the plan name.
- `price_id`: The Stripe price ID associated with the subscription plan.
- `trails_days`: The number of trial days offered for the subscription plan.
- `allow_promotion_code`: A boolean indicating whether promotion codes are allowed for the subscription.

### Tier

Each subscription plan contains a tier array with the following details.

- `name`: The name of the tier.
- `interval`: The billing interval for the subscription (e.g., monthly, yearly).
- `price`: The price of the subscription plan.
- `description`: A brief description of the subscription plan.
- `features`: A JSON-encoded array of features included in the subscription plan.
- `featured`: A boolean indicating whether the plan is featured.
- `cta`: The call-to-action text for the plan.

{% callout title="Seed the database" %}
Make sure you seed the database after you have set the subscription plans.

```shell
php artisan db:seed
```
{% /callout %}

---

## Subscription Example

```js
'subscriptions' => [

    [
        'name' => 'Freelancer Monthly',
        'slug' => 'freelancer-monthly',
        'price_id' => 'price_...',
        'trails_days' => 7,
        'allow_promotion_code' => true,

        'tier' => [
            'name' => 'Freelancer Monthly',
            'interval' => 'monthly',
            'price' => '$15',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'features' => json_encode([
                'Task management',
                'Basic collaboration tools',
                'Standard reporting',
                'Email support',
            ]),
            'featured' => false,
            'cta' => 'Buy plan',
        ],
    ],

    [
        'name' => 'Freelancer Annually',
        'slug' => 'freelancer-annually',
        'price_id' => 'price_...',
        'trails_days' => 14,
        'allow_promotion_code' => true,

        'tier' => [
            'name' => 'Freelancer Annually',
            'interval' => 'yearly',
            'price' => '$160',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'features' => json_encode([
                'Task management',
                'Basic collaboration tools',
                'Standard reporting',
                'Email support',
            ]),
            'featured' => true,
            'cta' => 'Buy plan',
        ],
    ],

    // Other subscription plans...
];
```


