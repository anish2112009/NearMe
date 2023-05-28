import React from 'react'
import { Flex ,Text,Image,} from '@chakra-ui/react'
import {Rating} from '@mui/material'
import ReactStars from 'react-stars'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import NearMeIcon from '@mui/icons-material/NearMe';
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
    const [placee,setPlace]=useState(null);
    const handleClick=()=>{
      console.log('fuck');
      onAssistantDirectionClick(place);
      setPlace(place);
    }
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
            color={'gray.600'}
            >Open now &nbsp; <PhoneIcon size='small' style={{paddingTop:'8px'}}/>+911234567890</Text>

<Text
            fontSize={'sm'}
            fontWeight={'500'}
            color={'gray.600'}
            >Distance:{place.distance}m &nbsp;&nbsp;&nbsp;{ 1 && `website:url`}&nbsp;&nbsp;&nbsp; {<AssistantDirectionIcon onClick={handleClick} dummy={placee}/>}</Text>
            </Flex>
            <Image
        objectFit={'cover'}
        width={'150px'}
        height={'120px'}
        rounded={'lg'}
        src={"https://fastly.4sqi.net/img/general/original/2476619_wH_je3ItVZh71irUkxyipOYMSSTn5_kDTxN2JUi9CAw.jpg"}
        
        />
        </Flex>
    </Flex>
  )
}
