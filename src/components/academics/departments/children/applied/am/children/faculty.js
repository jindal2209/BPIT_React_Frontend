import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/am/faculty'
		/>
	);
}

export default Faculty;