<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-row>
    <v-col cols="12" sm="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-img :src="product.image" max-height="300"></v-img>
    <v-card-title>
      {{ product.title }}
      <v-chip color="primary">{{ product.category }}</v-chip>
    </v-card-title>
    <v-card-subtitle>
      ${{ product.price }}
      <v-rating v-model="product.rating.rate" precision="0.1" readonly></v-rating>
    </v-card-subtitle>
    <v-card-text>
      {{ product.description }}
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="green" @click="addToBasket(product)">Add to Basket</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import ProductsService from "@/services/products/index.js";

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    // Fetch all products when the component is mounted
    this.fetchAllProducts();
  },
  methods: {
    fetchAllProducts() {
      ProductsService.getAllProducts()
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    addToBasket(product) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket.push(product);
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  }
};

</script>
<style>

</style>
