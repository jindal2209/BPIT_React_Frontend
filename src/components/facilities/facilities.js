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

	function handleBookbank() {
		setElement(<Bookbank />);
	}

	function handleCanteen() {
		setElement(<Canteen />);
	}

	function handleEdusat() {
		setElement(<Edusat />);
	}

	function handleHostel() {
		setElement(<Hostel />);
	}

	function handleLibrary(){
		setElement(<Library />);
	}

	function handleMedical(){
		setElement(<Medical />);
	}

	function handleSeminar(){
		setElement(<Seminar />);
	}

	function handleSports(){
		setElement(<Sports />);
	}

	return (
		<React.Fragment>
			<div className='row mx-2 px-1'>
				<div className='col-lg-3 sidebar'>
					<div className='bg-light p-2'>
						<h4 className="font-weight-bold">Menu</h4>
						<NavLink className="menu-item" to='/facilities/library' activeClassName="active" onClick={handleLibrary}> Library</NavLink>
						<NavLink className="menu-item" to='/facilities/hostel' activeClassName="active" onClick={handleHostel}> Hostel</NavLink>
						<NavLink className="menu-item" to='/facilities/medical' activeClassName="active" onClick={handleMedical}> Medical</NavLink>
						<NavLink className="menu-item" to='/facilities/bookbank' activeClassName="active" onClick={handleBookbank}>Book Bank</NavLink>
						<NavLink className="menu-item" to='/facilities/seminar' activeClassName="active" onClick={handleSeminar}> Seminar</NavLink>
						<NavLink className="menu-item" to='/facilities/edusat' activeClassName="active" onClick={handleEdusat}> EDUSAT</NavLink>
						<NavLink className="menu-item" to='/facilities/sports' activeClassName="active" onClick={handleSports}> Sports</NavLink>
						<NavLink className="menu-item" to='/facilities/canteen' activeClassName="active" onClick={handleCanteen}> Canteen</NavLink>
					</div>
				</div>
				<div className='col-lg-9'>
					{element}
				</div>
			</div>
		</React.Fragment>
	);
}

export default About;