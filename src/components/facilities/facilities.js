import {
	Link
} from 'react-router-dom';

import React, { useState } from 'react';
import Navbar from '../nav/nav';
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
			<Navbar />
			<Link to='/about/library' onClick={handleLibrary}> Library</Link>
			<Link to='/about/hostel' onClick={handleHostel}> Hostel</Link>
			<Link to='/about/medical' onClick={handleMedical}> Medical</Link>
			<Link to='/about/bookbank' onClick={handleBookbank}>Book Bank</Link>
			<Link to='/about/seminar' onClick={handleSeminar}> Seminar</Link>
			<Link to='/about/edusat' onClick={handleEdusat}> EDUSAT</Link>
			<Link to='/about/sports' onClick={handleSports}> Sports</Link>
			<Link to='/about/canteen' onClick={handleCanteen}> Canteen</Link>
			{element}
		</React.Fragment>
	);
}

export default About;