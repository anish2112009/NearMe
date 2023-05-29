import React from 'react'
import { Flex ,Text,Image,} from '@chakra-ui/react'
//import {Rating} from '@mui/material'
import ReactStars from 'react-stars'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
//import axios from 'axios';
//import NearMeIcon from '@mui/icons-material/NearMe';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { useState } from 'react';

export default function PlaceDetail({place,onAssistantDirectionClick}) {
   //console.log(place.place.geocodes.main)

    // const getPhoto=()=>{

    //     const sdk = require('api')('@fsq-developer/v1.0#in630ili227qkn');

    //     sdk.placePhotos({fsq_id: 'fsq_id'})
    //       .then(({ data }) => console.log(data))
    //       .catch(err => console.error(err));
        
    // }
    // getPhoto();
      
   // console.log(place.fsq_id);
    //  const fetchData = () => {
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'fsq3m8xgnkPqWME5UwXWsp3MdG54LchN7MMoX7oNtXWq2WE='
    //     }
    //   };
      
    //   fetch(`https://api.foursquare.com/v3/places/${place.fsq_id}/photos`, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    //  };

     //fetchData();

    const [placee,setPlace]=useState(null);
    const handleClick=()=>{
      console.log('fuck');
      onAssistantDirectionClick(place);
      setPlace(place);
    }
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Flex
    
    bg={'whiteAlpha.900 '}
    px={4}
    py={2}
    mb={2}
    shadow='lg'
    direction={'column'}
    alignItems={'center'}
    justifyContent={'space-between'}
       
      transform={isHovered ? "scale(1.02)" : "scale(1)"}
      transition="transform 0.2s ease-in-out"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    
    >
        <Flex width={'full'} justifyContent={'space-between'}>
            <Flex 
            
            direction={'column'}
            justifyContent={'start'}
            alignItems={'start'}
            width={'full'}
            px={2}

            >
          <Flex alignItems={'center'} width={'full'} justifyContent={'space-between'}>
            <Text textTransform={'capitalize'} width={'40'} fontSize={'lg'} fontWeight={500} isTruncated>{place.name}</Text>
          </Flex>
          <Flex alignItems={'center'} width={'full'}>
            <ReactStars
  count={5}
  value={3}
  edit={false}
  size={14}
  color2={'#ffd700'} />

            </Flex>
            <Text
            fontSize={'sm'}
            fontWeight={'400'}
            color={'gray.600'}
            ><LocationOnIcon style={{paddingTop:'8px'}}/>{place.location.formatted_address}</Text>

<Text
            fontSize={'sm'}
            fontWeight={'500'}
            color={'green.600'}
            >Open now &nbsp; <PhoneIcon size='small' style={{paddingTop:'8px'}}/>NA</Text>

<Text
            fontSize={'sm'}
            fontWeight={'500'}
            color={'gray.600'}
            >Distance:{place.distance}m &nbsp;&nbsp;&nbsp;{ 1 && `website:NA`}&nbsp;&nbsp;&nbsp; {<AssistantDirectionIcon onClick={handleClick} dummy={placee} cursor={'pointer'}/>}</Text>
            </Flex>
            <Image
        objectFit={'cover'}
        width={'150px'}
        height={'120px'}
        rounded={'lg'}
        src={"https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"}
        
        />
        </Flex>
    </Flex>
  )
}
