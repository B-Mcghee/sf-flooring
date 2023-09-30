import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import FormComponent from "./pages/FormComponent";

function EstimateButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="red"
        fontSize="24"
        minW={{ base: 150, md: 400 }}
        px={{ base: 8 }}
        py={{ base: 6 }}
        onClick={onOpen}
      >
        Get an Estimate
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "sm", md: "md", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Your Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormComponent></FormComponent>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EstimateButton;
