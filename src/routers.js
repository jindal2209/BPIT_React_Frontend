import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Nirf from './components/nirf/nirf';
import Disclosures from './components/disclosures/disclosures';
import Gallery from './components/gallery/gallery';

// About
import About from './components/about/about';
import Cprofile from './components/about/children/profile/profile';
import Trust from './components/about/children/trust/trust';
import Cmessage from './components/about/children/cmessage/cmessage';
import Pmessage from './components/about/children/pmessage/pmessage';
import Vision from './components/about/children/vision/vision';
import Pillars from './components/about/children/pillars/pillars';
import Certifications from './components/about/children/certifications/certifications';

// Facilities
import Facilities from './components/facilities/facilities';
import Bookbank from './components/facilities/children/bookbank/bookbank';
import Canteen from './components/facilities/children/canteen/canteen';
import Edusat from './components/facilities/children/edusat/edusat';
import Hostel from './components/facilities/children/hostel/hostel';
import Library from './components/facilities/children/library/library';
import Medical from './components/facilities/children/medical/medical';
import Seminar from './components/facilities/children/seminar/seminar';
import Sports from './components/facilities/children/sports/sports';


function Routers(){
	return (
		<Router>
			<Switch>
				{/* About */}
				<Route exact path='/about'><About page={null} /></Route>
				<Route exact path='/about/cprofile'><About page=<Cprofile/> /></Route>
				<Route exact path='/about/trust'><About page=<Trust/> /></Route>
				<Route exact path='/about/cmessage'><About page=<Cmessage/> /></Route>
				<Route exact path='/about/pmessage'><About page=<Pmessage/> /></Route>
				<Route exact path='/about/vision_mission'><About page=<Vision/> /></Route>
				<Route exact path='/about/pillars'><About page=<Pillars/> /></Route>
				<Route exact path='/about/Certifications'><About page=<Certifications/> /></Route>

				{/* Facilities */}
				<Route exact path='/facilities'><Facilities page={null} /></Route>
				<Route exact path='/facilities/library'><Facilities page=<Library/> /></Route>
				<Route exact path='/facilities/hostel'><Facilities page=<Hostel/> /></Route>
				<Route exact path='/facilities/medical'><Facilities page=<Medical/> /></Route>
				<Route exact path='/facilities/bookbank'><Facilities page=<Bookbank/> /></Route>
				<Route exact path='/facilities/seminar'><Facilities page=<Seminar/> /></Route>
				<Route exact path='/facilities/edusat'><Facilities page=<Edusat/> /></Route>
				<Route exact path='/facilities/sports'><Facilities page=<Sports/> /></Route>
				<Route exact path='/facilities/canteen'><Facilities page=<Canteen/> /></Route>
				
				
				
				<Route exact path='/'><Home /></Route>
				<Route exact path='/contactus'><Contact /></Route>
				<Route exact path='/nirf'><Nirf /></Route>
				<Route exact path='/disclosures'><Disclosures /></Route>
				<Route exact path='/gallery'><Gallery /></Route>
			</Switch>
		</Router>
	);
}

export default Routers;