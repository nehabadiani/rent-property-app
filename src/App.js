import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Property from "./components/Property";
import Data from "./properties.json";
import "antd/dist/antd.css";
import { useState } from "react";

function App() {
  const [properties, setProperties] = useState(Data);

  const handleFilter = (filters) => {
    const newProperties = Data.filter((newProperty) => {
      return (
        newProperty.city == filters.city &&
        newProperty.state == filters.state &&
        newProperty.bedrooms == filters.bedrooms &&
        newProperty.house_type == filters.house_type &&
        newProperty.sq_ft >= filters.sq_ft
      );
    });
    setProperties(newProperties);
  };

  return (
    <>
      <Header />
      <Filters handleFilter={handleFilter} />
      <div className="property-section">
        {properties.length == 0 ? (
          <p className="error_message">No results found for your search</p>
        ) : (
          properties.map((property) => (
            <Property key={property.id} info={property} />
          ))
        )}
      </div>
    </>
  );
}

export default App;
