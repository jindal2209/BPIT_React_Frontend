import  axios from 'axios';
import { Formik,Form,Field } from 'formik';
import { useState,useEffect } from 'react';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function FacultyPublicationForm(){
	const initialValues = {
		User: '',
		branch: "",
		paper_title: "",
		indexing: "",
		year: '',
		isbn_no: '',
		volume: '',
		journal: ''
	}
	
	const onsubmit = values =>{ 

		const fdata = {
			User: localStorage.getItem('userId'),
			branch: localStorage.getItem('branchId'),
			paper_title: values.paper_title,
			indexing: values.indexing,
			year: values.year,
			isbn_no: values.isbn_no,
			volume: values.volume,
			journal: values.journal
		}
		
		axios.post('faculty-publications/post',fdata)
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
								<Field type='text' name="paper_title" placeholder="Paper Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Indexing</label>
							<div className="col-sm-9">
								<Field type='text' name="indexing" placeholder="Indexing" className="form-control form-control-sm"/>
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
							<label className="col-sm-3 col-form-label col-form-label-sm">ISBN no.</label>
							<div className="col-sm-9">
								<Field type='text' name="isbn_no" placeholder="ISBN no." className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Volume</label>
							<div className="col-sm-9">
								<Field type='text' name="volume" placeholder="Volume" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Journal</label>
							<div className="col-sm-9">
								<Field type='text' name="journal" placeholder="Journal" className="form-control form-control-sm"/>
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
		axios.delete(`faculty-publications/${id}`)
		.then(response => {
			console.log("Success");
			window.location.reload(false)
		})
		.catch(error => {
			console.log(error)
		})
	}
	return(
		<div>
			{props.data.map((s) => (
				<div className='m-2 p-2 border border-light rounded items'>
					<i className="fa fa-bell float-left" aria-hidden="true"></i>
					<i className="fa fa-trash float-right mx-1" aria-hidden="true" onClick={() => handleDelete(s.id)}></i> 
					{/* <i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i> */}
					
					{s.paper_title && <p>paper_title : {s.paper_title}</p>}
					{s.indexing && <p>indexing : {s.indexing}</p>}
					{s.isbn_no && <p>isbn_no : {s.isbn_no}</p>}
					{s.volume && <p>volume : {s.volume}</p>}
					{s.journal && <p>journal : {s.journal}</p>}
					<br></br>
				</div>
			))}
		</div>
	);
}

function DashboardFacultyPublication(props){

		
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
				{/* Add new faculty publications */}
				<i className="fa fa-plus" aria-hidden='true'></i>
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add Publication</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<FacultyPublicationForm />

					</div>
				</div>
			</div>
			<div>
				{res}
			</div>

		</div>
	);
}

export default DashboardFacultyPublication;