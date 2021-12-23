# Vue 3 + Typescript + Vite + Vuetify 3

This template should help get you started developing with Vue 3, Vuetify and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## What does this template include

- Vue 3: Template is completly build with latest vue 3 features like Single file component and <script setup> mode which makes your code much more clean and readable.
  Router, Directives, Middlewares and Mixins are all configured and prebuilt in to the template.
- Typescript: The whole project is written with typescipt modular form.
- Vite: The project is built on top of vite, which have boosted everything from server side rendering up to production bundle. You can read this official article from Vite to know more about it <https://vitejs.dev/guide/why.html>.
- Vuetify 3: Alpha version of Vuetify 3 is available and is completly configured including custom themes and colors.
- SCSS: Sass is configured and is integrated to work globally as well as inside local components, it is integrated with vuetify too.
- Vuex Store: Store is configured with module form that supports multiple versions of stores with dfferent names, as it is more efficient for medium and big projects.

## Latest Updates

- Multilangual Configurations (i18n) added.
  
## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
