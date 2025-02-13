import React, { useState, useContext } from "react";
import { propertyDetailsProvider } from "./ContextProvider";
import PropertyDetailsView from "./PropertyDetailsView";

const PropertDetailsPage = () => {
  const propertyDetailsToShow = useContext(propertyDetailsProvider);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Prevent errors if data is null/undefined on first render
  if (!propertyDetailsToShow || !propertyDetailsToShow.data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className=" d-flex flex-column bg-white text-black text-center py-2"
      style={{  marginTop: "70px", marginBottom: "70px" }}

    >
         {selectedIndex === null && <h2 className="py-3">Property for Sale</h2>}

      <div className="bg-white text-black">
        <div className="d-flex flex-wrap justify-content-center m-1">
         
          {selectedIndex !== null ? (
            <PropertyDetailsView
              property={propertyDetailsToShow.data[selectedIndex]}
              onBack={() => setSelectedIndex(null)}
            />
          ) : (
            propertyDetailsToShow.data.map((item, index) => (
              <div className="m-4" key={index}>
                <div
                  className="d-flex flex-column"
                  onClick={() => setSelectedIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.attributes.thumbnail}
                    style={{ width: "300px", height: "200px" }}
                    alt={`Property ${index + 1}`}
                  />
                  <p>{item.attributes.address.address1 || "No Address"}</p>
                  <p>{item.attributes.title || "No Title"}</p>
                  <h4>{item.attributes.price} €</h4>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertDetailsPage;
