// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/scss/main.scss"],
	app: {
		head: {
		  title: 'Posts Project',
		  meta: [
			{ name: 'description', content: 'Posts Projec for test' }
		  ]
		}
	}
});