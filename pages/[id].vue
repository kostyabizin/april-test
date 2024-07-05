<template>
<div class="container">
	<div v-if="loading" class="state-block">
		Loading...
	</div>
	<div v-if="error" class="state-block">
		{{ error }}
	</div>
	<div v-if="post && !loading && !error" class="post-content">
		<nuxt-link to="/" class="button">
			Back
		</nuxt-link>
		<h1>{{ post.title }}</h1>
		<p>{{ post.body }}</p>
	</div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
const route = useRoute()
const postId = parseInt(route.params.id as string, 10)

const { fetchPost } = postsStore;
const { post, loading, error,  } = storeToRefs(postsStore)


onMounted(() => {
	fetchPost(postId)
})
</script>
