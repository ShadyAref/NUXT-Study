<template>
  <v-app-bar
    elevation="2"
    color="surface"
    class="px-4"
  >
    <v-toolbar-title>
      <NuxtLink
        to="/"
        class="text-h6 font-weight-bold text-decoration-none"
      >
        First Nuxt Project
      </NuxtLink>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      v-for="item in navItems"
      :key="item.title"
      :to="item.to"
      variant="text"
      class="mx-1 text-capitalize"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
const navItems = [
  { title: 'Profile', to: '/profile' },
  { title: 'About', to: '/about' },
  { title: 'Products', to: '/products' },
  { title: 'CreateTask', to: '/create' },
]
</script>
