import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function StudentPublicationForm(){
	const initialValues = {
		title: "",
		authors: "",
		branch: "",
		venue: '',
		conference_name: '',
		year: '',
	}
	
	const onsubmit = values =>{ 

		const fdata = {
			title: values.title,
			authors: values.authors,
			branch: localStorage.getItem('branchId'),
			venue: values.venue,
			conference_name: values.conference_name,
			year: values.year,
		}
		
		axios.post('student-publications/post',fdata)
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Paper Title</label>
							<div className="col-sm-9">
								<Field type='text' name="title" placeholder="Paper Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Authors</label>
							<div className="col-sm-9">
								<Field type='text' name="authors" placeholder="Authors" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Year</label>
							<div className="col-sm-9">
								<Field type='text' name="year" placeholder="Year" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Venue</label>
							<div className="col-sm-9">
								<Field type='text' name="venue" placeholder="Venue" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Conference Name</label>
							<div className="col-sm-9">
								<Field type='text' name="conference_name" placeholder="Conference Name" className="form-control form-control-sm"/>
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
					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardStudentPublications(props){
	let [res,setRes] = useState();

	const branch = localStorage.getItem('branch');
	const url = `departments/${branch}/${props.page}`;

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
				{/* Add new Splublications */}
				<i className="fa fa-plus" aria-hidden='true'></i>
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add Student Publication</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<StudentPublicationForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>
		
		</div>
	);
}

export default DashboardStudentPublications;