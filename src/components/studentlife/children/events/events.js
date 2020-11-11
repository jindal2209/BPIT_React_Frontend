import { Fragment } from "react";

function Events() {
	return (
		<Fragment>
				<h2 className='page-subheader'>Events</h2>
				<div className="loader">
					<div className="box"></div>
				</div> {/* dynamically events */}

				<section id="blog-detail" className="blog-detail-section padding">
					<div className="container-fluid">
						<div className="row section-content">
							<div className="col-lg-8">
								<div className="blog-detail-content pb20">
									<h2 className='page-subheader'>Technical Events CORONA’18</h2>
									<p>On 5th-6th April 2018, a colourful and memorable Techno-Cultural Fest was organized in our college. In this mega event, many students from different colleges took part.</p>
									<p>IEEE BPIT organized 8 events in association with Corona18.</p>
									<p className="pt-2"><strong>Those events are:</strong></p>
									<p>• Hackathon</p>
									<p>• Web Quickie</p>
									<p>• Robo Race </p>
									<p>• Robo Soccer</p>
									<p>• LFR(Line following Robot)</p>
									<p>• Technochamp(Coding Quiz</p>
									<p>• Competitive Coding</p>
									<p>• Pixelography</p>
									<hr></hr>
									<h2 className='page-subheader'>ROBO RACE</h2>
									<p> IEEE BPIT has organised Robo race in cultural and technical fest of BPIT CORONA’18. Participants has designed robot either wired or wireless within the specified dimensions that can operated manually and can travel through all turns of the track. The robot that had completed the specified task in least time was declared winner. </p>
									<p><strong>PRIZES WORTH: Rs. 22000</strong></p>
									<p><strong>Registration Fee: Rs. 100</strong></p>
									<p> Total 17 teams have participated in the event with their wired and wireless robot. Each team comprises of at most 4 members. The Birla Institute of Applied Science(BIAS) won the first prize and NSIT team the second prize. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img.jpg"} alt="" /> </div>
									<hr></hr>
									<h3 className=" page-subheader">ROBO SOCCER  </h3>
									<p> Robo soccer is an competition where parcipants bring their own robots to compete against each other in a game of football. There are 2 teams against one another. We conducted this in the corona 2k18. There were 15 teams all together. Enormous crowd was present there during the event which spaned over 5 hours. It was a great success. </p>
									<p><strong>PRIZES WORTH: Rs. 20000</strong></p>
									<p><strong>Registration Fee: Rs. 100</strong></p>
									<p className="mb-4">The 1st two winning teams were given their winning amount and certificates. Birla Institute of Applied Science(BIAS) won the first prize and NSIT Team the second Prize.</p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img1.jpg"} alt="" /> </div>
									<hr></hr>
									<h3 className=" page-subheader">TECHN OCHAMP  </h3>
									<p> IEEE BPIT has organised TechnoChamp in cultural and technical fest of BPIT CORONA’18. Participants were given a 30-minute quiz in any coding language they choose. It comprises of 30 MCQ type questions. The quiz was conducted online. Results were computer generated. </p>
									<p><strong>PRIZES WORTH: Rs. 5000</strong></p>
									<p><strong>Registration Fee: Rs. 50</strong></p>
									<p className="mb-4"> Total 31 students have participated in the event. The first prize was won by the Darshan Baid from Galgotias University where as the second and third prize by Peeyush Saxena and Siddharth Bhasin of BPIT. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img2.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>COMPETITIVE CODING</h2>
									<p> Technical Event of COMPETITIVE CODING was successfully organised in CORONA '18 the techno-cultural festival of BPIT in 102 LAB on the ONLINE PLATFORM CODEZEN OF CODING NINJAS which was the event sponsor. </p>
									<p><strong>PRIZES WORTH: Rs. 5000</strong></p>
									<p><strong>Registration Fee: Rs. 50</strong></p>
									<p> Total 31 students have participated in the event. The first prize was won by the Darshan Baid from Galgotias University where as the second and third prize by Peeyush Saxena and Siddharth Bhasin of BPIT. </p>
									<p className="mb-4"> 18 teams from different colleges all over delhi participated in this event. Results are declared on the leader-board of CODEZEN and results are announced and prizes are given to winning Participants. The first prize was won by the team of Amity and second by BPIT. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img3.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>PIXELO GRAPHY</h2>
									<p> <u>EVENT DESCRIPTION:</u> A theme was given toevery participant. Every participant had to capture their clicks within 2 hours and some of the participants edited their captures in the given time. A platform (Photoshop) was provided. </p>
									<p className="mb-4"> EVENT DESCRIPTION: A theme was given toevery participant. Every participant had to capture their clicks within 2 hours and some of the participants edited their captures in the given time. A platform (Photoshop) was provided. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img4.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>LINE FOLLOWING  ROBOT</h2>
									<p> IEEE BPIT has organised line follower robot (lfr) competition in cultural and technical fest of BPIT CORONA’18. Participants has designed robot either wired or wireless within the specified dimensions that can follow a particular path (black lines) on their own . The robot that had completed the specified task in least time was declared winner. </p>
									<p className="mb-4"> Total 11 teams have participated in the event with their wired and wireless robot. Each team comprises of at most 4 members. The teams from NIEC delhi won both the first and second prizes. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img5.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>WEB QUICKIE</h2>
									<p> On 6th Web Quickie was held. Web Quickie is a web development Competition,which provides participants a platform to showtheir creative skills in the field of web development.The tagline for the event was "Design the frontend and code the Backend". The marking was done on different criteria like frontend(15),backend(35),UI&amp;UX(30) and creativity(20). </p>
									<p className="mb-4"> Around 6:00 pm the result was declared and the First Position was awarded to the team headed by Avirup (BPIT) and the runner up was the team headed by Harsh (MAIT). </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img6.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>WORKSHOP FOR STUDENT</h2>
									<p className="mb-4"> <strong>Workshop for Students on “Ethics, Technical Writing and Effective Presentation”</strong> Workshop for Students on “Ethics, Technical Writing and Effective Presentation” A One Day workshop was organized by Department of Information Technology of BPIT for the students on 7th March 2018. The speaker Prof. Abhishek Swaroop emphasized on the importance of ethics in technical world. Besides that he taught how to write effective technical documents and how to effectively present your work. In the workshop, 55 students from all the branches participated. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img7.jpg"} alt="" /> </div>
									<hr></hr>
									<h3 className=" page-subheader">Workshop on   Android Development  </h3>
									<p> <u>Date: 7 Feb 2018</u> A workshop is organised on Android App Development on 7th Feb 2018. The workshop is aimed to help students enlarge their domains.This 4-5 hours’ workshop was conducted by <strong>Coding</strong> Blocks. Workshop was certified. </p>
									<p>Total 48 students both IEEE and Non IEEE participated in the workshop.</p>
									<p>Registration fees:-</p>
									<p>IEEE-BPIT students- free</p>
									<p>Non IEEE-BPIT- 100/-</p>
									<p></p>
									<p className="mb-4"> EVENT DESCRIPTION: A theme was given toevery participant. Every participant had to capture their clicks within 2 hours and some of the participants edited their captures in the given time. A platform (Photoshop) was provided. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img8.jpg"} alt="" /> </div> <u>National Conference on Computing, Informatics and Networks NCCIN-2K18 </u>
									<p className="mb-4"> Department of CSE and Department of IT of BPIT Jointly organized a one day National Conference on Computing, Informatics and Networks. The conference was inaugurated by Prof. A.P. Mittal Member Secretary AICTE. The students of BPIT were actively involved in organizing the conference. The faculty members and students of BPIT as well as several other institutes presented their research paper. </p>
									<div className="blog-detail-pic pb30"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img10.jpg"} alt="" /> </div>
									<hr></hr>
									<h2 className='page-subheader'>Cultural Events</h2> <strong className="mb-2 pull-left w-100">ORIENTATION DAY CUM FRESHERS PARTY</strong>
									<div className="w-100 pull-left">
										<div className="row">
											<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/student_life_event_img11.jpg"} alt="" />
												<br></br>
												<p> Freshers' party cum orientation day is celebrated every year with a view to welcome new students to the institute. The motive of this orientation day is to acquaint the new students with the college life which provides freshers with an opportunity to unleash their talents. </p>
											</div>
										</div>
										<hr></hr>
									</div>
									<div className="cluUpper"> <strong className="mb-2 pull-left w-100  page-subheader">TEACHERS DAY</strong>
										<div className="w-100 pull-left">
											<div className="row">
												<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/cultucher240.jpg"} alt="" />
													<br></br>
													<p> The dream begins with a teacher who believes in you, tugs you, pushes and leads you to next plateau and sometimes pokes you with a sharp stick called truth. Starting from Dronacharya and moving on to the great teachers in the history to the like of Dr. Sarvapalli Radhakrishnan, teachers have guided their students to great success, embedded ethical values and molded them into responsible citizens of the country. Students celebrate teacher’s day on 5th September as a token of respect to their teachers. Students organize fun activities for their teachers followed by dance and music performances. </p>
												</div>
											</div>
											<hr></hr>
										</div>
									</div>
									<div className="cluUpper"> <strong className="mb-2 pull-left w-100  page-subheader">INDEPENDENCE DAY</strong>
										<div className="w-100 pull-left">
											<div className="row">
												<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/cultucher241.jpg"} alt="" />
													<br></br>
													<p> Every year BPIT proudly celebrates the day of our nation's independence with great enthusiasm and patriotism. The celebration begins with flag hoisting followed by the national anthem , scintillating music and dance perfomances highlighting the rich culture and diversity of India. </p>
												</div>
											</div>
											<hr></hr>
										</div>
									</div>
									<div className="cluUpper"> <strong className="mb-2 pull-left w-100  page-subheader">HOLI MILAN</strong>
										<div className="w-100 pull-left">
											<div className="row">
												<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/cultucher242.jpg"} alt="" />
													<br></br>
													<p> This day is one of the most important occasions of BPIT as all the honourable members of management, trustees, faculty members and students join together to celebrate Holi with colours and flowers in this event. A plethora of dance and music performances are performed by the students of BPIT which mesmerizes the audience. Besides this, the students are awarded for their excellent performance in academics, co-curricular activities and sports. </p>
												</div>
											</div>
											<hr></hr>
										</div>
									</div>
									<div className="cluUpper"> <strong className="mb-2 pull-left w-100  page-subheader">CORONA</strong>
										<div className="w-100 pull-left">
											<div className="row">
												<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/cultucher243.jpg"} alt="" />
													<br></br>
													<p> Corona is the annual techno-cultural fest,which is organized in the month of March with the dream of spreading its wings and expanding its reach beyond previously unseen levels of events. Cultural Events like Fashion show ,Mr and Miss Corona,Music and Dance Events,Star night etc and Technical Events like WebLop,Gaming,C/C++ Programming are organised. Avalanche of cash prizes, gift vouchers are distributed to the winners. In few words,CORONA can be compared to an eagle that flies too high that no obstacles can affect its flight. </p>
												</div>
											</div>
											<hr></hr>
										</div>
									</div>
									<div className="cluUpper"> <strong className="mb-2 pull-left w-100 page-subheader">ELOQUENCE</strong>
										<div className="w-100 pull-left">
											<div className="row">
												<div className="col-lg"> <img className="img-fluid py-4 rounded" src={process.env.PUBLIC_URL +"/assets/images/cultucher244.jpg"} alt="" />
													<br></br>
													<p> BPIT holds its biggest literary fest “ELOQUENCE” with great fervour to celebrate literature and mark its importance. Many events are organaised in the fest, not only for knowledge but also for entertainment and fun. Literary events like BPIT- MUN,Kavi Sammelan Debate, Group Discussion, Eloquent Personality and fun events like Treasure Hunt, Book Seller, Face Painting, Ad Mad, Doodle Art are organised which witnesses an overwhelming participation. Loads of interesting prizes are given to the winners that include cash prizes and gift vouchers . </p>
												</div>
											</div>
											<hr></hr>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		</Fragment>
	)
}

export default Events;