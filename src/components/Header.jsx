import React from 'react'
import { Flex, InputGroup, InputRightElement } from '@chakra-ui/react'
import {BiSearch} from 'react-icons/bi'
import { Input } from '@chakra-ui/react'
import { useState,useEffect } from 'react'


export default function Header({ onSearch ,onAddress}) {

  const [searchValue, setSearchValue] = useState('');
  const [searchValuee, setSearchValuee] = useState('');
  const [start,setStart]=useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    
  };
  const handleInputChangee = (event) => {
    const value = event.target.value;
    setSearchValuee(value);
    
  };

  const handleSearch = () => {
    //onSearch(searchValue); // Invoke the callback function with the search value
    console.log(searchValue);
    onSearch(searchValue);
  };
  const handleSearchh = () => {
    //onSearch(searchValue); // Invoke the callback function with the search value
    console.log(searchValue);
    onAddress(searchValuee);
    setStart(1)
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Handle the "Enter" key press event
      console.log('Enter key pressed');
      onAddress(searchValuee);
    setStart(1)
    }
  }

  const handleKeyPresss = (event) => {
    if (event.key === 'Enter') {
      // Handle the "Enter" key press event
      console.log('Enter key pressed');
      onSearch(searchValue);
   // setStart(1)
    }
  }

  if(start===0){
  return (
    <Flex

    position={'absolute'}
    top={0}
    left={0}
    width={'full'}
    px={4}
    py={2}
    zIndex={101}
    
    >
      <Flex>
        {<InputGroup
        
        width={'35vw'}
        shadow={'lg'}
        zIndex={50}
        >
          <InputRightElement
          zIndex={50}
          
          children={<BiSearch color='gray.700' fontSize={20} onClick={handleSearchh} cursor={'pointer'} />}
          />
          <Input type='text'  
           placeholder='Enter Your Address...'
          // variant={'filled'}
          fontSize={18}
          color={'gray.700'}
          _hover={{bg:'whiteAplha.800'}}
           _focus={{bg:'whiteAplha.800',outline:'none'}}
          _placeholder={{color:'gray.700'}}
          bg={'whiteApha.800'}
          value={searchValuee}
        onChange={handleInputChangee}
        onKeyDown={handleKeyPress}
          
          />
        </InputGroup>}
      </Flex>
    </Flex>
  )}
  else{
    return (
      <Flex
  
      position={'absolute'}
      top={0}
      left={0}
      width={'full'}
      px={4}
      py={2}
      zIndex={101}
      
      >
        <Flex>
          {<InputGroup
          
          width={'35vw'}
          shadow={'lg'}
          zIndex={50}
          >
            <InputRightElement
            zIndex={50}
            
            children={<BiSearch color='gray.700' fontSize={20} onClick={handleSearch} cursor={'pointer'} />}
            />
            <Input type='text'  
             placeholder='Search restaurants,atm,airport etc.. Near By...'
            // variant={'filled'}
            fontSize={18}
            color={'gray.700'}
            _hover={{bg:'whiteAplha.800'}}
             _focus={{bg:'whiteAplha.800',outline:'none'}}
            _placeholder={{color:'gray.700'}}
            bg={'whiteApha.800'}
            value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPresss}
            
            />
          </InputGroup>}
        </Flex>
      </Flex>
    )
  }
}
