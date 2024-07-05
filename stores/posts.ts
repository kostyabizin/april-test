
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useNuxtApp } from '#app'
import { usePagination } from '~/composables/usePagination'
import { useSearch } from '~/composables/useSearch'

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export const usePostsStore = defineStore('posts', () => {
	const nuxtApp = useNuxtApp()
	const posts = ref < Post[] > ([])
	const post = ref < Post | null > (null)
	const loading = ref < boolean > (true)
	const error = ref < string | null > (null)
	const isGrid = ref < boolean > (true)

	const itemsPerPage = 10
	const { currentPage, totalPages, setPage, updateTotalItems } = usePagination(itemsPerPage)
	const { searchTerm, filteredPosts, setSearchTerm } = useSearch(posts)

	const fetchPosts = async () => {
		loading.value = true
		error.value = null
		try {
			const response = await nuxtApp.$axios.get('/posts')
			posts.value = response.data
		} catch (err) {
			error.value = 'Failed to fetch posts'
		} finally {
			loading.value = false
		}
	}

	const fetchPost = async (id: number) => {
		loading.value = true
		error.value = null
		try {
			const response = await nuxtApp.$axios.get(`/posts/${id}`)
			post.value = response.data
		} catch (err) {
			error.value = `Failed to fetch post with id ${id}`
		} finally {
			loading.value = false
		}
	}

	const setGridValue = (newValue: boolean) => {
		isGrid.value = newValue
	}

	const filteredAndPaginatedPosts = computed(() => {
		updateTotalItems(filteredPosts.value.length)
		const start = (currentPage.value - 1) * itemsPerPage
		const end = start + itemsPerPage
		return filteredPosts.value.slice(start, end)
	})

	watch(searchTerm, (newValue) => {
		if (newValue) {
			setPage(1)
		}
	})

	return {
		posts,
		post,
		loading,
		error,
		fetchPosts,
		fetchPost,
		currentPage,
		totalPages,
		setPage,
		filteredAndPaginatedPosts,
		searchTerm,
		setSearchTerm,
		setGridValue,
		isGrid
	}
})
