
"use client";

import {
  Box,
  Text,
  Flex,
  Grid,
  VStack,
  HStack,
  Button,
  Input,
  Badge,
  Switch,
} from "@chakra-ui/react";

const networks = [
  { name: "MTN", color: "#FACC15" },
  { name: "Airtel", color: "#9CA3AF" },
  { name: "Glo", color: "#9CA3AF" },
  { name: "9mobile", color: "#9CA3AF" },
];

const plans = [
  { size: "1.5GB", duration: "30 Days", price: "₦1,200" },
  { size: "2GB", duration: "Weekly", price: "₦600" },
  { size: "10GB", duration: "30 Days", price: "₦3,000" },
];

export default function DataAirtimePage() {
  return (
    <Box bg="gray.50" minH="100vh" py={6}>
      <Box maxW="480px" mx="auto" px={4}>
        {/* Select Network */}
        <Text fontWeight="bold" mb={3}>
          Select Network
        </Text>

        <HStack spacing={4} mb={6}>
          {networks.map((net, i) => (
            <VStack key={i} spacing={1}>
              <Flex
                w="72px"
                h="72px"
                bg={net.color}
                borderRadius="xl"
                align="center"
                justify="center"
                border={net.name === "MTN" ? "3px solid #3B82F6" : "none"}
              >
                <Text fontWeight="bold">{net.name}</Text>
              </Flex>
              {net.name === "MTN" && (
                <Text fontSize="sm" color="blue.500">
                  Selected
                </Text>
              )}
            </VStack>
          ))}
        </HStack>

        {/* Recipient Number */}
        <Box bg="white" p={4} borderRadius="2xl" mb={6} boxShadow="sm">
          <Text fontSize="sm" color="gray.500" mb={2}>
            RECIPIENT NUMBER
          </Text>
          <Input
            size="lg"
            fontWeight="bold"
            defaultValue="0803 456 7890"
          />
        </Box>

        {/* Frequently Bought */}
        <Flex justify="space-between" mb={3}>
          <Text fontWeight="bold">Frequently Bought</Text>
          <Text color="blue.500" fontWeight="medium" cursor="pointer">
            See All
          </Text>
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
          {plans.map((plan, i) => (
            <Box
              key={i}
              bg="white"
              p={4}
              borderRadius="2xl"
              boxShadow="sm"
              border={plan.size === "1.5GB" ? "2px solid #93C5FD" : "none"}
            >
              <Text fontWeight="bold">{plan.size}</Text>
              <Text fontSize="sm" color="gray.500">
                {plan.duration}
              </Text>
              <Text
                mt={2}
                fontWeight="bold"
                color="blue.600"
                fontSize="lg"
              >
                {plan.price}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Tabs */}
        <HStack bg="gray.200" p={1} borderRadius="xl" mb={6}>
          <Button flex="1" bg="white" borderRadius="lg">
            Data Plans
          </Button>
          <Button flex="1" variant="ghost">
            Airtime Top-up
          </Button>
        </HStack>

        {/* Transaction Summary */}
        <Box
          bg="blue.50"
          p={5}
          borderRadius="2xl"
          border="1px solid #BFDBFE"
          mb={6}
        >
          <Text
            fontWeight="bold"
            letterSpacing="widest"
            color="blue.600"
            mb={4}
          >
            TRANSACTION SUMMARY
          </Text>

          <VStack spacing={3} align="stretch">
            <Flex justify="space-between">
              <Text color="gray.600">Service</Text>
              <Text fontWeight="medium">MTN Data (Monthly 10GB)</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Phone Number</Text>
              <Text fontWeight="medium">0803 456 7890</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Plan Cost</Text>
              <Text fontWeight="medium">₦3,000.00</Text>
            </Flex>

            <Flex justify="space-between">
              <Text color="gray.600">Service Fee</Text>
              <Text fontWeight="medium">₦0.00</Text>
            </Flex>

            <Box h="1px" bg="blue.200" my={2} />

            <Flex justify="space-between" align="center">
              <Text fontWeight="bold">Total Amount</Text>
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                ₦3,000.00
              </Text>
            </Flex>

            {/* Wallet */}
            <Flex
              bg="white"
              p={4}
              borderRadius="xl"
              justify="space-between"
              align="center"
              mt={4}
            >
              <Box>
                <Text fontSize="sm" color="gray.500">
                  WALLET BALANCE
                </Text>
                <Text fontWeight="bold">₦24,500.00</Text>
              </Box>
              <Switch size="lg" colorScheme="blue" defaultChecked />
            </Flex>
          </VStack>
        </Box>

        {/* Proceed */}
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="sm" color="gray.500">
              TOTAL TO PAY
            </Text>
            <Text fontWeight="bold" fontSize="xl">
              ₦3,000.00
            </Text>
          </Box>

          <Button
            size="lg"
            bg="#2563EB"
            color="white"
            px={8}
            borderRadius="xl"
            _hover={{ bg: "#1D4ED8" }}
          >
            Proceed →
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
