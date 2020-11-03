import './nav.css' ;
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-center">
				<nav className="navbar navbar-expand-sm">
					<div className="container">
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
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
										<li><a href="/about/cprofile">College Profile</a></li>
										<li><a href="/about/trust">Trust</a></li>
										<li><a href="/about/cmessage">Chairman's Message</a></li>
										<li><a href="/about/pmessage">Principal's Message</a></li>
										<li><a href="/about/vision_mission">Vision/Mission</a></li>
										<li><a href="/about/pillars">Pillars of Bpit</a></li>
										<li><a href="/about/Certifications">Certifications and Accredations</a></li>
									</ul>
								</li>
								<li className="nav-item dropdown"> 
									<Link className="nav-link dropdown-toggle font-weight-bold">
										Academics
									</Link> 
									<ul className="dropdown-menu">
										<li className="dropdown-submenu">
											<Link className="dropdown-toggle" data-toggle="dropdown">Programme</Link>
											<ul className="dropdown-submenu dropdown-menu-right">
												<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/pubinfo/admission2018/adm2018main/ADMBRO2018A_190218.pdf">MBA</a></li>
												<li><Link target="_blank" rel="noreferrer">B.Tech</Link></li>
												<li><a target="_blank" rel="noreferrer"	href="http://www.ipu.ac.in/pubinfo/admission2018/adm2018main/ADMBRO2018A_190218.pdf">BBA</a></li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<Link className="dropdown-toggle" data-toggle="dropdown">Departments</Link>
											<ul className="dropdown-submenu dropdown-menu-right">
												<li className="dropdown-submenu">
													<Link className="dropdown-toggle" data-toggle="dropdown">Applied Science</Link>
													<ul className="dropdown-submenu dropdown-menu-right">
														<li><a href="/departments/ac/about">Applied Chemistry</a></li>
														<li><a href="/departments/ap/about">Applied Physics</a></li>
														<li><a href="/departments/am/about">Applied Maths</a></li>
														<li><a href="/departments/em/about">Engineering Mechanics</a></li>
														<li><a href="/departments/hu/about">Humanities</a></li>
													</ul>
												</li>
												<li><a href="/departments/cse/about">Computer Science and Engineering</a></li>
												<li><a href="/departments/ece/about">Electronics and Communication Engineering</a></li>
												<li><a href="/departments/it/about">Information Technology</a></li>
												<li><a href="/departments/eee/about">Electronics and Electrical Engineering</a></li>
												<li className="dropdown-submenu">
													<Link className="dropdown-toggle" data-toggle="dropdown">School of Business Administration</Link>
													<ul className="dropdown-submenu dropdown-menu-right">
														<li><a href="/departments/mba/about">MBA</a></li>
														<li><a href="/departments/bba/about">BBA</a></li>
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
										<li><a href="/facilities/library">Library</a></li>
										<li><a href="/facilities/hostel">Hostel</a></li>
										<li><a href="/facilities/medical">Medical room</a></li>
										<li><a href="/facilities/bookbank">Book Bank</a></li>
										<li><a href="/facilities/seminar">Seminar hall</a></li>
										<li><a href="/facilities/edusat">EDUSAT</a></li>
										<li><a href="/facilities/sports">Sports room</a></li>
										<li><a href="/facilities/canteen">Canteen</a></li>
									</ul>
								</li>
								<li className="nav-item dropdown"> 
									<Link className="nav-link dropdown-toggle font-weight-bold">
										Placements
									</Link> 
									<ul className="dropdown-menu">
										<li><a href="/placement/team">Team</a></li>
										<li><a href="/placement/training">Trainings</a></li>
										<li><a href="/placement/recruiters">Our Recruiters</a></li>
										<li><a href="/placement/exp_talks_and_seminars">Expert Talks and Seminars</a></li>
										<li><a href="/placement/industrial_tours_and_workshops">Industrial tours and workshops</a></li>
										<li><a href="/placement/list_of_student_placed">List of students placed</a></li>
									</ul>
								</li>
								<li className="nav-item dropdown"> 
									<Link className="nav-link dropdown-toggle font-weight-bold">
										Student Life
									</Link> 
									<ul className="dropdown-menu">
										<li className="dropdown-submenu">
											<Link className="dropdown-toggle" data-toggle="dropdown">Departments</Link>
											<ul className="dropdown-submenu dropdown-menu-right">
												<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/exam_notices.php">Notices</a></li>
												<li><a target="_blank" rel="noreferrer" href="http://www.ipu.ac.in/exam_datesheet.php">Datesheet</a>
												</li>
												<li><a target="_blank" rel="noreferrer"
														href="http://ggsipu.ac.in/ExamResults/ExamResultsmain.htm">Results</a></li>
											</ul>
										</li>
										<li><a href="/studentlife/events">Events</a></li>
										<li><a href="/studentlife/publications">Publications</a></li>
										<li><a href="/studentlife/projects">Projects</a></li>
										<li><a href="/studentlife/achievements">Achievements</a></li>
										<li><a href="/studentlife/societies">Societies</a></li>
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
		</div>
		
	)
}

export default Navbar;
