function Seminar(){
	return (
		<div>
			<div id="add-animation">
				<h3 className="heading"><span className="page-subheader">Seminar Hall</span></h3>
				<img src={process.env.PUBLIC_URL+"/assets/images/sh.jpg"} className="img-fluid py-4 rounded" alt="" />
				<p id="text-content">The Institute has three fully air-conditioned and well equipped Conference/Seminar Halls with modern audio-visual facilities for various activities such as expert talks, seminars, workshops, faculty development / management development / executive development programs, campus placement, etc.</p>
			</div>
		</div>
	)
}

export default Seminar ;