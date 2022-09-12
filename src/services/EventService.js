import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'https://raw.githubusercontent.com/DarthPastor/pseudo-server/main/events.json',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default {
	getEvents() {
		return apiClient.get('/events')
	}
}
