import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Nirf from './components/nirf/nirf';
import Disclosures from './components/disclosures/disclosures';
import Gallery from './components/gallery/gallery';
import Navbar from './components/nav/nav';
import DevTeam from './components/devteam/devteam';
import Footer from './components/footer/footer'

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

// Studentlife
import Studentlife from './components/studentlife/studentlife';
import Achievements from './components/studentlife/children/achievements/achievements';
import Events from './components/studentlife/children/events/events';
import Examination from './components/studentlife/children/examination/examination';
import Projects from './components/studentlife/children/projects/projects';
import Publications from './components/studentlife/children/publications/publications';
import Societies from './components/studentlife/children/societies/societies';

//placement
import Placement from './components/placement/placement';
import Exptalksandseminars from './components/placement/children/exp_talks_and_seminars/exp_talks_and_seminars';
import Industrialtoursandworkshops from './components/placement/children/industrial_tours_and_workshops/industrial_tours_and_workshops';
import Listofstudentsplaced from './components/placement/children/list_of_student_placed/list_of_student_placed';
import Recruiters from './components/placement/children/recruiters/recruiters';
import Placementteam from './components/placement/children/team/team';
import Placementtraining from './components/placement/children/training/training';

// Academics
import Chemistry from './components/academics/departments/children/applied/ac/ac';
import Maths from './components/academics/departments/children/applied/am/am';
import Physics from './components/academics/departments/children/applied/ap/ap';
import Mechanics from './components/academics/departments/children/applied/em/em';
import Humanities from './components/academics/departments/children/applied/hu/hu';

import Cse from './components/academics/departments/children/cse/cse';
import CSEAbout from './components/academics/departments/children/cse/children/about';
import CSEFaculty from './components/academics/departments/children/cse/children/faculty';

import Ece from './components/academics/departments/children/ece/ece';
import ECEAbout from './components/academics/departments/children/ece/children/about';
import ECEFaculty from './components/academics/departments/children/ece/children/faculty';

import Eee from './components/academics/departments/children/eee/eee';
import EEEAbout from './components/academics/departments/children/eee/children/about';
import EEEFaculty from './components/academics/departments/children/eee/children/faculty';

import IT from './components/academics/departments/children/it/it';
import ITAbout from './components/academics/departments/children/it/children/about';
import ITFaculty from './components/academics/departments/children/it/children/faculty';

import Mba from './components/academics/departments/children/sba/mba/mba';
import Bba from './components/academics/departments/children/sba/bba/bba';


// Login
import UserLogin from "./components/login/login";
import Dashboard from './components/login/children/dashboard/dashboard';
import DashboardHome from './components/login/children/dashboard/children/AddUser';
import DashboardEvents from './components/login/children/dashboard/children/Events';
import DashboardNotice from './components/login/children/dashboard/children/Notice';
import DashboardNews from './components/login/children/dashboard/children/News';
import DashboardStudentPublications from './components/login/children/dashboard/children/SPublications';
import DashboardFacultyPublication from './components/login/children/dashboard/children/FPublications';
import DashboardTimetable from './components/login/children/dashboard/children/TimeTable';
import DashboardLessonPlan from './components/login/children/dashboard/children/LessonPlan';
import DashboardStudentProjects from './components/login/children/dashboard/children/StudentProjects';
import PlacementDashboard from './components/login/children/pdashboard/pdashboard';
import PlacementDashboardHome from './components/login/children/pdashboard/children/AddUser';
import DashboardExpertTours from './components/login/children/pdashboard/children/ExpertTours';



