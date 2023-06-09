export default {
	async categories() {
		return window.Parse.Cloud.run('categories');
	},

	async content(lang) {
		return fetch(`/db/content-${lang}.json`).then(res => res.json())
	},

	async video(category_id) {
		return window.Parse.Cloud.run('get', {category_id})
	},

	rateVideo(id, rating) {
		window.Parse.Cloud.run('rate', {id, rating})
	}
}