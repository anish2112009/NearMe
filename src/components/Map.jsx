import React from 'react'
import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState,useEffect } from 'react'
import { Spinner } from '@chakra-ui/react';

const redIcon = L.icon({
  iconUrl: require('./marker-icon-2x-red.png'), // Path to the red marker icon image
  iconSize: [25, 41], // Size of the icon image
  iconAnchor: [12, 41], // Anchor point of the icon (bottom center)
  popupAnchor: [0, -41], // Anchor point for the popup (top center)
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('./marker-icon-2x-red.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    
});




export default function Map({locationss,startt}) {
   
   console.log(locationss,3)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [position,setPosition]=useState(null);
  

 

  let centralLatitude =0;
  let centralLongitude = 0;

  useEffect(() => {

    let totalLatitude = 0;
    let totalLongitude = 0;
  const help=async()=>{
    for (let i = 0; i < locationss.length; i++) {
      totalLatitude += locationss[i].lat;
       totalLongitude += locationss[i].lng;
     // console.log(locationss[i].lat,8)
    }}
    help();
    let totalLocations = locationss.length+0.0000001;
    
  
     centralLatitude = totalLatitude / totalLocations;
   centralLongitude = totalLongitude / totalLocations;
   //console.log(centralLatitude,8)
   setPosition([centralLatitude,centralLongitude]);

    
  }, [locationss]);
  //console.log(latitude);
  //console.log(longitude);

  // useEffect({
   
    
  // },[isLoading])
   console.log(position,5);
  
     if(position!=null && startt!=null){
  return (
    
    <Box
    
    width={'full'}
    height={'full'}
    >
     

 <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{width:'100%',height:'100%',zIndex:'0'}}>
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
   
    maxzoom={100}
  />

 <Marker position={[startt.latitude,startt.longitude]} >
      <Popup>
        You are Here<br/> zoom in to view
      </Popup>
    </Marker> 


     {locationss.map((location, index) => (
            
            
          <Marker key={index} position={[location.lat, location.lng]}  icon={redIcon}>
             <Popup>
        {location.namee}<br/> 
      </Popup>
          </Marker>
        ))}
 
</MapContainer>
    </Box>
  )
    }
    else{
      return (
        <div
        
        ><b>Loading...</b>
          <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
 
/>
        </div>
      )
    }
}
