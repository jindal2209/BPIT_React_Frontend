import React from 'react';
import Bottom from './children/bottom/bottom';
import Marquee from './children/marquee/marquee';
import Middle from './children/middle/middle';
import Video from './children/video/video';


function Home(){
	return(
		<React.Fragment>
			<Marquee />
			<Video />
			<Middle />
			<Bottom />
		</React.Fragment>
	);
}

export default Home ;