import GetFaculty from '../../../../getfaculty';

function ACFaculty(){
	return(
		<GetFaculty 
			url = 'departments/ac/faculty'
		/>
	);
}

export default ACFaculty;