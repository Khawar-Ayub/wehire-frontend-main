import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './apply-job.css';
export default function ApplyJob() {
const applyjobButtonStyling = {
	float: 'right', 
	marginTop: '-88%', 
	marginRight: '-50%',
	width:'20%',
	backgroundColor: '#2c6f8b', 
	borderColor:'#2c6f8b'
}
return(
<>
<div className="container center">
	<div className="row">
		<div className="col-md-12">
			<h1 className="white">Custom File Upload</h1>
			<p className="white">In this example, submit is allowed only in case the user uploads a valid image file.</p>
		</div>
	</div>
	
	<form name="upload" method="post" action="" >
		<div className="row">
			<div className="col-md-6 col-md-offset-3 center">
				<div className="btn-container">
					{/* <!--the three icons: default, ok file (img), error file (not an img)--> */}
					<h1 className="imgupload"><i className="fa fa-file-image-o"></i></h1>
					<h1 className="imgupload ok"><i className="fa fa-check"></i></h1>
					<h1 className="imgupload stop"><i className="fa fa-times"></i></h1>
					{/* <!--this field changes dinamically displaying the filename we are trying to upload--> */}
					<p id="namefile">Only pics allowed! (jpg,jpeg,bmp,png)</p>
					{/* <!--our custom btn which which stays under the actual one--> */}
					<button type="button" id="btnup" className="btn btn-primary btn-lg">Browse for your pic!</button>
					{/* <!--this is the actual file input, is set with opacity=0 beacause we wanna see our custom one--> */}
					<input type="file" value="" name="fileup" id="fileup"/>
				</div>
			</div>
		</div>
			{/* <!--additional fields--> */}
		<div className="row">			
			<div className="col-md-12">
				{/* <!--the defauld disabled btn and the actual one shown only if the three fields are valid--> */}
				<input type="file"  className="btnSubmit btn-primary" id=""/>
				<button type="button" className="btn btn-default"  id="fakebtn">Submit! <i className="fa fa-minus-circle"></i></button>
			</div>
		</div>
	</form>
</div>
<button className='container2' style={{applyjobButtonStyling}}>
    <Link style={{textDecoration: 'none'}} to='/quiztest'>Click here</Link>
  </button>
</>
)
	}
