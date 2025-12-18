# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# examinerande-gruppuppgift-Vue - Galactic Getaways

A small Vue 3 app where users can browse “space experiences”, read more about each one, and proceed to a simple checkout flow with a cart summary + confirmation modal.

## What the app does

- Shows a list of experiences on the Home page
- Lets the user filter/search experiences (category + age presets + date range + participants via query params)
- Lets the user open an experience detail page and read a Markdown-based description
- Provides a Basket/Checkout page with contact + delivery inputs and a cart summary
- Opens a confirmation modal before “payment”

## Props & emits used in this project

- **Props**
  - Experience detail page receives `id` as a prop (`id: string | number`)
  - ConfirmModal receives customer details (`email`, `firstName`, `lastName`, `city`, `postalCode`)
- **Emits**
  - `ConfirmModal` uses the `update:modelValue` emit to support `v-model` (open/close)
  - `Slider` emits actions such as “book” and “read more” (handled in `Home.vue`)

  ### How navigation works in this app

- **Home** is available at `/` and shows the list of experiences.
- When the user clicks **Book**, the app navigates to a route that includes an **id**:
  - `booking/:id`
- When the user clicks **Read more**, the app navigates to a route that includes an **id**:
  - `experience/:id`

## Tech used (from the code)

- Vue 3 + `<script setup>` + TypeScript
- Vue Router (route params + query params)
- Pinia (cart state)
- Tailwind CSS (utility classes)
- MarkdownIt (render experience descriptions)

## Run locally

```bash
npm install
npm run dev

```
