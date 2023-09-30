import { Box, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import ColorModeSwitch from "./ColorModeSwitch";

const Footer = () => {
  return (
    <>
      <HStack
        padding="10px"
        backgroundColor="#E7E8E8"
        justifyContent="space-between"
        align="baseline"
      >
        <Link to="/">
          <Heading size={{ base: "sm" }} fontFamily={"Saira Condensed"}>
            Ready to Get{" "}
            <Box as="span" color={"red"}>
              Started?
            </Box>
          </Heading>
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
