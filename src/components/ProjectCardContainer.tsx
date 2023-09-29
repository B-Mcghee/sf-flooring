import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ProjectCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={5}
      overflow="hidden"
      width="100%"
      _hover={{
        base: {
          transform: 0,
        },
        md: {
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ProjectCardContainer;
