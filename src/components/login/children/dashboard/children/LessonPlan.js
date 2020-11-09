import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


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
					<div class="modal-body">
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Subject</label>
							<div class="col-sm-9">
								<Field type='text' name="subject" placeholder="Subject" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">File</label>
							<div class="col-sm-9">
								<input type='file' name="LecturePlan" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('LecturePlan',e.target.files[0])
									}
								/>
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

function DashboardLessonPlan(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add new lesson plans
			</button>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add Lesson Plan</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<LessonForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardLessonPlan;