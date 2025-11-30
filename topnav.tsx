import { Box, Flex, Avatar, Text, IconButton, Badge } from "@chakra-ui/react";
import { HiOutlineChatBubbleOvalLeft, HiOutlineBell } from "react-icons/hi2";

export default function TopNav() {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      px={4}
      py={3}
      bg="white"
    >
      {/* Left Section */}
      <Flex align="center" gap={3}>
        <Avatar
          size="md"
          name="Olaoluwa Abijo"
          src="/your-avatar.png"   // replace with actual image if needed
        />

        <Box lineHeight="1.2">
          <Text fontSize="sm" color="gray.500">
            Welcome.
          </Text>
          <Text fontWeight="semibold">Olaoluwa Abijo</Text>
        </Box>
      </Flex>

      {/* Icons Section */}
      <Flex align="center" gap={3}>
        {/* Chat Icon */}
        <Box position="relative">
          <IconButton
            aria-label="messages"
            icon={<HiOutlineChatBubbleOvalLeft size={22} />}
            variant="ghost"
            size="lg"
          />
          <Badge
            position="absolute"
            top="2px"
            right="2px"
            bg="red.500"
            borderRadius="full"
            boxSize="10px"
            p="0"
          />
        </Box>

        {/* Bell Icon */}
        <Box position="relative">
          <IconButton
            aria-label="notifications"
            icon={<HiOutlineBell size={22} />}
            variant="ghost"
            size="lg"
          />
          <Badge
            position="absolute"
            top="2px"
            right="2px"
            bg="red.500"
            borderRadius="full"
            boxSize="10px"
            p="0"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
