import { NavLink, useHistory } from "react-router-dom";
import { useState,useEffect } from 'react';
import  axios from 'axios';


function Items(props){
	return(
		<div>
			{props.data.map((s) => (
				<div className='m-2 p-2 border border-light rounded items'>
					{s.title}
										<i className="fa fa-bell float-left" aria-hidden="true"></i>
					<a><i className="fa fa-trash float-right mx-1" aria-hidden="true"></i></a> 
					<a><i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i></a>

					{s.examination_notice && <h5>Examination</h5>}
					{s.notices && <a href={s.notices}>View</a>}
					
					{s.news && <a href={s.news}>View</a>}
					
					{s.events && <a href={s.events}>View</a>}

					{s.time_table && <a href={s.time_table}>View</a>}
					{s.semester && <p>Semester{s.semester} Branch {s.branch_section}</p>}

					{s.LecturePlan && <a href={s.LecturePlan}>View</a>}
					{s.subject && <p>Subject {s.subject}</p>}

					{s.Project_title && <p>Project_title {s.Project_title}</p>}
					{s.description && <p>description : {s.description}</p>}
					{s.project_pic && <img src={s.project_pic} alt="" />}

					{s.paper_title && <p>paper_title : {s.paper_title}</p>}
					{s.indexing && <p>indexing : {s.indexing}</p>}
					{s.isbn_no && <p>isbn_no : {s.isbn_no}</p>}
					{s.volume && <p>volume : {s.volume}</p>}
					{s.journal && <p>journal : {s.journal}</p>}


					<br></br>
				</div>
			))}
		</div>
	);
}


function PlacementDashboard(props){
	var res = <div></div>
	var history = useHistory()
	let [element,setElement] = useState();

	const branch = localStorage.getItem('branch');
	const url = `departments/${branch}/${props.page}`;

	useEffect(() => {
		axios.get(url)
		.then(response => {
				setElement(<Items
					data = {response.data}
			/>)
		})
		.catch(error => {
			console.log(error)
		})
	},[url])



	if(localStorage.getItem('token')){
		res = <div>hi {localStorage.getItem('firstname')}</div>
	}
	else{
		history.push('/')
		alert('Please login first')
	}

	return(
		<div>
			{res}
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