import { ref, computed, Ref } from 'vue'

interface Post {
	userId: number
	id: number
	title: string
	body: string
	[key: string]: string | number;
}

export const useSearch = (posts: Ref < Post[] > ) => {
	const searchTerm = ref('')
	const filteredPosts = computed(() => {
		if (!searchTerm.value) {
			return posts.value
		}

		const term = searchTerm.value.toLowerCase()
		return posts.value.filter(post =>
			Object.values(post).some(value => {
				return value.toString().toLowerCase().includes(term)
			})
		).map(post => {
			const filteredPosts = { ...post };
			Object.keys(filteredPosts).forEach(key => {
				if (typeof filteredPosts[key] === 'string') {
					filteredPosts[key] = highlightText(filteredPosts[key], term);
				}
			});
			return filteredPosts;
		  });
	})

	const highlightText = (text: string, term: string): string => {
		const regex = new RegExp(`(${term})`, 'gi');
		return text.replace(regex, '<mark>$1</mark>');
	  };

	const setSearchTerm = (term: string) => {
		searchTerm.value = term
	}

	return {
		searchTerm,
		filteredPosts,
		setSearchTerm
	}
}