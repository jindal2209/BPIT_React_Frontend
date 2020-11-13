import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import EMAbout from './children/about';
import EMFaculty from './children/faculty';

function Mechanics(props){
	let [element,setElement] = useState(props.page);

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div className="container-fluid mt-5">
			<div className='row'>
				<div className='col-lg-3'>
					<div className='bg-light p-2 sidebar'>
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/about" onClick={() => handleComponent(<EMAbout />)}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/faculty" onClick={() => handleComponent(<EMFaculty />)}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/em/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Mechanics ;