import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import Carousel from "./Carousel";
import { Project } from "./entities/Project";
import PhotoLoader from "../services/photo-loader";
interface Props {
  children: ReactNode;
  project?: Project;
}
const photoLoader = new PhotoLoader();
const ProjectPopup = ({ children, project }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let photos: string[] = [];
  if (project) photos = photoLoader.get(project.slug);

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "sm", md: "md", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Carousel photos={photos} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectPopup;
