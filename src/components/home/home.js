import React from 'react';
import Marquee from './children/marquee/marquee';
import Video from './children/video/video';


function Home(){
	return(
		<React.Fragment>
			<Marquee />
			<Video />
		</React.Fragment>
	);
}

export default Home ;