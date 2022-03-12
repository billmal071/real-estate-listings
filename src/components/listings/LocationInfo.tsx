import { Box, Text } from "@chakra-ui/react";

export type LocationInfoProps = {
  name: string;
  address: string;
};

function LocationInfo({ name, address }: LocationInfoProps) {
  return (
    <Box
      as="section"
      pos="absolute"
      top="12"
      right="0"
      w="150px"
      minH="50px"
      p="3"
      bgColor="gray.400"
    >
      <Text color="black" fontWeight="bold" fontSize="lg">Location Info</Text>
      <Text color="black">{name}</Text>
      <Text color="black">{address}</Text>
    </Box>
  );
}

export default LocationInfo;
