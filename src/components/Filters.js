import React from "react";

const Filters = ({ handleFilter }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filterObject = {
      state: e.target.state.value,
      city: e.target.city.value,
      bedrooms: e.target.beds.value,
      sq_ft: e.target.sq_ft.value,
      house_type: e.target.house_type.value,
    };
    handleFilter(filterObject);
  };

  return (
    <form className="filter" onSubmit={handleSearchSubmit}>
      <div>
        <span>Location</span>
        <input
          placeholder="State"
          style={{ width: 100 }}
          type="text"
          id="state"
          required
        />
        <input
          placeholder="City"
          style={{ width: 100 }}
          type="text"
          id="city"
          required
        />
      </div>
      <div>
        <label for="beds">Number of bedrooms</label>
        <input
          name="beds"
          placeholder="No. of beds"
          style={{ width: 100 }}
          type="number"
          id="beds"
          required
        />
      </div>
      <div>
        <label for="sq_ft">House Sq. ft</label>
        <select id="sq_ft" name="sq_ft">
          <option value="1000"> &gt;= 1000</option>
          <option value="1500"> &gt;= 1500</option>
          <option value="2000">&gt;= 2000</option>
          <option value="2500">&gt;= 2500</option>
          <option value="3000">&gt;= 3000</option>
        </select>
      </div>
      <div>
        <label for="house_type">House Type</label>
        <select id="house_type" name="house_type">
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Pent House">Pent House</option>
        </select>
      </div>
      <button id="search" type="submit">
        Apply
      </button>
    </form>
  );
};

export default Filters;
