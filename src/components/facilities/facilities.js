import {
	NavLink
} from 'react-router-dom';

import React, { useState } from 'react';
import Bookbank from './children/bookbank/bookbank';
import Canteen from './children/canteen/canteen';
import Edusat from './children/edusat/edusat';
import Hostel from './children/hostel/hostel';
import Library from './children/library/library';
import Medical from './children/medical/medical';
import Seminar from './children/seminar/seminar';
import Sports from './children/sports/sports';



function About(props) {
	let [element,setElement] = useState(props.page);

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col-lg-3">
					<h2 className="page-header mt-1 mb-3 text-center">
						<i className="fa fa-building  mx-2" aria-hidden="true"></i>
						Facilities
					</h2>
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" to='/facilities/library' activeClassName="active" onClick={() => handleComponent(<Library />)}> Library</NavLink>
						<NavLink className="menu-item" to='/facilities/hostel' activeClassName="active" onClick={() => handleComponent(<Hostel />)}> Hostel</NavLink>
						<NavLink className="menu-item" to='/facilities/medical' activeClassName="active" onClick={() => handleComponent(<Medical />)}> Medical</NavLink>
						<NavLink className="menu-item" to='/facilities/bookbank' activeClassName="active" onClick={() => handleComponent(<Bookbank />)}>Book Bank</NavLink>
						<NavLink className="menu-item" to='/facilities/seminar' activeClassName="active" onClick={() => handleComponent(<Seminar />)}> Seminar</NavLink>
						<NavLink className="menu-item" to='/facilities/edusat' activeClassName="active" onClick={() => handleComponent(<Edusat />)}> EDUSAT</NavLink>
						<NavLink className="menu-item" to='/facilities/sports' activeClassName="active" onClick={() => handleComponent(<Sports />)}> Sports</NavLink>
						<NavLink className="menu-item" to='/facilities/canteen' activeClassName="active" onClick={() => handleComponent(<Canteen />)}> Canteen</NavLink>
					</div>
				</div>
				<div className="col-sm-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	);
}

export default About;