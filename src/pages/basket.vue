<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-sheet class="my-4">
      <v-app-bar app color="green" dark>
        <v-btn icon @click="goToHome">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="ml-4">Your Basket</v-toolbar-title>
      </v-app-bar>

      <v-list v-if="basket.length > 0">
        <v-list-item-group>
          <v-list-item v-for="(product, index) in basket" :key="index">
            <v-row align="center">
              <v-col cols="12" md="4">
                <v-img class="white--text" height="200" :src="product.image">
                </v-img>
              </v-col>
              <v-col cols="12" md="8">
                <v-list-item-content>
                  <div class="mb-4">
                    <v-list-item-title class="title">{{ product.title }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">{{ product.description }}</v-list-item-subtitle>
                  </div>
                  <v-list-item-action>
                    <v-list-item-content>
                      <div class="mr-4">Price: ${{ product.price }}</div>
                      <div class="mr-4">Rating:
                        <v-rating v-model="product.rating.rate" precision="0.1" readonly></v-rating>
                      </div>
                    </v-list-item-content>
                  </v-list-item-action>
                  <v-btn color="error" @click="removeFromBasket(index)">Remove from Basket</v-btn>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-card v-else>
        <v-card-text class="text-center grey--text">No items in the basket.</v-card-text>
      </v-card>

      <v-card>

        <v-card-text class="text-end">Total: ${{ totalAmount }}
          <v-btn color="green" @click="completePurchase">Complete</v-btn>
        </v-card-text>

      </v-card>

    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      basket: JSON.parse(localStorage.getItem('basket')) || [],
      products: []
    };
  },
  computed: {
    totalAmount() {
      return this.basket.reduce((total, product) => total + product.price, 0);
    }
  },
  methods: {
    removeFromBasket(index) {
      this.basket.splice(index, 1);
      localStorage.setItem('basket', JSON.stringify(this.basket));
      console.log(this.basket[0]);
    },
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>
