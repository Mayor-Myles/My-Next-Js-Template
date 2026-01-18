"use client";

import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={12}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          {/* Brand */}
          <GridItem>
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="lg" fontWeight="bold" color="white">
                MyLezic
              </Text>
              <Text fontSize="sm">
                The all-in-one marketplace for professional services and digital
                utilities.
              </Text>
            </VStack>
          </GridItem>

          {/* Services */}
          <GridItem>
            <VStack align="flex-start" spacing={2}>
              <Text fontWeight="semibold" color="white">
                Services
              </Text>
              <Text>Airtime</Text>
              <Text>Data</Text>
              <Text>Web Design</Text>
              <Text>Graphics Design</Text>
              <Text>Bulk SMS</Text>
            </VStack>
          </GridItem>

          {/* Company */}
          <GridItem>
            <VStack align="flex-start" spacing={2}>
              <Text fontWeight="semibold" color="white">
                Company
              </Text>
              <Text>About Us</Text>
              <Text>How It Works</Text>
              <Text>Contact</Text>
              <Text>Privacy Policy</Text>
            </VStack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <VStack align="flex-start" spacing={3}>
              <Text fontWeight="semibold" color="white">
                Contact
              </Text>
              <HStack>
                <Icon as={FiMail} />
                <Text fontSize="sm">support@mylezic.com</Text>
              </HStack>
              <HStack>
                <Icon as={FiPhone} />
                <Text fontSize="sm">+234 000 000 0000</Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Bottom */}
        <Box
          borderTop="1px solid"
          borderColor="gray.700"
          mt={10}
          pt={6}
          textAlign="center"
        >
          <Text fontSize="sm">
            © {new Date().getFullYear()} MyLezic. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

