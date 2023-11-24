<template>
  <div id="app">
    <base-card>
      <ez-category-dropdown
        v-if="this.categories"
        :data="categories"
        :selected="selectedValue"
        @change="handleChange"
      />
    </base-card>
  </div>
</template>

<script>
import EzCategoryDropdown from "./components/CategoryDropdown/EzCategoryDropdown.vue";
import { getCategories } from "./utils/fetcher";

export default {
  components: { EzCategoryDropdown },
  name: "App",
  data() {
    return {
      categories: null,
      hasError: false,
      loading: true,
      selectedValue: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    handleChange(value) {
      this.selectedValue = value;
      console.log("Selected value:", value);
    },
    async fetchData() {
      try {
        const categories = await getCategories();
        this.loading = false;
        this.categories = categories.data;
      } catch (e) {
        this.hasError = true;
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap");

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: black;
  font-family: "Manrope", sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
