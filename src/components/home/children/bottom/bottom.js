import './bottom.css'

function Bottom() {
	return (
		<div className=' text-center my-3 py-5 bg-light'>
			<h2>BPIT at a Glance</h2>
			<p className='py-3 px-3'>
				BPIT is a pioneer Institute providing education to the students of delhi and outside delhi in the
				field of engineering and management since more than a decade. BPIT is the only self financing institute affiliated to
				GGSIP University whose all UG engineering programs (B.Tech. CSE/IT/ ECE / EEE) are NBA (National Board of Accreditation)
				which in itself certifies the quality policy and standards followed in BPIT. All the labs in BPIT are well equipped. The
				fully dedicated placement team of BPIT has assured the placement of BPIT students in reputed companies such as amazon,
				zomato, Virtusa, ByJuY’s, LibSys, IBM, Samsung, Motherson Sumi, Sopera Steria and many more. BPIT is spread in an area
				of about 5.7 acres and has four storey building of academic and office complex with lifts. A girl student's Hostel having
				64 double occupancy rooms, with all modern amenities has been constructed and furnished.
			</p>

			<div className='container-fluid'>
				<div className='row'>
					<div className="col-sm-4 rounded my-2">
						<div className=" wrimagecard wrimagecard-topimage shadow-lg rounded">
							<div className="wrimagecard-topimage_header">
								<img src="/assets/home/4.jpg" width="100%" height="300px" alt="" />
							</div>
							<div className="wrimagecard-topimage_title py-5">
								BPIT received outstanding Contributor Award from ICT Academy & Salesforce India
							</div>
						</div>
					</div>

					<div className="col-sm-4 rounded my-2">
						<div className="wrimagecard wrimagecard-topimage shadow-lg rounded">
							<div className="wrimagecard-topimage_header">
								<img src="/assets/home/7.jpg" width="100%" height="300px" alt="" />
							</div>
							<div className="wrimagecard-topimage_title py-5">
								Best Paper award to research paper of BPIT Student & Faculty in SIGMA 	2018
						</div>
						</div>
					</div>

					<div className="col-sm-4 rounded my-2">
						<div className="wrimagecard wrimagecard-topimage shadow-lg rounded">
							<div className="wrimagecard-topimage_header">
								<img src="/assets/home/6.jpg" width="100%" height="300px" alt="" />
							</div>
							<div className="wrimagecard-topimage_title py-4">
								The final year B.Tech IT students filed a patent for theirprocess &
								technique named as PoS SaaS. The technique is designed to change the user experience in
								Restaurants and reduce the cost of the owner. They also started a company
								“One Root Technology”.
						</div>
						</div>
					</div>

				</div>
			</div>

			<div className='container-fluid'>
				<div className="row choose justify-content-center text-white p-3 mt-5">
					<h2 className="col-lg-12 font-weight-bold">
						Why Choose Us
					</h2>
					<div className='row mt-3'>
						<div className='col-lg-3 font-weight-bold py-1'>
							<i className="far fa-address-book color-1"></i>
							93 Teachers
						</div>
						<div className='col-lg-3 font-weight-bold py-1'>
							<i className="far fa-address-book color-1"></i>
							915 Publications
						</div>
						<div className='col-lg-3 font-weight-bold py-1'>
							<i className="far fa-address-book color-1"></i>
							1805 Students
						</div>
						<div className='col-lg-3 font-weight-bold py-1'>
							<i className="far fa-address-book color-1"></i>
							25 Awards Won
						</div>
					</div>
				</div>
			</div>

			<div className="row justify-content-center mt-5">
				<div className="col-lg-12">
					<h2>Our Collaborators</h2>
				</div>
			</div>
		</div>
	);
}

export default Bottom;