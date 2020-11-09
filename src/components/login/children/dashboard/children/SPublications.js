import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


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
					<div class="modal-body">
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Paper Title</label>
							<div class="col-sm-9">
								<Field type='text' name="title" placeholder="Paper Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Authors</label>
							<div class="col-sm-9">
								<Field type='text' name="authors" placeholder="Authors" className="form-control form-control-sm"/>
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
							<label class="col-sm-3 col-form-label col-form-label-sm">Venue</label>
							<div class="col-sm-9">
								<Field type='text' name="venue" placeholder="Venue" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Conference Name</label>
							<div class="col-sm-9">
								<Field type='text' name="conference_name" placeholder="Conference Name" className="form-control form-control-sm"/>
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

function DashboardStudentPublications(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add Student Publication
			</button>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add Student Publication</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<StudentPublicationForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardStudentPublications;