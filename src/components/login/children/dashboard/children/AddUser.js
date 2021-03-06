import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function UserForm(){
	const initialValues = {
		email: "",
		first_name: "",
		last_name: "",
		password: '',
		profile_pic: "",
		designation: '',
		Qualification: '',
		Experience: '',
		speacialization: '',
		international_publication: '',
		nation_Publications: '',
		date_of_joining: '',
		faculty_publication_url: '',
		is_faculty_admin: false,
	}
	
	const onsubmit = values =>{ 
		const udata = {
			username: values.email,
			email: values.email,
			first_name: values.first_name,
			last_name: values.last_name,
			password: values.password,
		}
		
		let fdata = new FormData();
		fdata.append('profile_pic',values.profile_pic);
		fdata.append('designation',values.designation);
		fdata.append('Qualification',values.Qualification);
		fdata.append('Experience',values.Experience);
		fdata.append('speacialization',values.speacialization);
		fdata.append('nation_Publications',values.nation_Publications);
		fdata.append('international_publication',values.international_publication);
		fdata.append('date_of_joining',values.date_of_joining);
		fdata.append('faculty_publication_url',values.faculty_publication_url);
		fdata.append('is_faculty_admin',values.is_faculty_admin);
		fdata.append('branch',localStorage.getItem('branchId'));

	
		axios.post('user/create',udata)
			.then(response =>{
				fdata.append('User',response.data.pk);	
				axios.post('faculty/create',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
					.then(response =>{
						console.log('success');
					})
					.catch(error => {
						console.log(error);
					})
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
							<label className="col-sm-3 col-form-label col-form-label-sm">Email</label>     
							{/* Send username and email same      */}
							<div className="col-sm-9">
								<Field type='email' name="email" placeholder="Email" className="form-control form-control-sm"/>
								{/* <ErrorMessage name='name' /> */}
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">First Name</label>
							<div className="col-sm-9">
								<Field type='text' name="first_name" placeholder="First name" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Last Name</label>
							<div className="col-sm-9">
								<Field type='text' name="last_name" placeholder="Last name" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Passsword</label>
							<div className="col-sm-9">
								<Field type='password' name="password" placeholder="Password" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Profile Pic</label>
							<div className="col-sm-9">
								<input type='file' name="profile_pic" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('profile_pic',e.target.files[0])
									}
								/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Designation</label>
							<div className="col-sm-9">
								<Field type='text' name="designation" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Qualification</label>
							<div className="col-sm-9">
								<Field type='text' name="Qualification" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Experience (in years)</label>
							<div className="col-sm-9">
								<Field type='text' name="Experience" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Specialization</label>
							<div className="col-sm-9">
								<Field type='text' name="speacialization" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">International Publication</label>
							<div className="col-sm-9">
								<Field type='text' name="international_publication" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">National Publications</label>
							<div className="col-sm-9">
								<Field type='text' name="nation_Publications" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Date of joining</label>
							<div className="col-sm-9">
								<Field type='date' name="date_of_joining" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Google Scholar URL</label>
							<div className="col-sm-9">
								<Field type='text' name="faculty_publication_url" className="form-control form-control-sm"/>
							</div>
						</div>
						<br />
						<div className="form-group row">
							<label className="col-sm-3 col-form-label col-form-label-sm">Faculty Admin</label>
							<div className="col-sm-9">
								<Field type='checkbox' name="is_faculty_admin" className="form-check-input"/>
							</div>
						</div>
						
					</div>
					<div className="modal-footer">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</Form>

			)}
		</Formik>
	);
}

function DashboardHome(){
	return(
		<div>
			<h2>Welcome {localStorage.getItem('firstname')}....</h2>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add New User
			</button>
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Add User</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<UserForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardHome;