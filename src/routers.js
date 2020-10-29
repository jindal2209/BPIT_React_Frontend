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

function Routers(){
	return (
		<Router>
			<Switch>
				{/* About */}
				<Route exact path='/about'><About page={null} /></Route>
				<Route exact path='/about/cprofile'><About page=<Trust/> /></Route>
				<Route exact path='/about/trust'><About page=<Cprofile/> /></Route>
				<Route exact path='/about/cmessage'><About page=<Cmessage/> /></Route>
				<Route exact path='/about/pmessage'><About page=<Pmessage/> /></Route>
				<Route exact path='/about/vision_mission'><About page=<Vision/> /></Route>
				<Route exact path='/about/pillars'><About page=<Pillars/> /></Route>
				<Route exact path='/about/Certifications'><About page=<Certifications/> /></Route>
				
				
				
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