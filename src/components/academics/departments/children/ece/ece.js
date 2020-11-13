import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import ECEAbout from './children/about';
import ECEFaculty from './children/faculty'

function Ece(props){
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
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/about" onClick={() => handleComponent(<ECEAbout />)}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/faculty" onClick={() => handleComponent(<ECEFaculty />)}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<hr />
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/ece/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Ece ;