import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';

function Humanities(props){
	let [element,setElement] = useState(props.page);

	function handleAbout(){
		setElement()
	}
	function handleFaculty(){
		setElement()
	}
	function handlePublications(){
		setElement()
	}

	function handleSyllabus(){
		setElement()
	}
	function handleLessonplan(){
		setElement()
	}

	return (
		<div>
			<div className='row mx-2 px-1'>
				<div className='col-lg-3 sidebar'>
					<div className='bg-light p-2'>
						<h4 className="font-weight-bold">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/about" onClick={handleAbout}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/faculty" onClick={handleFaculty}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/facultypublications" onClick={handlePublications}> Faculty Publications</NavLink>
						<h4 className="font-weight-bold">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/lessonplan" onClick={handleLessonplan}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/hu/syllabus" onClick={handleSyllabus}> Syllabus</NavLink>
					</div>
				</div>
				<div className="col-lg-9">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Humanities ;