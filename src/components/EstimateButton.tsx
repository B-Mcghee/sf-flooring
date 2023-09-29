import { Button, Box } from "@chakra-ui/react";

function EstimateButton() {
  return (
    <Box display="inline" textAlign="center" m={5}>
      <Button
        colorScheme="red"
        fontSize="24"
        minW={{ base: 200, md: 400 }}
        px={8}
        py={7}
      >
        Get an Estimate
      </Button>
    </Box>
  );
}

export default EstimateButton;
