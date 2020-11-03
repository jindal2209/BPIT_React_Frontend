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

	function handleTeam() {
		setElement(<Placementteam />);
	}

	function handleTraining() {
		setElement(<Placementtraining />);
	}

	function handleRecruiters() {
		setElement(<Recruiters />);
	}

	function handleList(){
		setElement(<Listofstudentsplaced />);
	}

	function handleIndus(){
		setElement(<Industrialtoursandworkshops />);
	}

	function handleExp(){
		setElement(<Exptalksandseminars />);
	}

	return (
		<React.Fragment>
			<div className='row mx-2 px-1'>
				<div className='col-lg-3 sidebar'>
					<div className='bg-light p-2'>
						<h4 className="font-weight-bold">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to='/placement/team' onClick={handleTeam}> Team</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/training' onClick={handleTraining}> Training</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/recruiters' onClick={handleRecruiters}>Our Recruiters</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/exp_talks_and_seminars' onClick={handleExp}> Expert Talks and seminar</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/industrial_tours_and_workshops' onClick={handleIndus}> Industrial tours and workshops</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/placement/list_of_student_placed' onClick={handleList}> List of student placed</NavLink>
					</div>
				</div>
				<div className="col-lg-9">
					{element}
				</div>
			</div>
		</React.Fragment>
	);
}

export default Placement;