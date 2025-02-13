import React from "react";


const PropertyDetailsContent = (value) =>{
 console.log(value.value)
    
    return(
        <>

<div className="d-flex flex-column justify-content-start align-items-start">
<div className="d-flex align-items-baseline">
  <h2 className="pe-3" >€{value.value.attributes.price}</h2>
  <p>{value.value.attributes.bedroom} bed | {value.value.attributes.floorarea_min
  } sq.ft</p>
  </div>
  <p>{value.value.attributes.title} in {value.value.attributes.address?.address1 || "No Address"}</p>

  <button className="bg-black text-white " style={{ width: "300px" }} >Contact agent</button>

  <p className="pt-3" style={{ borderBottom: "2px solid #ddd", paddingBottom: "5px", fontWeight: "bold" }}>
  FACTS & FEATURES
</p>
<p>Neigbourhood:       </p>
<p>Price Per sqm: </p>
<div className="d-flex">
<p className="pe-5">Brochure:</p>
 <a href={value.value.attributes.brochure}>Download Brochure</a> </div>
 <div className="d-flex">
 <p className="pe-5">Floorplan:</p>
 <a href={value.value.attributes.floorplan
[0].url}>View FloorPlan</a> </div>

<p className="py-3 text-start">{value.value.attributes.description}</p>

<div className="d-flex">
    <div>
    <img 
  src={value.value.attributes.crm_negotiator_id.profile_img} 
  alt="Negotiator" 
  style={{ width: "100px", height: "130px" }}
/>

    </div>

    <div className="d-flex flex-column align-items-start ps-2">
        <p>{value.value.attributes.crm_negotiator_id.name}</p>
        <p className="text-start">{value.value.attributes.crm_negotiator_id.job_title
        }</p>
       <div className="d-flex">
       <p className='pe-2'>{value.value.attributes.crm_negotiator_id.mobile_phone

        } | </p>
        <a   href={value.value.attributes.crm_negotiator_id.email
}>Email</a>
       </div>
    </div>
</div>

</div>


        </>
    )
}

export default PropertyDetailsContent