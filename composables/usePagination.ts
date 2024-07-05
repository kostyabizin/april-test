import { ref, computed } from 'vue'
import { useScrollToTop } from '~/composables/useScrollToTop'

export const usePagination = (itemsPerPage: number) => {
	const currentPage = ref(1)
	const totalItems = ref(0)

	const totalPages = computed(() => {

		return Math.ceil(totalItems.value / itemsPerPage)
	})

	const setPage = (page: number) => {
		if (page >= 1 && page <= totalPages.value) {
			currentPage.value = page
		}

		useScrollToTop();
	}

	const updateTotalItems = (count: number) => {
		totalItems.value = count
	}




	return {
		currentPage,
		totalPages,
		setPage,
		updateTotalItems
	}
}