import React from 'react'

export default async function Geolocation () {
    const url = 'https://google-maps-geocoding3.p.rapidapi.com/geocode?address=kasba bihar';
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
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    return(
        <div>daru</div>
    )
    
}



// async function placeSearch() {
//     try {
//         const searchParams = new URLSearchParams({
//           query: `${valueFromChild}`,
//           ll: `${position.coords.latitude},${position.coords.longitude}`,
//           open_now: '',
//           sort: 'DISTANCE'
//         });
//         const results = await fetch(
//           `https://api.foursquare.com/v3/places/search?${searchParams}`,
//           {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               Authorization: process.env.REACT_APP_API_KEY,
//             }
//           }
//         );
//         const data = await results.json();
//        // console.log(data.results);
//         await setPlaces(data.results);
//         await setIsloading(false);
//        // console.log(places);
//        locations.length = 0;
//       //  locations.push({lat: latitude,
//       //   lng:longitude,}) 
//        for (let i = 0; i < data.results.length; i++) {//console.log(data.results[i].geocodes.main.latitude)
//         const newLocation = {
//           lat: data.results[i].geocodes.main.latitude,
//           lng: data.results[i].geocodes.main.longitude,
//           namee:data.results[i].name,
//         };
//         locations.push(newLocation);
//       }
//       await setLocationss(locations);
//        //console.log(locations);
//     } catch (err) {
//         console.error(err);
//     }
// }
// if(valueFromChild) placeSearch();
