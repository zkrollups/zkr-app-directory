import React from 'react'
import "./style.css"
import stay_img from '../../actets/stay.png';

function stay() {
  return (
   <>

	<div className=' main_c '>
		<div className='row main_wrap'>
			<div className=' col-sm-12 col-lg-6 col-md-12 img_part mb-3'>
				<div className='col-2'>
					<img src={stay_img} alt="" width={'65px'} height={"73px"}></img>
				</div>
				<div className='col-10 spacing_left'>
					<div>
						<span class="stay">Stay Updated</span>
					</div>
					<div className='my-2 subtitle_be'>
						<span >Be the first to know about Ethereum Layer 2 news</span>
					</div>
				</div>
			</div>

			<div className='col-sm-12 col-lg-6 col-md-12 spacing_2'>
				{/* <div className='src_side p-2'> */}
				<form action="https://xyz.us18.list-manage.com/subscribe/post" method="POST" className='src_side p-2'>
					<input type="hidden" name="u" value="fce65f98b56135d3e8b86ca2a"></input>
    				<input type="hidden" name="id" value="0789ac1979"></input>

					<div>
						<input className='inpp' placeholder='Enter Your Email ' name="MERGE0" id="MERGE0"></input>
					</div>
					<div>
						<button className='subsub'> Subscribe</button>
					</div>
				</form>
			</div>
			
		</div>
	</div>
   
   </>
  )
}

export default stay