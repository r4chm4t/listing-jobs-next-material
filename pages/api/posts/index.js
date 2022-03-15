import libJobs from '../../../lib/jobs'

export default async function(req, res) {
	try {
		const body = req.query
		const page = body.page || 1
		const range = 5
		const start = (page - 1) * range, end = page * range
		const posts = await libJobs.loadDataJobs()
		const filterPosts = posts.data.filter(function(item, index) {
			if (index >= start && index < end) return true

			return false
		})

		res.status(200).json({
			data: filterPosts || [],
			links: posts.links || {},
			meta: posts.meta || {},
		})
	} catch(error) {
		res.status(500).json('Internal Server Error.')
	}
}
