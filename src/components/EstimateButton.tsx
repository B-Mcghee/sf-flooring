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

interface Props {
  size: string;
  font: string;
  width?: string;
}
const EstimateButton = ({ size, font, width }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sizeValues: { [key: string]: string } = {
    xs: "100px",
    sm: "150px",
    md: "200px",
    lg: "300px",
    xl: "400px",
  };
  const fontValues: { [key: string]: string } = {
    xs: "10px",
    sm: "12x",
    md: "16px",
    lg: "24px",
    xl: "28px",
  };
  const value = sizeValues[size];
  const fontValue = fontValues[font];
  return (
    <>
      <Button
        colorScheme="red"
        fontSize={{ base: fontValue, md: fontValues["lg"] }}
        width={{ base: value, md: sizeValues["md"], lg: width }}
        px={{ base: 5 }}
        py={{ base: 4 }}
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
};

export default EstimateButton;
