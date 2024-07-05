<template>
	<section>
		<div class="container">
			<div v-if="loading" class="state-block">
				Loading...
			</div>
			<div v-if="error" class="state-block">
				{{ error }}
			</div>
			<div v-if="!loading && !error">
				<h1>Posts</h1>
				<SearchInput v-model="searchTerm" />
				<ToggleView :isGrid="isGrid" @changeGridView="changeGridView"/>
				<ul v-if="filteredAndPaginatedPosts.length" class="reset-list post-list" :class="{ 'grid-view': isGrid, 'flex-view': !isGrid }">
					<PostCard v-for="post in filteredAndPaginatedPosts" :key="post.id" :post="post" />
				</ul>
				<h2 v-else>Nothing found</h2>
			</div>
			<Pagination v-if="totalPages > 1"/>
		</div>
	</section>
</template>
	
<script setup lang="ts">
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'

	import { usePostsStore } from '~/stores/posts'

	import SearchInput from '~/components/UI/Search.vue'
	import Pagination from '~/components/UI/Pagination.vue'
	import ToggleView from '~/components/UI/ToggleView.vue'
	import PostCard from '~/components/cards/PostCard.vue'

	const postsStore = usePostsStore()
	
	const { fetchPosts, setGridValue } = postsStore;
	const { filteredAndPaginatedPosts, error, loading, searchTerm, isGrid, totalPages } = storeToRefs(postsStore);

	
	const changeGridView = (value: boolean) => {
		setGridValue(value)
	}

	onMounted(() => fetchPosts())
</script>
