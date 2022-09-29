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
    
  const getNumfloor = new Array(dormitories.floor).fill(0).map((value,index) =>index+1)
  console.log(getNumfloor);

  return(
    <>
      <select onChange={onChange} class="form-select mb-3" aria-label="Default select example">
      <option>
          - 
      </option>
      {
      getNumfloor.map(floor => (
        <option key={floor} value={floor}>
          {floor}
        </option>
      ))
      }

      </select>
    </>
  );
}