import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import ACAbout from './children/about';
import ACFaculty from './children/faculty';

function Chemistry(props){
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
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/about" onClick={() => handleComponent(<ACAbout />)}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/faculty" onClick={() => handleComponent(<ACFaculty />)}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ac/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Chemistry ;