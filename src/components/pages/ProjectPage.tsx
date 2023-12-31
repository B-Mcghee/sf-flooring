import {
  Box,
  Card,
  Container,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import woodBackground from "../../assets/wood-background.jpg";
import ceramicTile from "../../assets/ceramic-tile.jpg";
import luxVinylPlank from "../../assets/luxury-vinyl-plank.jpg";
import luxVinylTile from "../../assets/luxury-vinyl-tile.jpg";
import engineerHardwood from "../../assets/engineered-hardwood.jpg";
import laminateFloor from "../../assets/living_room_floor.jpg";
import customFireplace from "../../assets/custom-fireplace.jpeg";
import { Center } from "@chakra-ui/react";
import EstimateButton from "../EstimateButton";
import ProjectCardContainer from "../ProjectCardContainer";
import { AspectRatio } from "@chakra-ui/react";

import ProjectPopup from "../ProjectPopup";

const ProjectPage = () => {
  const categories = [
    {
      title: "Luxury Vinyl Plank",
      imageUrl: luxVinylPlank,
      slug: "luxury-vinyl-plank",
    },
    {
      title: "Luxury Vinyl Tile",
      imageUrl: luxVinylTile,
      slug: "luxury-vinyl-tile",
    },
    {
      title: "Ceramic Tile",
      imageUrl: ceramicTile,
      slug: "ceramic-tile",
    },
    {
      title: "Laminate",
      imageUrl: laminateFloor,
      slug: "laminate",
    },
    {
      title: "Engineered Hardwood",
      imageUrl: engineerHardwood,
      slug: "engineered-hardwood",
    },

    {
      title: "Custom Designs",
      imageUrl: customFireplace,
      slug: "custom-designs",
    },
  ];
  return (
    <>
      <Center
        as="div"
        bgImage={woodBackground}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="150px"
      >
        <Heading
          as="h1"
          size={{ base: "3xl", md: "4xl" }}
          fontFamily="Saira Condensed"
          fontWeight="700"
        >
          Our{" "}
          <Box as="span" color="red">
            Work
          </Box>
        </Heading>
      </Center>
      <Container maxW="container.xl" my={10}>
        <SimpleGrid minChildWidth="300px" gap={5}>
          {categories.map((category) => (
            <GridItem key={category.title} m={4}>
              <ProjectCardContainer>
                <ProjectPopup project={category}>
                  <Card>
                    <Heading
                      as="h3"
                      size="xl"
                      fontFamily="Saira Condensed"
                      my={2}
                      noOfLines={1}
                    >
                      {category.title}
                    </Heading>

                    <AspectRatio>
                      <Image src={category.imageUrl} objectFit="fill" />
                    </AspectRatio>
                  </Card>
                </ProjectPopup>
              </ProjectCardContainer>
            </GridItem>
          ))}
        </SimpleGrid>
        <Center my={10}>
          <EstimateButton size="sm" font="sm" width="400px" />
        </Center>
      </Container>
    </>
  );
};

export default ProjectPage;
