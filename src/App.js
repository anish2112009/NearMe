import './App.scss';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import Map2 from './components/Map2';
//import PlaceDetail from './components/PlaceDetail';
import { Flex } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import Mapp from './components/Mapp';

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

function App() {
  
  const [places,setPlaces]=useState();
  const [isLoading,setIsloading]=useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationss,setLocationss]=useState(null);

  const [valueFromChild, setValueFromChild] = useState('');

  const handleInputChange = async(value) => {
    await setValueFromChild(value); // Update the state in the parent component
  };
  
  const [place,setPlace]=useState(null);
  const handleAssistantDirectionClick=async(place)=>{

  await setPlace(place);
  console.log('ek',place)
  }

  
  useEffect(()=>{

   const api=()=>{ 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async(position) => {
         await setLatitude(position.coords.latitude);
         await setLongitude(position.coords.longitude);
         async function placeSearch() {
          try {
              const searchParams = new URLSearchParams({
                query: `${valueFromChild}`,
                ll: `${position.coords.latitude},${position.coords.longitude}`,
                open_now: '',
                sort: 'DISTANCE'
              });
              const results = await fetch(
                `https://api.foursquare.com/v3/places/search?${searchParams}`,
                {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    Authorization: 'fsq3m8xgnkPqWME5UwXWsp3MdG54LchN7MMoX7oNtXWq2WE=',
                  }
                }
              );
              const data = await results.json();
              //console.log(data.results);
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
     if(valueFromChild) placeSearch();
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  api();
  console.log(place);
  },[valueFromChild,latitude,longitude]);
  
  // console.log(latitude);
   //console.log(locations);
  


  return (
    <Flex

    justifyContent={"center"}
    alignItems={"center"}
    height={'100vh'}
    width={'100vw'}
    maxHeight={'100vh'}
    maxWidth={'100vw'}
    position={'relative'}
    >

     <Header onSearch={handleInputChange}/>

     <List places={places} isLoading={isLoading} onAssistantDirectionClick={handleAssistantDirectionClick}/> 

      {place==null && locationss!=null && !isLoading && <Map locationss={locationss} />} 
    {place==null && isLoading && <Map2 />} 

    { (latitude && longitude && place) && <Mapp endd={place} startt={{latitude,longitude}}/>}

    </Flex>
  );
}

export default App;
