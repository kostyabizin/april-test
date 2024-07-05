<template>
	<div class="toggle-view">
		<button class="toggle-view__button" :class="{ active: isGrid }"
			@click="toggleView(true)">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>	
		</button>
		<button class="toggle-view__button" :class="{ active: !isGrid }"
			@click="toggleView(false)">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4Z" fill="currentColor"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C23 14.3431 21.6569 13 20 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16ZM21 16C21 15.4477 20.5523 15 20 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V16Z" fill="currentColor"/>
			</svg>
		</button>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	isGrid: boolean
}>()

const emit = defineEmits(['changeGridView'])

const toggleView = (grid: boolean) => {
	emit('changeGridView', grid)
}
</script>