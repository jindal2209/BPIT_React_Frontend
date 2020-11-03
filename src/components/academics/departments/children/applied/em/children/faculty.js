import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/me/faculty';
		/>
	);
}

export default Faculty;