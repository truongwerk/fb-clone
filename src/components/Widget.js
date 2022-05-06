import "../styles/Widget.css";

function Widget() {
	return (
		<div className="widget">
			<iframe
				title="The Odin Project"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheodinproject%2F&tabs=timeline&width=340&height=1700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="340"
				height="100%"
				style={{ border: "none", overflow: "hidden" }}
				scrolling="no"
				frameBorder="0"
				allowTransparency={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
	);
}

export default Widget;
