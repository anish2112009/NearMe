import './App.scss';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import PlaceDetail from './components/PlaceDetail';
import { Flex } from '@chakra-ui/react';

function App() {
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

     <Header/>

    {/* <List/> */}

    <Map/>

    </Flex>
  );
}

export default App;
