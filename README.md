# Nuxt Tailwind Starter

terminal: npx nuxi@latest init <project-name>
terminal: npm install --save-dev @nuxtjs/tailwindcss
Add @nuxtjs/tailwindcss to the modules section of nuxt.config:

```js
modules: ["@nuxtjs/tailwindcss"];
```

created .vscode/settings.json (for tailwind autocompletion - but doesn't work?)
created /assets/main.css, /components, /layouts/default.vue, /pages/index.vue
Added "<NuxtLayout><NuxtPage /></NuxtLayout>" to app.vue
Added tailwind.config.js - NB: Tailwind Autocompletions work in Nuxt only if I have a tailwind.config.js file
