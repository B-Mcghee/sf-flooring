import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Image,
  Center,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider

interface Props {
  photos: string[];
}
const Carousel = ({ photos }: Props) => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,

    speed: 200,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  return (
    <Box
      position={"relative"}
      //height={"600px"}
      width={"full"}
      //   overflow={"hidden"}
    >
      {/* CSS files for react-slick */}

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="blackAlpha"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="blackAlpha"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photos.map((url, index) => (
          <Box key={index} position={"relative"}>
            <Container maxW={"container.xl"}>
              <Center>
                <Box
                  as="div"
                  maxH={{ base: "md", sm: "xl", md: "2xl" }}
                  maxW={{ base: "md", sm: "xl", md: "3xl" }}
                  p={5}
                >
                  <Image src={url} borderRadius={"lg"} maxH={"xl"} />
                </Box>
              </Center>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default Carousel;
