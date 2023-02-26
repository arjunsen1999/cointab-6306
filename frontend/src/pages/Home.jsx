import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteUser from "../components/DeleteUser";
import { useToast } from "@chakra-ui/react";

export default function Home() {
  let [Loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchUserData = async () => {
    const bulk = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    try {
      let res = await fetch(`https://randomuser.me/api/?results=${bulk}`);
      let data = await res.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlert = (title, msg, status) => {
    toast({
      title: `${title}`,
      description: `${msg}`,
      position: "top",
      status: `${status}`,
      isClosable: true,
    });
  };

  const handleFetchUser = async () => {
    try {
      if (Loading) {
        handleAlert(
          "Fetch Users",
          "We are trying to fetch data please wait",
          "error"
        );
      } else {
        setLoading(true);
        let result = await fetchUserData();
        let res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/userDetails/add`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(result),
          }
        );
        let { msg } = await res.json();
        handleAlert("Fetch Users", msg, "success");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      handleAlert(
        "Fetch Users",
        "Somthing Went Wrong!",
        "error"
      );
    }
  };
  return (
    <>
      <Box
        w="100%"
        // border={"1px solid red"}
        p="50px 30px"
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Button
          colorScheme="teal"
          size="lg"
          mb="20px"
          onClick={handleFetchUser}
        >
          Fetch Users
        </Button>

        <Link to="/userDetails">
          <Button colorScheme="teal" size="lg" mb="20px">
            User Details
          </Button>
        </Link>

        <DeleteUser />
      </Box>
    </>
  );
}
