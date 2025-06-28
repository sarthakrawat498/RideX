import React from 'react';

function LocationSearchPanel(props){
    console.log(props);
    const locations = [
        "24B , Near Kapoors Cafe , Sheriyans Coding School",
        "22B , Near Malhotra Cafe , Sheriyans Coding School",
        "20B , Near Singhania Cafe , Sheriyans Coding School",
        "26B , Near Kapoors Cafe , Sheriyans Coding School"
    ]
    return (
        <div>
            {/* Sample Data */}
            {locations.map(function(elem,idx){
                return(
                    <div key={idx} onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start'> 
                <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full '><i className="ri-map-pin-fill "></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
                )
            })}
            
            
            
        </div>
    )
}
export default LocationSearchPanel