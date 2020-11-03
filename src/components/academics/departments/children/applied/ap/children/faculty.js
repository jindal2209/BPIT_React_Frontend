import GetFaculty from '../../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/ap/faculty'
		/>
	);
}

export default Faculty;