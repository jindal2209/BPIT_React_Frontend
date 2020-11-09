import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Achievements from './children/achievements/achievements';
import Events from './children/events/events';
import Examination from './children/examination/examination';
import Projects from './children/projects/projects';
import Publications from './children/publications/publications';
import Societies from './children/societies/societies';


function Studentlife(props) {
	let [element, setElement] = useState(props.page);

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col-lg-3">
					<h2 className="page-header mt-1 mb-3 text-center">
						<i className="fa fa-graduation-cap  mx-2" aria-hidden="true"></i>
						Placements
					</h2>
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/achievements' onClick={() => handleComponent(<Achievements />)}>Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/events' onClick={() => handleComponent(<Events />)}> Events</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/examination' onClick={() => handleComponent(<Examination />)}> Examinations</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/projects' onClick={() => handleComponent(<Projects />)}> Projects</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/publications' onClick={() => handleComponent(<Publications />)}> Student_publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/societies' onClick={() => handleComponent(<Societies />)}> societies</NavLink>
					</div>
				</div>
				<div className="col-sm-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	);
}


export default Studentlife;