function DevTeam(){
	return(
		<div className="m-5">
			<h2 className="page-header">Development Team</h2>

			<div className='container'>

				<div className="card-columns p-2">
					
					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/AchalSir.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Dr. Achal Kaushik
							<br/>
							Coordinator
							<br/>
							<br/>
						</div>
					</div>

					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/Shubham Jindal.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Shubham Jindal
							<br/>
							Branch: CSE-A 
							<br/>
							Batch: 2019-2023
						</div>
					</div>				
				
					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/Ritika Chauhan.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Ritika Chauhan
							<br/>
							Branch: IT 
							<br/>
							Batch: 2018-2022
						</div>
					</div>

					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/Mayank Jha.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Mayank Jha
							<br/>
							Branch: CSE-A
							<br/>
							Batch: 2016-2020
						</div>
					</div>

					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/Mayank Sharma.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Mayank Sharma
							<br/>
							Branch: CSE-A
							<br/>
							Batch: 2016-2020
						</div>
					</div>
					
					<div className='card text-center p-1' ><img src={process.env.PUBLIC_URL+"/assets/images/Nishutosh Sharma.png"} className="card-img" alt="" /> 
						<div className="card-body">
							Nishutosh Sharma
							<br/>
							Branch: CSE-A
							<br/>
							Batch: 2015-2019
						</div>
					</div>

				</div>
			</div>
		
		</div>
		
	);
}

export default DevTeam;
