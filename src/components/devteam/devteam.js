function DevTeam(){
	return(
		<div>
		<h2>Development Team</h2>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/AchalSir.png"} className="card__pic" alt="" />
						<div className="card__text">Dr. Achal Kaushik</div>
						<div className="card__text">Co-ordinator</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/Nishutosh Sharma.png"} className="card__pic" alt="" />
						<div className="card__text">Nishutosh Sharma</div>
						<div className="card__text">Branch: CSE - A </div>
						<div className="card__text">Batch: 2015 - 2019 </div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/Mayank Jha.png"} className="card__pic" alt="" />
						<div className="card__text">Mayank Jha</div>
						<div className="card__text">Branch: CSE - A </div>
						<div className="card__text">Batch: 2016 - 2020 </div>
					</div>
				</div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/Mayank Sharma.png"} className="card__pic" alt="" />
						<div className="card__text">Mayank Sharma</div>
						<div className="card__text">Branch: CSE - A </div>
						<div className="card__text">Batch: 2016 - 2020 </div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/Ritika Chauhan.png"} className="card__pic" alt="" />
						<div className="card__text">Ritika Chauhan</div>
						<div className="card__text">Branch: IT </div>
						<div className="card__text">Batch: 2018 - 2022 </div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="teamText cardSize">
						<img src={process.env.PUBLIC_URL+"/assets/images/Shubham Jindal.png"} className="card__pic" alt="" />
						<div className="card__text">Shubham Jindal</div>
						<div className="card__text">Branch: CSE - A </div>
						<div className="card__text">Batch: 2019 - 2023 </div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default DevTeam;
