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
									<Link to='/' className="nav-link"> Home </Link>
								</li>
								<li className="nav-item"> <a className="nav-link dropdown-toggle" href="#">
												About
											</a> </li>
								<li className="nav-item"> <a className="nav-link dropdown-toggle" href="#">
												Academics
											</a> </li>
								<li className="nav-item"> <a className="nav-link dropdown-toggle" href="#">
												Facilities
											</a> </li>
								<li className="nav-item"> <a className="nav-link dropdown-toggle" href="#">
												Placements
											</a> </li>
								<li className="nav-item"> <a className="nav-link dropdown-toggle" href="#">
												Student Life
											</a> </li>
								<li className="nav-item">
									<Link to='gallery' className="nav-link"> Gallery </Link>
								</li>
								<li className="nav-item">
									<Link to='/disclosures' className="nav-link"> Disclosures </Link>
								</li>
								<li className="nav-item">
									<Link to='/nirf' className="nav-link"> NIRF </Link>
								</li>
								<li className="nav-item">
									<Link to='/contactus' className="nav-link"> Contact </Link>
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
