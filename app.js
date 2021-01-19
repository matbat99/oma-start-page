console.log('testing omas garten')

// get the local news



const url = 'http://newsapi.org/v2/top-headlines?' +
	'country=at&' +
	'apiKey=37a11a0f5c3b46ff84712ac8f3ae0c9f'
async function jimmy() {
	let news
	const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
	 .then(response => response.json())
	 .then(data => { 
		//  console.log(JSON.parse(data.contents).articles)
			news = JSON.parse(data.contents).articles
	 }
	 )
	 return news
}


async function returnArticles() {
	const bob = await jimmy()
	console.log(bob)
}

const articles = returnArticles()
console.log(articles)

console.log(articles.length)
