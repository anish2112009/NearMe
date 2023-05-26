import React from 'react'
import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  return (
    
    <Box
    
    width={'full'}
    height={'full'}
    >
 <MapContainer center={[25.7771, 87.4753]} zoom={5} scrollWheelZoom={false} style={{width:'100%',height:'100%',zIndex:'0'}}>
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
   
    maxzoom={100}
  />

<Marker position={[25.7771, 87.4753]} >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
 
</MapContainer>
    </Box>
  )
}
