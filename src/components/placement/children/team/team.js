import React, {useState,useEffect} from 'react'
import axios from "axios";

function ShowTeam(props){
	return(
		<div>
			Name : {props.firstname + " " + props.lastname}
			<img src={props.profile_pic} alt="" />
			Designation : {props.designation}
			Email : {props.email}
			Phone_Number : {props.Phone_Number}
		</div>
	)
}

function Placementteam(){
	const url = "placement/teams" 
	const [data,setData] = useState(null);
	var res = 	<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
					</div>
				</div>

	useEffect(() => {
		axios.get(url)
			.then(response => {
				setData(response.data)				
			})
			.catch(error => {
				console.log(error)
			})
	},[url])

	if(data){
		res = 	<div>	
					{data.map((s,index)=>(
						<ShowTeam
							key = {index}
							firstname = {s.firstname}
							lastname = {s.lastname}
							email = {s.email}
							profile_pic = {s.profile_pic}
							designation = {s.designation}
							Phone_Number = {s.Phone_Number}
						/>
					))}
				</div>
	}

	return(
		<React.Fragment>
			<h3 className='page-subheader'>Placement Team</h3>
			{res}
		</React.Fragment>
	)
}


export default Placementteam;