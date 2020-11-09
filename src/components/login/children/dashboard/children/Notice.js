import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function NoticeForm(){
	const initialValues = {
		branch: "",
		display_to_home: true,
		examination_notice: false,
		title: "",
		date: "",
		notices: '',
	}
	
	const onsubmit = values =>{ 
		
		let fdata = new FormData();
		fdata.append('title',values.title);
		fdata.append('display_to_home',values.display_to_home);
		fdata.append('examination_notice',values.examination_notice);
		fdata.append('date',values.date);
		fdata.append('notices',values.notices);
		fdata.append('branch',localStorage.getItem('branchId'));

	
		axios.post('notice/post',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
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
							<label class="col-sm-3 col-form-label col-form-label-sm">Title</label>
							<div class="col-sm-9">
								<Field type='text' name="title" placeholder="Title" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">File</label>
							<div class="col-sm-9">
								<input type='file' name="notices" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('notices',e.target.files[0])
									}
								/>
							</div>
						</div>
						<br/>
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Date</label>
							<div class="col-sm-9">
								<Field type='date' name="date" placeholder="date" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Display to home</label>
							<div class="col-sm-9">
								<Field type='checkbox' name="display_to_home" placeholder="display_to_home" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Examination Notice</label>
							<div class="col-sm-9">
								<Field type='checkbox' name="examination_notice" className="form-control form-control-sm"/>
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

function DashboardNotice(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add new notices
			</button>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add Notice</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<NoticeForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardNotice;