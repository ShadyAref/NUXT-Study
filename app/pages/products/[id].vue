<template>
  <div class="product-details">
    <v-article
      v-if="data"
    >
      <v-img
        :src="data.thumbnail"
        alt="product.title"
        height="500"
        width="500"
        cover
      />
      <v-article-title>
        <v-article-title>
          <pre>{{ data.title }}</pre>
        </v-article-title>
      </v-article-title>
    </v-article>

    <div
      v-else
      class="text-center pa-8"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(`https://dummyjson.com/products/${useRoute().params.id}`, {
  lazy: true,
})

// if (error) {
//   throw createError({
//     statusCode: error.statusCode,
//     statusMessage: error.statusMessage,
//   })
// }
</script>
