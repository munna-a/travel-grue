
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
 
const containerStyle = {
  width: '100%',
  height: '100%'
};
 
const center = {
  lat: -3.745,
  lng: -38.523
};
 
function MyMap() {
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDUSyFHKJHrLwNJTuU-jd2r3UhsjPgiJCc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default MyMap;













// import React from 'react';
// import {
//     withGoogleMap,
//     withScriptjs,
//     GoogleMap,
//     Marker,
//     InfoWindow,
//     useLoadScript
//   } from "@react-google-maps/api";
// const libraries = ["place"];
// const mapContainerStyle = {
//     width:"100vw",
//     height:"100vh"
// }
// const center = {
//     lat:43.653225,
//     lng:-79.383186
// }
// const GoogleMaps = () => {
//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: "AIzaSyAG9aCF2aNwFaok6IfszUxdyfV0ebOIm7M",
//         libraries,
//     })
//     if(loadError) return "Error loading map";
//     if(!isLoaded) return "loading map";
//     return (
//         <div>
//             <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap>
//         </div>
//     );
// };

// export default GoogleMaps;


