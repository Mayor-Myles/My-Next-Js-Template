'use client';

import React from 'react';
import { ChakraProvider, Box, Flex, useDisclosure, useBreakpointValue, VStack,useColorModeValue, } from '@chakra-ui/react';
import { TopNav } from '@/topnav';
import { Sidebar } from '@/sidebar';
import Wallet from '@/wallet';
import Stats from '@/stats';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

const bg = useColorModeValue({"gray.50","black"});
  
  return (
    <ChakraProvider>
      <Flex flexDirection="column" minH="100vh" bg={bg} justifyContent="center">
        <TopNav openSidebar={onOpen} />

      
          {!isMobile && <Sidebar isOpen={true} onClose={onClose}   />}
          {isMobile && <Sidebar isOpen={isOpen} onClose={onClose}  />}
        
        
        <Box p={{ base: 4, md: 6 }}>
          <Wallet />
            
          </Box>
          <Stats/>
        
      </Flex>
    </ChakraProvider>
  );
}

export default App;
