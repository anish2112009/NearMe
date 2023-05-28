import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const redIcon = L.icon({
  iconUrl: require('./marker-icon-2x-red.png'), // Path to the red marker icon image
  iconSize: [25, 41], // Size of the icon image
  iconAnchor: [12, 41], // Anchor point of the icon (bottom center)
  popupAnchor: [0, -41], // Anchor point for the popup (top center)
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const Mapp = ({endd,startt}) => {
  const mapRef = useRef(null);
  
  
  console.log(1);
  console.log(2);

  useEffect(() => {
    const map = L.map(mapRef.current);

    map.setView([25.5541,75.785268], 4);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    const start = L.latLng(startt.latitude,startt.longitude);
    const end = L.latLng(endd.geocodes.main.latitude,endd.geocodes.main.longitude);

    L.Routing.control({
      waypoints: [start, end],
    }).addTo(map);

    L.marker(start, {  }).bindPopup('YOU ARE HERE').addTo(map);
    L.marker(end, { icon: redIcon }).bindPopup(`${endd.name}`).addTo(map);
    

    return () => {
      map.remove();
    };
  }, [endd,startt]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%',zIndex:'0' }} />;
};

export default Mapp;
