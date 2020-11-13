import GetFaculty from '../../../getfaculty';

function ECEFaculty(){
	return(
		<GetFaculty 
			url = 'departments/ece/faculty'
		/>
	);
}

export default ECEFaculty;