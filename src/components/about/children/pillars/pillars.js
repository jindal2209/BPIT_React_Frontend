import {Fragment} from 'react';

function Pillars(){
	return (
		<Fragment>
			<div className='container'>
				<div className="card-columns">
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/payal1.JPG"} className="card-img" alt="" /> Prof. Payal Pahwa</div>				
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/gaur.jpg"} className="card-img" alt="" />Prof. YD Gaur</div>				
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/abhijeet.JPG"} className="card-img" alt="" />Prof. Abhijit Nayak</div>				
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/aktondon.png"} className="card-img" alt="" />Prof. AK Tandon</div>				
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/crjagga.png"} className="card-img" alt="" />Prof. CR Jagga</div>				
					<div className='card text-center' ><img src={process.env.PUBLIC_URL+"/assets/images/ece16.png"} className="card-img" alt="" />Prof. Anuradha Bhasin</div>				
				</div>
			</div>
		</Fragment>
	)
}

export default Pillars ;