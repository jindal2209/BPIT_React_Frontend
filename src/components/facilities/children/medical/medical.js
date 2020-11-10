function Medical(){
	return (
		<div>
			<div id="add-animation">
				<h3 className='page-subheader'>Medical</h3>
				<img src={process.env.PUBLIC_URL+"/assets/images/medicalRoom.jpg"} className="img-fluid py-4 rounded" alt="" />
				<p>
					The college has in house medical assistance facility for the stakeholders i.e. BPIT staff, faculty members and students. A doctor visits the college on a regular basis. The medical room is well equipped with basic health facilities and the stakeholders are being given primary health care. It is well stocked with the basic medicines, a Blood Pressure Monitor, Thermometer, ASD equipments and has a bed for patient. In case of emergency, patient transferred to the Brahma Shakti Hospital in Budha Vihar or Dr. Bhim Rao Ambedkar Hospital near Rithala Metro Station. A wheelchair and a vehicle (for ambulance) are also available for the medical emergencies.
				</p>
			</div>
		</div>
	)
}

export default Medical ;