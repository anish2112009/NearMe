import { Flex ,Box} from '@chakra-ui/react'
import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import PlaceDetail from './PlaceDetail'
import { useState } from 'react'

export default function List({places,isLoading,onAssistantDirectionClick}) {
   
   //console.log(places)
   //console.log(isLoading)
  
   const [placee,setPlace]=useState(null);
   const handleAssistantDirectionClick=async(place)=>{
    onAssistantDirectionClick(place);
   await setPlace(place);
    
    
   }
    if(isLoading){
        return (
            <Flex
            direction={'column'}
            bg={'white'}
            width={'37vw'}
            height={'100vh'}
            position={'absolute'}
            left={0}
            top={0}
            zIndex={1}
            overflow={'hidden'}
            px={2}
            >
             <Box padding='6' boxShadow='lg' bg='white' mt={16}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' mt={3}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' mt={3}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' mt={3}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
<Box padding='6' boxShadow='lg' bg='white' mt={3}>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
            </Flex>
        )
    }
if(places && places.length>0){
    return (
    <Flex
    direction={'column'}
    bg={'white'}
    width={'37vw'}
    height={'100vh'}
    position={'absolute'}
    left={0}
    top={0}
    zIndex={1}
    overflow={'hidden'}
    px={2}
    
    >
        <Flex

        flex={1}
        overflowY={'scroll'}
        mt={16}
        direction={'column'}
        

        >
            {places && places.map((place,i)=><PlaceDetail place={place} key={i} onAssistantDirectionClick={handleAssistantDirectionClick} dummy={placee}/>)}
        </Flex>
    </Flex>)}
    else{
      return (
        <Flex
        direction={'column'}
        bg={'white'}
        width={'37vw'}
        height={'100vh'}
        position={'absolute'}
        left={0}
        top={0}
        zIndex={1}
        overflow={'hidden'}
        px={2}
        
        >
            <Flex
    
            flex={1}
            overflowY={'scroll'}
            mt={16}
            direction={'column'}
            
    
            >
                <b>No Result Found Search Another</b>
            </Flex>
        </Flex>
      )
    }
}
