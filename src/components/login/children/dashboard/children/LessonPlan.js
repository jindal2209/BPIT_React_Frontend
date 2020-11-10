import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function LessonForm(){
	const initialValues = {
		branch: "",
		subject: "",
		LecturePlan: "",
	}
	
	const onsubmit = values =>{ 
		
		let fdata = {
			branch: localStorage.getItem('branchId'),
			subject: values.subject,
			LecturePlan: values.LecturePlan,
		}
	
		axios.post('lesson-plan/post',fdata)
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Subject</label>
							<div className="col-sm-9">
								<Field type='text' name="subject" placeholder="Subject" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">File</label>
							<div className="col-sm-9">
								<input type='file' name="LecturePlan" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('LecturePlan',e.target.files[0])
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
		axios.delete(`lesson-plan/${id}`)
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
					
					{s.LecturePlan && <a href={s.LecturePlan}>View</a>}
					{s.subject && <p>Subject {s.subject}</p>}
					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardLessonPlan(props){
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
				{/* Add new lesson plan */}
				<i className="fa fa-plus" aria-hidden='true'></i>
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add Lesson Plan</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<LessonForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>
		</div>
	);
}

export default DashboardLessonPlan;