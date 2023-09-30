import { Button, Box } from "@chakra-ui/react";

function EstimateButton() {
  return (
    <Box display="inline" textAlign="center" m={5}>
      <Button
        colorScheme="red"
        fontSize="24"
        minW={{ base: 150, md: 400 }}
        px={{ base: 8 }}
        py={{ base: 6 }}
      >
        Get an Estimate
      </Button>
    </Box>
  );
}

export default EstimateButton;
