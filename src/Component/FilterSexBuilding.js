import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Item_dropdown_filter({ setSexBuilding }) {
  const [dormitories, setDormitories] = useState([]);

  useEffect(() => {
    async function getDormitories() {
      try {
        const dormitory = await axios.get("http://localhost:8000/dormitories");
        // console.log(dormitory.data);
        setDormitories(dormitory.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDormitories();
  }, []);

  const onChange = (e) => {
    setSexBuilding(e.target.value);
  };

  return (
    <>
      <select
        onChange={onChange}
        class="form-select mb-3"
        aria-label="Default select example"
      >
        {dormitories
          .filter((dormitory) => dormitory.sex.includes("builderMale"))
          .map((filteredDormitory) => (
            <option key={filteredDormitory.id} value={filteredDormitory.id}>
              {filteredDormitory.name}
            </option>
          ))}
      </select>
    </>
  );
}
