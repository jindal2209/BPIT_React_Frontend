import { NavLink, useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';

function PlacementDashboard(props){
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
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/home">Home</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/exp_talks_and_seminars" >Expert Talks and Seminars</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/industrial_tours_and_workshops" >Industrial Tours and Workshops</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/students_placed" >Students Placed</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/recruiters" >Recruiters</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to="/placementdashboard/training" >Training</NavLink>
						<NavLink className="menu-item" activeClassName="active" exact to='/' onClick={() => localStorage.clear()} >Logout</NavLink>
					</div>
				</div>
				<div class="col-sm-9 content my-2">
					{element}
				</div>
			</div>
		</div>
	);
}

export default PlacementDashboard;