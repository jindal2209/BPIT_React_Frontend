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

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div className="container-fluid p-5">
			<h2 className="page-header my-4 px-3">
				<i className="fa fa-address-book mx-2" aria-hidden="true"></i>
				About Us
			</h2>
			<div className="row">
				<div className="col-lg-3">
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to='/about/cprofile' onClick={() => handleComponent(<Cprofile />)}>College Profile</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/trust' onClick={() => handleComponent(<Trust />)}>Trust</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/cmessage' onClick={() => handleComponent(<Cmessage />)}>Chairman's Message</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/Pmessage' onClick={() => handleComponent(<Pmessage />)}>Principal's Message</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/vision_mission' onClick={() => handleComponent(<Vision />)}>Vision/Mission</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/pillars' onClick={() => handleComponent(<Pillars />)}>Pillars of Bpit</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/about/certifications' onClick={() => handleComponent(<Certifications />)}>Certifications & Accreditions</NavLink>
					</div>
				</div>
				<div class="col-sm-9 content">
					{element}
				</div>
			</div>
		</div>

	);
}

export default About;