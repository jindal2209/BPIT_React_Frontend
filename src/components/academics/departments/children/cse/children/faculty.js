import GetFaculty from '../../../getfaculty';

function Faculty(){
	return(
		<GetFaculty 
			url = 'departments/cse/faculty'
		/>
	);
}

export default Faculty;