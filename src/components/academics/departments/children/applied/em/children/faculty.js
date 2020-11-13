import GetFaculty from '../../../../getfaculty';

function EMFaculty(){
	return(
		<GetFaculty 
			url = 'departments/me/faculty'
		/>
	);
}

export default EMFaculty;