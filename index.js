
let list = []

fetch('https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init').then(response => response.json()
	.then(data => list = data.list)
	.then(
		renderList
	)
);

renderWidgetHTML = (item, index) => {
	return (`
		<div class="box${index + 1}" id=${index}>
			<div>
				<a href=${item.url}><img src=${item.thumbnail[0].url} style='width:100%' alt=${item.name} />
				<strong><a href=${item.url}>${item.name}</a></strong><br>
				<p><strong class="brand"><a href=${item.url}>${item.branding}</a></strong></p>
			</div>
		</div>	
	`)
}

renderList = () => {
	renderListHTML = list.forEach((item) => {
		document.getElementById('main').innerHTML += renderWidgetHTML(item)
	})
}
