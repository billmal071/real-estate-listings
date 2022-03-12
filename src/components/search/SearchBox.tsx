import searchAtom from "@atoms/search.atom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBox() {
  const setSearch = useSetRecoilState(searchAtom);
  const [val, setVal] = useState("");
  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 1000);

  return (
    <Fragment>
      <InputGroup as="header">
        <InputLeftElement
          pointerEvents="none"
          d="flex"
          placeItems="center"
          h="100%"
          children={<i className="fas fa-search" />}
        />
        <Input
          size="lg"
          type="search"
          placeholder="Search for listings"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            debounced(e.target.value);
          }}
          bgColor="white"
        />
      </InputGroup>
    </Fragment>
  );
}
