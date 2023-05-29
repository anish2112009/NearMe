import './App.scss';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import Map2 from './components/Map2';
//import PlaceDetail from './components/PlaceDetail';
import { Flex } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import Mapp from './components/Mapp';
import Geolocation from './components/Location' 

// const places=[
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
//   {name:'first'},
// ]

const locations=[];
let clicked=false;

function App() {
  
  const [places,setPlaces]=useState();
  const [isLoading,setIsloading]=useState(true);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  const [locationss,setLocationss]=useState(null);
  const [address,setAddress]=useState(null);
  const [latlng,setLatLng]=useState(null);

  const [valueFromChild, setValueFromChild] = useState('');

  const handleInputChange = async(value) => {
    await setValueFromChild(value); // Update the state in the parent component
    clicked=false;
    
  };
  
  const [place,setPlace]=useState(null);
  const handleAssistantDirectionClick=async(place)=>{

  await setPlace(place);
  console.log('ek',place)
  clicked=true;
  

  }

  const handleAddressChange=async(address)=>{
    //console.log(address);
    await setAddress(address);

  }
   console.log(address);
  //console.log(process.env.REACT_APP_API_KEY,'hu');
  useEffect(()=>{

   const api=async()=>{ 

    const url = `https://google-maps-geocoding3.p.rapidapi.com/geocode?address=${address}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98f21a733dmshed030ec55ff2aa4p1a4325jsn7ad76adac921',
            'X-RapidAPI-Host': 'google-maps-geocoding3.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
       
        const received = JSON.parse(result);
        setLatLng(received);
        
        console.log(received);

        async function placeSearch() {
          
              try {
                  const searchParams = new URLSearchParams({
                    query: `${valueFromChild}`,
                    ll: `${received.latitude},${received.longitude}`,
                    open_now: '',
                    sort: 'DISTANCE'
                  });
                  const results = await fetch(
                    `https://api.foursquare.com/v3/places/search?${searchParams}`,
                    {
                      method: 'GET',
                      headers: {
                        Accept: 'application/json',
                        Authorization: process.env.REACT_APP_API_KEY,
                      }
                    }
                  );
                  const data = await results.json();
                  console.log(data.results);
                  await setPlaces(data.results);
                  await setIsloading(false);
                 // console.log(places);
                 locations.length = 0;
                //  locations.push({lat: latitude,
                //   lng:longitude,}) 
                 for (let i = 0; i < data.results.length; i++) {//console.log(data.results[i].geocodes.main.latitude)
                  const newLocation = {
                    lat: data.results[i].geocodes.main.latitude,
                    lng: data.results[i].geocodes.main.longitude,
                    namee:data.results[i].name,
                  };
                  locations.push(newLocation);
                }
                 await setLocationss(locations);
                 //console.log(locations);
              } catch (err) {
                  console.error(err);
              }
          }
          if(valueFromChild && result) placeSearch();
    


    } catch (error) {
        console.error(error);
    }
   
  }
 if(address) api();
 // console.log(place);
  },[valueFromChild,address,place]);
  
  // console.log(latitude);
   //console.log(locations);
  


  return (

  //    <div><h1>Geolocation Map</h1>
  //  <Geolocation /></div>
    <Flex

    justifyContent={"center"}
    alignItems={"center"}
    height={'100vh'}
    width={'100vw'}
    maxHeight={'100vh'}
    maxWidth={'100vw'}
    position={'relative'}
    >

     <Header onSearch={handleInputChange} onAddress={handleAddressChange}/>

     <List places={places} isLoading={isLoading} onAssistantDirectionClick={handleAssistantDirectionClick}/> 



       {clicked==false && locationss!=null && !isLoading && <Map locationss={locationss} startt={latlng} />} 
    {isLoading && <Map2  coord={latlng}/>}  

    { clicked==true && (latlng!=null && place!=null ) && <Mapp endd={place} startt={latlng}/>}

    </Flex>
   );
}

export default App;
