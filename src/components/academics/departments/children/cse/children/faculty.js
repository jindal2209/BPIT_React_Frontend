import GetFaculty from '../../../getfaculty';

function CSEFaculty(){
	return(
		<GetFaculty 
			url = 'departments/cse/faculty'
		/>
	);
}

export default CSEFaculty;