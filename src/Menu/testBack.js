import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Testback() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getStudents = async () => {
            const result = await axios.get('http://localhost:8000/students/');
            console.log(result.data)
            setStudents(result.data);
        };
        getStudents();
    }, []);
    return students.map((student) => (
        <div key={student.id}>
        </div>
    ));

}