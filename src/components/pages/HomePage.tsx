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

import getCroppedImageUrl from "../../services/image-url";
import ProjectCardContainer from "../ProjectCardContainer";
import EstimateButton from "../EstimateButton";

const HomePage = () => {
  return (
    <>
      {/* <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"nav nav" "aside main"`, // 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        width="100%"
        padding={0}
      >
  
        <GridItem area={"main"}>
          <Outlet />
          <Box>
            <Image
              height="450px"
              width="100%"
              src={getCroppedImageUrl(landingPagePhoto)}
              objectFit="cover"
            />
            <Box width="75%" backgroundColor="white" marginTop={-20}>
              <Heading fontSize="xl" padding={5}>
                TRANSFORM YOUR HOME WITH OUR FLOORING EXPERTISE
              </Heading>
              <Box>
                <Text>Elevate Your Space with SF Premier Flooring</Text>
                <Button color="blue">Get an Estimate</Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Heading margin={5} fontSize={"xl"}>
            Our Latest Projects
          </Heading>
          <SimpleGrid justifyContent="center">
            <GridItem>
              <Image boxSize="90%" src={livingRoomPhoto} />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </Grid> */}
      <Box position="relative">
        <Box
          height={{ base: "450px" }}
          bgImage={getCroppedImageUrl(landingPagePhoto)}
          bgPosition="contain"
          bgSize="cover"
        />
        <Box
          as="div"
          bg="#fff"
          w={{ base: "300px" }}
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
              <EstimateButton />
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
