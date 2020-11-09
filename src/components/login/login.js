import { useState } from "react";
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

function UserLogin(){
	var [user,setUser] = useState();
	var [password,setPassword] = useState();
	var [url,setUrl] = useState('auth-token/');
	var history = useHistory();
	var [login,setLogin] = useState("Faculty Login");

	function handleUser(event){
		setUser(event.target.value)
	}

	function handlePassword(event){	
		setPassword(event.target.value)
	}

	function handleChange(event){
		if(event.target.checked){
			setLogin('Placement Login');
			setUrl('auth-token/placement/')
		}
		else{
			setUrl('auth-token/')
			setLogin('Faculty Login');
		}
	}


	function handleLogin(event){
		event.preventDefault();
		
		const data = {
			username: user,
			password: password
		}
		axios.post(url,data)
		.then(response => {
			axios.get("branch/"+ response.data.branch)
			.then(response => {
				localStorage.setItem('branch',response.data);
			})
			localStorage.setItem('token',response.data.token);
			localStorage.setItem('firstname',response.data.firstname);
			localStorage.setItem('branchId',response.data.branch);
			history.push('/dashboard/home')
		})
		.catch(() => {
			setUser("")
			setPassword("")
			history.push('/login')
		})
	}

	return(
		<div className="p-5 mx-2">
			{localStorage.getItem('token') && <Redirect exact to='/dashboard/home' />}
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={user} onChange={handleUser} />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePassword} />
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleChange} />
					<label className="form-check-label" for="exampleCheck1">Placement Login</label>
				</div>
				<br />
				<button type="submit" className="btn btn-primary">{login}</button>
			</form>
		</div>
	);
}

export default UserLogin;