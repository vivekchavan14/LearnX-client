import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box padding={4} bg="blackAlpha.900" minHeight="10vh" display="flex" justifyContent="center" alignItems="center">
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading children="All Rights Reserved" color="white" fontSize="sm" textAlign="center" />
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer
