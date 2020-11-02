function Video() {
	return (
		<video autoplay="" className="banner-video" loop preload="auto"
			poster="/assets/images/logo.png" width="100%">
			<source src="/assets/video/second.mp4" type="video/mp4" />
		</video>
	);
}

export default Video;