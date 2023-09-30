import { Flex, HStack, Image, Show, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/SF_Premier_Flooring_Logo_Final.png";
// import ColorModeSwitch from "./ColorModeSwitch";

import NavBarMenu from "./NavBarMenu";
import EstimateButton from "./EstimateButton";

const NavBar = () => {
  return (
    <>
      <Flex as="nav" p={"10px"} alignItems={"center"} backgroundColor="#E7E8E8">
        {" "}
        <Link to="/">
          <Image src={logo} boxSize="70px" objectFit="contain" />
        </Link>
        <Spacer />
        <Show breakpoint="(max-width: 767px)">
          {" "}
          <HStack margin={1}>
            <NavBarMenu />
          </HStack>
        </Show>
        <Show breakpoint="(min-width: 768px)">
          <HStack
            spacing={{ base: "25px", lg: "30px" }}
            fontWeight={600}
            fontSize={"1.25em"}
            minW={300}
          >
            <NavLink to={{ pathname: "/" }}>Home</NavLink>
            <NavLink to={{ pathname: "/about" }}>About Us</NavLink>
            <NavLink to={{ pathname: "/projects" }}>Projects</NavLink>
            <NavLink to={{ pathname: "/faq" }}>F.A.Q</NavLink>
            <EstimateButton />
          </HStack>
        </Show>
      </Flex>
      {/* <HStack
        mt={25}
        padding="10px"
        backgroundColor="#E7E8E8"
        justifyContent="space-between"
        zIndex={2}
        width="100vw"
      >
        <Show breakpoint="(max-width: 767px)">
          {" "}
          <HStack margin={1}>
            <NavBarMenu />
          </HStack>
        </Show>
        <Show breakpoint="(min-width: 768px)">
          {" "}
          <Flex>
            <NavLink to={{ pathname: "/" }}>Home</NavLink>
          </Flex>
        </Show>
      </HStack> */}
    </>
  );
};

export default NavBar;
