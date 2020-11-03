import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/ece/faculty';
		/>
	);
}

export default Faculty;