import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';
import HUAbout from './children/about';
import HUFaculty from './children/faculty';

function Humanities(props){
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
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/about" onClick={() => handleComponent(<HUAbout />)}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/faculty" onClick={() => handleComponent(<HUFaculty />)}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/facultypublications" onClick={() => handleComponent()}> Faculty Publications</NavLink>
						<h4 className="text-center py-1">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/lessonplan" onClick={() => handleComponent()}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/syllabus" onClick={() => handleComponent()}> Syllabus</NavLink>
					</div>
				</div>
				<div className="col-lg-9 mt-4">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Humanities ;