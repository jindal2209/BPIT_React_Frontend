import './nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Navbar() {

	let [greet,setGreet] = useState(<Link to='/login'>Login</Link>)
	var tk = localStorage.getItem("token");

	useEffect(() => {
		if(tk){
			setGreet(<Link to='/dashboard/home'>Hi {localStorage.getItem('firstname')}</Link>)
		}
		else{
			setGreet(<Link to='/login'>Login</Link>);
		}
	},[tk])
	return (
		<div>
			<div className="top p-1 text-center justify-content-center">
				<div>
					<i className="fa fa-phone fa-rotate-90 mx-1" aria-hidden="true"></i>
					<span className='font-weight-bold'>011 - 27572900 , 27571080, 27574635, 27574637 &nbsp;&nbsp;&nbsp;</span>
					<i className="fa fa-envelope mx-1" aria-hidden="true"></i>
					<span className='font-weight-bold'>bpitindia@yahoo.com &nbsp;&nbsp;&nbsp;</span>
				</div>
			</div>
			
			<div className="middle">
				<div className="container-fluid">
					<div className='row px-2'>
						<div className='col-lg-12 text-right'>
							{greet}
						</div>
					</div>
					<div className='row align-middle'>
						<div className="col-sm-1"></div>
						<div className="col-sm-2 text-center py-1">
							<div><Link to="/"> <img className="bpit-logo" src={process.env.PUBLIC_URL+"/assets/images/logo.png"} alt="" /></Link></div>
						</div>
						<div className="col-sm-6">
							<h4 className="page-subheader">BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h4>
								<p>Affiliated To GGSIPU, Delhi, A unit of
								Bhartiya Brahmin Charitable Trust,
								<b>ISO 9001:2008 Certified</b></p>
								<br />
						</div>
						<div className="col-sm-3 text-center">
							<div className='row'>
								<div className='col-lg-3'>
									<img className="bpit-logo" src={process.env.PUBLIC_URL+"/assets/images/bpit-logo.png"} alt="" />
								</div>
								<div className='col-lg-6'>
									<div className='page-subheader  align-middle'>Bhartiya Brahmin Charitable Trust</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<nav className="navbar navbar-expand-sm">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse"></div>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to='/' className="nav-link font-weight-bold"> Home </Link>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle font-weight-bold">
									About
								</Link>
								<ul className="dropdown-menu">
									<li><Link to="/about/cprofile">College Profile</Link></li>
									<li><Link to="/about/trust">Trust</Link></li>
									<li><Link to="/about/cmessage">Chairman's Message</Link></li>
									<li><Link to="/about/pmessage">Principal's Message</Link></li>
									<li><Link to="/about/vision_mission">Vision/Mission</Link></li>
									<li><Link to="/about/pillars">Pillars of Bpit</Link></li>
									<li><Link to="/about/Certifications">Certifications and Accredations</Link></li>
								</ul>
							</li>
				
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle font-weight-bold">
									Academics
								</Link>
								<ul className="dropdown-menu">
									<li className="dropdown-submenu">
										<Link className="dropdown-toggle" data-toggle="dropdown">Programme</Link>
										<ul className="dropdown-menu">
											<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/pubinfo/admission2018/adm2018main/ADMBRO2018A_190218.pdf">MBA</a></li>
											<li><Link target="_blank" rel="noreferrer">B.Tech</Link></li>
											<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/pubinfo/admission2018/adm2018main/ADMBRO2018A_190218.pdf">BBA</a></li>
										</ul>
									</li>
									<li className="dropdown-submenu">
										<Link className="dropdown-toggle" data-toggle="dropdown">Departments</Link>
										<ul className="dropdown-menu extra-width">
											<li className="dropdown-submenu">
												<Link className="dropdown-toggle" data-toggle="dropdown">Applied Science</Link>
												<ul className="dropdown-menu">
													<li><Link to="/departments/ac/about">Applied Chemistry</Link></li>
													<li><Link to="/departments/ap/about">Applied Physics</Link></li>
													<li><Link to="/departments/am/about">Applied Maths</Link></li>
													<li><Link to="/departments/em/about">Engineering Mechanics</Link></li>
													<li><Link to="/departments/hu/about">Humanities</Link></li>
												</ul>
											</li>
											<li><Link to="/departments/cse/about">Computer Science and Engineering</Link></li>
											<li><Link to="/departments/ece/about">Electronics and Communication Engineering</Link></li>
											<li><Link to="/departments/it/about">Information Technology</Link></li>
											<li><Link to="/departments/eee/about">Electronics and Electrical Engineering</Link></li>
											<li className="dropdown-submenu">
												<Link className="dropdown-toggle" data-toggle="dropdown">School of Business Administration</Link>
												<ul className="dropdown-menu">
													<li><Link to="/departments/mba/about">MBA</Link></li>
													<li><Link to="/departments/bba/about">BBA</Link></li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle font-weight-bold">
									Facilities
								</Link>
								<ul className="dropdown-menu">
									<li><Link to="/facilities/library">Library</Link></li>
									<li><Link to="/facilities/hostel">Hostel</Link></li>
									<li><Link to="/facilities/medical">Medical room</Link></li>
									<li><Link to="/facilities/bookbank">Book Bank</Link></li>
									<li><Link to="/facilities/seminar">Seminar hall</Link></li>
									<li><Link to="/facilities/edusat">EDUSAT</Link></li>
									<li><Link to="/facilities/sports">Sports room</Link></li>
									<li><Link to="/facilities/canteen">Canteen</Link></li>
								</ul>
							</li>
						
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle font-weight-bold">
									Placements
								</Link>
								<ul className="dropdown-menu">
									<li><Link to="/placement/team">Team</Link></li>
									<li><Link to="/placement/training">Trainings</Link></li>
									<li><Link to="/placement/recruiters">Our Recruiters</Link></li>
									<li><Link to="/placement/exp_talks_and_seminars">Expert Talks and Seminars</Link></li>
									<li><Link to="/placement/industrial_tours_and_workshops">Industrial tours and workshops</Link></li>
									<li><Link to="/placement/list_of_student_placed">List of students placed</Link></li>
								</ul>
							</li>
						
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle font-weight-bold">
									Student Life
								</Link>
								<ul className="dropdown-menu">
									<li className="dropdown-submenu">
										<Link className="dropdown-toggle" data-toggle="dropdown">Departments</Link>
										<ul className="dropdown-menu">
											<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/exam_notices.php">Notices</a></li>
											<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/exam_datesheet.php">Datesheet</a>
											</li>
											<li><a target="_blank" rel="noreferrer"
												href="http://ggsipu.ac.in/ExamResults/ExamResultsmain.htm">Results</a></li>
										</ul>
									</li>
									<li><Link to="/studentlife/events">Events</Link></li>
									<li><Link to="/studentlife/publications">Publications</Link></li>
									<li><Link to="/studentlife/projects">Projects</Link></li>
									<li><Link to="/studentlife/achievements">Achievements</Link></li>
									<li><Link to="/studentlife/societies">Societies</Link></li>
								</ul>
							</li>
						
							<li className="nav-item">
								<Link to='gallery' className="nav-link font-weight-bold"> Gallery </Link>
							</li>
						
							<li className="nav-item">
								<Link to='/disclosures' className="nav-link font-weight-bold"> Disclosures </Link>
							</li>
						
							<li className="nav-item">
								<Link to='/nirf' className="nav-link font-weight-bold"> NIRF </Link>
							</li>
						
							<li className="nav-item">
								<Link to='/contactus' className="nav-link font-weight-bold"> Contact </Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	
		</div>
	)
}

export default Navbar;
