import axios from "axios";
import { Fragment,useState ,useEffect} from "react";


function Profile(props){
	return(
		<div className='row my-3 border border-light p-2 w-100'>
			<div className='col-md-3'>
				<div class="card" style={{width: "17rem"}}>
					<img class="card-img-top" src={props.profile_pic} alt="Cardcap" />
					<div class="card-body text-center">
						<h5 class="card-title">{props.name}</h5>
						<p class="card-text">{props.designation}</p>
					</div>
				</div>
			</div>
			<div className='col-md-1'></div>
			<div className="col-md-7">
				<div class="card-body">
					<p class="card-text">{props.email}</p>
					<p class="card-text">{props.Qualification}</p>
					<p class="card-text"><strong>Experience:</strong> {props.Experience}</p>
					<p class="card-text"><strong>Specialization:</strong> {props.speacialization}</p>
					{props.international_publication ? <p class="card-text"><strong>International Publication :</strong> {props.international_publication}</p> : null}
					{props.nation_Publications ? <p class="card-text"><strong>National Publications :</strong> {props.nation_Publications}</p> : null}
					{props.publication_url ? <p class="card-text"><a target='_blank' href={props.publication_url} rel="noreferrer">Publication url</a></p> : null}
				</div>
			</div>
		</div>
	)
}

function GetFaculty(props){
	let url = props.url;
	let [data,setData] = useState(null);
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
		res = 	<div className='container'>
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
