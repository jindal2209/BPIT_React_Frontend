import {
	NavLink
} from 'react-router-dom';

import React, { useState } from 'react';
import Chemistry from './children/applied/ac/ac';
import Physics from './children/applied/ap/ap';
import Maths from './children/applied/am/am';
import Mechanics from './children/applied/em/em';
import Humanities from './children/applied/hu/hu';

function Sidebar(props){

}

function Departments(props) {
	let [element,setElement] = useState(props.page);

	function handleChemistry() {
		setElement(<Chemistry />);
	}

	function handlePhysics() {
		setElement(<Physics />);
	}

	function handleMaths() {
		setElement(<Maths />);
	}

	function handleMechanics(){
		setElement(<Mechanics />);
	}

	function handleHumanities(){
		setElement(<Humanities />);
	}


	return (
		<React.Fragment>
			{element}
		</React.Fragment>
	);
}

export default Departments;