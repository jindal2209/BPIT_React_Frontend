import { useState } from "react";
import axios from 'axios';
import { Redirect, useHistory } from "react-router-dom";

function UserLogin(){
	var [user,setUser] = useState();
	var [password,setPassword] = useState();
	var [url,setURL] = useState('auth-token/');
	var history = useHistory();

	function handleUser(event){
		setUser(event.target.value)
	}

	function handlePassword(event){	
		setPassword(event.target.value)
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
			history.push('/dashboard/home')
		})
		.catch(() => {
			setUser("")
			setPassword("")
			history.push('/login')
		})
	}

	return(
		<div>
			{localStorage.getItem('token') && <Redirect exact to='/dashboard/home' />}
			<form onSubmit={handleLogin}>
				Username: <input type='text' placeholder="username" value={user} onChange={handleUser}></input>
				Password: <input type="password" placeholder="password" value={password} onChange={handlePassword}></input>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default UserLogin;