<template>
  <v-app-bar elevation="0">
    <v-app-bar-title>
      <h4>TECH<strong class="color">CAREER</strong>.NET</h4>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn text>Login</v-btn>
      <v-btn text>Register</v-btn>

    </template>
  </v-app-bar>
  <v-spacer></v-spacer>
  <v-app-bar color="green">

    <template v-slot:prepend>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>

    </template>
    <v-spacer></v-spacer>
    <v-text-field density="compact" label="Search" append-inner-icon="mdi-magnify" single-line hide-details flat></v-text-field>
    <template v-slot:append>
      <v-btn icon @click="$router.push('/basket')">
      <v-icon>mdi-basket</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </template>
  </v-app-bar>
</template>

<script setup>

</script>

<style scoped>
.color{
  color: #58ea0f;
}
</style>
