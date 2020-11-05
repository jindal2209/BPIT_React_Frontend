import React, {useState,useEffect} from 'react'
import axios from "axios";

function Ic(props){
	return(
		<div>
			Title : {props.title}
			<img src={props.photo} alt="" />
		</div>
	)
}

function Disclosures(){
	const url = "gallery/title/" 
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
						<Ic
							key = {index}
							title = {s.title}
							photo = {s.photo}
						/>
					))}
				</div>
	}

	return(
		<React.Fragment>
			<h2>Gallery</h2>
			{res}
		</React.Fragment>
	)
}


export default Disclosures;