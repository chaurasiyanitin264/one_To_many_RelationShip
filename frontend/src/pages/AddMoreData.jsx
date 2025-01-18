import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useParams } from 'react-router-dom';
const AddMoreData=()=>{
    const [input,setInput]=useState({});
    const {id}=useParams();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }
const handleSubmit=()=>{
    let api="http://localhost:8000/user/addmoreData";
    axios.post(api, {id:id, ...input}).then((res)=>{
        // alert("You are succesfully registered!!!");
        console.log("Okkk")
       })
}
    return(
        <>
        {id}
           <center>
           <Form className='formDesign' style={{width:"300px"}}>
     
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Enter Book Title</Form.Label>
       <Form.Control type="text" 
       name="title" value={input.title} onChange={handleInput}/>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Enter Book Price</Form.Label>
       <Form.Control type="text" 
       name="price" value={input.price} onChange={handleInput}/>
     </Form.Group>
     <Button variant="primary" type="button"
     onClick={handleSubmit}>
       Submit
     </Button>
   </Form>
           </center>
        </>
    )
}
export default AddMoreData;