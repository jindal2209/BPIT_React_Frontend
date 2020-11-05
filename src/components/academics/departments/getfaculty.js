import axios from "axios";
import { Fragment,useState ,useEffect} from "react";


function Profile(props){
	return(
		<div className="card-h m-5">
			<img src={props.profile_pic} className='card-h__pic' alt="" />
			<div className="card-h__content">
				<h4> {props.name}</h4>
				<p> {props.email}</p>
				<p> {props.Qualification}</p>
				<p>Designation : {props.designation}</p>
				<p>Experience : {props.Experience}</p>
				<p>Specialization : {props.speacialization}</p>
				{props.nation_Publications && <p><p>National Publications : {props.nation_Publications}</p></p>}
				{props.international_publication && <p><p>International Publication : {props.international_publication}</p></p>}
				{props.publication_url && <p><a target='_blank' href={props.publication_url}>Publication url</a></p>}
			</div>
		</div>
	)
}

function GetFaculty(props){
	let url = props.url;
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
					{data.map((s)=>(
						<Profile
							id = {s.id}
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
					))}
				</div>
	}

	return(
		<Fragment>
			{res}

		</Fragment>
	);
}

export default GetFaculty;