function Routers() {
	return (
		<Router>
			<Navbar />
			<Switch>

				{/* About */}
				<Route exact path='/about'><About page={null} /></Route>
				<Route exact path='/about/cprofile'><About page={<Cprofile />} /></Route>
				<Route exact path='/about/trust'><About page={<Trust />} /></Route>
				<Route exact path='/about/cmessage'><About page={<Cmessage />} /></Route>
				<Route exact path='/about/pmessage'><About page={<Pmessage />} /></Route>
				<Route exact path='/about/vision_mission'><About page={<Vision />} /></Route>
				<Route exact path='/about/pillars'><About page={<Pillars />} /></Route>
				<Route exact path='/about/Certifications'><About page={<Certifications />} /></Route>


				{/* Facilities */}
				<Route exact path='/facilities'><Facilities page={null} /></Route>
				<Route exact path='/facilities/library'><Facilities page={<Library />} /></Route>
				<Route exact path='/facilities/hostel'><Facilities page={<Hostel />} /></Route>
				<Route exact path='/facilities/medical'><Facilities page={<Medical />} /></Route>
				<Route exact path='/facilities/bookbank'><Facilities page={<Bookbank />} /></Route>
				<Route exact path='/facilities/seminar'><Facilities page={<Seminar />} /></Route>
				<Route exact path='/facilities/edusat'><Facilities page={<Edusat />} /></Route>
				<Route exact path='/facilities/sports'><Facilities page={<Sports />} /></Route>
				<Route exact path='/facilities/canteen'><Facilities page={<Canteen />} /></Route>


				{/* Studentlife */}
				<Route exact path='/studentlife'><Studentlife page={null} /></Route>
				<Route exact path='/studentlife/achievements'><Studentlife page={<Achievements />} /></Route>
				<Route exact path='/studentlife/events'><Studentlife page={<Events />} /></Route>
				<Route exact path='/studentlife/examination'><Studentlife page={<Examination />} /></Route>
				<Route exact path='/studentlife/projects'><Studentlife page={<Projects />} /></Route>
				<Route exact path='/studentlife/publications'><Studentlife page={<Publications />} /></Route>
				<Route exact path='/studentlife/societies'><Studentlife page={<Societies />} /></Route>


				{/* placement */}
				<Route exact path='/placement'><Placement page={null} /></Route>
				<Route exact path='/placement/exp_talks_and_seminars'><Placement page={<Exptalksandseminars />} /></Route>
				<Route exact path='/placement/industrial_tours_and_workshops'><Placement page={<Industrialtoursandworkshops />} /></Route>
				<Route exact path='/placement/list_of_student_placed'><Placement page={<Listofstudentsplaced />} /></Route>
				<Route exact path='/placement/recruiters'><Placement page={<Recruiters />} /></Route>
				<Route exact path='/placement/team'><Placement page={<Placementteam />} /></Route>
				<Route exact path='/placement/training'><Placement page={<Placementtraining />} /></Route>


				{/* Academics */}
				<Route exact path='/departments/ac'><Chemistry /></Route>
				<Route exact path='/departments/ap'><Physics /></Route>
				<Route exact path='/departments/am'><Maths /></Route>
				<Route exact path='/departments/em'><Mechanics /></Route>
				<Route exact path='/departments/hu'><Humanities /></Route>

				{/* CSE */}
				<Route exact path='/departments/cse/about'><Cse page={<CSEAbout />} /></Route>
				<Route exact path='/departments/cse/faculty'><Cse page={<CSEFaculty />} /></Route>

				<Route exact path='/departments/ece/about'><Ece page={<ECEAbout />} /></Route>
				<Route exact path='/departments/ece/faculty'><Ece page={<ECEFaculty />} /></Route>

				<Route exact path='/departments/eee/about'><Eee page={<EEEAbout />} /></Route>
				<Route exact path='/departments/eee/faculty'><Eee page={<EEEFaculty />} /></Route>

				<Route exact path='/departments/it/about'><IT page={<ITAbout />} /></Route>
				<Route exact path='/departments/it/faculty'><IT page={<ITFaculty />} /></Route>

				<Route exact path='/departments/mba'><Mba /></Route>
				<Route exact path='/departments/bba'><Bba /></Route>


				{/* Login */}
				<Route exact path='/login'><UserLogin /></Route>
				<Route exact path='/dashboard/home'><Dashboard render={<DashboardHome page='home' />} /></Route>
				<Route exact path='/dashboard/notice'><Dashboard render={<DashboardNotice page='notice' />} /></Route>
				<Route exact path='/dashboard/events'><Dashboard render={<DashboardEvents page='events' />} /></Route>
				<Route exact path='/dashboard/news'><Dashboard render={<DashboardNews page='news' />} /></Route>
				<Route exact path='/dashboard/student-publication'><Dashboard render={<DashboardStudentPublications page='student-publication' />} /></Route>
				<Route exact path='/dashboard/faculty-publication'><Dashboard render={<DashboardFacultyPublication page='faculty-publication' />} /></Route>
				<Route exact path='/dashboard/time-table'><Dashboard render={<DashboardTimetable page='time-table' />} /></Route>
				<Route exact path='/dashboard/student-projects'><Dashboard render={<DashboardStudentProjects page='student-projects' />} /></Route>
				<Route exact path='/dashboard/lesson-plan'><Dashboard render={<DashboardLessonPlan page='lesson-plan' />} /></Route>

				{/* Placement Login */}
				<Route exact path='/login'><UserLogin /></Route>
				<Route exact path='/placementdashboard/home'><PlacementDashboard render={<PlacementDashboardHome page='home' />} /></Route>
				<Route exact path='/placementdashboard/exp_talks_and_seminars'><PlacementDashboard render={<DashboardExpertTours page='expert-talk-seminar' />} /></Route>
				<Route exact path='/placementdashboard/industrial_tours_and_workshops'><PlacementDashboard render={<DashboardEvents page='industrial-tour-and-workshop' />} /></Route>
				<Route exact path='/placementdashboard/students_placed'><PlacementDashboard render={<DashboardNews page='student-placed' />} /></Route>
				<Route exact path='/placementdashboard/recruiters'><PlacementDashboard render={<DashboardStudentPublications page='recruiters' />} /></Route>
				<Route exact path='/placementdashboard/training'><PlacementDashboard render={<DashboardFacultyPublication page='trainings' />} /></Route>


				<Route exact path='/'><Home /></Route>
				<Route exact path='/contactus'><Contact /></Route>
				<Route exact path='/nirf'><Nirf /></Route>
				<Route exact path='/disclosures'><Disclosures /></Route>
				<Route exact path='/gallery'><Gallery /></Route>
				<Route exact path='/devteam'><DevTeam /></Route>

			</Switch>
			<Footer />
		</Router>
	);
}

export default Routers;