import { HStack, Icon, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/SF Premier Flooring Logo_Final.png";
// import ColorModeSwitch from "./ColorModeSwitch";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <>
      <HStack
        padding="10px"
        backgroundColor="#E7E8E8"
        justifyContent="space-between"
      >
        <Link to="/">
          <Image src={logo} boxSize="70px" objectFit="contain" />
        </Link>
        <HStack margin={1}>
          <Icon as={RxHamburgerMenu} boxSize={6} />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
