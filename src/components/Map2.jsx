import React from 'react'
import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState,useEffect } from 'react'
import { Spinner } from '@chakra-ui/react';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function Map2({coord}) {
   
 console.log(coord,`kj`)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  



  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       },
  //       (error) => {
  //         console.error('Error getting geolocation:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // }, []);
  //console.log(latitude);
  //console.log(longitude);

  // useEffect({
   
    
  // },[isLoading])

  
     if(coord){
  return (
    
    <Box
    
    width={'full'}
    height={'full'}
    >
     

 <MapContainer center={[coord.latitude,coord.longitude-15]} zoom={5} scrollWheelZoom={true} style={{width:'100%',height:'100%',zIndex:'0'}}>
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
   
    maxzoom={100}
  />

 <Marker position={[coord.latitude,coord.longitude]} >
      <Popup>
        You are Here<br/> zoom in to view
      </Popup>
    </Marker> 

     
 
</MapContainer>
    </Box>
  )
    }
     else{
       return (
        <div style={{marginLeft:80}}>
          <span style={{marginLeft:200}}><b>RELOAD THE PAGE IF MAP NOT APPEARS AFTER ENTERING ADDRESS</b></span>
          <Spinner
          marginBottom={8}
          marginRight={10}
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
