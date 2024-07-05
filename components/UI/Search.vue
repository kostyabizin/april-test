<template>
	<input v-model="searchTerm" 
		@input.lazy="handleInput" 
		placeholder="Search posts..." 
		class="search"/>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const searchTerm = defineModel()
const emit = defineEmits(['input'])

const handleInput = () => emit('input', searchTerm.value)
</script>
