import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }
const handleSubmit=()=>{
    let api="http://localhost:8000/user/savedata";
    axios.post(api,input).then((res)=>{
        console.log(res)
        alert("Data Successfully Save")
    })
}
    return(
        <>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Auther Name</Form.Label>
        <Form.Control type="text"
         name="auther" value={input.auther} onChange={handleInput}/>
      </Form.Group>

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
        </>
    )
}
export default Insert;