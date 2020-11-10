import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function StudentProjectsForm(){
	const initialValues = {
		branch: "",
		Project_title: true,
		project_pic: "",
		description: "",
	}
	
	const onsubmit = values =>{ 
		
		let fdata = new FormData();
		fdata.append('description',values.description);
		fdata.append('Project_title',values.Project_title);
		fdata.append('project_pic',values.project_pic);
		fdata.append('branch',localStorage.getItem('branchId'));

	
		axios.post('student-projects/post',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Description</label>
							<div className="col-sm-9">
								<Field as='textarea' name="description" placeholder="Description" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Project Title</label>
							<div className="col-sm-9">
								<Field type='text' name="Project_title" placeholder="Project Title" className="form-control form-control-sm"/>
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Time Table</label>
							<div className="col-sm-9">
								<input type='file' name="time_table" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('time_table',e.target.files[0])
									}
								/>
							</div>
						</div>
						<br />
					</div>
					<div className="modal-footer">
						<button type="submit" className="btn btn-primary" >Submit</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

function Items(props){
	function handleDelete(id){
		axios.delete(`student-projects/${id}`)
		.then(response => {
			console.log("Success");
			window.location.reload(false)
		})
		.catch(error => {
			console.log(error)
		})
	}

	// function handleEdit(id){
	// 	console.log(id);
	// }
	return(
		<div>
			{props.data.map((s) => (
				<div className='m-2 p-2 border border-light rounded items'>
					<i className="fa fa-bell float-left" aria-hidden="true"> {s.title}</i>
					<i className="fa fa-trash float-right mx-1" aria-hidden="true" onClick={() => handleDelete(s.id)}></i>
					{/* <i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i> */}
					
					{s.Project_title && <p>Project_title {s.Project_title}</p>}
					{s.description && <p>description : {s.description}</p>}
					{s.project_pic && <img src={s.project_pic} alt="" />}
					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardStudentProjects(props){
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
				{/* Add new student projects */}
				<i className="fa fa-plus" aria-hidden='true'></i>
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add TimeTable</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<StudentProjectsForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>
		</div>
	);
}

export default DashboardStudentProjects;