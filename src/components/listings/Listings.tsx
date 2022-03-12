import {
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ContactModal from "@components/contact/ContactModal";
import { ListingType } from "@interfaces/listings.type";
import { Fragment, useState } from "react";
import ListingDrawer from "./ListingDrawer";

export type ListingsProps = {
  id: string;
  image: string;
  name: string;
  address: string;
  description: string;
  contact_person: string;
  contact_phone: string;
  likes: number;
  price: string;
  onDrawerOpen: () => void;
  setData: React.Dispatch<React.SetStateAction<ListingType>>;
};

export default function Listings({
  id,
  image,
  name,
  address,
  description,
  contact_person,
  contact_phone,
  likes,
  price,
  onDrawerOpen,
  setData,
}: ListingsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [like, setLike] = useState(false);
  const user = {
    id,
    image,
    name,
    address,
    description,
    contact_person,
    contact_phone,
    likes,
    price,
  };

  return (
    <Fragment>
      <ContactModal isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="white"
        flexDirection={{ base: "column", md: "row" }}
        p="4"
        mb="3"
        rounded="md"
        _focus={{ border: "1px solid blue" }}
        _hover={{ border: "1px solid blue" }}
      >
        <Image
          loading="lazy"
          objectFit="cover"
          height="150px"
          width={{ base: "100%", md: "150px" }}
          borderRadius="md"
          src={image}
          fallbackSrc="https://via.placeholder.com/150"
          alt="home"
          onClick={() => {
            onDrawerOpen();
            setData(user);
          }}
        />

        <Flex
          mx={{ base: 0, md: "5" }}
          direction="column"
          flex="3"
          onClick={() => {
            onDrawerOpen();
            setData(user);
          }}
        >
          <Text fontWeight="bold" fontSize="xl">
            {name}
          </Text>
          <Text color="gray.400">
            <i
              className="fas fa-map-marker"
              style={{ marginRight: "0.4rem" }}
            />
            {address}
          </Text>
          <Text color="gray.600" textTransform="capitalize">
            {description}
          </Text>
          <Spacer />
          <Text textTransform="capitalize" color="facebook.900">
            contact person: {contact_person}
          </Text>
          <Text textTransform="capitalize" color="facebook.900">
            contact number: {contact_phone}
          </Text>
        </Flex>

        <Flex
          direction="column"
          justifyContent="flex-start"
          mr="2"
          alignItems="baseline"
        >
          <Flex>
            <i
              onClick={() => setLike(!like)}
              className="fas fa-heart"
              style={{
                color: like ? "red" : "black",
                fontSize: "1.5rem",
                alignSelf: "center",
              }}
            />
            <Text fontSize="1.25rem" ml="2">
              {like ? likes + 1 : likes} likes
            </Text>
          </Flex>

          <Text fontSize="lg" fontWeight="bold" color="gray.700">
            Rent: {price}/hr
          </Text>
          <Button
            mt="4"
            bgColor="green.600"
            color="white"
            px="4"
            py="2"
            rounded="md"
            _hover={{ opacity: "0.5" }}
            onClick={onOpen}
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
}
