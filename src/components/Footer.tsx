import { HStack, Heading } from "@chakra-ui/react";
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
        mt={20}
      >
        <Link to="/">
          <Heading>Ready to Get Started?</Heading>
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
