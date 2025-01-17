import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Display.css"; // Import the CSS file for styles

const Display = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/user/displaydata";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const AddMoreData = (myid) => {
        navigate(`/addmoredata/${myid}`);
    };

    const ans = mydata.map((key) => {
        return (
            <tr key={key._id}>
                <td>{key.auther}</td>
                <td>
                    {key.books.map((key1, index) => {
                        return (
                            <p key={index}>
                                {key1.title} - Price: {key1.price}
                            </p>
                        );
                    })}
                </td>
                <td>
                    <button className="addMoreBtn" onClick={() => AddMoreData(key._id)}>
                        Add More Data
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Display</h1>
            <table className="displayTable">
                <thead >
                    <tr>
                        <th>Author Name</th>
                        <th>Book Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </>
    );
};

export default Display;
