import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/it/faculty';
		/>
	);
}

export default Faculty;