import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = () => {
        let api = "http://localhost:8000/user/savedata";
        axios.post(api, input).then((res) => {
            console.log(res);
            alert("Data Successfully Saved");
        });
    };

    return (
        <>
           <center>
           <Form
              style={{width:"300px"}}
            className='formDesign'>
                {/* <Form.Label >
                   <center> Insert Data</center>
                </Form.Label> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Author Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="auther"
                        value={input.auther || ""}
                        onChange={handleInput}
                        style={{ fontSize: "20px" }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Book Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={input.title || ""}
                        onChange={handleInput}
                        style={{ fontSize: "20px" }} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Book Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        value={input.price || ""}
                        onChange={handleInput}
                        style={{ fontSize: "20px" }} 
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmit}
                    style={{
                        fontSize: "20px",
                        padding: "10px 20px",
                    }}
                >
                    Submit
                </Button>
            </Form>
           </center>
        </>
    );
};

export default Insert;
