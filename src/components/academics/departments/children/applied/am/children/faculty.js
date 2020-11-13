import GetFaculty from '../../../../getfaculty';

function AMFaculty(){
	return(
		<GetFaculty 
			url = 'departments/am/faculty'
		/>
	);
}

export default AMFaculty;