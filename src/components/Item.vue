<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
      <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="i in 3" :key="i">
        <v-expansion-panel-title expand-icon="mdi-menu-down">Ozellikler</v-expansion-panel-title>
        <v-expansion-panel-text>
          In ea sint officia esse culpa adipisicing cupidatat reprehenderit labore dolor ut aute ullamco. Aliquip duis est proident consequat excepteur sit laboris mollit duis duis adipisicing nisi exercitation consequat cupidatat. Tempor anim eu deserunt ipsum aliqua minim amet consectetur id culpa elit consequat. Sint aliquip id enim anim deserunt exercitation occaecat elit mollit dolore cupidatat. Amet id culpa Lorem eu magna voluptate sunt labore aliqua. Eiusmod deserunt dolore dolor fugiat nostrud laboris aliqua mollit minim exercitation ea exercitation eu. Sint sunt nulla mollit voluptate ex officia do anim. Sint aliqua amet ea sunt eu esse veniam cupidatat nostrud irure velit amet officia minim dolor.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">Model</v-expansion-panel-title>
        <v-expansion-panel-text>
          In ea sint officia esse culpa adipisicing cupidatat reprehenderit labore dolor ut aute ullamco. Aliquip duis est proident consequat excepteur sit laboris mollit duis duis adipisicing nisi exercitation consequat cupidatat. Tempor anim eu deserunt ipsum aliqua minim amet consectetur id culpa elit consequat. Sint aliquip id enim anim deserunt exercitation occaecat elit mollit dolore cupidatat. Amet id culpa Lorem eu magna voluptate sunt labore aliqua. Eiusmod deserunt dolore dolor fugiat nostrud laboris aliqua mollit minim exercitation ea exercitation eu. Sint sunt nulla mollit voluptate ex officia do anim. Sint aliqua amet ea sunt eu esse veniam cupidatat nostrud irure velit amet officia minim dolor.
        </v-expansion-panel-text>
      </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title>
        Brand
        <template v-slot:actions="{expanded}">
          <v-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'mdi-pencil' : 'mdi-check'" ></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        In ea sint officia esse culpa adipisicing cupidatat reprehenderit labore dolor ut aute ullamco. Aliquip duis est proident consequat excepteur sit laboris mollit duis duis adipisicing nisi exercitation consequat cupidatat. Tempor anim eu deserunt ipsum aliqua minim amet consectetur id culpa elit consequat. Sint aliquip id enim anim deserunt exercitation occaecat elit mollit dolore cupidatat. Amet id culpa Lorem eu magna voluptate sunt labore aliqua. Eiusmod deserunt dolore dolor fugiat nostrud laboris aliqua mollit minim exercitation ea exercitation eu. Sint sunt nulla mollit voluptate ex officia do anim. Sint aliqua amet ea sunt eu esse veniam cupidatat nostrud irure velit amet officia minim dolor.
      </v-expansion-panel-text>
    </v-expansion-panel>
      </v-expansion-panels>
  </div>
</template>
<script>

</script>
<style>

</style>
