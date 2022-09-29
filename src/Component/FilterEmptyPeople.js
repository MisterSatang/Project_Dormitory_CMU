import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function FilterEmptyPeople({setEmptyPeople}) {

  const [dormitories, setDormitories] = useState([]);
  
  const onChange = (e) => {
    setEmptyPeople(e.target.value)
  }

    useEffect(() =>{
      async function getDormitories() {
        try {
          const dormitory = await axios.get('http://localhost:8000/dormitories');
          console.log(dormitory.data);
          setDormitories(dormitory.data);
        } catch (error) {
          console.error(error);
        }
      }
      getDormitories();
    },[]);  
    
  const getNumEmpty = [4]
  for (let i = 0; i < 4; i++){
    getNumEmpty[i] = 4 - i;
  }

  return(
    <>
      <select onChange={onChange} class="form-select mb-3" aria-label="Default select example">
      
      <option>
          - 
      </option>
      {
      getNumEmpty.map(index => (
        <option key={index} value={index}>
          {index}
        </option>
      ))
      }

      </select>
    </>
  );
}
