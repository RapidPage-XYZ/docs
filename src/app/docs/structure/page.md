---
title: Directory structure
nextjs:
  metadata:
    title: Directory structure
    description: Directory structure of the RapidPage App Starter kit.
---

The RapidPage App Starter kit is structured in a way that makes it easy to navigate and understand.

---

## Introduction

RapidPage Starter follows the [default Laravel application structure](https://laravel.com/docs/structure#introduction) with a few modifications to make it easier to work with.

---

### Root directory

The root directory of the RapidPage App Starter kit contains all the necessary files and directories to get you started.

```shell
rapidpage-app-starter/ # Root directory
```

---

### App Directory
Everything that is handed on the backend in the RapidPage App Starter kit is located in the `app` directory.

```shell
├── app/
    |── Action/Sitemap/ # Action for building sitemap sitemap.xml
    |── Http/
        |── Controllers/
            |── Auth/ # Auth & OAuth Logic
            |── Billing/ # Billing management
            |── Cashier/ # Subscription checkout
            |── ProfileController.php # User profile controller
            |── WelcomeController.php # Welcome controller for landing page
        |── Middleware/
            |── SubscribedMiddleware.php/ # Check if user is subscribed
    |── Models/ # Database models
    |── Notifications/Auth/ # Auth email notifications
    |── Providers/AppServiceProvider.php # Cashier TAX & Super admin
```

---

### Config Directory
RapidPage is pretty much config driven and all the configuration files are located in the `config` directory. You can find the configuration files for Stripe Subscription & Legal (TOS & Privacy Policy).

```shell
├── config/
    |── stripe.php # Stripe Subscription configuration & Subscription tiers
    |── legal.php # Legal configuration TOS & Privacy Policy
```

---

### Database Directory
Database migrations and seeders are located in the `database` directory.

```shell
├── database/
    |── Migrations/ # Database migrations
    |── Seeders/ # Database seeders
```

---

### Lang Directory
RapidPage supports localization and all the language files are located in the `lang` directory.

```shell
├── lang/
    |── en.json/ # Default language file
```
{% callout title="Localization Documentation" %} 
Read more about [Localization](https://laravel.com/docs/11.x/localization#main-content) in the Laravel documentation. You need to build the logic to change the language in the frontend.
{% /callout %}

Example of how to use the localization in the frontend:

```javascript
{{ __('auth.failed') }}

// Output: These credentials do not match our records.
```

{% callout title="Loading locale & localization" %}
The locale and localization are loaded by the `HandleInertiaRequests` middleware that [Inertia.js](https://inertiajs.com/shared-data) provides. 

You can find the middleware in the `app/Http/Middleware/HandleInertiaRequests.php` file.
{% /callout %}

---

### Public Directory

Public directory contains all the public assets like images, favicons, robots.txt, and sitemap.xml.

Use this website to quickly generate favicons for your project: [Favicon Generator](https://favicon.io/favicon-converter/)

Place all the generated favicons in the `public/images/favicons` directory, excluding `favicon.ico`. And rename `site.webmanifest` to `site.json`.

```shell
├── public/
    |── images/favicons # Favicon images
    |── favicon.ico # Favicon
    |── robots.txt # Robots.txt file
    |── sitemap.xml # Sitemap file
```

---

### Resources Directory

The `resources` directory contains all the assets like CSS, JavaScript, and views. `/js/Pages` contains all the pages that are rendered on the frontend. 

```shell
├── resources/
    |── Plugins/ # CSS files
    |── css/ # Tailwind CSS Boilerplate
    |── js/
        |── Compoents/
        |── Layouts/
        |── Pages/
        |── Types/
        |── store/
    |── views/
```

---

### Routes Directory

The `routes` directory contains all the routes for the RapidPage App Starter kit.

```shell
├── routes/
```
