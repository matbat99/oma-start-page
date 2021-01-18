console.log('testing omas garten')

// get the local news

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://newsapi.org/v2/top-headlines?' +
	'country=at&' +
	'apiKey=37a11a0f5c3b46ff84712ac8f3ae0c9f'
	fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
	.then(response => response.text())
	.then(contents => console.log(contents))
	.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

	