import './nav.css' ;
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mobile-center">
				<nav class="navbar navbar-expand-sm">
					<div class="container">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
						<div class="collapse navbar-collapse"></div>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav">
								<li class="nav-item">
									<Link to='/' class="nav-link"> Home </Link>
								</li>
								<li class="nav-item"> <a class="nav-link dropdown-toggle" href="#">
												About
											</a> </li>
								<li class="nav-item"> <a class="nav-link dropdown-toggle" href="#">
												Academics
											</a> </li>
								<li class="nav-item"> <a class="nav-link dropdown-toggle" href="#">
												Facilities
											</a> </li>
								<li class="nav-item"> <a class="nav-link dropdown-toggle" href="#">
												Placements
											</a> </li>
								<li class="nav-item"> <a class="nav-link dropdown-toggle" href="#">
												Student Life
											</a> </li>
								<li class="nav-item">
									<Link to='gallery' class="nav-link"> Gallery </Link>
								</li>
								<li class="nav-item">
									<Link to='/disclosures' class="nav-link"> Disclosures </Link>
								</li>
								<li class="nav-item">
									<Link to='/nirf' class="nav-link"> NIRF </Link>
								</li>
								<li class="nav-item">
									<Link to='/contactus' class="nav-link"> Contact </Link>
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
