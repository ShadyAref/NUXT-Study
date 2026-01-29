<template>
  <div
    class="error-page d-flex flex-column align-center justify-center"
    style="min-height: 95vh;"
  >
    <v-card class="mx-auto w-50 pa-5 text-center">
      <v-card-title class="text-h4 mb-4">
        {{ error.statusCode }}
      </v-card-title>
      <v-card-title class="text-h4 mb-4">
        {{ error.statusMessage }}
      </v-card-title>
      <v-btn @click="clearErr">
        Back to home
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
})

// const clearErr = () => {
//   clearError({ redirect: '/' })
// }
</script>
