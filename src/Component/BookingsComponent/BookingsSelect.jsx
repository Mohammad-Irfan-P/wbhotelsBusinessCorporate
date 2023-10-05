// import React from 'react'
import "./bookingsSelect.css"

// const BookingsSelect = () => {
//   return (
//     <div>
//       <div>
        

//   {/* <label for="cars">Choose a car:</label> */}
//   <select name="cars" id="cars">
//     <option value="volvo">Volvo</option>
//     <option value="saab">Saab</option>
//     <option value="opel">Opel</option>
//     <option value="audi">Audi</option>
//   </select>
//   <br></br> <br/>
//   <input type="submit" value="Submit"/>


//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Select from 'react-select';

const options1 = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

const options2 = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

const options3 = [
  { value: 'car', label: 'Car' },
  { value: 'bike', label: 'Bike' },
  { value: 'boat', label: 'Boat' },
];

const BookingsSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    select1: null,
    select2: null,
    select3: null,
  });

  const handleSelectChange = (value, selectName) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [selectName]: value,
    }));
  };

  return (
    <div className="select-main-container">
      <Select
        value={selectedOptions.select1}
        onChange={(value) => handleSelectChange(value, 'select1')}
        options={options1}
      />
      <Select
        value={selectedOptions.select2}
        onChange={(value) => handleSelectChange(value, 'select2')}
        options={options2}
      />
      <Select
        value={selectedOptions.select3}
        onChange={(value) => handleSelectChange(value, 'select3')}
        options={options3}
      />

      <button>Exports Bookings</button>
    </div>
  );
};



export default BookingsSelect
