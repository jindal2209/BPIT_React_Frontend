import React, {useState,useEffect} from 'react'
import axios from "axios";
import Configuration from '../../../../configuration'

function Holder(props){

	return(
		<React.Fragment>
			Title : {props.title} <br></br>
			<a href={props.link} target="_blank" rel="noreferrer">Click here</a> <br></br>
			Date : {props.date}
		</React.Fragment>
	);

}

function Notice(){
	const notice_url = Configuration() + "notice/home/" 
	const [notice,setNoticeData] = useState(null);

	useEffect(() => {
		axios.get(notice_url)
			.then(response => {
				setNoticeData(response.data)				
			})
			.catch(error => {
				console.log(error)
			})		
	},[notice_url])

	return(
		<React.Fragment>
			<marquee behavior="scroll" direction="up" scrollamount="4">
				<div>
					{notice && notice.map((s) => (
						<Holder 
							key = {s.id}
							title = {s.title}
							link = {s.notices}
							date = {s.date}
						/>
					))}
				</div>
			</marquee>
		</React.Fragment>
	);

}

function News(){
	const news_url = Configuration() + "news/home/" 
	const [news_data,setNewsData] = useState(null);

	useEffect(() => {
		axios.get(news_url)
			.then(response => {
				setNewsData(response.data)				
			})
			.catch(error => {
				console.log(error)
			})		
	},[news_url])

	return(
		<React.Fragment>
			<marquee behavior="scroll" direction="up" scrollamount="4">
				<div>
					{news_data && news_data.map((s) => (
						<Holder 
							key = {s.id}
							title = {s.title}
							link = {s.news}
							date = {s.date}
						/>
					))}
				</div>
			</marquee>
		</React.Fragment>
	);


}

function Events(){
	const events_url = Configuration() + "events/home/" 
	const [events,setEventsData] = useState(null);

	useEffect(() => {
		axios.get(events_url)
			.then(response => {
				setEventsData(response.data)				
			})
			.catch(error => {
				console.log(error)
			})		
	},[events_url])

	return(
	<React.Fragment>
		<marquee behavior="scroll" direction="up" scrollamount="4">
			<div>
				{events && events.map((s) => (
					<Holder 
						key = {s.id}
						title = {s.title}
						link = {s.events}
						date = {s.date}
					/>
				))}
			</div>
		</marquee>
	</React.Fragment>
	);

}


function Middle(){
	return(
		<div className='container-fluid'>
			<div className="row justify-content-center text-center my-5">
				<div className="col-lg-4 justify-content-center shadow-lg rounded my-2">
					<h3 className="text-primary">News</h3>
					<News />
				</div>
				<div className="col-lg-4 justify-content-center shadow-lg rounded my-2">
					<h3 className="text-primary">Notices</h3>
					<Notice />
				</div>
				<div className="col-lg-4 justify-content-center shadow-lg rounded my-2">
					<h3 className="text-primary">Events</h3>
					<Events />
				</div>
			</div>
		</div>

	);
}

export default Middle;