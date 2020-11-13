import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import APAbout from './children/about';
import APFaculty from './children/faculty';

function Physics(props){
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
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/about" onClick={() => handleComponent(<APAbout />)}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/faculty" onClick={() => handleComponent(<APFaculty />)}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ap/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Physics ;