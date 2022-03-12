import { Button, Center, Text } from "@chakra-ui/react";

export type ErrorBoundaryProps = {
  error: Error;
  resetErrorBoundary: any;
};

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorBoundaryProps) {
  return (
    <Center flexDirection="column" w="100%" h="100vh" role="alert">
      <Text>Something went wrong:</Text>
      <Text color="red.400" my="2">{error.message}</Text>
      <Button
        bgColor="red.500"
        color="white"
        borderRadius={"md"}
        px="4"
        py="2"
        _hover={{ opacity: "0.5" }}
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </Center>
  );
}
