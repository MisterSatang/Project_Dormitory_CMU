import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function FilterFloorBuilding({setFloorBuilding}) {

  const [dormitories, setDormitories] = useState([]);  

  const onChange = (e) => {
    setFloorBuilding(e.target.value)
  }

    useEffect(() =>{
      async function getDormitories() {
        try {
          const dormitory = await axios.get('http://localhost:8000/dormitories/1');
          console.log(dormitory.data);
          setDormitories(dormitory.data);
          
        } catch (error) {
          console.error(error);
        }
      }
      getDormitories();
    }, []);    
    
  const getNumfloor = [dormitories.floor]
  for (let i = 0; i < dormitories.floor; i++){
    getNumfloor[i] = i + 1;
  }

  return(
    <>
      <select onChange={onChange} class="form-select mb-3" aria-label="Default select example">
      <option>
          - 
      </option>
      {
      getNumfloor.map(index => (
        <option key={index} value={index}>
          {index}
        </option>
      ))
      }

      </select>
    </>
  );
}