import React ,{useState} from 'react'
import "./style.css"
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs({ setSearch, search,setSearch_category, search_category }) {




const [name, setname] = useState()
const [email, setemail] = useState()
const [mesage, setmesage] = useState()
const notify = () => toast.success(' Thanks! We Will Contact soon.', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });

const [apiresponse, setapiresponse] = useState()
console.log("''namenamename''",name,email,mesage)  
const Sumit_handler=(event)=>{
  event.preventDefault();

  //
  GetCar_detail(name,email,mesage)

  //
  // GetCar_detail(name,email,mesage)


  
    console.log("''namenamename'in condtion '",name,email,mesage)


}
const baseUrl= process.env.REACT_APP_BASE_URL

console.log("base ==============",baseUrl)

const GetCar_detail = (name,email,mesage) => {
  axios.post(baseUrl,{

    name:name,
    to:email,
    text:mesage,
  })  .then(function (response) {
    console.log(" citiess api=================>>>>> ", response.data);
    notify()
      document.getElementById('nam').value = ''
  document.getElementById('emi').value = ''
  document.getElementById('msg').value = ''
    // setapiresponse( response.data)
  })
.catch(function (error) {
  console.log(error);
})
 
};









  return (
   <>
   
   {/* <div className='container-fluied'> */}
       <div className='main_wrap_form'>

       <div className='contact_form'>
         <form  onSubmit={Sumit_handler} autocomplete="off" >

<h3  className='  main_heading'> Contact Us</h3>
<p className=' detil_wrap'>
If you have an idea for a new feature, partnership or any other inquiry we would love to hear from you. Feel free to send us a message, below.
</p>



<input className='contact_inp' id='nam' placeholder='Name' onChange={(e)=>{ setname(e.target.value)}} maxlength="20"  required ></input>
<input className='contact_inp ' id='emi' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Email' type="email" onChange={(e)=>{ setemail(e.target.value)}} required ></input>
<input className='contact_inp_mesg ' id='msg' placeholder='Message' onChange={(e)=>{ setmesage(e.target.value)}} required ></input>


<button className='submit_buton' type='submit' >Submit</button>



</form>
   </div>


   
       </div>

       <ToastContainer />
       

   {/* </div> */}
   
   </>
  )
}

export default ContactUs