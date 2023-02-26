import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import LoadingPage from "../components/LoadingPage";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function UserDetails() {
  let [page, setPage] = useState(1);
  let [userData, setUserData] = useState([]);
  let [total, setTotal] = useState(0);
  let [loading, setLoading] = useState(false);
  let [loader, setLoader] = useState(false);
  let [gender, setGender] = useState("");
  let [order, serOrder] = useState("");
  let [search, setSearch] = useState("");

  const getUserDetails = async (page, gender, order) => {
    setLoading(true);
    try {
      let res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/userDetails/get?page=${page}&gender=${gender}&order=${order}`
      );
      let data = await res.json();
      setLoading(false);
      setTotal(data.total);
      setUserData(data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


  useEffect(() => {
    getUserDetails(page, gender, order);
  }, [page, loader, gender, order]);

  return (
    <>
      <Box w="100%" p="50px 30px">
        <Box
          w="100%"
          mb="30px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* // Sort By Age */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort By Age
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => serOrder("")}>Default</MenuItem>
              <MenuItem onClick={() => serOrder("asc")}>Low to High</MenuItem>
              <MenuItem onClick={() => serOrder("desc")}>Hight to Low</MenuItem>
            </MenuList>
          </Menu>


          {/* Filter By Gender */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter By Gender
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setGender("")}>Default</MenuItem>
              <MenuItem onClick={() => setGender("male")}>Male</MenuItem>
              <MenuItem onClick={() => setGender("female")}>Female</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {loading ? (
          <LoadingPage />
        ) : (
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>Email</Th>
                  <Th>Gender</Th>
                  <Th>Phone Number</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userData.map((ele) => {
                  return (
                    <Tr key={ele._id}>
                      <Td>{`${ele.name.title} ${ele.name.first} ${ele.name.last}`}</Td>
                      <Td>{ele.dob.age}</Td>
                      <Td>{ele.email}</Td>
                      <Td>{ele.gender}</Td>
                      <Td>{ele.phone}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}

       {total <= 1? null : <Box
          w="100%"
          mt="30px"
          display={"flex"}
          alignContent="center"
          justifyContent={"center"}
        >
          <Button
            colorScheme="teal"
            variant="solid"
            isDisabled={page <= 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            mx="20px"
            borderRadius={"50%"}
          >
            {page}
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            isDisabled={page >= total ? true : false}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>}
      </Box>
    </>
  );
}
