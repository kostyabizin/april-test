<!-- components/Pagination.vue -->
<template>
  <div class="pagination">
    <button class="button" @click="previousPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button class="button" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()

const { setPage } = postsStore
const { currentPage, totalPages,  } = storeToRefs(postsStore);

const previousPage = () => {
  setPage(currentPage.value - 1)
}

const nextPage = () => {
  setPage(currentPage.value + 1)
}
</script>
