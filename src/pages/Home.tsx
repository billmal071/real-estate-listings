import authAtom from "@atoms/auth.atom";
import { useRecoilValue } from "recoil";
import LoginModal from "@components/login/LoginModal";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import SearchBox from "@components/search/SearchBox";
import Listing from "@components/listings/Listing";

export default function Home() {
  const auth = useRecoilValue(authAtom);
  const homeElements = (
    <Fragment>
      {<LoginModal />}
      <SearchBox />
      <Listing />
    </Fragment>
  );

  return (
    <Box
      as="main"
      py="6"
      px={{ base: "4", md: "8" }}
      backgroundColor="gray.100"
    >
      {homeElements}
    </Box>
  );
}
