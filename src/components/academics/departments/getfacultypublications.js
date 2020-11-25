import axios from "axios";
import { Fragment,useState ,useEffect} from "react";


function Profile(props){
	return(
		<tr>
			<td>{props.name}</td>
			<td>{props.paper_title}</td>
			<td>{props.indexing}</td>
			<td>{props.year}</td>
			<td>{props.isbn_no}</td>
			<td>{props.volume}</td>
			<td>{props.journal}</td>
		</tr>
	)
}

function GetFacultyPub(props){
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
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>Name of Faculty</th>
								<th>Paper Title</th>
								<th>Indexing</th>
								<th>Year</th>
								<th>ISSN/ISBN No.</th>
								<th>Volume</th>
								<th>Journal Name</th>
							</tr>
						</thead>
						<tbody>
							{data.map((s)=>(
								<Profile
									name = {s.name}
									paper_title = {s.paper_title}
									indexing = {s.indexing}
									year = {s.year}
									isbn_no = {s.isbn_no}
									volume = {s.volume}
									journal = {s.journal}
								/>
							))}
						</tbody>
					</table>
				</div>
	}

	return(
		<Fragment>
			{res}

		</Fragment>
	);
}

export default GetFacultyPub;
