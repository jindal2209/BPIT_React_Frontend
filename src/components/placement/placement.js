import {
	NavLink
} from 'react-router-dom';

import React, { useState } from 'react';
import Placementteam from './children/team/team';
import Placementtraining from './children/training/training';
import Recruiters from './children/recruiters/recruiters';
import Listofstudentsplaced from './children/list_of_student_placed/list_of_student_placed';
import Industrialtoursandworkshops from './children/industrial_tours_and_workshops/industrial_tours_and_workshops';
import Exptalksandseminars from './children/exp_talks_and_seminars/exp_talks_and_seminars';




function Placement(props) {
	let [element,setElement] = useState(props.page);

	function handleComponent(component) {
		setElement(component);
	}
	
	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col-lg-3">
					<h2 className="page-header mt-1 mb-3 text-center">
						<i className="fa fa-briefcase mx-2" aria-hidden="true"></i>
						Placements
					</h2>
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to='/placement/team' onClick={() => handleComponent(<Placementteam />)}> Team</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/training' onClick={() => handleComponent(<Placementtraining />)}> Training</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/recruiters' onClick={() => handleComponent(<Recruiters />)}>Our Recruiters</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/exp_talks_and_seminars' onClick={() => handleComponent(<Exptalksandseminars />)}> Expert Talks and seminar</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/industrial_tours_and_workshops' onClick={() => handleComponent(<Industrialtoursandworkshops />)}> Industrial tours and workshops</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/list_of_student_placed' onClick={() => handleComponent(<Listofstudentsplaced />)}> List of student placed</NavLink>
					</div>
				</div>
				<div className="col-sm-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	);
}

export default Placement;