<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <app-bar>
    </app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-card color="#F5F5F5" flat class="mt-14 pa-2" width="100%">
              <h4>Products:</h4>
              <span>Category</span>
              <v-select clearable label="Select" :items="categories" v-model="selectedCategory" @change="fetchProductsByCategory" variant="outlined" class="mt-2"></v-select>
              <v-divider></v-divider>
              <Item></Item>
              <div class="d-flex justify-space-around my-2">

              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="10">
            <v-breadcrumbs :items="['Category','Tree']">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
            <v-divider></v-divider>
            <v-toolbar color="transparent" class="pa-4">
              <h1>Products</h1>
              <v-spacer></v-spacer>
            </v-toolbar>
            <Products :products="filteredProducts"></Products>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProductsService from "@/services/products/index.js";

export default {
  data() {
    return {
      categories: [],
      selectedCategory: null,
      products: [],
      filteredProducts: []
    };
  },
  mounted() {
    this.fetchAllCategories();
  },
  methods: {
    fetchAllCategories() {
      ProductsService.getAllCategories()
        .then((data) => {
          this.categories = data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    fetchProductsByCategory() {
      if (this.selectedCategory) {
        ProductsService.getByCategoryProducts()
          .then((data) => {
            this.filteredProducts = data;
            console.log("Filtered products:", this.filteredProducts);
          })
          .catch((error) => {
            console.error("Error fetching products by category:", error);
          });
      } else {
        this.filteredProducts = this.products;
      }
    }
  }
};
</script>
