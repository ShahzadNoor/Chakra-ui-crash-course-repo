import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged Out",
      description: "Successfully logged out!",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>

      <Spacer />

      <HStack spacing="20px">
        <Avatar name="mario khan" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>

        <Text>mario@test.com</Text>

        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50" bg="red" textAlign="center">
    //     1
    //   </Box>
    //   <Box w="150px" h="50" bg="yellow">
    //     2
    //   </Box>
    //   <Box w="150px" h="50" flexGrow="1" bg="green">
    //     3
    //   </Box>
    //   <Box w="150px" h="50" flexGrow="2" bg="blue">
    //     4
    //   </Box>
    // </Flex>
  );
}
