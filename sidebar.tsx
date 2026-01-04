
'use client';

import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Badge,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { FiMenu } from 'react-icons/fi';

export const TopNav = ({ onMenuClick }) => {
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="sm"
    >
      <Flex align="center" justify="space-between">
        <HStack spacing={4}>
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onMenuClick}
            variant="ghost"
            size="sm"
          />
          <Text fontSize="xl" fontWeight="bold" color="purple.600">
            Mylezic
          </Text>
        </HStack>

        <Box flex="1" maxW="400px" mx={4} display={{ base: 'none', md: 'block' }}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input 
              placeholder="Search..." 
              bg="gray.50" 
              borderRadius="full" 
              fontSize="sm"
            />
          </InputGroup>
        </Box>

        <HStack spacing={4}>
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            size="sm"
            colorScheme="gray"
          />
          <HStack spacing={3}>
            <Avatar 
              size="sm" 
              name="John Doe" 
              bg="purple.500" 
              color="white"
              fontSize="xs"
            />
            <VStack spacing={0} align="start" display={{ base: 'none', md: 'flex' }}>
              <Text fontSize="sm" fontWeight="bold">
                John Doe
              </Text>
              <Badge colorScheme="green" fontSize="xs" px={2} borderRadius="full">
                ● Online
              </Badge>
            </VStack>
          </HStack>
        </HStack>
      </Flex>

      <Box mt={3} display={{ base: 'block', md: 'none' }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input 
            placeholder="Search..." 
            bg="gray.50" 
            borderRadius="full"
            fontSize="sm"
          />
        </InputGroup>
      </Box>
    </Box>
  );
};
