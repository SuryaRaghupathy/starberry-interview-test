import React from "react";
import PropertyDetailsContent from "./PropertyDetailsContent";
const PropertyDetailsView = ({ property, onBack }) => {
  return (
    <>


 <div className=" container d-flex flex-column flex-md-row justify-content-start">
   
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
<div style={{ position: "relative", width: "100px", height: "40px" }}>
  <div 
    onClick={onBack} 
    style={{
      position: "absolute",
      top: "50%",
      left: "-120%",
      transform: "translate(-50%, -50%)",
      width: "100px", 
      height: "40px", 
      
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      cursor: "pointer",
   
      backgroundColor: "#fff" 
    }}
  >
   <p style={{ margin: 0, color: "black" }}> « Go Back</p>

  </div>
</div>

  <img
    src={property.attributes.images[0].url}
    alt="Main Property"
    style={{ width: "500px", height: "380px", marginBottom: "10px" }}
  />


  <div style={{ display: "flex", gap: "10px" }}>
    {property.attributes.images.slice(1, 3).map((image, index) => (
      <img
        key={index}
        src={image.url}
       
        style={{ width: "245px", height: "190px", }}
      />
    ))}
  </div>

</div>
<div className="ps-4 "style={{marginTop: "40px" }}>
  <PropertyDetailsContent value={property}/>
</div>
</div>

{/* <PropertyDetailsContent value={property}/> */}


{/*  */}

     </>
    // <div className="m-4">
    //   <div className="d-flex flex-column">
    //     <img
    //       src={property.attributes?.thumbnail}
    //       style={{ width: "300px", height: "150px" }}
    //       alt="Property"
    //     />
    //     <p>{property.attributes?.address?.address1 || "No Address"}</p>
    //     <p>{property.attributes?.title || "No Title"}</p>
    //     <h4>{property.attributes?.price} €</h4>
       
    //   </div>
    // </div>
    
  );
};

export default PropertyDetailsView;
