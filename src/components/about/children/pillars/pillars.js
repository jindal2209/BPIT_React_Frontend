import {Fragment} from 'react';

function Pillars(){
	return (
		<Fragment>
			<div id="add-animation">
				<h3 className='page-subheader'>Pillars of BPIT</h3>
				<div className="card-wrap">
					<div className="card">
						<img src="/assets/images/payal1.JPG" className=" center-h pic" alt="" />
						<div className="card__text">Prof. Payal Pahwa</div>
					</div>
					<div className="card">
						<img src="/assets/images/gaur.jpg" className=" center-h pic" alt="" />
						<div className="card__text">Prof. YD Gaur</div>
					</div>
					<div className="card">
						<img src="/assets/images/abhijeet.JPG" className="center-h pic" alt="" />
						<div className="card__text"> Prof. Abhijit Nayak</div>
					</div>
					<div className="card">
						<img src="/assets/images/aktondon.png" className=" center-h pic" alt="" />
						<div className="card__text">Prof. AK Tandon</div>
					</div>
					<div className="card">
						<img src="/assets/images/crjagga.png" className=" center-h pic" alt="" />
						<div className="card__text">Prof. CR Jagga</div>
					</div>
					<div className="card">
						<img src="/assets/images/ece16.png" className=" center-h pic" alt="" />
						<div className="card__text">Prof. Anuradha Bhasin</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Pillars ;