<template>
	<div class="wrapper">
		<div class="mobile-nav"></div>
		<Header />
		<main>
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
	import Header from '~/components/partials/Header.vue'
	import Footer from '~/components/partials/Footer.vue'

</script>