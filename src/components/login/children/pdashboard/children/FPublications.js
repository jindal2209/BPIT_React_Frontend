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
					<div class="modal-body">
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Paper Title</label>
							<div class="col-sm-9">
								<Field type='text' name="paper_title" placeholder="Paper Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Indexing</label>
							<div class="col-sm-9">
								<Field type='text' name="indexing" placeholder="Indexing" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Year</label>
							<div class="col-sm-9">
								<Field type='text' name="year" placeholder="Year" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">ISBN no.</label>
							<div class="col-sm-9">
								<Field type='text' name="isbn_no" placeholder="ISBN no." className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Volume</label>
							<div class="col-sm-9">
								<Field type='text' name="volume" placeholder="Volume" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Journal</label>
							<div class="col-sm-9">
								<Field type='text' name="journal" placeholder="Journal" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-primary">Submit</button>
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
					<i className="fa fa-bell float-left" aria-hidden="true"></i>
					<a><i className="fa fa-trash float-right mx-1" aria-hidden="true"></i></a> 
					<a><i className="fa fa-paint-brush float-right mx-1" aria-hidden="true"></i></a>
					
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
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add Publication</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
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