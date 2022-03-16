
async function loadDataJobs() {
	// request to https://arbeitnow.com/api/job-board-api
	const posts = await fetch(process.env.API_SOURCE_URL)
		.then(async function(res) { return await res.json() })
	
	return posts 
}

async function handleDataJson(res) {
	const data = await res.json()
	
	return data
}

async function fetchDataJobs(options) {
	let baseUrl = `http://localhost:3000`, 
		urlPath = `/api/posts`, posts 

	if ( options.page ) {
		urlPath += `?page=${options.page}`
	}

	posts = await fetch(`${baseUrl}${urlPath}`).then(handleDataJson)

	return posts
}

module.exports = {
	fetchDataJobs,
	loadDataJobs,
}
