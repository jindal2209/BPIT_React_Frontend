import React, {useState,useEffect} from 'react'
import axios from "axios";
import Configuration from '../../configuration'

function Tb(props){
	const download_icon = 	<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
								<path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
							</svg>
	return(
		<tr>
			<td>{props.nirf_name}</td>
			<td>{props.date_of_upload}</td>
			<td><a href={props.file} target='blank'>{download_icon}</a></td>
		</tr>
	)
}

function Nirf(){
	const url = Configuration() + "nirf/" 
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

	if (data){
		res = <table className="table table-bordered">
			<thead>
				<tr>
					<th>Name</th>
					<th>Date</th>
					<th>Download</th>
				</tr>
			</thead>
			<tbody>
				{data.map((s,index)=>(
					<Tb 
						key = {index}
						nirf_name = {s.nirf_name}
						date_of_upload = {s.date_of_upload}
						file = {s.file}
					/>
				))}
			</tbody>
		</table>
	}

	return(
		<React.Fragment>
			{res}
		</React.Fragment>
	)
}


export default Nirf;