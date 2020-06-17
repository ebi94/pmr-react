import React from 'react'
 
const GoogleMap = () => {

  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe title="google-map" src="https://maps.google.com/maps?q=NCB%20BUildin&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>      
        </div>
      </div>
    </>
  )
}
 
export default GoogleMap;