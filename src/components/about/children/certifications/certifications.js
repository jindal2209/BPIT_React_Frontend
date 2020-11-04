import { Fragment } from "react";

function Certifications(){
	return(
		<Fragment>
			<div id="add-animation">
				<h3 className='page-subheader'>Certificates and Accreditations</h3>
				<img src="/assets/images/aicte.jpg" className="people-image center-h" alt="" />
				<p id="text-content">
					BPIT is approved by Ministry of HRD, Govt. of India and Directorate of Training and Technical Education Govt. of National Capital Territory, Delhi. It is affiliated to Guru Gobind Singh Indraprastha University, Delhi and offers courses of Bachelor of Technology (B.Tech) and Masters of Business Administration (MBA), which are approved by the All India Council for Technical Education (AICTE).
				</p><br></br><br></br><br></br>
				<img src="/assets/images/nba.png" className="people-image center-h" alt="" />
				<p id="text-content">All four B.Tech. programs (CSE, ECE, IT EEE) are accredited by NBA (National Board of Accreditation)</p><br></br><br></br><br></br><br></br>
			</div>
		</Fragment>
	)
}

export default Certifications;