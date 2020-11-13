import GetFaculty from '../../../../getfaculty';

function APFaculty(){
	return(
		<GetFaculty 
			url = 'departments/ap/faculty'
		/>
	);
}

export default APFaculty;