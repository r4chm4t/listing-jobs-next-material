
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
	let urlPath = `/api/posts`, posts 

	if ( options.page ) {
		urlPath += `?page=${options.page}`
	}

	// only using target api path name, it will
	// redirect to project running server
	// (ex. http://localhost:3000)
	posts = await fetch(`${urlPath}`).then(handleDataJson)

	return posts
}

module.exports = {
	fetchDataJobs,
	loadDataJobs,
}
