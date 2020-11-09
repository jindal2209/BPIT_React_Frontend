import { NavLink, useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';

function Dashboard(props){
	var history = useHistory()
	let [element,setElement] = useState();

	useEffect(() => {
		setElement(props.render)
	},[props.render])



	if(!localStorage.getItem('token')){
		localStorage.clear();
		history.push('/')
		alert('Please login first')
	}

	return(
		<div className='container-fluid pt-5'>
			<div className="row">
				<div className="col-lg-3 mb-5">
					<div className=" sidebar rounded p-2">
						<h4 className="text-center py-1">Menu</h4>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/home">Home</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/notice" >Notice</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/events" >Events</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/news" >News</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/student-publication" >Student Publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/faculty-publication" >Faculty Publications</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/time-table" >Time Table</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/student-projects" >Student Projects</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/dashboard/lesson-plan" >Lesson Plan</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to='/' onClick={() => localStorage.clear()} >Logout</NavLink>
					</div>
				</div>
				<div className="col-sm-9 content my-2">
					{element}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;