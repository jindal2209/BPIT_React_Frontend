import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Achievements from './children/achievements/achievements';
import Events from './children/events/events';
import Examination from './children/examination/examination';
import Projects from './children/projects/projects';
import Publications from './children/publications/publications';
import Societies from './children/societies/societies';

function Studentlife(props) {
	let [element,setElement] = useState(props.page);

	function handlePublications() {
		setElement(<Publications />);
	}

	function handleSocieties() {
		setElement(<Societies />);
	}

	function handleProjects() {
		setElement(<Projects />);
	}

	function handleExaminations(){
		setElement(<Examination />);
	}

	function handleEvents(){
		setElement(<Events />);
	}

	function handleAcheievments(){
		setElement(<Achievements />);
	}

	return (
		<React.Fragment>
			<Link to='/studentlife/achievements' onClick={handleAcheievments}>Achievements</Link>
			<Link to='/studentlife/events' onClick={handleEvents}> Events</Link>
			<Link to='/studentlife/examination' onClick={handleExaminations}> Examinations</Link>
			<Link to='/studentlife/projects' onClick={handleProjects}> Projects</Link>
			<Link to='/studentlife/publications' onClick={handlePublications}> Student_publications</Link>
			<Link to='/studentlife/societies' onClick={handleSocieties}> societies</Link>
			{element}
		</React.Fragment>
	);
}

export default Studentlife;