import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'

export default function DeleteUser() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef();
  const toast = useToast();
  const handleDelete = async () =>{
   try {
     let res = await fetch(`${process.env.REACT_APP_BASE_URL}/userDetails/deleteAll`, {
      method : "delete"
     });
     let {msg} = await res.json();
     toast({
      title: `Delete Users`,
      description: `${msg}`,
      position: "top",
      status: `success`,
      isClosable: true,
    });
    onClose()
   } catch (error) {
    toast({
      title: `Delete Users`,
      description: `Somthing Went Wrong!`,
      position: "top",
      status: `error`,
      isClosable: true,
    });
    onClose()
   }
  }
  return (
    <>
      <Button colorScheme='red' size="lg" onClick={onOpen}>
        Delete Users
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Users
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete all user? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' ml={3} onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
