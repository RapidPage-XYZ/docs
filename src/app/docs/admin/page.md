---
title: Admin Dashboard
nextjs:
  metadata:
    title: Admin Dashboard
    description: Admin Dashboard of the RapidPage App Starter kit.
---

The already built-in admin dashboard of the RapidPage App Starter saves you a lot of time and effort. We have set it up, you just build from there!

---

## Introduction
The admin dashboard is made for what ever you need it for. You can access the dashboard by going to `/admin/dashboard` route.

---

### Setup
Firstly you need to set the super admin credentials in the `.env` file. You can do this by adding the following environment variables in the `.env` file.

```shell
# .env file

# Super Admin Credentials
USER_SUPER_ADMIN_EMAIL=
USER_SUPER_ADMIN_PASSWORD=
```

You can set the variables to whatever you want. Just make sure you remember them!

{% callout title="Seed the database" %}
Make sure you seed the database after you have set the super admin credentials.

```shell
php artisan db:seed
```
{% /callout %}

You can now log in with the super admin credentials you set.
