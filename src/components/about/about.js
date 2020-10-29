import {
	Link
} from 'react-router-dom';

import React, { useState } from 'react';
import Navbar from '../nav/nav';
import Cmessage from './children/cmessage/cmessage';
import Pmessage from './children/pmessage/pmessage';
import Trust from './children/trust/trust';
import Cprofile from './children/profile/profile';
import Vision from './children/vision/vision';
import Pillars from './children/pillars/pillars';
import Certifications from './children/certifications/certifications';



function About(props) {
	let [element,setElement] = useState(props.page);

	function handleCmessage() {
		setElement(<Cmessage />);
	}

	function handleCprofile() {
		setElement(<Cprofile />);
	}

	function handleTrust() {
		setElement(<Trust />);
	}

	function handlePmessage() {
		setElement(<Pmessage />);
	}

	function handleVision(){
		setElement(<Vision />);
	}

	function handlePillars(){
		setElement(<Pillars />);
	}

	function handleCertifications(){
		setElement(<Certifications />);
	}

	return (
		<React.Fragment>
			<Navbar />
			<Link to='/about/cprofile' onClick={handleCprofile}>Cprofile</Link>
			<Link to='/about/trust' onClick={handleTrust}> trust</Link>
			<Link to='/about/cmessage' onClick={handleCmessage}> cmessage</Link>
			<Link to='/about/Pmessage' onClick={handlePmessage}> Pmessage</Link>
			<Link to='/about/vision_mission' onClick={handleVision}> Vision</Link>
			<Link to='/about/pillars' onClick={handlePillars}> Pillars</Link>
			<Link to='/about/certifications' onClick={handleCertifications}> Certifications</Link>
			{element}
		</React.Fragment>
	);
}

export default About;