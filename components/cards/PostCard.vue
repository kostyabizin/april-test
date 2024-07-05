<template>
	<div class="post-card">
	  <h2 class="post-card__title" v-html="post.title" />
	  <p v-html="post.body" />
	  <nuxt-link :to="{ name: 'id', params: { id: post.id } }" class="post-card__link">
		Read more
	  </nuxt-link>
	</div>
  </template>
  
<script setup lang="ts">
const props = defineProps<{
	post: {
		id: number
		title: string
		body: string
		category: string
	}
	}>()
</script>