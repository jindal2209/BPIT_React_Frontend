import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


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
					<div class="modal-body">
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Semester</label>
							<div class="col-sm-9">
								<Field type='text' name="title" placeholder="Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Section</label>
							<div class="col-sm-9">
								<Field type='text' name="branch_section" placeholder="branch_section" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Time Table</label>
							<div class="col-sm-9">
								<input type='file' name="time_table" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('time_table',e.target.files[0])
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

function DashboardTimetable(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add new notices
			</button>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add TimeTable</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<TimeTableForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardTimetable;