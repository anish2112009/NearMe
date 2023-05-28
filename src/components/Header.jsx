import React from 'react'
import { Flex, InputGroup, InputRightElement } from '@chakra-ui/react'
import {BiSearch} from 'react-icons/bi'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function Header({ onSearch }) {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    
  };

  const handleSearch = () => {
    //onSearch(searchValue); // Invoke the callback function with the search value
    console.log(searchValue);
    onSearch(searchValue);
  };
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
        <InputGroup
        
        width={'35vw'}
        shadow={'lg'}
        zIndex={50}
        >
          <InputRightElement
          zIndex={50}
          
          children={<BiSearch color='gray.700' fontSize={20} onClick={handleSearch}  />}
          />
          <Input type='text'  
           placeholder='Search Near By...'
          // variant={'filled'}
          fontSize={18}
          color={'gray.700'}
          _hover={{bg:'whiteAplha.800'}}
           _focus={{bg:'whiteAplha.800',outline:'none'}}
          _placeholder={{color:'gray.700'}}
          bg={'whiteApha.800'}
          value={searchValue}
        onChange={handleInputChange}
          
          />
        </InputGroup>
      </Flex>
    </Flex>
  )
}
