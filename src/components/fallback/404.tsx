import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  return (
    <Center>
      <Text fontSize="2xl">Page Not Found</Text>
      <Text fontSize="lg" color={"red.400"}>
        Error 404
      </Text>
      <Button
        bgColor="red.500"
        color="white"
        borderRadius={"md"}
        px="4"
        py="2"
        _hover={{ opacity: "0.5" }}
        onClick={() => window.history.pushState({}, "/")}
      >
        Go Home
      </Button>
    </Center>
  );
}
