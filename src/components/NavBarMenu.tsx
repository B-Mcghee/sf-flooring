import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import EstimateButton from "./EstimateButton";

const NavBarMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "F.A.Q.", path: "/faq" },
  ];
  return (
    <>
      <Icon as={RxHamburgerMenu} boxSize={10} color="black" onClick={onOpen} />
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" onClick={onClose}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              alignItems={"center"}
              gap={5}
              fontSize={24}
            >
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} onClick={() => onClose()}>
                  {item.title}
                </Link>
              ))}
              <EstimateButton size="md" font="sm" />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavBarMenu;
