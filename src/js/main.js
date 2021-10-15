let parser = new DOMParser();
const CODE = document.getElementById('js_code');
// let doc = parser.parseFromString(text, 'text/html');

// fetch('./sketch/02/01/index.html')
// 	.then(data => data.text())
// 	.then(data => parser.parseFromString(data, 'text/html'))
// 	.then(data => console.log(data));

// ページを読み込んで表示する仕組み
{
	const I_FRAME = document.getElementById('js_iframe');
	const SKETCH_LIST = document.querySelectorAll(".l_sketch-list__item");

	SKETCH_LIST.forEach(el => {
		el.addEventListener("click", () => {
			let sketchBaseUrl = el.getAttribute("data-url")
			let sketchHtmlUrl = `${sketchBaseUrl}/index.html`;
			let sketchJsUrl = `${sketchBaseUrl}/sketch.js`;
			let iFrameUrl = I_FRAME.getAttribute("src");

			// クリックされたら一旦全部のリストアイテムからクラスをトル
			SKETCH_LIST.forEach(el => el.classList.remove('is-item-selected'));

			// sketchのurlと現在表示されているurlを比較する
			// もし同じ場合は空に
			if (sketchHtmlUrl === iFrameUrl) {
				I_FRAME.setAttribute("src", "");
				CODE.innerText = "";
				return;
			};

			// currentクラスの付与
			el.classList.add('is-item-selected');

			// iframeにurlをセットする
			I_FRAME.setAttribute("src", sketchHtmlUrl);

			// コードを表示する
			// fetch(sketchJsUrl)
			// 	.then(data => data.text())
			// 	.then(data => { CODE.innerText = data; });

		});
	});
}

// タイトルをクリックするとキャプション表示
{
	const TITLE = document.getElementById('js_title');
	const DESCRIPTION = document.getElementById('js_copyright');

	TITLE.addEventListener("click", () => {
		DESCRIPTION.classList.toggle('is-copyright-show');
	});
}




