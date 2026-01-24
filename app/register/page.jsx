"use client";

import {
  Box,
  Stack,
  Text,
  Input,
  Button,
  Flex,
  IconButton,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import TopNavbar from "@/topnavbar";

export default function Register() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <TopNavbar />

      <Box
        minH={{ md: "100vh" }}
        bg={bg}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        mt={{ base: "3em", md: 0 }}
      >
        <Box
          w="100%"
          maxW="420px"
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="sm"
          p={{ base: 6, sm: 8 }}
        >
          {/* Title */}
          <Stack spacing={1} mb={6} textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              Create your Account
            </Text>
            <Text fontSize="sm" color={muted}>
              Fill in your details to get started
            </Text>
          </Stack>

          {/* Form */}
          <Stack spacing={4}>
            {/* First & Last Name */}
            <Flex gap={3}>
              <Input
                placeholder="First name"
                size="lg"
                borderRadius="xl"
                _focus={{ borderColor: "purple.400" }}
              />
              <Input
                placeholder="Last name"
                size="lg"
                borderRadius="xl"
                _focus={{ borderColor: "purple.400" }}
              />
            </Flex>

            {/* Gender */}
            <Select
              placeholder="Gender"
              size="lg"
              borderRadius="xl"
              _focus={{ borderColor: "purple.400" }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>

            {/* Email */}
            <Input
              placeholder="Email"
              type="email"
              size="lg"
              borderRadius="xl"
              _focus={{ borderColor: "purple.400" }}
            />

            {/* Phone */}
            <Input
              placeholder="Phone number"
              type="tel"
              size="lg"
              borderRadius="xl"
              _focus={{ borderColor: "purple.400" }}
            />

            {/* Submit */}
            <Button
              size="lg"
              colorScheme="purple"
              borderRadius="xl"
            >
              Create Account
            </Button>
          </Stack>

          {/* Divider */}
          <Flex align="center" my={6}>
            <Text px={3} fontSize="sm" color={muted}>
              Or sign up with
            </Text>
          </Flex>

          {/* Social Login */}
          <Flex gap={4} justify="center">
            <IconButton
              aria-label="Sign up with Google"
              icon={<FaGoogle color="orange" />}
              variant="outline"
              borderRadius="xl"
              size="lg"
            />
            <IconButton
              aria-label="Sign up with Facebook"
              icon={<FaFacebookF color="dodgerblue" />}
              variant="outline"
              borderRadius="xl"
              size="lg"
            />
            <IconButton
              aria-label="Sign up with Twitter"
              icon={<FaTwitter />}
              variant="outline"
              borderRadius="xl"
              size="lg"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

