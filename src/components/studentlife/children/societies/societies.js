import { Fragment } from "react";

function Societies(){
	return(
		<Fragment>
			<h3 className='page-subheader'>Societies</h3>
			<div className="loader">
				<div className="box"></div>
			</div>
			<div class="technical">
				<div class=" ">
					<div class="page-subheader">BPIT-CSI</div> <br />
					<img src={process.env.PUBLIC_URL +"/assets/images/csi-bpit.jpg"} alt="" class="images-photo rounded center-h mx-auto d-block" />
					<div class="content">
						The mission of the CSI is to facilitate research, knowledge sharing, learning and career enhancement for
						all categories of IT professionals, while simultaneously inspiring and nurturing new entrants into the
						industry and helping them to integrate into the IT community.
					</div>
				</div>

				<div class=" ">
					<div class="page-subheader">IEEE</div> <br />
					<img src={process.env.PUBLIC_URL + "/assets/images/ieee.png"} alt="" class="images-photo rounded center-h mx-auto d-block" />
					<div class="content">
						IEEE-BPIT is a technical society which aims to spread technical awareness amongst students ,to help them
						develop technical skills, to give a professional outlook , to encourage them to participate in various
						technical competitions held in various universities, conducting workshops , seminars etc.
					</div>
				</div>

				<div class=" ">
					<div class="page-subheader">HACKIONS</div> <br />
					<img src={process.env.PUBLIC_URL +"/assets/images/hackions.jpg"} alt=""
						class="images-photo rounded center-h mx-auto d-block" />
					<div class="content">
						There is nothing like the thrill of solving a real life problem that enhances the lives of others.The
						intent of Hackions, the programming club of Bhagwan Parshuram Institute of Technology, is to give every
						opportunity to experience that thrill.
					</div>
				</div>

				<div class=" ">
					<div class="page-subheader">INFUSIA</div> <br />
					<img src={process.env.PUBLIC_URL +"/assets/images/infusia.png"} alt=""
						class="images-photo rounded center-h mx-auto d-block" />
					<div class="content">
						Infusia, the entrepreneurship cell of Bpit, aims to help entrepreneurial passions to convergeon a common
						stage.
					</div>
				</div>

				<div class=" ">
					<div class="page-subheader">EFFERVESCENCE</div> <br />
					<img src={process.env.PUBLIC_URL +"/assets/images/literary.jpg"} alt=""
						class="images-photo rounded center-h mx-auto d-block" />
					<div class="content">The bilingual literary society of the institute provides a space that fosters various
						forms of intellectual discussions as well as unique and stimulating social experiences.</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Societies;