import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal
      closeOnOverlayClick={false}
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Form</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl isRequired mb="2">
            <FormLabel htmlFor="fullname">Fullname:</FormLabel>
            <Input id="fullname" type="text" placeholder="fullname" />
            <FormErrorMessage>fullname is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired mb="2">
            <FormLabel htmlFor="email">Email Address:</FormLabel>
            <Input id="email" type="email" placeholder="email" />
            <FormErrorMessage>email is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired mb="2">
            <FormLabel htmlFor="Message">Message:</FormLabel>
            <Textarea id="message" placeholder="Enter your message" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={onClose} variant="solid">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
