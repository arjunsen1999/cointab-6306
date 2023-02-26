import { Box, Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

export default function LoadingPage() {
  return (
    <>
     <Box w="100%">
     <Stack>
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
  <Skeleton height='40px' />
</Stack>
     </Box>
    </>
  )
}
