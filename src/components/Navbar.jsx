import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} mb={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">Public Post Board</Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;