import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/hu/faculty';
		/>
	);
}

export default Faculty;