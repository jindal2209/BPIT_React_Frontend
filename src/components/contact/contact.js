import React from 'react'

function Contact(){
	return(
		<React.Fragment>
			<div className="contact-wrap container">
				<h2 id="clr">
					<i className="fa fa-phone-square" aria-hidden="true"></i>
					Contact Us
				</h2>
				<hr></hr>
				<div className="contact-details">
					<h1>BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h1>
					<p>PSP- 4, Dr. K.N. Katju Marg , Sector 17 Rohini</p>
					<p>New Delhi -110089</p>
					<p>Tel: 011 - 27572900 , 27571080 </p>
					<p> 011 - 27574635 , 27574637 (10 lines)</p>
					<p>Fax: 011-27574642</p>
					<p>Email:<a href="mailto:bpitindia@yahoo.com"> bpitindia@yahoo.com</a></p>
				</div>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111956.91355414972!2d77.07691246887508!3d28.729898056958948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0130445fa42d%3A0x154521d473fe3d5f!2sBhagwan+Parshuram+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1526965817114" width="100%" height="400px" frameborder="0" allowfullscreen></iframe>

		</React.Fragment>
	)
}



export default Contact;