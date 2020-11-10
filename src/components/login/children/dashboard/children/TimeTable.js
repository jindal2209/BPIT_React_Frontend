import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function TimeTableForm(){
	const initialValues = {
		branch: "",
		branch_section: true,
		semester: "",
		time_table: "",
	}
	
	const onsubmit = values =>{ 
		
		let fdata = new FormData();
		fdata.append('branch_section',values.branch_section);
		fdata.append('semester',values.semester);
		fdata.append('time_table',values.time_table);
		fdata.append('branch',localStorage.getItem('branchId'));

	
		axios.post('time-table/post',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Semester</label>
							<div className="col-sm-9">
								<Field type='text' name="title" placeholder="Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Section</label>
							<div className="col-sm-9">
								<Field type='text' name="branch_section" placeholder="branch_section" className="form-control form-control-sm"/>
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
		axios.delete(`time-table/${id}`)
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
					<a><i className="fa fa-trash float-right mx-1" aria-hidden="true" onClick={() => handleDelete(s.id)}></i></a> 
					{/* <a><i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i></a> */}
					
					{s.time_table && <a href={s.time_table}>View</a>}
					{s.semester && <p>Semester{s.semester} Branch {s.branch_section}</p>}

					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardTimetable(props){
				
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
				{/* Add new timetable */}
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
						<TimeTableForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>
		</div>
	);
}

export default DashboardTimetable;