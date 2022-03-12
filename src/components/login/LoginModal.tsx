import authAtom from "@atoms/auth.atom";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useRecoilValue(authAtom);
  const setAuth = useSetRecoilState(authAtom);
  const [user, setUser] = useState({ username: "", password: "" });
  const [err, setError] = useState("");

  function handleSubmit() {
    const { username, password } = user;
    if (username === "user" && password === "password") {
      setError("");
      setAuth({ isLoggedIn: true, user: { name: username, password } });
      onClose();
    } else {
      setError("Invalid Credentials");
    }
  }

  useEffect(() => {
    auth.isLoggedIn ? onClose() : onOpen();
  }, [auth]);

  return (
    <Box as="section">
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Login</ModalHeader>

          <ModalBody>
            {!!err && (
              <Text
                color="red.400"
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
              >
                {err}
              </Text>
            )}
            <FormControl isRequired isInvalid={user.username === ""}>
              <FormLabel htmlFor="username">Username:</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="username"
                value={user.username}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, username: e.target.value }))
                }
              />
              <FormErrorMessage>username is required.</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={user.password === ""}>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="username"
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <FormErrorMessage>password is required.</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor="green.600"
              color="white"
              px="4"
              py="2"
              rounded="md"
              _hover={{ opacity: "0.5" }}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
