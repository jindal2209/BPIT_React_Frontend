import { useState } from 'react';
import {
	NavLink
} from 'react-router-dom';

function Eee(){
	let [element,setElement] = useState(null);

	function handleAbout(){
		setElement()

	}
	function handleAchievements(){
		setElement()

	}
	function handleLab(){
		setElement()

	}
	function handleCalender(){
		setElement()

	}
	function handleDatesheet(){
		setElement()

	}
	function handleFaculty(){
		setElement()

	}
	function handleNotice(){
		setElement()

	}
	function handlePublications(){
		setElement()
	}
	function handleResult(){
		setElement()
	}
	function handleSyllabus(){
		setElement()

	}
	function handleTimetable(){
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
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/about" onClick={handleAbout}> About</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/faculty" onClick={handleFaculty}> Faculty</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/labresources" onClick={handleLab}>Lab Resources</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/facultypublications" onClick={handlePublications}> Faculty Publications</NavLink>
						<h4 className="font-weight-bold">Resources</h4>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/notice" onClick={handleNotice}> Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/achievements" onClick={handleAchievements}> Achievements</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/timetable" onClick={handleTimetable}> Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/lessonplan" onClick={handleLessonplan}> Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/syllabus" onClick={handleSyllabus}> Syllabus</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/calender" onClick={handleCalender}> Academic Calender</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/datesheet" onClick={handleDatesheet}> Datesheet</NavLink>
						<NavLink className="menu-item" activeClassName="active" to="/departments/eee/result" onClick={handleResult}> Result</NavLink>
					</div>
				</div>
				<div className="col-lg-9">
					{element}
				</div>
			</div>
		</div>
	)
}

export default Eee ;