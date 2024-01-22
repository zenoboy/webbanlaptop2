<template>
  <div>
    <!-- ... Existing code ... -->

    <v-container>
      <!-- Display search input -->
      <v-row>
        <v-col cols="12" class="text-center">
          <v-text-field v-model="search" label="Search" @input="fetchSearchResults" dense outlined></v-text-field>
        </v-col>
      </v-row>
      <!-- Display search results -->
      <v-row v-if="searchResults.length > 0">
                <v-col v-for="result in searchResults" :key="result.ProductsId" cols="12" sm="6" md="4" lg="3">
                  <v-card>
                    <!-- Display your product details here -->
                    <v-img :src="'https://localhost:7072' + result.ImagerUrl" height="200"
                      @error="handleImageError(result)"></v-img>
                    <v-card-title>{{ result.ProductsName }}</v-card-title>
                    <v-card-subtitle>{{ result.Price }}</v-card-subtitle>
                  </v-card>
                </v-col>
              </v-row>

      <!-- Display a message if there are no search results -->
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <p>No results found.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // ... Existing code ...

  data() {
    return {
      // ... Existing data properties ...
      search: '',
      searchResults: [],
    };
  },

  methods: {
    // ... Existing methods ...

    // Update the fetchSearchResults method
    async fetchSearchResults() {
      try {
        const response = await axios.get(`https://localhost:7072/api/Products/SearchProducts?keyword=${this.search}`);
        if (response.data && response.data.length > 0) {
          this.searchResults = response.data;
        } else {
          this.searchResults = [];
        }
      } catch (error) {
        this.searchResults = [];
        console.error('Error fetching search results:', error);
      }
    },
  },
};
</script>
