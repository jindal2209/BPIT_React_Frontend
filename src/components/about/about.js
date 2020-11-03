import {
	NavLink
} from 'react-router-dom';

import React, { useState } from 'react';
import Cmessage from './children/cmessage/cmessage';
import Pmessage from './children/pmessage/pmessage';
import Trust from './children/trust/trust';
import Cprofile from './children/profile/profile';
import Vision from './children/vision/vision';
import Pillars from './children/pillars/pillars';
import Certifications from './children/certifications/certifications';
import "./about.css" ;


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
		<div className='row mx-2 px-1'>
			<div className='col-lg-3 sidebar'>
				<div className='bg-light p-2'>
					<h4 className="font-weight-bold">Menu</h4>
					<NavLink className="menu-item" activeClassName="active" to='/about/cprofile' onClick={handleCprofile}>College Profile</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/trust' onClick={handleTrust}>Trust</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/cmessage' onClick={handleCmessage}>Chairman's Message</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/Pmessage' onClick={handlePmessage}>Principal's Message</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/vision_mission' onClick={handleVision}>Vision/Mission</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/pillars' onClick={handlePillars}>Pillars of Bpit</NavLink>
					<NavLink className="menu-item" activeClassName="active" to='/about/certifications' onClick={handleCertifications}>Certifications & Accreditions</NavLink>
				</div>
			</div>
			<div className="col-lg-9">
				{element}
			</div>
		</div>
	);
}

export default About;