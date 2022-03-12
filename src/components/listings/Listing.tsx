import searchAtom from "@atoms/search.atom";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Listings from "./Listings";
import data from "@data/estate-listings.json";
import ErrorInfo from "@components/fallback/ErrorInfo";
import { useEffect, useMemo, useState } from "react";
import { ListingsType, ListingType } from "@interfaces/listings.type";
import ReactPaginate from "react-paginate";
import ListingDrawer from "./ListingDrawer";

const ITEMSPERPAGE = 20;

export default function Listing() {
  const search = useRecoilValue(searchAtom);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<ListingsType>(
    [] as ListingsType
  );
  const [user, setData] = useState<ListingType>({} as ListingType);
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const result = useMemo(() => {
    return data.listings.filter((list) => {
      if (search == "") {
        return list;
      } else if (
        list.name.toLowerCase().includes(search.toLowerCase()) ||
        list.address.toLowerCase().includes(search.toLowerCase()) ||
        list.contact_person.toLowerCase().includes(search.toLowerCase())
      ) {
        return list;
      }
    });
  }, [search]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMSPERPAGE) % data.listings.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + ITEMSPERPAGE;
    setCurrentItems(result.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(result.length / ITEMSPERPAGE));
  }, [itemOffset, result]);

  return (
    <Box as="section" mt="6">
      <Text fontSize="xl" fontWeight="bold">
        Listings
      </Text>
      <Box mt="8">
        <ListingDrawer
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          user={user}
        />
        {currentItems.length ? (
          currentItems.map((list) => (
            <Listings
              key={list.id}
              id={list.id}
              image={list.image}
              name={list.name}
              description={list.description}
              contact_person={list.contact_person}
              contact_phone={list.contact_phone}
              address={list.address}
              likes={list.likes}
              price={list.price}
              onDrawerOpen={onDrawerOpen}
              setData={setData}
            />
          ))
        ) : (
          <ErrorInfo
            status="info"
            title="Search Result"
            description="No related searches found"
          />
        )}
      </Box>
      <Box as="section" mt="5">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={(e) => handlePageClick(e)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={undefined}
        />
      </Box>
    </Box>
  );
}
