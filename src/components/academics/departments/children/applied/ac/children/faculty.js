import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/ac/faculty';
		/>
	);
}

export default Faculty;