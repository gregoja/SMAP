let titles = []
let thumbnails = []

document.querySelectorAll("a#video-title-link").forEach(element => {
	thumbnails.push(Youtube.thumb(element.href, 'big'))
	titles.push(element.innerText)
}) 

console.log(JSON.stringify(titles))
console.log(JSON.stringify(thumbnails))