import {
  GridItem,
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Container,
  AspectRatio,
  Card,
} from "@chakra-ui/react";

import landingPagePhoto from "../../assets/kitchen_floor.jpg";
import livingRoomPhoto from "../../assets/living_room_floor.jpg";
import luxuryVinylTile from "../../assets/luxury-vinyl-tile.jpg";
import highEndLaminate from "../../assets/high-end-laminate.jpg";
import luxuryVinylPlank from "../../assets/luxury-vinyl-plank.jpg";

import getCroppedImageUrl from "../../services/image-url";
import ProjectCardContainer from "../ProjectCardContainer";
import EstimateButton from "../EstimateButton";

const HomePage = () => {
  return (
    <>
      <Box position="relative">
        <Box
          height={{ base: "450px" }}
          bgImage={{ base: landingPagePhoto, lg: luxuryVinylPlank }}
          bgPosition="bottom"
          bgSize="cover"
        />
        <Box
          as="div"
          bg="#fff"
          w={{ base: "300px", md: "500px" }}
          h={{ base: "300px" }}
          textAlign="center"
          mt={{ base: -150 }}
          zIndex={2}
        >
          <Container>
            <SimpleGrid columns={1} gap={5}>
              <Heading
                w={230}
                lineHeight={1}
                fontWeight={700}
                fontFamily="Saira Condensed"
                as="h3"
                fontSize={24}
                borderLeft="4px solid red"
                pl={3}
                textAlign="left"
                mt={8}
              >
                TRANSFORM YOUR HOME WITH OUR FLOORING EXPERTISE{" "}
              </Heading>
              <Text fontFamily="Inter" fontSize={12} textAlign={"left"}>
                Elevate Your Space with SF Premier Flooring
              </Text>
              {/* <Box display="inline" textAlign="left">
                <Button
                  colorScheme="red"
                  fontSize="24"
                  minW={{ base: 150, md: 400 }}
                  px={{ base: 8 }}
                  py={{ base: 6 }}
                >
                  Get an Estimate
                </Button> 
                
    </Box> */}
              <EstimateButton size="sm" font="sm" />
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
      <Box>
        <Heading margin={5} fontSize={"xl"}>
          Our Latest Projects
        </Heading>
        <Container maxW="container.xl">
          <SimpleGrid minChildWidth="250px" gap={7}>
            <GridItem>
              <ProjectCardContainer>
                <Card>
                  <AspectRatio>
                    <Image src={livingRoomPhoto} />
                  </AspectRatio>
                </Card>
              </ProjectCardContainer>
            </GridItem>
            <GridItem>
              <ProjectCardContainer>
                <Card>
                  <AspectRatio>
                    <Image src={luxuryVinylTile} />
                  </AspectRatio>
                </Card>
              </ProjectCardContainer>
            </GridItem>
            <GridItem>
              <ProjectCardContainer>
                <Card>
                  <AspectRatio>
                    <Image src={highEndLaminate} />
                  </AspectRatio>
                </Card>
              </ProjectCardContainer>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
