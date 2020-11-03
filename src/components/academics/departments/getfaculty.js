import axios from "axios";
import { useState } from "react";
import Configuration from '../../../configuration';


function Profile(props){
	return(
		<div>
			Name : {props.name}
			<img src={props.profile_pic} alt="" />
			Designation : {props.designation}
			Email : {props.email}
			Qualification : {props.Qualification}
			Experience : {props.Experience}
			Specialization : {props.speacialization}
			National Publications : {props.nation_Publications}
			International Publication : {props.international_publication}
			Publication url : {props.publication_url}
		</div>
	)
}

function GetFaculty(props){
	let url = Configuration() + props.url;
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
					{data.map(s)=>(
						<Profile
							name = {s.firstname + " " + s.lastname}
							email = {s.email}
							profile_pic = {s.profile_pic}
							designation = {s.designation}
							Qualification = {s.Qualification}
							Experience = {s.Experience + " years"}
							speacialization = {s.speacialization}
							nation_Publications = {s.nation_Publications}
							international_publication = {s.international_publication}
							publication_url = {s.publication_url}
						/>
					)}
				</div>
	}

	return(
		{res}
	);
}
