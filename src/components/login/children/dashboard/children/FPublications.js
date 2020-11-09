import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


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

function DashboardFacultyPublication(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add Faculty Publication
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
		</div>
	);
}

export default DashboardFacultyPublication;