import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Dormitories = () => {
    const [dormitories, setDormitories] = useState([]);
    const [postDor, setpostDor] = useState([]);
    const [postRoom, setpostRoom] = useState([]);

    useEffect(() => {
        function postDormitories() {
            axios.post("http://localhost:8000/dormitories", {
                "buildingNo": 5,
                "floor": 5,
                "sex": "5",
                "name": "5",
                "tel": "5"
            })
                .then((response) => {
                    setpostDor(response.data);
                })
        }
        postDormitories();

        function putDormitories() {
            axios.put("http://localhost:8000/dormitories/4", {
                buildingNo: 3,
                floor: 3,
                sex: "3",
                name: "3",
                tel: "3",
            })
        }

        function deleteDormitories() {
            axios.delete(`http://localhost:8000/dormitories/4`.then(() => {
                alert("Post delted");
                setpostDor(null);
            }))
        }
    })

    useEffect(() => {
        function postRoom() {
            axios.post("http://localhost:8000/rooms/4", {
                floor: 4,
                roomNo: "",
                numMax: 4
            })
                .then((response) => {
                    setpostRoom(response.data);
                })
        }

        function putRoom() {
            axios.put("http://localhost:8000/rooms/4", {
                floor: 4,
                roomNo: "",
                numMax: 4
            })
        }

        function deleteRoom() {
            axios.delete("http://localhost:8000/rooms/4".then(() => {
                alert("Post delted");
                setpostRoom(null);
            }))
        }
    }, [])

    if (!postDor) return "No post Dor";
    if (!postRoom) return "No post Room";

    return (
        <>

        </>
    );

    // useEffect(() => {
    //     const getdormitories = async () => {
    //         const result = await axios.get('http://localhost:8000/dormitories/');
    //         console.log(result.data)
    //         setDormitories(result.data);
    //     };
    //     getdormitories();
    // }, []);
    // return dormitories.map((building) => (
    //     <div key={building.id}>
    //     </div>
    // ));

}
export default Dormitories