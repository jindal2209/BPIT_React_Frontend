function Bookbank(){
	return (
		<div>
			<div id="add-animation">
				<h3 className='page-subheader'>Book Bank</h3>
				<img src={process.env.PUBLIC_URL+"/assets/images/lib3.jpg"} className="img-fluid py-4 rounded" alt="" />
				<p id="text-content">BPIT has a Book bank facility from the year 2012.
					The books are issued to the students for the whole semester.</p>
			</div>
		</div>
	)
}

export default Bookbank ;