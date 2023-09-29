import { Box } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
