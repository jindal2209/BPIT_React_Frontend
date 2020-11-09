import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function ExpertToursForm(){
	const initialValues = {
		date_of_upload: "",
		description: "",
		data: '',
	}
	
	const onsubmit = values =>{ 
		
		let fdata = new FormData();
		fdata.append('date_of_upload',values.date_of_upload);
		fdata.append('description',values.description);
		fdata.append('data',values.data);
	
		axios.post('placement/expert-talk-seminar',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
			.then(response =>{
				console.log("success")
			})
			.catch(error => {
				console.log(error);
			})
	}

	return(
		<Formik onSubmit = {onsubmit} initialValues={initialValues}>
			
			{(formProps) => (

				<Form>
					<div className="modal-body">
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Title</label>
							<div className="col-sm-9">
								<Field type='text' name="title" placeholder="Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">File</label>
							<div className="col-sm-9">
								<input type='file' name="events" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('events',e.target.files[0])
									}
								/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Date</label>
							<div className="col-sm-9">
								<Field type='date' name="date" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
					</div>
					<div className="modal-footer">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

function Items(props){
	return(
		<div>
			{props.data.map((s) => (
				<div className='m-2 p-2 border border-light rounded items'>
					<i className="fa fa-bell float-left" aria-hidden="true"> {s.title}</i>
					<a><i className="fa fa-trash float-right mx-1" aria-hidden="true"></i></a> 
					<a><i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i></a>
					{s.events && <a href={s.events}>View</a>}
					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardExpertTours(props){
	let [res,setRes] = useState();

	const branch = localStorage.getItem('branch');
	const url = `placement/${branch}/${props.page}`;

	useEffect(() => {
		axios.get(url)
		.then(response => {
				setRes(<Items
					data = {response.data}
			/>)
		})
		.catch(error => {
			console.log(error)
		})
		
	},[props.page,url])


	return(
		<div>
			<button type="button" data-toggle="modal" className='btn' data-target="#exampleModal">
				{/* Add new expert tours */}
				<i className="fa fa-plus" aria-hidden='true'></i>
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add Event</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<ExpertToursForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>
		</div>
	);
}

export default DashboardExpertTours;