<template>
  <div class="products-page">
    <h1>Products</h1>

    <v-container v-if="data">
      <v-row>
        <v-col
          v-for="product in data.products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            :to="{ name: 'products-id', params: { id: product.id } }"
            class="mx-auto text-center d-flex flex-column"
            max-width="400"
            height="fit-content"
          >
            <v-img
              :src="product.thumbnail"
              alt="product.title"
              height="100%"
              cover
            />

            <v-card-title class="text-subtitle-1 text-center">
              {{ product.title }}
            </v-card-title>

            <v-card-text class="text-body-2">
              {{ product.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div
      v-else
      class="text-center pa-8"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
      <p>Loading products...</p>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://dummyjson.com/products?limit=30', {
  lazy: true,
})
</script>
