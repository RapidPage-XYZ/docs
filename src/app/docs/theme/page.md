---
title: Theme
nextjs:
  metadata:
    title: Theme
    description: Theme management in the RapidPage App Starter kit.
---

Theme is easy to customize in the RapidPage App Starter kit.

---

## Introduction

We use [Tailwind CSS](https://tailwindcss.com/) for the styling of the RapidPage App Starter kit. Tailwind CSS is a utility-first CSS framework that is easy to customize.

---

## Customizing the Theme

Everything with theme customization is handled in the `tailwind.config.js` file. You can change the colors, fonts, and more in this file.

This is the default `tailwind.config.js` looks like
```js
// tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                    DEFAULT: "#3b82f6",
                },
                danger: {
                    50: "#fdf2f2",
                    100: "#fde8e8",
                    200: "#fbd5d5",
                    300: "#f8b4b4",
                    400: "#f98080",
                    500: "#f05252",
                    600: "#e02424",
                    700: "#c81e1e",
                    800: "#9b1c1c",
                    900: "#771d1d",
                    950: "#610404",
                    DEFAULT: "#f05252",
                },
                background: {
                    light: "#f8fafc",
                    dark: "#000000",
                },
            },
        },
    },

    plugins: [forms, typography],
};
```

All the colors are access with `bg-primary-500` or `text-primary-500` classes. You can change the colors in the `colors` object in the `tailwind.config.js` file.

---

### Fonts
All fonts are loaded from Google Fonts in the `resources/views/app.blade.php`.

```js
// resources/views/app.blade.php

<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">
```

After you have loaded the font, you can use it in the `tailwind.config.js` file.

{% callout title="Configuration Docs" %}
You can find more information about customizing Tailwind CSS in the [configuration documentation](https://tailwindcss.com/docs/configuration).
{% /callout %}
