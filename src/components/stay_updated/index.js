import React from 'react'
import "./style.css"
import SearchBar from '../Searchbar/SearchBar'
import stay_img from '../../actets/stay.png';

function stay() {
  return (
   <>
   

<div className=' main_c '>
<div className='row main_wrap'>
	<div className=' col-sm-12 col-lg-6 col-md-12 img_part mb-3'>
<div className='col-2'>
<img src={stay_img} width={'65px'} height={"73px"}></img>
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
		<div className='src_side p-2'>
			<div>	<input className='inpp' placeholder='Enter Your Email '></input></div>
	<div>
		<button className='subsub'> Subscribe</button>
	</div>
		</div>
	</div>

</div>

</div>



   {/* <div class="v41_807">
			<div class="v41_802"></div>
		
			<div class="v41_832">
                <img src={stay_img}></img>
			
			</div>
			<div class="v41_835 ">
			
				<div class="v41_804">
					<span class="v41_805">Subscribe</span>
				</div>
				<span  class="v41_806">Enter your email address</span>
			</div>
			<span class="v41_827">Be the first to know about Ethereum Layer 2 news</span>
			<span class="v41_870">Stay Updated</span>
		</div> */}
   
   </>
  )
}

export default stay