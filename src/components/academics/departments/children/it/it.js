import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import About from './children/about';
import Faculty from './children/faculty'

function IT(props){
	let [element,setElement] = useState(props.page);

	function handleComponent(component) {
		setElement(component);
	}

	return (
		<div>
			<div className='row mx-2 px-1'>
				<div className='col-lg-3 sidebar'>
					<div className='bg-light p-2'>
						<h4 className="font-weight-bold">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/about" onClick={() => handleComponent()}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/faculty" onClick={() => handleComponent()}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/labresources" onClick={() => handleComponent()}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<h4 className="font-weight-bold">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/notice" onClick={() => handleComponent()}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/achievements" onClick={() => handleComponent()}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/timetable" onClick={() => handleComponent()}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/calender" onClick={() => handleComponent()}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/datesheet" onClick={() => handleComponent()}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/it/result" onClick={() => handleComponent()}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9">
					{element}
				</div>
			</div>
		</div>
	)
}

export default IT ;