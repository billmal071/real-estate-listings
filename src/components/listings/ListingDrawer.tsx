import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image,
  Flex,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ContactModalProps } from "@components/contact/ContactModal";
import useLocation from "@hooks/useLocation";
import { ListingType } from "@interfaces/listings.type";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";
import LocationMarker from "./LocationMarker";

export type ListingDrawerProps = ContactModalProps & {
  user: ListingType;
};

export default function ListingDrawer({
  isOpen,
  onClose,
  user,
}: ListingDrawerProps) {
  const defaultProps = {
    center: {
      lat: 32.95,
      lng: -96.33,
    },
    zoom: 1,
  };
  const { data, error } = useLocation(user.address);
  const [locations, setLocations] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [locationInfo, setLocationInfo] = useState<{
    name: string;
    address: string;
  }>({ name: "", address: "" });

  useEffect(() => {
    if (data !== undefined && data.data.status === "OK") {
      setLocations({
        lat: data.data.results[0].geometry.location.lat,
        lng: data.data.results[0].geometry.location.lng,
      });
    }
  }, [data, error]);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{user.name}</DrawerHeader>

        <DrawerBody>
          <Image
            loading="lazy"
            objectFit="cover"
            height="200px"
            width="100%"
            borderRadius="md"
            src={user.image}
            fallbackSrc="https://via.placeholder.com/150"
            alt="home"
          />
          <Flex my="4" flexDir="column">
            <Text color="gray.700">
              <i
                className="fas fa-map-marker"
                style={{ marginRight: "0.4rem" }}
              />
              {user.address}
            </Text>
            <Text color="gray.600" textTransform="capitalize">
              {user.description}
            </Text>
          </Flex>
          <Flex h="50vh" w="100%" pos="relative" flexDir="column">
            {data?.data.status === "ZERO_RESULTS" && (
              <Text color="red.500">No results found</Text>
            )}
            {!data && !error && (
              <Flex>
                <Spinner /> loading map details
              </Flex>
            )}
            <GoogleMapReact
              bootstrapURLKeys={{
                key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <LocationMarker
                lat={
                  locations.lat === 0 ? defaultProps.center.lat : locations.lat
                }
                lng={
                  locations.lng === 0 ? defaultProps.center.lng : locations.lng
                }
                onClick={() => {
                  setLocationInfo({
                    address: user.address,
                    name: user.name,
                  });
                }}
              />
            </GoogleMapReact>
            {locationInfo.name && locationInfo.address && (
              <LocationInfo
                name={locationInfo.name}
                address={locationInfo.address}
              />
            )}
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
