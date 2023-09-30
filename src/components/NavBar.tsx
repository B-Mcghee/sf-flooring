import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/SF_Premier_Flooring_Logo_Final.png";
// import ColorModeSwitch from "./ColorModeSwitch";

import NavBarMenu from "./NavBarMenu";

const NavBar = () => {
  return (
    <>
      <HStack
        padding="10px"
        backgroundColor="#E7E8E8"
        justifyContent="space-between"
        zIndex={2}
        width="100vw"
      >
        <Link to="/">
          <Image src={logo} boxSize="70px" objectFit="contain" />
        </Link>
        <HStack margin={1}>
          <NavBarMenu />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
