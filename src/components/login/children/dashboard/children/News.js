import  axios from 'axios';
import { Formik,Form,Field } from 'formik';


// const validationSchema = Yup.object({
// 	name: Yup.string().required("name required"),
// 	email: Yup.string().email("invalid format").required("required")
// })

function NewsForm(){
	const initialValues = {
		branch: "",
		title: "",
		date: "",
		news: '',
	}
	
	const onsubmit = values =>{ 
		
		let fdata = new FormData();
		fdata.append('title',values.title);
		fdata.append('date',values.date);
		fdata.append('news',values.news);
		fdata.append('branch',localStorage.getItem('branchId'));

	
		axios.post('news/post',fdata,{headers:{'Content-Type' : 'multipart/form-data'}})
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
								<input type='file' name="news" className="form-control-file"
									onChange = {(e) => formProps.setFieldValue('news',e.target.files[0])
									}
								/>
							</div>
						</div>
						<br />
						<div class="form-group row">
							<label class="col-sm-3 col-form-label col-form-label-sm">Date</label>
							<div class="col-sm-9">
								<Field type='date' name="date" className="form-control form-control-sm"/>
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

function DashboardNews(){
	return(
		<div>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Add new news
			</button>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Add News</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<NewsForm />

					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardNews;