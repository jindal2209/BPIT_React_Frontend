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

	function handlePublications() {
		setElement(<Publications />);
	}

	function handleSocieties() {
		setElement(<Societies />);
	}

	function handleProjects() {
		setElement(<Projects />);
	}

	function handleExaminations() {
		setElement(<Examination />);
	}

	function handleEvents() {
		setElement(<Events />);
	}

	function handleAcheievments() {
		setElement(<Achievements />);
	}

	return (
		<React.Fragment>
			<div className='row mx-2 px-1'>
				<div className='col-lg-3 sidebar'>
					<div className='bg-light p-2'>
						<h4 className="font-weight-bold">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/achievements' onClick={handleAcheievments}>Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/events' onClick={handleEvents}> Events</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/examination' onClick={handleExaminations}> Examinations</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/projects' onClick={handleProjects}> Projects</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/publications' onClick={handlePublications}> Student_publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" to='/studentlife/societies' onClick={handleSocieties}> societies</NavLink>
					</div>
				</div>
				<div className="col-lg-9">
					{element}
				</div>
			</div>
		</React.Fragment>
		
	);
}


export default Studentlife;