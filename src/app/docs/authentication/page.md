---
title: Authentication
nextjs:
  metadata:
    title: Authentication
    description: Learn how to set up authentication in the RapidPage App Starter kit.
---

The RapidPage App Starter kit comes with built-in authentication features that you can use to secure your application. This guide will cover how to set up OAuth authentication in the starter kit and how you can customize it to fit your needs.

---

## Introduction
RapidPage App Starter kit supports two kinds of authentication, OAuth and Credential-based authentication. Both are used to authenticate users and grant them access to the application at the same time.

You can customize the authentication methods to fit your needs, in this guide we will cover how to customize the authentication methods.

---

## OAuth Providers
RapidPage App Starter kit by default uses [GitHub](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps) & [Google](https://developers.google.com/identity/protocols/oauth2) as OAuth providers. It's super easy to add more OAuth providers to the starter kit or remove the existing ones.


### How does it work?
For each provider there are two routes used.

1. `/auth/{provider}/redirect` - This route is used to redirect the user to the OAuth provider's login page.
2. `/auth/{provider}/callback` - This route is used to handle the callback from the OAuth provider and authenticate the user.

When the user hits the callback route, the user gets authenticated and redirected to the `/billing` if the user don't have a subscription or `/dashboard` if the user has a subscription.

{% callout type="warning" title="Heads up" %}
We recommend that you only use the OAuth providers that are already set up in the starter kit. This is to avoid any time spending on setting up the OAuth providers.
{% /callout %}
---

### Adding OAuth Providers

To add more OAuth providers, you need to choose a [provider](https://socialiteproviders.com/) from Socialite Providers.

{% callout title="Example" %}
In this example, we will add Facebook as an OAuth provider.
{% /callout %}
1. Install the provider using composer.
```shell
composer require socialiteproviders/facebook
```

2. After you have chosen a provider, you must the following to the `.env` file.

```shell
# .env file

FACEBOOK_CLIENT_ID=<some-client-id>
FACEBOOK_CLIENT_SECRET=<some-client
FACEBOOK_REDIRECT_URI=<your-callback-uri>
```

3. After you have added the environment variables to the `.env` file, you need to add the provider to the `config/services.php` file.

```javascript
'services' => [
    // ...
    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'redirect' => env('FACEBOOK_REDIRECT_URI'),
    ],
],
```

4. Create a controller in the `/Controllers/Auth/OAuth/Facebook/` directory called FacebookController.php

The controller should look like this. Remember to extend the `BaseLoginController.php` controller.

```javascript
// app/Http/Controllers/Auth/OAuth/Facebook/LoginController.php
<?php

namespace App\Http\Controllers\Auth\OAuth\GitHub;

use App\Http\Controllers\Auth\OAuth\BaseLoginController;

class LoginController extends BaseLoginController
{
    protected function getDriver(): string
    {
        return 'facebook';
    }
}
```

5. Set the redirects and callback routes in the `routes/auth.php` file.
```javascript
use App\Http\Controllers\Auth\OAuth\Facebook\LoginController as FacebookLoginController;

Route::middleware('guest')->group(function () {
    // ...
    Route::get('auth/facebook/redirect', [FacebookLoginController::class, 'redirect'])
        ->name('auth.facebook');

    Route::get('auth/facebook/callback', [FacebookLoginController::class, 'callback']);
});
```

6. Add Login with Facebook button to the login & register page.

Find the OAuthLogin component in `/js/components/OAuth/OAuthLogin.vue` and add the following code.

```javascript
<script setup lang="ts">
import GitHubLogo from "@/Components/Logos/GitHubLogo.vue";
import GoogleLogo from "@/Components/Logos/GoogleLogo.vue";
import FacebookLogo from "@/Components/Logos/FacebookLogo.vue";

defineProps<{
    github: string;
    google: string;
    facebook: string; // Add this line
}>();
</script>

<template>
    <a
        :href="github"
        class="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
    >
        <GitHubLogo />
        <span class="text-sm font-semibold leading-6">GitHub</span>
    </a>

    <a
        :href="google"
        class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
    >
        <GoogleLogo />
        <span class="text-sm font-semibold leading-6 text-black">Google</span>
    </a>
    
    // Add this block
    <a
        :href="face"
        class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
    >
        <FacebookLogo />
        <span class="text-sm font-semibold leading-6 text-black">Facebook</span>
    </a>
</template>

<style scoped></style>
```

After a bit of tweaking on the front-end, you should have a working Facebook OAuth provider.

{% next-image src="/images/docs/oauth/facebookoauth.png" alt="Facebook OAuth login" width="1000" height="1000" %}
---

