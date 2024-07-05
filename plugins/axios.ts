import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
	const axiosInstance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com',
	})

	axiosInstance.interceptors.request.use(
		(config) => {
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	axiosInstance.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	nuxtApp.provide('axios', axiosInstance)
})