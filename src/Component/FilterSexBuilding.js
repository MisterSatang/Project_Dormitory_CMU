export default function Item_dropdown_filter({setSexBuilding,dormitories}) {
  
  const onChange = (e) => {
    setSexBuilding(e.target.value)
  }

  return(
    <>
      <select onChange={onChange} class="form-select mb-3" aria-label="Default select example">
      <option>
          - 
      </option>
      {
        dormitories.filter(dormitory => dormitory.sex.includes('builderMale')).map(filteredDormitory => (
          <option key={filteredDormitory.id} value={filteredDormitory.name} item={filteredDormitory}>
            {filteredDormitory.name}
          </option>
        ))
      }

      </select>
    </>
  );
}
