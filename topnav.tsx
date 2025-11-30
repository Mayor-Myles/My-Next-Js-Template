import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Icon,
  Heading
} from '@chakra-ui/react';
import { FiLock, FiBell, FiWifi, FiActivity, FiPlus } from 'react-icons/fi';

const TopNav = () => {
  return (
    <Box 
      p={4} 
      bg="white" 
      borderRadius="lg" 
      boxShadow="sm" 
      maxW="md" 
      mx="auto"
      fontFamily="body"
    >
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" mb={8}>
        <IconButton
          icon={<FiLock />}
          variant="ghost"
          aria-label="Lock"
          fontSize="20px"
          color="gray.700"
        />
        <Button variant="ghost" fontWeight="medium" color="gray.700">
          Reward
        </Button>
        <IconButton
          icon={<FiBell />}
          variant="ghost"
          aria-label="Notifications"
          fontSize="20px"
          color="gray.700"
        />
      </Flex>

      {/* Balance Section */}
      <VStack spacing={2} mb={10} align="center">
        <Text fontSize="md" color="gray.600">
          Available Balance
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="gray.800">
          N 11,3466.60
        </Text>
      </VStack>

      {/* Function Buttons */}
      <VStack spacing={4}>
        <Button
          leftIcon={<Icon as={FiWifi} boxSize={5} />}
          variant="outline"
          width="full"
          justifyContent="flex-start"
          py={6}
          borderRadius="md"
          borderColor="gray.300"
          color="gray.700"
        >
          Buy Data
        </Button>
        <Button
          leftIcon={<Icon as={FiActivity} boxSize={5} />}
          variant="outline"
          width="full"
          justifyContent="flex-start"
          py={6}
          borderRadius="md"
          borderColor="gray.300"
          color="gray.700"
        >
          Buy Airtime
        </Button>
        <Button
          leftIcon={<Icon as={FiPlus} boxSize={5} />}
          bg="blue.800"
          color="white"
          width="full"
          justifyContent="flex-start"
          py={6}
          borderRadius="md"
          _hover={{ bg: "blue.700" }}
        >
          Add Money
        </Button>
      </VStack>
    </Box>
  );
};

export default TopNav;
