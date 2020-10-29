import Navbar from '../nav/nav'
import React, {useState,useEffect} from 'react'
import Configuration from '../../configuration'
import axios from "axios";

function Disclosures(){
	const url = Configuration() + "gallery/" 
	const [data,setData] = useState(null);

	useEffect(() => {
		axios.get(url)
			.then(response => {
				setData(response.data)				
			})
			.catch(error => {
				console.log(error)
			})
	},[url])

	return(
		<React.Fragment>
			<Navbar />
		</React.Fragment>
	)
}


export default Disclosures;