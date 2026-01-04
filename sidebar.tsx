
'use client';

import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
  Flex,
  Badge,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
import {
  FiHome,
  FiSmartphone,
  FiMessageSquare,
  FiHelpCircle,
  FiUser,
  FiSettings,
  FiSend,
  FiDollarSign,
  FiBriefcase,
  FiArrowRight,
  FiCreditCard,
} from 'react-icons/fi';
import { 
  BsPhone, 
  BsChatDots, 
  BsPeople,
  BsArrowRightShort
} from 'react-icons/bs';
import { MdOutlineSms, MdOutlineSendToMobile } from 'react-icons/md';
import { TbTransfer } from 'react-icons/tb';
import { AiOutlineGift } from 'react-icons/ai';

export const Sidebar = ({ isOpen, onClose, isMobile = false }) => {
  const isDrawer = useBreakpointValue({ base: true, md: false });

  const menuItems = [
    { icon: FiHome, label: 'Home', active: true },
    { icon: FiSmartphone, label: 'Buy Data' },
    { icon: BsPhone, label: 'Buy Airtime' },
    { icon: MdOutlineSms, label: 'Bulk SMS' },
    { icon: FiHelpCircle, label: 'Support' },
    { icon: BsPeople, label: 'Contact Us' },
    { icon: FiUser, label: 'Profile' },
  ];

  const quickActions = [
    { label: 'Data', icon: FiSmartphone, color: 'purple' },
    { label: 'Airtime', icon: BsPhone, color: 'blue' },
    { label: 'Hire Me', icon: FiBriefcase, color: 'green' },
    { label: 'Bulk SMS', icon: BsChatDots, color: 'orange' },
    { label: 'Transfer', icon: TbTransfer, color: 'red' },
    { label: 'Settings', icon: FiSettings, color: 'gray' },
  ];

  const sidebarContent = (
    <Box 
      w={{ base: 'full', md: '280px' }} 
      h="100vh" 
      bg="white" 
      borderRight="1px" 
      borderColor="gray.200"
      overflowY="auto"
      display="flex"
      flexDirection="column"
    >
      {/* Welcome Section */}
      <Box p={4} bg="purple.50" borderBottom="1px" borderColor="purple.100">
        <Text fontSize="sm" color="purple.600" mb={2} fontWeight="medium">
          Welcome.
        </Text>
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          Clement Adekunle
        </Text>
        <VStack align="start" spacing={1}>
          <HStack spacing={2}>
            <Text fontSize="2xl" fontWeight="bold" color="purple.600">
              N350
            </Text>
            <Text fontSize="sm" color="gray.600">
              07014443165
            </Text>
          </HStack>
          <Text fontSize="lg" fontWeight="bold" color="green.600">
            N1,6795.25
          </Text>
          <Button 
            size="sm" 
            colorScheme="purple" 
            variant="outline" 
            mt={2}
            width="40px"
            height="40px"
            borderRadius="full"
            fontSize="lg"
          >
            +
          </Button>
        </VStack>
      </Box>

      {/* Become an Agent Banner */}
      <Box p={4} bg="purple.600" color="white">
        <Text fontWeight="bold" fontSize="sm" mb={1}>
          Become an Agent
        </Text>
        <Text fontSize="xs" opacity={0.9}>
          Get 50% off every transaction
        </Text>
        <HStack mt={1} spacing={1} fontSize="xs">
          <Text>Earn</Text>
          <Text fontWeight="bold">|</Text>
          <Text>Up to 'airtime'</Text>
        </HStack>
      </Box>

      {/* Quick Actions Grid */}
      <Box p={4}>
        <Flex wrap="wrap" gap={2}>
          {quickActions.map((action) => (
            <Button
              key={action.label}
              size="sm"
              variant="outline"
              flex="1"
              minW="80px"
              fontSize="xs"
              py={2}
              height="auto"
              flexDirection="column"
              colorScheme={action.color}
              color={`${action.color}.600`}
              borderColor={`${action.color}.200`}
              _hover={{ bg: `${action.color}.50` }}
            >
              <Box as={action.icon} mb={1} fontSize="lg" />
              <Text>{action.label}</Text>
            </Button>
          ))}
        </Flex>
      </Box>

      {/* Menu Items */}
      <Box px={2} py={4}>
        <VStack spacing={1} align="stretch">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              justifyContent="start"
              leftIcon={<Box as={item.icon} />}
              isActive={item.active}
              colorScheme={item.active ? 'purple' : 'gray'}
              borderRadius="md"
              py={3}
              fontSize="sm"
              fontWeight={item.active ? 'bold' : 'normal'}
              color={item.active ? 'purple.600' : 'gray.700'}
              bg={item.active ? 'purple.50' : 'transparent'}
              _hover={{ bg: item.active ? 'purple.50' : 'gray.50' }}
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>

      {/* Activities Section */}
      <Box p={4} mt="auto">
        <Divider mb={4} />
        <HStack justify="space-between" mb={3}>
          <Text fontSize="sm" fontWeight="bold" color="gray.700">
            Activities
          </Text>
          <Button 
            size="xs" 
            variant="link" 
            color="purple.600" 
            rightIcon={<BsArrowRightShort />}
            fontSize="xs"
          >
            See All
          </Button>
        </HStack>
        <Box 
          p={3} 
          bg="yellow.50" 
          borderRadius="md"
          border="1px"
          borderColor="yellow.200"
        >
          <HStack>
            <Box as={AiOutlineGift} color="yellow.500" />
            <Text fontSize="xs" fontWeight="bold" color="gray.700">
              Reward
            </Text>
          </HStack>
        </Box>
      </Box>

      {/* Profile Info at Bottom */}
      <Box 
        p={4} 
        borderTop="1px" 
        borderColor="gray.200"
        bg="white"
      >
        <HStack spacing={3}>
          <Avatar 
            size="sm" 
            name="John Doe" 
            bg="purple.500" 
            color="white"
            fontSize="xs"
          />
          <Box flex="1">
            <Text fontSize="sm" fontWeight="bold">
              John Doe
            </Text>
            <Badge 
              colorScheme="green" 
              fontSize="2xs" 
              px={2} 
              borderRadius="full"
              size="sm"
            >
              ● Online
            </Badge>
          </Box>
          <Text fontSize="sm" color="gray.600">
            07014443165
          </Text>
          <Button
            aria-label="More"
            variant="ghost"
            size="sm"
            color="purple.600"
            p={1}
          >
            <Box as={FiArrowRight} />
          </Button>
        </HStack>
      </Box>
    </Box>
  );

  if (isMobile && isDrawer) {
    return (
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent maxW="280px">
          <DrawerCloseButton />
          <DrawerBody p={0}>
            {sidebarContent}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return sidebarContent;
};
